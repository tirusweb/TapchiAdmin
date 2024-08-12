import React, { useState } from 'react';

const CreateBanner = ({ onSave, onClose }) => {
    const [url, setUrl] = useState('');
    const [file, setFile] = useState(null);
    const [errors, setErrors] = useState({ url: '', file: '' });

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

    const handleSubmit = (e) => {
        e.preventDefault();
        let hasError = false;

        if (!url) {
            setErrors((prev) => ({ ...prev, url: 'URL is required.' }));
            hasError = true;
        }

        if (!file) {
            setErrors((prev) => ({ ...prev, file: 'Image file is required.' }));
            hasError = true;
        }

        if (!hasError) {
            const newBanner = { url, file };
            onSave(newBanner);
            onClose();
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-md">
                <h2 className="text-2xl font-bold">Create Banner</h2>
                <form onSubmit={handleSubmit}>
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
                        <button type="submit" className="bg-blue-500  text-white px-4 py-2 rounded shadow">
                            Lưu
                        </button>
                        <button type="button" onClick={onClose} className="text-white bg-gray-500 px-4 py-2 rounded shadow">
                            Đóng
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateBanner;
