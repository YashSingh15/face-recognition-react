import React, { useState } from 'react';
import WebcamCapture from '../common/WebcamCapture';
import UploadSection from '../common/UploadSection';

const RecognitionPage = () => {
    const [capturedImage, setCapturedImage] = useState(null);
    const [matchedImage, setMatchedImage] = useState(null);
    const [personDetails, setPersonDetails] = useState(null);

    return (
        <div className="recognition-page">
            <div className="capture-section">
                {capturedImage ? (
                    <img src={capturedImage} alt="Captured" />
                ) : (
                    <>
                        <WebcamCapture onCapture={setCapturedImage} />
                        <UploadSection onUpload={setCapturedImage} />
                    </>
                )}
            </div>

            <div className="divider" />

            <div className="match-section">
                {matchedImage && <img src={matchedImage} alt="Matched" />}
                {personDetails && (
                    <div className="details">
                        <div>Name: {personDetails.name}</div>
                        <div>Nationality: {personDetails.nationality}</div>
                        <div>Gender: {personDetails.gender}</div>
                        {/* Add more details as needed */}
                    </div>
                )}
                {matchedImage && <img src="/assets/checkmark.png" alt="Match Found" className="checkmark" />}
            </div>
        </div>
    );
};

export default RecognitionPage;
