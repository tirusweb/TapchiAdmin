import React, { useState } from 'react';
import CreatePost from './EditPost/Create'; // Ensure the import path is correct

const PostDashboard = () => {
    const [posts, setPosts] = useState([
        {
            id: 1,
            name: 'Tạp chí NCKH Số 11',
            title: 'Máy phát điện sức gió sử dụng động cơ không đồng bộ rotor dây quấn (KĐB-RDQ), còn được gọi là không đồng bộ nguồn kép DFIG (Doubly-Fed-Induction-Generator).',
            view: '34',
            status: '',
            userPost: '1',
            code: '2',
        },
        {
            id: 2,
            name: 'Tạp chí NCKH Số 12',
            title: 'Gia công các chi tiết dạng cam phẳng, các bánh răng đặc biệt… có biên dạng là đường Acsimet, hipôxiclôit, êpixiclôit… theo phương pháp truyền thống thường rất khó khăn, biên dạng chi tiết có độ chính xác không cao.',
            view: '34',
            status: '',
            userPost: '2',
            code: '2',
        },
        {
            id: 3,
            name: 'Tạp chí NCKH Số 13',
            title: 'NGHIÊN CỨU CÔNG NGHỆ ÉP CHẢY QUÁ TRÌNH CHẾ TẠO CHI TIẾT VỎ BUGI TRÊN CƠ SỞ MÔ PHỎNG SỐ',
            view: '36',
            status: '',
            userPost: '1',
            code: '2',
        },
        {
            id: 4,
            name: 'Tạp chí NCKH Số 14',
            title: 'Hiện nay trên thế giới, thép ống được sử dụng rất rộng rãi trong hầu hết các ngành công nghiệp, xây dựng, trang trí nội thất... với rất nhiều chủng loại ống khác nhau, đường kính cũng như vật liệu làm ống rất đa dạng. Các loại máy uốn ống đã được nghiên cứu nhưng vẫn thô sơ và phần lớn dừng lại ở máy uốn thủ công và máy uốn ống thông thường. Bài báo trình bày việc sử dụng phương pháp mô hình số tính toán, thiết kế một máy uốn ống không gian cho ống thép CT38 có đường kính từ 10 đến 30 và độ dày 1 đến 2 mm.',
            view: '34',
            status: '',
            userPost: '1',
            code: '2',
        },
        {
            id: 5,
            name: 'Tạp chí NCKH Số 15',
            title: 'Nâng cao chất lượng bề mặt chi tiết gia công với các loại vật liệu có cơ, lý tính cao là yêu cầu cấp thiết trong quá trình sản xuất thực tiễn hiện nay. Khi gia công các loại vật liệu này để tạo ra các chi tiết máy có chất lượng cao là rất khó khăn nếu sử dụng các phương pháp gia công lần cuối là tiện, phay.',
            view: '34',
            status: '',
            userPost: '1',
            code: '2',
        },
    ]);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleDelete = (id) => {
        setPosts(posts.filter((post) => post.id !== id));
    };

    const handleCreatePost = (newPost) => {
        setPosts([...posts, newPost]);
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
                                d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
                            />
                        </svg>
                        <h1 className="text-2xl ml-1 font-bold">Bài Đăng</h1>
                    </div>
                    <div className="flex items-center flex-1 ml-10 mr-20">
                        <input className="border-2 border-gray-200 items-start h-[30px] border-solid flex-1" />
                        <button className="bg-gray-400 text-black hover:bg-gray-500 hover:shadow-lg hover:text-white font-semibold rounded ml-2 px-2 py-1">
                            Tìm kiếm
                        </button>
                    </div>

                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="bg-green-500 text-xs hover:bg-green-600 text-white font-normal px-4 rounded"
                    >
                        CREATE
                    </button>
                </div>
                <div className="border-b-2 mt-3 border-gray-200 border-solid"></div>
                         <table className="min-w-full  border-gray-200 overflow-y-auto border-solid rounded-lg shadow-xl bg-white leading-normal">
                            <thead>
                                <tr>
                                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                        #
                                    </th>
                                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                        Tiều đề
                                    </th>
                                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                        Tóm tắt
                                    </th>
                                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                        Xem
                                    </th>
                                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                        Trạng thái
                                    </th>
                                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                        Người đăng
                                    </th>
                                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                        Mã danh mục
                                    </th>
                                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                        chức năng
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {posts.map((category) => (
                                    <tr className="odd:bg-gray-100" key={category.id}>
                                        <td className="border-none px-4 py-2">{category.id}</td>
                                        <td className="border-none px-4 max-w-[300px] py-2 text-gray-600">
                                            {category.name}
                                        </td>
                                        <td className="border-none px-4 max-w-[300px] py-2 text-gray-600">
                                            {category.title}
                                        </td>
                                        <td className="border-none px-4 max-w-[100px] py-2 text-gray-600">
                                            {category.view}
                                        </td>
                                        <td className="border-none px-4 max-w-[100px] py-2 text-gray-600">
                                            {category.status}
                                        </td>
                                        <td className="border-none px-4 max-w-[100px] py-2 text-gray-600">
                                            {category.userPost}
                                        </td>
                                        <td className="border-none px-4 max-w-[100px] py-2 text-gray-600">
                                            {category.code}
                                        </td>
                                        <td className="border-none flex-wrap min-w-[200px] items-center justify-start px-4 py-2 flex gap-2">
                                            <button className="bg-cyan-400 font-normal shadow-xl px-4 hover:shadow-2xl py-2 text-xs hover:bg-cyan-500 text-white rounded">
                                                ADD BREAKING NEWS
                                            </button>
                                            <button className="bg-amber-400 font-normal shadow-xl px-4 py-2 text-xs hover:bg-amber-500 text-white rounded">
                                                ADD SELECTED
                                            </button>
                                            <button className="bg-blue-400 font-normal shadow-xl px-4 py-2 text-xs hover:bg-blue-500 text-white rounded">
                                                UPDATE
                                            </button>
                                            <button
                                                onClick={() => handleDelete(category.id)}
                                                className="bg-red-400 text-xs shadow-xl hover:bg-red-500 px-4 py-2 text-white font-normal rounded"
                                            >
                                                DELETE
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    
                <p className="mt-4 text-gray-400">Danh sách bài đăng</p>
            </div>
            {isModalOpen && (
                <CreatePost isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onCreate={handleCreatePost} />
            )}
        </>
    );
};

export default PostDashboard;
