import React, { useState, useEffect } from 'react';
import Banner from '../Banner/Banner'; // Assuming Banner is in the same directory

const UpdatePost = ({ post, onUpdate, onClose }) => {
    const [updatedPost, setUpdatedPost] = useState({ ...post });
    const [showBanner, setShowBanner] = useState(false);

    useEffect(() => {
        setUpdatedPost({ ...post });
    }, [post]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdatedPost((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleAddImage = () => {
        console.log("Thêm ảnh button clicked"); // Debugging line
        setShowBanner(true);
    };

    const handleBackToPost = () => {
        setShowBanner(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdate(updatedPost);
        onClose();
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-lg">
            {showBanner ? (
                <Banner onBack={handleBackToPost} />
            ) : (
                <>
                    <h2 className="text-xl font-semibold mb-4">Cập Nhật Bài Viết</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block mb-1">Tiêu đề</label>
                            <input
                                type="text"
                                name="name"
                                value={updatedPost.name}
                                onChange={handleChange}
                                placeholder="Nhập tiêu đề bài viết ..."
                                className="border p-2 w-full"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-1">Danh mục</label>
                            <select
                                name="title"
                                value={updatedPost.title}
                                onChange={handleChange}
                                className="border p-2 w-full"
                                required
                            >
                                <option value="">Chọn danh mục</option>
                                <option value="Category 1">Danh mục 1</option>
                                <option value="Category 2">Danh mục 2</option>
                                <option value="Category 3">Danh mục 3</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label className="block mb-1">Ngày đăng</label>
                            <input
                                type="date"
                                name="view"
                                value={updatedPost.view}
                                onChange={handleChange}
                                className="border p-2 w-full"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-1">Tóm tắt</label>
                            <textarea
                                name="status"
                                value={updatedPost.status}
                                onChange={handleChange}
                                className="border p-2 w-full"
                                rows="3"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-1">Bài Viết</label>
                            <textarea
                                name="userPost"
                                value={updatedPost.userPost}
                                onChange={handleChange}
                                className="border p-2 w-full"
                                rows="5"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-1">Tác Giả</label>
                            <input
                                type="text"
                                name="code"
                                value={updatedPost.code}
                                onChange={handleChange}
                                className="border p-2 w-full"
                            />
                        </div>
                        <div className="flex justify-start items-center">
                            <button
                                type="submit"
                                className="bg-blue-500 ml-4 text-white px-4 py-2 rounded"
                            >
                                Cập Nhật
                            </button>
                            <button
                                type="button"
                                onClick={handleAddImage}
                                className="bg-blue-500 ml-4 text-white px-4 py-2 rounded"
                            >
                                Chi tiết ảnh
                            </button>
                            <button
                                type="button"
                                className="bg-blue-500 ml-4 text-white px-4 py-2 rounded"
                            >
                                Chi tiết file
                            </button>
                            <button
                                type="button"
                                onClick={onClose}
                                className="bg-gray-500 ml-4 text-white px-4 py-2 rounded"
                            >
                                Hủy
                            </button>
                        </div>
                    </form>
                </>
            )}
        </div>
    );
};

export default UpdatePost;
