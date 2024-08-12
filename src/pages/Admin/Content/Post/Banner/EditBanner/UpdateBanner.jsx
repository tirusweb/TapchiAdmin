import React, { useState, useEffect } from 'react';

const UpdateBanner = ({ onSave, onClose, initialData }) => {
    const [url, setUrl] = useState('');
    const [image, setImage] = useState(null);
    const [errors, setErrors] = useState({ url: '', image: '' });

    useEffect(() => {
        if (initialData) {
            setUrl(initialData.url || '');
            setImage(initialData.file || null);
        }
    }, [initialData]);

    const handleUrlChange = (e) => {
        setUrl(e.target.value);
    };

    const handleImageChange = (e) => {
        setImage(e.target.files[0] || null);
    };

    const validate = () => {
        let isValid = true;
        const newErrors = { url: '', image: '' };

        if (!url) {
            newErrors.url = 'URL is required';
            isValid = false;
        }

        if (!image) {
            newErrors.image = 'Image is required';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            onSave({ url, file: image });
            onClose();
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-md">
                <h2 className="text-2xl font-bold">Update Banner</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mt-4">
                        <label className="block text-sm font-medium text-gray-700">Url</label>
                        <input
                            type="text"
                            value={url}
                            onChange={handleUrlChange}
                            placeholder="Enter url ..."
                            className="mt-1 block w-full border-2 border-solid px-2 py-2 rounded-md border-gray-300 shadow-sm"
                        />
                        {errors.url && <p className="text-red-500 text-sm">{errors.url}</p>}
                    </div>
                    <div className="mt-4">
                        <label className="block text-sm font-medium text-gray-700">Image</label>
                        <input
                            type="file"
                            onChange={handleImageChange}
                            className="mt-1 block w-full text-sm text-gray-500"
                        />
                        {errors.image && <p className="text-red-500 text-sm">{errors.image}</p>}
                    </div>
                    <div className="mt-4 flex items-center justify-start gap-4">
                        <button type="submit" className="bg-blue-500  text-white px-4 py-2 rounded shadow">
                            Cập nhật
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

export default UpdateBanner;
