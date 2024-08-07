// EditPost/CreatePost.js
import React, { useState } from 'react';

const CreatePost = ({ isOpen, onClose, onCreate }) => {
    const [newPost, setNewPost] = useState({
        id: Date.now(),
        name: '',
        title: '',
        view: '0',
        status: '',
        userPost: '',
        code: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewPost((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onCreate(newPost);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="fixed inset-0 bg-black opacity-50" onClick={onClose}></div>
            <div className="bg-white p-6 rounded-lg shadow-lg z-10 w-1/2">
                <h2 className="text-xl font-semibold mb-4">Create New Post</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block mb-1">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={newPost.name}
                            onChange={handleChange}
                            className="border p-2 w-full"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-1">Title</label>
                        <input
                            type="text"
                            name="title"
                            value={newPost.title}
                            onChange={handleChange}
                            className="border p-2 w-full"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-1">View</label>
                        <input
                            type="text"
                            name="view"
                            value={newPost.view}
                            onChange={handleChange}
                            className="border p-2 w-full"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-1">Status</label>
                        <input
                            type="text"
                            name="status"
                            value={newPost.status}
                            onChange={handleChange}
                            className="border p-2 w-full"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-1">User Post</label>
                        <input
                            type="text"
                            name="userPost"
                            value={newPost.userPost}
                            onChange={handleChange}
                            className="border p-2 w-full"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-1">Code</label>
                        <input
                            type="text"
                            name="code"
                            value={newPost.code}
                            onChange={handleChange}
                            className="border p-2 w-full"
                        />
                    </div>
                    <div className="flex justify-end">
                        <button
                            type="button"
                            onClick={onClose}
                            className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="bg-blue-500 text-white px-4 py-2 rounded"
                        >
                            Create
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreatePost;
