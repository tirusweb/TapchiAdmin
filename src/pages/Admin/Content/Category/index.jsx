import React, { useState } from 'react';
import EditCategoryModal from './EditComponent/update';
import CreateCategoryModal from './EditComponent/CreateCategoryModal'; // Ensure correct path

const CategoryDashboard = () => {
    const [categories, setCategories] = useState([
        {
            id: 1,
            name: 'Tạp chí khoa học và công nghệ Trường Đại Học Kinh Tế Kỹ Thuật Công nghiệp-Màn Kinh Tế Xã hội',
            type: 'Khoa học - Công nghệ',
        },
        {
            id: 2,
            name: 'Tạp chí khoa học và công nghệ Trường Đại Học Kinh Tế Kỹ Thuật Công nghiệp-Màn diễn đàn khoa học',
            type: 'Khoa học - Công nghệ',
        },
        {
            id: 3,
            name: 'Thông báo',
            type: 'Văn hóa - Xã hội',
        },
        {
            id: 4,
            name: 'Sự kiện',
            type: 'Kinh tế - Kinh doanh',
        },
        {
            id: 5,
            name: 'Giới thiệu',
            type: 'Giáo dục',
        },
    ]);

    const [selectedCategory, setSelectedCategory] = useState(null);
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [nextId, setNextId] = useState(categories.length + 1); // Track the next ID to be used

    const handleDelete = (id) => {
        setCategories(categories.filter((category) => category.id !== id));
    };

    const handleUpdate = (updatedCategory) => {
        setCategories(categories.map((category) => (category.id === updatedCategory.id ? updatedCategory : category)));
    };

    const handleCreate = (newCategory) => {
        newCategory.id = nextId;
        setCategories([...categories, newCategory]);
        setNextId(nextId + 1); // Increment the next ID
    };

    const openEditModal = (category) => {
        setSelectedCategory(category);
    };

    const closeEditModal = () => {
        setSelectedCategory(null);
    };

    const openCreateModal = () => {
        setIsCreateModalOpen(true);
    };

    const closeCreateModal = () => {
        setIsCreateModalOpen(false);
    };

    return (
        <>
            <div className="container mx-auto p-4">
                <div className="flex align-center justify-between">
                    <div className="flex items-center justify-center ">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 9h3.75m-4.5 2.625h4.5M12 18.75 9.75 16.5h.375a2.625 2.625 0 0 0 0-5.25H9.75m.75-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                            />
                        </svg>
                        <h1 className="text-2xl ml-1 font-bold ">Thể loại</h1>
                    </div>

                    <button
                        onClick={openCreateModal}
                        className="bg-green-500 h-[30px] hover:bg-green-600 text-white font-normal pl-3 pr-3 rounded"
                    >
                        CREATE
                    </button>
                </div>
                <div className="border-b-2 mt-3 border-gray-200 border-solid "></div>
                    <table className="min-w-full bg-white rounded shadow-lg leading-normal">
                            <thead>
                                <tr>
                                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"> #</th>
                                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Name</th>
                                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Type</th> {/* Add Type header */}
                                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Setting</th>
                                </tr>
                            </thead>
                            <tbody>
                                {categories.map((category) => (
                                    <tr className="odd:bg-gray-100" key={category.id}>
                                        <td className="border-none px-4 py-2">{category.id}</td>
                                        <td className="border-none px-4 py-2 text-gray-600">{category.name}</td>
                                        <td className="border-none px-4 py-2 text-gray-600">{category.type}</td>{' '}
                                        {/* Add Type data */}
                                        <td className="border-none px-4 py-2 flex justify-end gap-2">
                                            <button
                                                onClick={() => openEditModal(category)}
                                                className="bg-blue-400 font-normal px-4 py-2 text-xs hover:bg-blue-500 text-white rounded"
                                            >
                                                UPDATE
                                            </button>
                                            <button
                                                onClick={() => handleDelete(category.id)}
                                                className="bg-red-400 text-xs hover:bg-red-500 px-4 py-2 text-white font-normal rounded"
                                            >
                                                DELETE
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                   
                <p className="mt-4 text-gray-400">Danh sách thể loại</p>
            </div>
            {selectedCategory && (
                <EditCategoryModal category={selectedCategory} onClose={closeEditModal} onUpdate={handleUpdate} />
            )}
            {isCreateModalOpen && <CreateCategoryModal onClose={closeCreateModal} onCreate={handleCreate} />}
        </>
    );
};

export default CategoryDashboard;
