import React, {useEffect, useState} from 'react';

import {Html5Qrcode} from "html5-qrcode";
import {useNavigate} from "react-router-dom";

function ScannerPage() {
  const [code, setCode] = useState('');
  const [cameraId, setCameraId] = useState('');
  const [loading, setLoading] = useState(true);
  const [scanned, setScanned] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    function onScanSuccess(decodedText: any, decodedResult: any) {
      // alert('success');

      html5QrCode.stop().then(() => {
        setCode(decodedText);
        setScanned(true);
        navigate('result');
      });
      console.log(`Code scanned = ${decodedText}`, decodedResult);

    }
    function onScanFailure(error: any) {
      // handle scan failure, usually better to ignore and keep scanning.
      // for example:
      console.warn(`Code scan error = ${error}`);
    }

    const config: any = {fps: 10, qrbox: 250};
    const html5QrCode = new Html5Qrcode("reader");
    html5QrCode.start({facingMode: "environment"}, config, onScanSuccess, onScanFailure).then(() => {
      setLoading(false);
    });
  });

  if (loading) {
    return (
      <div className="App">

        <div id="reader" className={'reader'} style={{width: '100%'}}/>

        <p>LOADING...</p>
      </div>
    );
  }

  return (
    <div className="page scanner">
      {
        scanned ?
          <>
            <p>SUCCESS!!!</p>
            <p>decoded qr code: {code}</p>
          </> :
          <>
            <div id="reader" className={'reader'} style={{width: '100%'}}/>
            <p>cameraId: {cameraId}</p>
            <p>decoded qr code: {code}</p>
          </>}
    </div>
  );
}

export default ScannerPage;
