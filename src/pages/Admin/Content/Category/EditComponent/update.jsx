import React, { useState, useEffect } from 'react';
import { apiEdiCategory } from '+/services/Category/Category';

const EditCategoryModal = ({ category, onClose, onUpdate }) => {
    const [name, setName] = useState(category.name);
    const [type, setType] = useState(category.type);
    const [error, setError] = useState('');

    // Move date formatting into the handleUpdate function
    const handleUpdate = async () => {
        try {
            const token = sessionStorage.getItem('accessToken');
            const now = new Date();
    
       
            const formattedDateTime =
                `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;
        
    
            const updatedData = {
                ...category,
                name,
                type,
                updateAt: formattedDateTime, 
            };
    
            console.log(updatedData); 
            await apiEdiCategory(token, category.id, updatedData);
            
            onUpdate(updatedData);
            onClose();
        } catch (err) {
            console.error('Error updating category: ', err);
            setError('Failed to update category. Please try again.');
        }
    };

    useEffect(() => {
        setName(category.name);
        setType(category.type);
    }, [category]);

    return (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
            <div className="bg-white w-2/3 p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-bold mb-4">Edit Category</h2>
                {error && <p className="text-red-500 mb-4">{error}</p>}
                
                <label className="block mb-2">
                    <span className="text-gray-700">Name</span>
                    <input
                        type="text"
                        className="mt-1 border-2 active:border-blue-300 rounded border-solid py-2 border-gray-300 px-2 block w-full"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>

                <label className="block mb-4">
                    <span className="text-gray-700">Type</span>
                    <select
                        className="mt-1 border-gray-200 border-2 py-2 px-2 block w-full"
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                    >
                        <option value="1">Khoa học - Công nghệ</option>
                        <option value="2">Kinh Tế - Xã Hội</option>
                        <option value="3">Diễn đàn khoa học</option>
                    </select>
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
