import React from 'react';
import { apiDeletePost } from '+/services/PostApi/Post';

const DeletePost = ({ post, onConfirm, onCancel }) => {
    const token = sessionStorage.getItem('accessToken');

    const handleDelete = async () => {
        try {
            if (token && post) {
                await apiDeletePost(token, post.id);
                onConfirm();
                onCancel();
            } else {
                console.error('Token or post data is missing.');
            }
        } catch (err) {
            console.error('Error deleting post:', err);
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-4 rounded shadow-lg">
                <h3 className="text-lg font-semibold mb-4">Delete Post</h3>
                <p>Bạn chắc chắn muốn xóa bài viết này?</p>
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

export default DeletePost;
