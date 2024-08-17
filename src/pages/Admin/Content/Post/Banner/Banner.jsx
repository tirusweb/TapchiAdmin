import React, { useState, useEffect } from 'react';
import CreateBanner from './EditBanner/Create';
import UpdateBanner from './EditBanner/UpdateBanner';
import { apiGetBanner } from '+/services/PostApi/Post';

const Banner = ({ postId, onBack }) => {
    const [banners, setBanners] = useState([]);
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
    const [bannerToUpdate, setBannerToUpdate] = useState(null);

    useEffect(() => {
        if (postId) {
            fetchBanners(postId);
        }
    }, [postId]);

    const fetchBanners = async (postId = 19) => {
        const token = sessionStorage.getItem('accessToken');
        if (!token) {
            console.error('No access token found. Please log in.');
            return;
        }

        try {
            let response = await apiGetBanner(token, postId);
            if (response && response.data && response.data.data) {
                setBanners(response.data.data);
               
            }
        } catch (error) {
            if (error.response && error.response.status === 403) {
                console.error('Access denied: You do not have permission to access this resource.');
            } else {
                console.error('Error fetching banners:', error);
            }
        }
    };

    const handleCreate = (newBanner) => {
        setBanners([...banners, newBanner]);
    };

    const handleUpdate = (updatedBanner) => {
        setBanners(
            banners.map((banner) =>
                banner.id === updatedBanner.id ? updatedBanner : banner
            )
        );
        setIsUpdateModalOpen(false);
    };

    const handleDelete = (id) => {
        setBanners(banners.filter((banner) => banner.id !== id));
    };

    return (
        <div>
            {/* Back Button */}
            <div className="mt-0 flex items-center justify-start">
                <button onClick={onBack} className="mb-4 pl-1 pt-4 rounded">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
                    </svg>
                    Back
                </button>
            </div>

            {/* Banner Header */}
            <div className="flex items-center justify-between">
                <div className="flex items-center justify-start">
                    <h2 className="text-1xl ml-1 font-bold">BANNER</h2>
                </div>
                <button
                    onClick={() => setIsCreateModalOpen(true)}
                    className="bg-green-500 text-xs hover:bg-green-600 text-white font-normal py-2 px-4 rounded"
                >
                    CREATE
                </button>
            </div>

            {/* Banner List Table */}
            <table className="min-w-full mt-3 bg-white">
                <thead>
                    <tr>
                        <th className="text-blue-500 px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold uppercase tracking-wider">#</th>
                        <th className="text-blue-500 px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold uppercase tracking-wider">URL</th>
                        <th className="text-blue-500 px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold uppercase tracking-wider">Image</th>
                        <th className="text-blue-500 px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold uppercase tracking-wider">Setting</th>
                    </tr>
                </thead>
                <tbody>
                    {banners.map((item, index) => (
                        <tr key={index} className="odd:bg-gray-100">
                            <td className="border-none px-4 py-2 text-gray-600">{index + 1}</td>
                            <td className="border-none px-4 py-2 text-gray-600 w-[300px]">{item.url}</td>
                            <td className="border-none px-4 py-2 text-gray-600">
                                <img src={URL.createObjectURL(item.file)} alt="Preview" className="h-20" />
                            </td>
                            <td className="border-none px-4 py-2 text-gray-600 flex items-center gap-2">
                                <button onClick={() => {
                                        setBannerToUpdate(item);
                                        setIsUpdateModalOpen(true);
                                    }}
                                    className="bg-blue-400 font-normal shadow-xl px-4 py-2 text-xs hover:bg-blue-500 text-white rounded uppercase">UPDATE</button>
                                <button onClick={() => handleDelete(item.id)} className="bg-red-400 text-xs shadow-xl ml-2 hover:bg-red-500 px-4 py-2 text-white font-normal rounded uppercase">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Create Banner Modal */}
            {isCreateModalOpen && (
                <CreateBanner
                    onSave={handleCreate}
                    onClose={() => setIsCreateModalOpen(false)}
                />
            )}

            {/* Update Banner Modal */}
            {isUpdateModalOpen && bannerToUpdate && (
                <UpdateBanner
                    banner={bannerToUpdate}
                    onSave={handleUpdate}
                    onClose={() => setIsUpdateModalOpen(false)}
                />
            )}
        </div>
    );
};

export default Banner;
