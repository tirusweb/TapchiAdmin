import React, { useState, useEffect } from 'react';
import EditCategoryModal from './EditComponent/update';
import CreateCategoryModal from './EditComponent/CreateCategoryModal'; 
import DeleteCategory from './EditComponent/Delete'; // Import the new component
import { apiGetCategory } from '+/services/Category/Category';

const CategoryDashboard = () => {
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [loading, setLoading] = useState(true);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [categoryToDelete, setCategoryToDelete] = useState(null);

    useEffect(() => {
        getCategory();
    }, []);

    const getCategory = async () => {
        const token = sessionStorage.getItem('accessToken');
        if (!token) {
            console.error('No access token found. Please log in.');
            return;
        }

        try {
            let response = await apiGetCategory(token);
            if (response && response.data && response.data.data) {
                setCategories(response.data.data);
            }
        } catch (error) {
            if (error.response && error.response.status === 403) {
                console.error('Access denied: You do not have permission to access this resource.');
            } else {
                console.error('Error fetching categories:', error);
            }
        } finally {
            setLoading(false);
        }
    };

    const confirmDelete = () => {
        setCategories(categories.filter((category) => category.id !== categoryToDelete.id));
        setIsDeleteModalOpen(false);
    };

    const handleDelete = (category) => {
        setCategoryToDelete(category);
        setIsDeleteModalOpen(true);
    };

    const handleUpdate = (updatedCategory) => {
        setCategories(categories.map((category) => (category.id === updatedCategory.id ? updatedCategory : category)));
        getCategory();
    };

    const handleCreate = () => {
        getCategory(); 
        setIsCreateModalOpen(false); 
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

    const closeDeleteModal = () => {
        setIsDeleteModalOpen(false);
        setCategoryToDelete(null);
    };

    return (
        <>
            <div className="container mx-auto p-4">
                <div className="flex align-center justify-between">
                    <div className="flex items-center justify-center">
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
                        <h1 className="text-2xl ml-1 font-bold">Thể loại</h1>
                    </div>

                    <button
                        onClick={openCreateModal}
                        className="bg-green-500 h-[30px] hover:bg-green-600 text-white font-normal pl-3 pr-3 rounded"
                    >
                        CREATE
                    </button>
                </div>
                <div className="border-b-2 mt-3 border-gray-200 border-solid "></div>
                {loading ? (
                    <div>Loading...</div>
                ) : (
                    <table className="min-w-full bg-white rounded shadow-lg leading-normal">
                        <thead>
                            <tr>
                                <th className="text-blue-500 px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold uppercase tracking-wider">
                                    #
                                </th>
                                <th className="text-blue-500 px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold uppercase tracking-wider w-[500px]">
                                    Name
                                </th>
                                <th className="text-blue-500 px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold uppercase tracking-wider">
                                    Setting
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {categories.map((category, index) => (
                                <tr className="odd:bg-gray-100" key={`category-${index}`}>
                                    <td className="border-none px-4 py-2">{category.id}</td>
                                    <td className="border-none px-4 py-2 text-gray-600">{category.name}</td>
                                    <td className="border-none px-4 py-2 flex justify-start gap-2">
                                        <button
                                            onClick={() => openEditModal(category)}
                                            className="bg-blue-400 uppercase font-normal px-4 py-2 text-xs hover:bg-blue-500 text-white rounded"
                                        >
                                            UPDATE
                                        </button>
                                        <button
                                            onClick={() => handleDelete(category)}
                                            className="bg-red-400 uppercase text-xs hover:bg-red-500 px-4 py-2 text-white font-normal rounded"
                                        >
                                            DELETE
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}

                <p className="mt-4 text-gray-400">Danh sách thể loại</p>
            </div>
            {selectedCategory && (
                <EditCategoryModal
                    category={selectedCategory}
                    onClose={closeEditModal}
                    onUpdate={handleUpdate}
                />
            )}
            {isCreateModalOpen && (
                <CreateCategoryModal onClose={closeCreateModal} onCreate={handleCreate} />
            )}
            {isDeleteModalOpen && categoryToDelete && (
                <DeleteCategory
                    category={categoryToDelete}
                    onConfirm={confirmDelete}
                    onCancel={closeDeleteModal}
                />
            )}
        </>
    );
};

export default CategoryDashboard;
