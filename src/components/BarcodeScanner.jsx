import React, { useEffect, useRef } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';

const BarcodeScanner = ({ onResult, onError, onClose }) => {
  const scannerRef = useRef(null);

  useEffect(() => {
    // Initialize the scanner when the component mounts
    scannerRef.current = new Html5QrcodeScanner(
      "reader",
      { 
        fps: 10, 
        qrbox: { width: 250, height: 150 },
        aspectRatio: 1.0,
        supportedScanTypes: [] // Supports all 1D/2D barcodes by default, UPC is included
      },
      false
    );

    scannerRef.current.render(
      (decodedText, decodedResult) => {
        // Stop scanning once a result is found
        if (scannerRef.current) {
          scannerRef.current.clear();
        }
        onResult(decodedText);
      },
      (errorMessage) => {
        if (onError) onError(errorMessage);
      }
    );

    // Cleanup when component unmounts
    return () => {
      if (scannerRef.current) {
        scannerRef.current.clear().catch(error => {
          console.error("Failed to clear html5QrcodeScanner. ", error);
        });
      }
    };
  }, [onResult, onError]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/80 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden flex flex-col">
        <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-slate-50">
          <h3 className="font-semibold text-slate-800">Scan Barcode</h3>
          <button 
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 p-1 rounded-full hover:bg-slate-200 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
        </div>
        <div className="p-4 bg-black/5">
          <div id="reader" className="w-full rounded-xl overflow-hidden bg-black"></div>
        </div>
        <div className="p-4 text-center text-sm text-slate-500">
          Position the barcode within the camera view to scan automatically.
        </div>
      </div>
    </div>
  );
};

export default BarcodeScanner;
