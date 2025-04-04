import React, { useRef, useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { Box, Button, Container, Typography, Paper, CircularProgress, Alert } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import ClearIcon from '@mui/icons-material/Clear';
import DownloadIcon from '@mui/icons-material/Download';

// Dynamically import SignatureCanvas to avoid SSR issues
const SignatureCanvas = dynamic(() => import('react-signature-canvas'), { ssr: false });

export default function ESignature() {
  const sigCanvas = useRef(null);
  const containerRef = useRef(null);
  const [imageURL, setImageURL] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [canvasSize, setCanvasSize] = useState({ width: 600, height: 200 });

  useEffect(() => {
    // Resize canvas when component mounts
    if (typeof window !== 'undefined' && containerRef.current) {
      const updateCanvasSize = () => {
        const containerWidth = containerRef.current?.clientWidth || 600;
        setCanvasSize({
          width: containerWidth,
          height: 200,
        });
      };

      updateCanvasSize();
      window.addEventListener('resize', updateCanvasSize);

      return () => window.removeEventListener('resize', updateCanvasSize);
    }
  }, []);

  // Save signature as image
  const saveSignature = () => {
    if (!sigCanvas.current || sigCanvas.current.isEmpty()) {
      setError('Please provide a signature first');
      setTimeout(() => setError(null), 3000);
      return;
    }

    setLoading(true);
    try {
      // Convert to base64 image data URL
      const dataURL = sigCanvas.current.toDataURL('image/png');
      setImageURL(dataURL);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);

      // Here you would typically send the signature to your backend
      console.log('Signature saved as:', dataURL.substring(0, 50) + '...');
    } catch (err) {
      setError('Failed to save signature: ' + err.message);
      setTimeout(() => setError(null), 3000);
    } finally {
      setLoading(false);
    }
  };

  // Clear the signature
  const clearSignature = () => {
    if (sigCanvas.current) {
      sigCanvas.current.clear();
      setImageURL(null);
    }
  };

  // Download signature as PNG
  const downloadSignature = () => {
    if (!imageURL) return;

    const link = document.createElement('a');
    link.href = imageURL;
    link.download = 'signature.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Container maxWidth="md" sx={{ py: 5 }}>
      <Typography variant="h4" component="h1" gutterBottom align="center">
        Digital Signature
      </Typography>

      <Paper
        elevation={3}
        sx={{
          p: 4,
          mb: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
        <Typography variant="body1" gutterBottom>
          Please sign below:
        </Typography>

        {/* Signature Canvas */}
        <Box
          ref={containerRef}
          sx={{
            width: '100%',
            border: '1px solid #ddd',
            borderRadius: 1,
            backgroundColor: '#f9f9f9',
            mb: 2,
            height: { xs: 200, md: 250 },
            position: 'relative',
            cursor: 'crosshair',
          }}>
          {typeof window !== 'undefined' && (
            <SignatureCanvas
              ref={sigCanvas}
              penColor="black"
              canvasProps={{
                width: canvasSize.width,
                height: canvasSize.height,
                className: 'signature-canvas',
                style: {
                  cursor: 'crosshair',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                },
              }}
              dotSize={2}
              minWidth={1.5}
              maxWidth={3}
              throttle={16}
              backgroundColor="rgba(0,0,0,0)"
            />
          )}
        </Box>

        <Typography variant="caption" sx={{ mb: 2, color: 'text.secondary' }}>
          Click and drag to sign with your mouse
        </Typography>

        {/* Controls */}
        <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
          <Button variant="outlined" color="error" startIcon={<ClearIcon />} onClick={clearSignature}>
            Clear
          </Button>
          <Button
            variant="contained"
            color="primary"
            startIcon={loading ? <CircularProgress size={20} color="inherit" /> : <SaveIcon />}
            onClick={saveSignature}
            disabled={loading}>
            Save Signature
          </Button>
        </Box>

        {/* Alerts */}
        {error && (
          <Alert severity="error" sx={{ mb: 2, width: '100%' }}>
            {error}
          </Alert>
        )}
        {success && (
          <Alert severity="success" sx={{ mb: 2, width: '100%' }}>
            Signature saved successfully!
          </Alert>
        )}

        {/* Preview */}
        {imageURL && (
          <Box sx={{ mt: 3, textAlign: 'center', width: '100%' }}>
            <Typography variant="h6" gutterBottom>
              Your Signature Preview
            </Typography>
            <Paper elevation={1} sx={{ p: 2, display: 'inline-block', mb: 2 }}>
              <img src={imageURL} alt="Your signature" style={{ maxWidth: '100%', maxHeight: '150px' }} />
            </Paper>
            <Box>
              <Button variant="outlined" color="primary" startIcon={<DownloadIcon />} onClick={downloadSignature}>
                Download Signature
              </Button>
            </Box>
          </Box>
        )}
      </Paper>

      <Typography variant="body2" color="textSecondary" align="center" sx={{ mt: 4 }}>
        This digital signature can be used for document signing and verification. For legal compliance, please ensure
        your implementation meets necessary standards.
      </Typography>
    </Container>
  );
}
