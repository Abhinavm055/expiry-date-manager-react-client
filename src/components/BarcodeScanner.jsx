import React, { useEffect, useRef } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';

const BarcodeScanner = ({ onResult, onError, onClose }) => {
  const scannerRef = useRef(null);

  useEffect(() => {
    scannerRef.current = new Html5QrcodeScanner(
      "reader",
      { 
        fps: 10, 
        qrbox: { width: 250, height: 150 },
        aspectRatio: 1.0,
        supportedScanTypes: []
      },
      false
    );

    scannerRef.current.render(
      (decodedText, decodedResult) => {
        if (scannerRef.current) {
          scannerRef.current.clear();
        }
        onResult(decodedText);
      },
      (errorMessage) => {
        if (onError) onError(errorMessage);
      }
    );

    return () => {
      if (scannerRef.current) {
        scannerRef.current.clear().catch(error => {
          console.error("Failed to clear html5QrcodeScanner. ", error);
        });
      }
    };
  }, [onResult, onError]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4">
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl w-full max-w-md overflow-hidden flex flex-col">
        <div className="p-4 border-b border-zinc-800 flex justify-between items-center bg-zinc-950">
          <h3 className="font-bold text-white flex items-center">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 mr-2 animate-ping"></span>
            Scan Barcode
          </h3>
          <button 
            onClick={onClose}
            className="text-zinc-400 hover:text-white p-1 rounded-full hover:bg-zinc-800 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
        </div>
        <div className="p-4 bg-black">
          <div id="reader" className="w-full rounded-xl overflow-hidden bg-black text-white"></div>
        </div>
        <div className="p-4 text-center text-sm text-zinc-400 bg-zinc-950/60">
          Position the barcode within the camera view to scan automatically.
        </div>
      </div>
    </div>
  );
};

export default BarcodeScanner;
