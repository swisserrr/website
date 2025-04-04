/**
 *
 * PdfViewer
 *
 */

import React, { memo, useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
// import {} from './styles';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { isNull } from 'lodash';

const PdfViewer = ({ fileUrl }) => {
  const [removeInterVal, setRemoveInterVal] = useState(null);
  const [interValId, setInterValID] = useState(null);

  const curryingFun = A => B => C => D => {
    A.style.width = '100%';
    B.style.width = '100%';
    C.style.width = '100%';
    D.style.width = '100%';
  };

  useEffect(() => {
    setInterValID(
      setInterval(() => {
        const Element = document.querySelector('[data-testid="core__canvas-layer-0"]');
        !isNull(Element) && setRemoveInterVal(true);
      }, 200)
    );
    return () => {
      clearInterval(interValId);
    };
  }, []);

  useEffect(() => {
    removeInterVal && clearInterval(interValId);
    const A = document.querySelector('.rpv-core__page-layer--single');
    const B = document.querySelector('.rpv-core__canvas-layer');
    const C = document.querySelector('.rpv-core__text-layer');
    const D = document.querySelector('[data-testid="core__canvas-layer-0"]');
    removeInterVal && curryingFun(A)(B)(C)(D);
  }, [removeInterVal]);

  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <Worker workerUrl={`https://unpkg.com/pdfjs-dist@2.12.313/build/pdf.worker.min.js`}>
        <div style={{ height: '100%', width: '100%' }}>
          <Viewer fileUrl={fileUrl} />
        </div>
      </Worker>
    </div>
  );
};
PdfViewer.propTypes = {};

export default memo(PdfViewer);
