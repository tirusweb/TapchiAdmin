import React from 'react';
import { apiDeleteCategory } from '+/services/Category/Category';


const DeleteCategory = ({ category, onConfirm, onCancel }) => {

    const token = sessionStorage.getItem('accessToken');

    const handleDelete = async () => {
        try {
            await apiDeleteCategory(token, category.id);
            onConfirm();
            onCancel();
        } catch (err) {
            console.log('Error fetching delete User: ', err);
        }
    };



    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-4 rounded shadow-lg">
                <h3 className="text-lg font-semibold mb-4">Delete Category</h3>
                <p>Bạn chắc chắn muốn xóa thể loại này ? </p>
                <div className="flex justify-end gap-2 mt-4">
                    <button
                        onClick={onCancel}
                        className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleDelete}
                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DeleteCategory;
