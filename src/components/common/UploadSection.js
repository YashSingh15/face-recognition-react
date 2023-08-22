import React from 'react';

const UploadSection = ({ onUpload }) => {
    const fileInputRef = React.useRef(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            onUpload(reader.result); // Sending the uploaded image back to the parent component
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };

    const handleClick = () => {
        fileInputRef.current.click();
    };

    return (
        <div className="upload-section" onClick={handleClick}>
            <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                onChange={handleFileChange}
                style={{ display: 'none' }}
            />
            <div className="upload-instructions">
                Click or drag and drop an image here
            </div>
        </div>
    );
};

export default UploadSection;
