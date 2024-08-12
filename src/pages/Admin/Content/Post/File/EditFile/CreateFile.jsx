import React, { useState } from 'react';

const CreateFile = ({ onSave, onClose }) => {
    const [name, setName] = useState('');
    const [path, setPath] = useState('');
    const [errors, setErrors] = useState({ name: '', path: '' });

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handlePathChange = (e) => {
        setPath(e.target.value);
    };

    const validate = () => {
        let isValid = true;
        const newErrors = { name: '', path: '' };

        if (!name) {
            newErrors.name = 'Name is required';
            isValid = false;
        }

        if (!path) {
            newErrors.path = 'Path is required';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            onSave({ id: Date.now(), name, path }); // Generate a unique ID
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-md">
                <h2 className="text-2xl font-bold">Create File</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mt-4">
                        <label className="block text-sm font-medium text-gray-700">Name</label>
                        <input
                            type="text"
                            value={name}
                            onChange={handleNameChange}
                            placeholder="Enter file name..."
                            className="mt-1 block w-full border-2 border-solid px-2 py-2 rounded-md border-gray-300 shadow-sm"
                        />
                        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                    </div>
                    <div className="mt-4">
                        <label className="block text-sm font-medium text-gray-700">Path</label>
                        <input
                            type="text"
                            value={path}
                            onChange={handlePathChange}
                            placeholder="Enter file path..."
                            className="mt-1 block w-full border-2 border-solid px-2 py-2 rounded-md border-gray-300 shadow-sm"
                        />
                        {errors.path && <p className="text-red-500 text-sm">{errors.path}</p>}
                    </div>
                    <div className="mt-4 flex items-center justify-start gap-4">
                        <button type="submit" className="bg-blue-500  text-white px-4 py-2 rounded shadow">
                            Create
                        </button>
                        <button type="button" onClick={onClose} className="text-white bg-gray-500 px-4 py-2 rounded shadow">
                            Close
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateFile;
