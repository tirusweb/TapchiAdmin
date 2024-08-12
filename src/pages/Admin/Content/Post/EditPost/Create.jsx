import React, { useState } from 'react';
import Banner from '../Banner/Banner';
import FileUpload from '../File/File'; // Assuming the new component is placed here
// import apiCreatePost from '+/services/PostApi/Post';


const CreatePost = ({ onCreate, onBack }) => {
    const [newPost, setNewPost] = useState({
        id: Date.now(),
        name: '',
        title: '',
        view: '',
        status: '',
        userPost: '',
        code: '',
    });

    // const handleCreatePost = async () =>{
    //     let res = await apiCreatePost(newPost);
    //     console.log("dataa" , res);
    // }
    const [showBanner, setShowBanner] = useState(false);
    const [showFileUpload, setShowFileUpload] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewPost((prev) => ({
            ...prev,
            [name]: value,
        }));
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

    const handleSubmit = (e) => {
        e.preventDefault();
        onCreate(newPost);
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-lg">
            {showBanner ? (
                <Banner onBack={handleBackToPost} />
            ) : showFileUpload ? (
                <FileUpload onBack={handleBackToPost} />
            ) : (
                <>
                    <div className="flex items-center justify-between ">
                        <div className=" mt-0 flex items-center justify-start">
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
                            <button onClick={onBack} className=" mb-4 pl-1 pt-4 rounded">
                                Back
                            </button>
                        </div>
                        <div className="flex items-center justify-start">
                            <h2 className="text-1xl ml-1 font-bold uppercase">tạo bài viết</h2>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block mb-1">Tiêu đề</label>
                            <input
                                type="text"
                                name="name"
                                value={newPost.name}
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
                                value={newPost.title}
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
                                value={newPost.view}
                                onChange={handleChange}
                                className="border p-2 w-full"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-1">Tóm tắt</label>
                            <textarea
                                name="status"
                                value={newPost.status}
                                onChange={handleChange}
                                className="border p-2 w-full"
                                rows="3"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-1">Bài Viết</label>
                            <textarea
                                name="userPost"
                                value={newPost.userPost}
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
                                value={newPost.code}
                                onChange={handleChange}
                                className="border p-2 w-full"
                            />
                        </div>
                        <div className="flex justify-start items-center">
                            <button
                                type="submit"
                                className="bg-blue-500 font-normal shadow-xl px-4 py-2 text-xs hover:bg-blue-500 text-white rounded uppercase"
                            >
                                Tạo bài viết
                            </button>
                            <button
                                onClick={handleAddImage}
                                className="bg-blue-500 ml-2 font-normal shadow-xl px-4 py-2 text-xs hover:bg-blue-500 text-white rounded uppercase"
                            >
                                Thêm ảnh
                            </button>
                            <button
                                onClick={handleAddFile}
                                className="bg-blue-500 ml-2 font-normal shadow-xl px-4 py-2 text-xs hover:bg-blue-500 text-white rounded uppercase"
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
