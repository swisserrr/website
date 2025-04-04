import Image from 'next/image';
import { useState, useEffect, forwardRef } from 'react';
import Helpers from './helpers';
import { APIS } from 'constants';

const CustomImage = forwardRef(
  (
    {
      src,
      style,
      className,
      onClick,
      alt = 'Image',
      onError,
      width,
      height,
      sizes = '100vw',
      quality = 75,
      priority = false,
      fill = false, // Make sure fill is destructured
      ...props
    },
    ref
  ) => {
    const [imageUrl, setImageUrl] = useState(src);
    const [isLoading, setIsLoading] = useState(false);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
      setHasError(false);

      // Reset image URL when src changes
      setImageUrl(src);

      const isS3Url = typeof src === 'string' && src.indexOf('s3.ap-south-1.amazonaws.com') !== -1;

      if (src && isS3Url) {
        setIsLoading(true);

        const refreshImageUrl = async () => {
          const headers = {
            'Content-Type': 'application/json',
          };

          try {
            const res = await fetch(Helpers.getUrl(APIS.S3_IMAGE_UPDATE), {
              method: 'POST',
              headers: headers,
              body: JSON.stringify({ s3url: src }),
            });
            if (!res.ok) {
              throw new Error(`API request failed with status ${res.status}`);
            }
            const data = await res.json();
            const newUrl = data?.data;
            if (newUrl) {
              setImageUrl(newUrl);
            }
          } catch (err) {
            console.error('Failed to refresh image URL:', err);
            setImageUrl(src);
            setHasError(true);
          } finally {
            setIsLoading(false);
          }
        };

        refreshImageUrl();
      }
    }, [src]);

    const handleImageError = () => {
      setHasError(true);
      setImageUrl(src); // Fallback to the original src
      if (onError) onError();
    };

    // Prevent style.height when fill is true
    const safeStyle = { ...style };
    if (fill && safeStyle?.height) {
      delete safeStyle.height; // Remove height from style when fill is true
    }

    return (
      <>
        {isLoading && props.placeholder && props.placeholder}
        <Image
          ref={ref}
          src={hasError ? src : imageUrl} // Use src as fallback when there's an error
          style={safeStyle}
          className={className}
          onClick={onClick}
          alt={alt}
          onError={handleImageError}
          width={width || 0}
          height={height || 0}
          sizes={sizes}
          quality={quality}
          priority={priority}
          fill={fill}
          {...props}
        />
      </>
    );
  }
);

CustomImage.displayName = 'CustomImage';

export default CustomImage;
