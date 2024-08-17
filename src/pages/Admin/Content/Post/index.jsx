import React, { useState, useEffect } from 'react';
import CreatePost from './EditPost/Create';
import UpdatePost from './EditPost/Update';
import DeletePost from './EditPost/DeletePost';
import { apiGetPost } from '+/services/PostApi/Post';
import Pagination from '+/components/Pagination/Pagination'; // Import the new Pagination component

const PostDashboard = () => {
    const [postList, setPosts] = useState([]);
    const [editingPost, setEditingPost] = useState(null);
    const [showCreatePost, setShowCreatePost] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [totalPages, setTotalPages] = useState(1);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [postToDelete, setPostToDelete] = useState(null);

    useEffect(() => {
        getPost(currentPage, pageSize);
    }, [currentPage, pageSize]);

    const getPost = async (page, size) => {
        const token = sessionStorage.getItem('accessToken');
        if (!token) {
            console.error('No access token found. Please log in.');
            return;
        }

        try {
            let response = await apiGetPost(token, page, size);
            if (response && response.data && response.data.data) {
                setPosts(response.data.data.content);
                setTotalPages(response.data.data.totalPages);
            }
        } catch (error) {
            console.error('Error fetching posts:', error);
        }
    };

    const confirmDelete = () => {
        if (postToDelete) {
            setPosts(postList.filter((post) => post.id !== postToDelete.id));
            setIsDeleteModalOpen(false);
            setPostToDelete(null);
        }
    };

    const handleDelete = (post) => {
        setPostToDelete(post);
        setIsDeleteModalOpen(true);
    };

    const closeDeleteModal = () => {
        setIsDeleteModalOpen(false);
        setPostToDelete(null);
    };

    const handleUpdate = (post) => {
        setEditingPost(post);
    };

    const handleBackToPost = () => {
        setShowCreatePost(false);
    };

    const handleCreatePost = () => {
        setEditingPost(null);
        setShowCreatePost(true);
    };

    const handleUpdatePost = (updatedPost) => {
        setPosts(postList.map((post) => (post.id === updatedPost.id ? updatedPost : post)));
        setEditingPost(null);
    };

    const handleClose = () => {
        setEditingPost(null);
        setShowCreatePost(false);
    };

    const handleAddBreakingNews = (id) => {
        const updatedPosts = postList.map((post) => {
            if (post.id === id) {
                return { ...post, breakingNews: !post.breakingNews };
            }
            return post;
        });
        setPosts(updatedPosts);
    };

    const handleAddSelected = (id) => {
        const updatedPosts = postList.map((post) => {
            if (post.id === id) {
                return { ...post, selected: !post.selected };
            }
            return post;
        });
        setPosts(updatedPosts);
    };

    const handleCreate = () => {
        getPost(currentPage, pageSize); // Ensure page and size are passed
        setShowCreatePost(false);
    };

    return (
        <div className="container mx-auto p-4">
            {showCreatePost && (
                <CreatePost
                    onCreate={handleCreate}
                    onBack={handleBackToPost}
                    postToEdit={editingPost}
                    onUpdate={handleUpdatePost}
                />
            )}
            {!showCreatePost && !editingPost && (
                <div>
                    <div className="flex align-center justify-between">
                        <h1 className="text-2xl ml-1 font-bold">Bài Đăng</h1>
                        <button
                            onClick={handleCreatePost}
                            className="bg-green-500 text-xs hover:bg-green-600 text-white font-normal px-4 rounded"
                        >
                            CREATE
                        </button>
                    </div>

                    <div className="border-b-2 mt-3 border-gray-200 border-solid"></div>
                    <table className="min-w-full border-gray-200 overflow-y-auto border-solid rounded-lg shadow-xl bg-white leading-normal">
                        <thead>
                            <tr>
                                <th className="text-blue-500 px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold uppercase tracking-wider">#</th>
                                <th className="text-blue-500 px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold uppercase tracking-wider">Tiều đề</th>
                                <th className="text-blue-500 px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold uppercase tracking-wider">Tóm tắt</th>
                                <th className="text-blue-500 px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold uppercase tracking-wider">Xem</th>
                                <th className="text-blue-500 px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold uppercase tracking-wider">Trạng thái</th>
                                <th className="text-blue-500 px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold uppercase tracking-wider">Người đăng</th>
                                <th className="text-blue-500 px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold uppercase tracking-wider">Mã danh mục</th>
                                <th className="text-blue-500 px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold uppercase tracking-wider">Chức năng</th>
                            </tr>
                        </thead>
                        <tbody>
                            {postList.map((post) => (
                                <tr className="odd:bg-gray-100" key={post.id}>
                                    <td className="border-none px-4 py-2">{post.id}</td>
                                    <td className="border-none px-4 max-w-[200px] py-2 text-gray-600">{post.title}</td>
                                    <td className="border-none px-4 max-w-[400px] py-2 text-gray-600">{post.summary}</td>
                                    <td className="border-none px-4 max-w-[50px] py-2 text-gray-600">{post.view}</td>
                                    <td className="border-none px-4 max-w-[200px] py-2 text-gray-600">
                                        {post.breakingNews ? "" : <span className="text-red-500">BREAKING NEWS</span>}
                                        {post.selected ? "" : <span className="text-yellow-500 ml-2">SELECTED</span>}
                                    </td>
                                    <td className="border-none px-4 max-w-[100px] py-2 text-gray-600">{post.user}</td>
                                    <td className="border-none px-4 max-w-[100px] py-2 text-gray-600">{post.code}</td>
                                    <td className="border-none flex-wrap min-w-[200px] items-center justify-start px-4 py-2 flex gap-2">
                                        <button
                                            onClick={() => handleAddBreakingNews(post.id)}
                                            className="bg-cyan-400 font-normal shadow-xl px-4 hover:shadow-2xl py-2 text-xs hover:bg-cyan-500 text-white rounded"
                                        >
                                            {post.breakingNews ? 'REMOVE BREAKING NEWS' : 'ADD BREAKING NEWS'}
                                        </button>
                                        <button
                                            onClick={() => handleAddSelected(post.id)}
                                            className="bg-amber-400 font-normal shadow-xl px-4 py-2 text-xs hover:bg-amber-500 text-white rounded"
                                        >
                                            {post.selected ? 'REMOVE SELECTED' : 'ADD SELECTED'}
                                        </button>
                                        <button
                                            onClick={() => handleUpdate(post)}
                                            className="bg-blue-400 font-normal shadow-xl px-4 py-2 text-xs hover:bg-blue-500 text-white rounded"
                                        >
                                            UPDATE
                                        </button>
                                        <button
                                            onClick={() => handleDelete(post)}
                                            className="bg-red-400 text-xs shadow-xl hover:bg-red-500 px-4 py-2 text-white font-normal rounded"
                                        >
                                            DELETE
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={(page) => setCurrentPage(page)}
                    />
                </div>
            )}

            {editingPost && (
                <UpdatePost
                    postToEdit={editingPost}
                    onUpdate={handleUpdatePost}
                    onClose={handleClose}
                />
            )}
            {isDeleteModalOpen && postToDelete && (
                <DeletePost
                    post={postToDelete}
                    onConfirm={confirmDelete}
                    onCancel={closeDeleteModal}
                />
            )}
        </div>
    );
};

export default PostDashboard;
