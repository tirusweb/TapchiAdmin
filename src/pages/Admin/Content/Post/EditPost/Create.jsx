import React, { useState, useEffect } from 'react';
import Banner from '../Banner/Banner';
import FileUpload from '../File/File';
import { apiCreatePost } from '+/services/PostApi/Post';
import { apiGetCategory } from '+/services/Category/Category';

const CreatePost = ({ onCreate, onBack }) => {
    const [categories, setCategories] = useState([]);
    const [postTitle, setPostTitle] = useState('');
    const [postCategory, setPostCategory] = useState('');
    const [postPublishedAt, setPostPublishedAt] = useState('');
    const [postSummary, setPostSummary] = useState('');
    const [postBody, setPostBody] = useState('');
    const [postAuthorName, setPostAuthorName] = useState('');
    const [success, setSuccess] = useState('');
    const [showBanner, setShowBanner] = useState(false);
    const [showFileUpload, setShowFileUpload] = useState(false);
    const [postCreated, setPostCreated] = useState(false);
    const [loading, setLoading] = useState(false);
    const [postId, setPostId] = useState(null); // Thêm trạng thái lưu postId

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
            const response = await apiGetCategory(token);
            if (response && response.data && response.data.data) {
                setCategories(response.data.data);
            }
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };

    const formatDateTime = (date) => {
        const d = new Date(date);
        const year = d.getFullYear();
        const month = String(d.getMonth() + 1).padStart(2, '0');
        const day = String(d.getDate()).padStart(2, '0');
        const hours = String(d.getHours()).padStart(2, '0');
        const minutes = String(d.getMinutes()).padStart(2, '0');
        const seconds = String(d.getSeconds()).padStart(2, '0');

        return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    };

    const handleCreate = async (e) => {
        e.preventDefault();
        setLoading(true);

        const token = sessionStorage.getItem('accessToken');
        if (!token) {
            console.error('No access token found. Please log in.');
            setLoading(false);
            return;
        }

        const formattedPublishedAt = formatDateTime(postPublishedAt);
        const nowDate = new Date();
        const formattedCreatedAt = formatDateTime(nowDate);
        const formattedUpdatedAt = formatDateTime(nowDate);

        const newData = {
            title: postTitle,
            summary: postSummary,
            body: postBody,
            view: 0, // Default view count
            user: 13, // Assuming you want to use this specific user ID
            category: parseInt(postCategory, 10),
            image: '', // Placeholder for image, will update after adding image
            status: "disable",
            selected: true,
            breakingNews: true,
            publishedAt: formattedPublishedAt,
            createdAt: formattedCreatedAt,
            updatedAt: formattedUpdatedAt,
            authorName: postAuthorName,
            file: '', // Placeholder for file, will update after adding file
        };

        try {
            const response = await apiCreatePost(newData, token);
            if (response.status === 200) {
                setSuccess('Post created successfully!');
                setPostCreated(true);
                setPostId(response.data.id); // Lưu lại postId sau khi tạo thành công
                resetForm();
                setLoading(false);
            } else {
                console.error('Failed to create post:', response.status, response.data);
                setSuccess('Failed to create post.');
                setLoading(false);
            }
        } catch (err) {
            console.error('Error creating post:', err);
            setLoading(false);
        }
    };

    const resetForm = () => {
        setPostTitle('');
        setPostCategory('');
        setPostPublishedAt('');
        setPostSummary('');
        setPostBody('');
        setPostAuthorName('');
    };

    const handleAddImage = () => {
        setShowBanner(true);
    };

    const handleAddFile = () => {
        setShowFileUpload(true);
    };

    const handleBackToPost = () => {
        setShowBanner(false);
        setShowFileUpload(false);
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-lg">
            {showBanner ? (
                <Banner onBack={handleBackToPost} />
            ) : showFileUpload ? (
                <FileUpload onBack={handleBackToPost} />
            ) : (
                <>
                    <div className="flex items-center justify-between">
                        <div className="mt-0 flex items-center justify-start">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-4"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
                                />
                            </svg>
                            <button onClick={onBack} className="mb-4 pl-1 pt-4 rounded">
                                Back
                            </button>
                        </div>
                        <div className="flex items-center justify-start">
                            <h2 className="text-1xl ml-1 font-bold uppercase">Tạo bài viết</h2>
                        </div>
                    </div>
                    {success && (
                        <div className="mb-4 p-2 bg-green-100 text-green-800 rounded">
                            {success}
                        </div>
                    )}
                    <form onSubmit={handleCreate}>
                        <div className="mb-4">
                            <label className="block mb-1">Tiêu đề</label>
                            <input
                                type="text"
                                name="title"
                                value={postTitle}
                                onChange={(e) => setPostTitle(e.target.value)}
                                placeholder="Nhập tiêu đề bài viết ..."
                                className="border p-2 w-full"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-1">Danh mục</label>
                            <select
                                name="category"
                                value={postCategory}
                                onChange={(e) => setPostCategory(e.target.value)}
                                className="border p-2 w-full"
                                required
                            >
                                <option value="">Chọn danh mục</option>
                                {categories.map((category) => (
                                    <option key={category.id} value={category.id}>
                                        {category.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="mb-4">
                            <label className="block mb-1">Ngày đăng</label>
                            <input
                                type="datetime-local"
                                name="publishedAt"
                                value={postPublishedAt}
                                onChange={(e) => setPostPublishedAt(e.target.value)}
                                className="border p-2 w-full"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-1">Tóm tắt</label>
                            <textarea
                                name="summary"
                                value={postSummary}
                                onChange={(e) => setPostSummary(e.target.value)}
                                className="border p-2 w-full"
                                rows="3"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-1">Bài Viết</label>
                            <textarea
                                name="body"
                                value={postBody}
                                onChange={(e) => setPostBody(e.target.value)}
                                className="border p-2 w-full"
                                rows="5"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-1">Tác Giả</label>
                            <input
                                type="text"
                                name="authorName"
                                value={postAuthorName}
                                onChange={(e) => setPostAuthorName(e.target.value)}
                                className="border p-2 w-full"
                            />
                        </div>
                        <div className="flex justify-start items-center">
                            <button
                                type="submit"
                                className="bg-blue-500 font-normal shadow-xl px-4 py-2 text-xs hover:bg-blue-600 text-white rounded uppercase"
                                disabled={loading} // Disable button while loading
                            >
                                {loading ? 'Đang xử lý...' : 'Lưu bài viết'}
                            </button>
                            <button
                                type="button"
                                onClick={handleAddImage}
                                className="ml-2 bg-green-500 font-normal shadow-xl px-4 py-2 text-xs hover:bg-green-600 text-white rounded uppercase"
                            >
                                Thêm ảnh
                            </button>
                            <button
                                type="button"
                                onClick={handleAddFile}
                                className="ml-2 bg-yellow-500 font-normal shadow-xl px-4 py-2 text-xs hover:bg-yellow-600 text-white rounded uppercase"
                            >
                                Thêm file
                            </button>
                        </div>
                    </form>
                </>
            )}
        </div>
    );
};

export default CreatePost;
