import React, { useState, useEffect } from 'react';

const EditCategoryModal = ({ category, onClose, onUpdate }) => {
    const [name, setName] = useState(category.name);
    const [type, setType] = useState(category.type || '');

    const handleUpdate = () => {
        onUpdate({ ...category, name, type });
        onClose();
    };

    useEffect(() => {
        setName(category.name);
        setType(category.type || '');
    }, [category]);

    return (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-bold mb-4">Edit Category</h2>
                <label className="block mb-2">
                    <span className="text-gray-700">Name</span>
                    <input
                        type="text"
                        className="mt-1 block w-full"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>
                <label className="block mb-4">
                    <span className="text-gray-700">Type</span>
                    <input
                        type="text"
                        className="mt-1 block w-full"
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                    />
                </label>
                <div className="flex justify-end">
                    <button
                        className="bg-gray-500 hover:bg-gray-600 text-white font-normal py-2 px-4 rounded mr-2"
                        onClick={onClose}
                    >
                        Cancel
                    </button>
                    <button
                        className="bg-blue-500 hover:bg-blue-600 text-white font-normal py-2 px-4 rounded"
                        onClick={handleUpdate}
                    >
                        Update
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EditCategoryModal;
