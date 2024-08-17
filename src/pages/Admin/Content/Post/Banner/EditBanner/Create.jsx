import React, { useState, useEffect } from 'react';
import { apiCreateBanner, apiUploadImage } from '+/services/PostApi/Post';

const CreateBanner = ({ onSave, onClose, postId }) => {
    const [files, setFiles] = useState([]);
    const [filePreviews, setFilePreviews] = useState([]);
    const [errors, setErrors] = useState({ files: '' });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState('');

    useEffect(() => {
        // Clean up object URLs when component unmounts or files change
        return () => {
            filePreviews.forEach((url) => URL.revokeObjectURL(url));
        };
    }, [filePreviews]);

    const handleFileChange = (e) => {
        const selectedFiles = Array.from(e.target.files);
        if (selectedFiles.length > 0) {
            const validFiles = selectedFiles.filter((file) => file instanceof File);

            if (validFiles.length === 0) {
                setErrors((prev) => ({ ...prev, files: 'At least one image file is required' }));
                return;
            }

            setFiles(validFiles);
            setErrors((prev) => ({ ...prev, files: '' }));

            const previews = validFiles.map((file) => URL.createObjectURL(file));
            setFilePreviews(previews);
        }
    };

    const formatDateTime = (date) => {
        const d = new Date(date);
        const year = d.getFullYear();
        const month = String(d.getMonth() + 1).padStart(2, '0');
        const day = String(d.getDate()).padStart(2, '0');
        const hours = String(d.getHours()).padStart(2, '0');
        const minutes = String(d.getMinutes()).padStart(2, '0');
        const seconds = String(d.getSeconds()).padStart(2, '0');

        return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    };

    const handleCreate = async (e) => {
        e.preventDefault();
        setLoading(true);
    
        const token = sessionStorage.getItem('accessToken');
        if (!token) {
            console.error('No access token found. Please log in.');
            setLoading(false);
            return;
        }
    
        if (files.length === 0) {
            setErrors((prev) => ({ ...prev, files: 'At least one image file is required' }));
            setLoading(false);
            return;
        }
    
        const nowDate = new Date();
        const formattedCreatedAt = formatDateTime(nowDate);
    
        try {
            const fileUrls = [];
            for (const file of files) {
                if (file instanceof File) {
                    const uploadResponse = await apiUploadImage(file, token);
                    console.log('Upload Response:', uploadResponse); // Log full response for debugging
    
                    if (uploadResponse.status === 200) {
                        const data = uploadResponse.data;
                        if (data && Array.isArray(data.urls)) {
                            const urls = data.urls.filter(url => url !== 'string');
                            if (urls.length > 0) {
                                fileUrls.push(...urls);
                            } else {
                                console.error('Unexpected URLs format or no valid URLs returned:', data);
                                setSuccess('Failed to upload files.');
                                setLoading(false);
                                return;
                            }
                        } else {
                            console.error('Unexpected response data format:', data);
                            setSuccess('Failed to upload files.');
                            setLoading(false);
                            return;
                        }
                    } else {
                        console.error('Failed to upload file:', uploadResponse.status, uploadResponse.data);
                        setSuccess(`Failed to upload file with status ${uploadResponse.status}.`);
                        setLoading(false);
                        return;
                    }
                } else {
                    console.error('Invalid file object:', file);
                }
            }
    
            const newData = {
                url: "", 
                images: fileUrls,
                post: postId,
                type: "",
                createdAt: formattedCreatedAt,
                updatedAt: null,
            };
    
            const response = await apiCreateBanner(newData, token);
            if (response.status === 200) {
                setSuccess('Banner created successfully!');
                onSave(response.data.data);
                onClose();
            } else {
                console.error('Failed to create banner:', response.status, response.data);
                setSuccess(`Failed to create banner with status ${response.status}.`);
            }
        } catch (err) {
            console.error('Error creating banner:', err);
            setSuccess('Error creating banner.');
        } finally {
            setLoading(false);
        }
    };
    
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-md">
                <h2 className="text-2xl font-bold">Create Banner</h2>
                <form onSubmit={handleCreate}>
                    <div className="mt-4">
                        <label className="block text-sm font-medium text-gray-700">Images</label>
                        <input
                            type="file"
                            multiple
                            onChange={handleFileChange}
                            className="mt-1 block w-full text-sm text-gray-500"
                        />
                        {errors.files && <p className="text-red-500 text-xs mt-1">{errors.files}</p>}
                    </div>
                    <div className="mt-4">
                        {filePreviews.map((preview, index) => (
                            <img
                                key={index}
                                src={preview}
                                alt={`Preview ${index}`}
                                className="mt-2 max-w-full h-auto"
                            />
                        ))}
                    </div>
                    <div className="mt-4 flex items-center justify-start gap-4">
                        <button
                            type="submit"
                            className={`bg-blue-500 text-white px-4 py-2 rounded shadow ${
                                loading ? 'opacity-50 cursor-not-allowed' : ''
                            }`}
                            disabled={loading}
                        >
                            {loading ? 'Saving...' : 'Save'}
                        </button>
                        <button
                            type="button"
                            onClick={onClose}
                            className="text-white bg-gray-500 px-4 py-2 rounded shadow"
                        >
                            Close
                        </button>
                    </div>
                </form>
                {success && (
                    <p className={`mt-4 ${success.includes('Error') ? 'text-red-500' : 'text-green-500'}`}>{success}</p>
                )}
            </div>
        </div>
    );
};

export default CreateBanner;
