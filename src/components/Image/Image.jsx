import React, { useState, useContext } from 'react';
import './image.css';
import { ProductContext } from '../../context/productContext';
import axios from 'axios';

function Image() {
    const { setProductData } = useContext(ProductContext);
    const [images, setImages] = useState([null, null, null]);
    const [previews, setPreviews] = useState([null, null, null]);
    const [load,setLoad]=useState(false)

    const handleImageChange = (e, index) => {
        const file = e.target.files[0];
        if (!file) return;

        const newImages = [...images];
        newImages[index] = file;

        const newPreviews = [...previews];
        newPreviews[index] = URL.createObjectURL(file);

        setImages(newImages);
        setPreviews(newPreviews);
    };

    const handleUpload = async () => {
        const uploadURLs = [];
        
        for (const image of images) {
            if (!image) {
                alert('Please upload all 3 images');
                return;
            }
            setLoad(true)
            try {
                const formData = new FormData();
                formData.append('file', image);
                formData.append('upload_preset', 'first_clodinary');

                const response = await axios.post(
                    'https://api.cloudinary.com/v1_1/dturnth9t/image/upload',
                    formData
                );

                uploadURLs.push(response.data.secure_url);
            } catch (error) {
                console.error('Upload failed:', error);
            }
        }

        setProductData(prev => ({
            ...prev,
            images: uploadURLs
        }));
        setLoad(false)
        alert('All images uploaded successfully!');
    };

    return (
        <div className='totalSize'>
            <div className='image-upload-section'>
                <h3>Upload Product Images (3 images required)</h3>
                <div className='image-upload-grid'>
                    {[0, 1, 2].map((index) => (
                        <div className='image-upload-box' key={index}>
                            <label className='image-upload-label'>
                                {previews[index] ? (
                                    <img src={previews[index]} alt={`Image ${index + 1}`} className='image-preview' />
                                ) : (
                                    <span>+ Add Image {index + 1}</span>
                                )}
                                <input
                                    type='file'
                                    accept='image/*'
                                    className='image-upload-input'
                                    onChange={(e) => handleImageChange(e, index)}
                                />
                            </label>
                        </div>
                    ))}
                </div>
                {load&&(<p style={{color:'green'}}>Please wait images Uploading...</p>)}
                <button className='upload' onClick={handleUpload}>Upload Images</button>
            </div>
        </div>
    );
}

export default Image;
