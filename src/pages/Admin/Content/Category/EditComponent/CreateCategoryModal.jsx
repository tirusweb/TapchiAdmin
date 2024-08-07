import React, { useState } from 'react';

const CreateCategoryModal = ({ onClose, onCreate }) => {
    const [categoryName, setCategoryName] = useState('');
    const [categoryType, setCategoryType] = useState(''); // Initialize the state for category type

    const handleCreate = () => {
        if (categoryName.trim() === '' || categoryType.trim() === '') return;

        const newCategory = {
            name: categoryName,
            type: categoryType, // Add the type to the new category object
        };

        onCreate(newCategory);
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded shadow-lg">
                <h2 className="text-xl font-bold mb-4">Create Category</h2>
                <input
                    type="text"
                    className="border p-2 w-full mb-4"
                    placeholder="Nhập tên thể loại ..."
                    value={categoryName}
                    onChange={(e) => setCategoryName(e.target.value)}
                />
                <select
                    className="border p-2 w-full mb-4"
                    value={categoryType}
                    onChange={(e) => setCategoryType(e.target.value)}
                >
                    <option value="" disabled>Chọn loại ...</option>
                    <option value="Khoa học - Công nghệ">Khoa học - Công nghệ</option>
                    <option value="Văn hóa - Xã hội">Văn hóa - Xã hội</option>
                    <option value="Kinh tế - Kinh doanh">Kinh tế - Kinh doanh</option>
                    <option value="Giáo dục">Giáo dục</option>
                    <option value="Y tế - Sức khỏe">Y tế - Sức khỏe</option>
                </select>
                <button
                    onClick={handleCreate}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Lưu
                </button>
                <button
                    onClick={onClose}
                    className="bg-gray-500 text-white px-4 py-2 rounded ml-2 hover:bg-gray-600"
                >
                    Đóng
                </button>
            </div>
        </div>
    );
};

export default CreateCategoryModal;
