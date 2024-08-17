import React, { useState } from 'react';
import { apiCreateBanner } from '+/services/PostApi/Post';

const CreateBanner = ({ onSave, onClose, postId }) => {
    const [url, setUrl] = useState('');
    const [file, setFile] = useState(null);
    const [errors, setErrors] = useState({ url: '', file: '' });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState('');

    const handleUrlChange = (e) => {
        setUrl(e.target.value);
        if (e.target.value) {
            setErrors((prev) => ({ ...prev, url: '' }));
        }
    };

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
        if (e.target.files[0]) {
            setErrors((prev) => ({ ...prev, file: '' }));
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

        // Kiểm tra lỗi đầu vào
        if (!url) {
            setErrors((prev) => ({ ...prev, url: 'URL is required' }));
            setLoading(false);
            return;
        }

        if (!file) {
            setErrors((prev) => ({ ...prev, file: 'Image file is required' }));
            setLoading(false);
            return;
        }
        const nowDate = new Date();
        const formattedCreatedAt = formatDateTime(nowDate);

        const newData = {
            url : "",
            image: file,
            post : postId,
            type : "",
            createdAt : formattedCreatedAt,
            updatedAt : null,
        };
     

      
        try {
            const response = await apiCreateBanner(newData, token);
            if (response.status === 200) {
                setSuccess('Banner created successfully!');
                onSave(response.data.data); // Gọi onSave với dữ liệu từ response
                onClose(); // Đóng modal sau khi lưu thành công
            } else {
                console.error('Failed to create banner:', response.status, response.data);
                setSuccess('Failed to create banner.');
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
                        <label className="block text-sm font-medium text-gray-700">Url</label>
                        <input
                            type="text"
                            value={url}
                           onChange={handleUrlChange}
                            placeholder="Enter URL..."
                            className="mt-1 block w-full border-2 border-solid px-2 py-2 rounded-md border-gray-300 shadow-sm"
                        />
                        {errors.url && <p className="text-red-500 text-xs mt-1">{errors.url}</p>}
                    </div>
                    <div className="mt-4">
                        <label className="block text-sm font-medium text-gray-700">Image</label>
                        <input
                            type="file"
                            onChange={handleFileChange}
                            className="mt-1 block w-full text-sm text-gray-500"
                        />
                        {errors.file && <p className="text-red-500 text-xs mt-1">{errors.file}</p>}
                    </div>
                    <div className="mt-4 flex items-center justify-start gap-4">
                        <button 
                            type="submit" 
                            className={`bg-blue-500 text-white px-4 py-2 rounded shadow ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
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
                {success && <p className={`mt-4 ${success.includes('Error') ? 'text-red-500' : 'text-green-500'}`}>{success}</p>}
            </div>
        </div>
    );
};

export default CreateBanner;
