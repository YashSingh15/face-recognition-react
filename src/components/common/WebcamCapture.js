import React from 'react';
import Webcam from 'react-webcam';
import Button from '@mui/material/Button';

const WebcamCapture = ({ onCapture }) => {
    const webcamRef = React.useRef(null);

    const capture = () => {
        const imageSrc = webcamRef.current.getScreenshot();
        onCapture(imageSrc); // Sending the captured image back to the parent component
    };

    return (
        <div className="webcam-capture">
            <Webcam
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
            />
            <Button variant="contained" color="success" onClick={capture}>
                Capture
            </Button>
        </div>
    );
};

export default WebcamCapture;
