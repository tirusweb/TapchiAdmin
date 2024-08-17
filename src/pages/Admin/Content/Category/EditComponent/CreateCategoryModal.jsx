import React, { useState } from 'react';
import { apiCreateCategory } from '+/services/Category/Category'; // Import the API function

const CreateCategoryModal = ({ onClose, onCreate }) => {
    const [categoryName, setCategoryName] = useState('');
    const [categoryType, setCategoryType] = useState('');
    const [success, setSuccess] = useState('');

    const handleCreate = async () => {
        if (categoryName.trim() === '') {
            return; // Do nothing if name is empty
        }

        if (categoryType === '') {
            return; // Do nothing if type is not selected
        }

        const token = sessionStorage.getItem('accessToken');
        const now = new Date();

        // Format the date as YYYY-MM-DD HH:MM:SS
        const formattedDateTime =
            now.getFullYear() +
            '-' +
            String(now.getMonth() + 1).padStart(2, '0') +
            '-' +
            String(now.getDate()).padStart(2, '0') +
            ' ' +
            String(now.getHours()).padStart(2, '0') +
            ':' +
            String(now.getMinutes()).padStart(2, '0') +
            ':' +
            String(now.getSeconds()).padStart(2, '0');

        const data = {
            name: categoryName,
            type: parseInt(categoryType), // Ensure type is sent as a number
            createdAt: formattedDateTime,
            updateAt: formattedDateTime, // Use formattedDateTime or null if preferred
            codeName: '', // Set default or handle this field as necessary
        };

        console.log('>>>>>>data', data);

        try {
            const response = await apiCreateCategory(data, token);

            if (response.status === 201) {
                setSuccess('Category created successfully!');
                
                
            } else { 
                onCreate(); // Trigger onCreate callback to reload data
                 onClose(); // Close the modal after a delay to allow the success message to show
            }
        } catch (error) {
            console.error('Error creating category:', error.response?.data || error.message);
            setSuccess('An error occurred while creating the category.');
        }
    };

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded shadow-lg">
                <h2 className="text-xl font-bold mb-4">Create Category</h2>
                {success && <p className="text-green-500 mb-4">{success}</p>}
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
                    <option value="" disabled>
                        Chọn loại ...
                    </option>
                    <option value="1">Khoa học - Công nghệ</option>
                    <option value="2">Văn hóa - Xã hội</option>
                    <option value="3">Kinh tế - Kinh doanh</option>
                    <option value="4">Giáo dục</option>
                    <option value="5">Y tế - Sức khỏe</option>
                </select>
                <div className="flex justify-end">
                    <button
                        onClick={onClose}
                        className="bg-gray-500 text-white px-4 py-2 rounded mr-2 hover:bg-gray-600"
                    >
                        Đóng
                    </button>
                    <button
                        onClick={handleCreate}
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                        Lưu
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CreateCategoryModal;
