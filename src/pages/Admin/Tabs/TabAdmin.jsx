import styled from 'styled-components';
import { FaClipboardList, FaComments, FaFileAlt, FaHome, FaUsers } from 'react-icons/fa';
import { BsFillPostcardFill } from 'react-icons/bs';
import { FaPhotoFilm } from 'react-icons/fa6';
import { FiMenu } from 'react-icons/fi';
import { IoSettingsSharp } from 'react-icons/io5';
import { LuLogOut } from 'react-icons/lu';

const TabAdmin = (props) => {
    const { activeTab, setActiveTab } = props;
    return (
        <StyledTabAdmin>
            <div className="container">
                <div className="flex flex-col justify-between h-screen">
                    <div className="pt-5 text-center mr-5">
                        {/* Trang chủ */}
                        <div
                            className={`flex items-center justify-start pl-16 gap-2 mb-3 py-2 rounded-xl ${
                                activeTab === 'home' ? 'text-blue-600 font-bold' : 'text-slate-400'
                            }`}
                        >
                            <FaHome />
                            <button onClick={() => setActiveTab('home')}>Trang chủ</button>
                        </div>
                        {/* Thể loại */}
                        <div
                            className={`flex items-center justify-start pl-16 gap-2 mb-3 py-2 rounded-xl  ${
                                activeTab === 'category' ? 'text-blue-600 font-bold' : 'text-slate-400'
                            }`}
                        >
                            <FaClipboardList />
                            <button onClick={() => setActiveTab('category')}>Thể loại</button>
                        </div>
                        {/* Bài đăng */}
                        <div
                            className={`flex items-center justify-start pl-16 gap-2 mb-3 py-2 rounded-xl ${
                                activeTab === 'post' ? 'text-blue-600 font-bold' : 'text-slate-400'
                            }`}
                        >
                            <BsFillPostcardFill />
                            <button onClick={() => setActiveTab('post')}>Bài đăng</button>
                        </div>
                        {/* Tệp tin */}
                        <div
                            className={`flex items-center justify-start pl-16 gap-2 mb-3 py-2 rounded-xl ${
                                activeTab === 'file' ? 'text-blue-600 font-bold' : 'text-slate-400'
                            }`}
                        >
                            <FaFileAlt />
                            <button onClick={() => setActiveTab('file')}>Tệp tin</button>
                        </div>
                        {/* Banner */}
                        <div
                            className={`flex items-center justify-start pl-16 gap-2 mb-3 py-2 rounded-xl ${
                                activeTab === 'banner' ? 'text-blue-600 font-bold' : 'text-slate-400'
                            }`}
                        >
                            <FaPhotoFilm />
                            <button onClick={() => setActiveTab('banner')}>Banner</button>
                        </div>
                        {/* Bình luận */}
                        <div
                            className={`flex items-center justify-start pl-16 gap-2 mb-3 py-2 rounded-xl ${
                                activeTab === 'comment' ? 'text-blue-600 font-bold' : 'text-slate-400'
                            }`}
                        >
                            <FaComments />
                            <button onClick={() => setActiveTab('comment')}>Bình luận</button>
                        </div>
                        {/* Menu */}
                        <div
                            className={`flex items-center justify-start pl-16 gap-2 mb-3 py-2 rounded-xl ${
                                activeTab === 'menu' ? 'text-blue-600 font-bold' : 'text-slate-400'
                            }`}
                        >
                            <FiMenu />
                            <button onClick={() => setActiveTab('menu')}>Menu</button>
                        </div>
                        {/* Người dùng */}
                        <div
                            className={`flex items-center justify-start pl-16 gap-2 mb-3 py-2 rounded-xl ${
                                activeTab === 'user' ? 'text-blue-600 font-bold' : 'text-slate-400'
                            }`}
                        >
                            <FaUsers />
                            <button onClick={() => setActiveTab('user')}>Người dùng</button>
                        </div>
                        {/* Cài đặt */}
                        <div
                            className={`flex items-center justify-start pl-16 gap-2 mb-3 py-2 rounded-xl ${
                                activeTab === 'setting' ? 'text-blue-600 font-bold' : 'text-slate-400'
                            }`}
                        >
                            <IoSettingsSharp />
                            <button onClick={() => setActiveTab('setting')}>Cài đặt</button>
                        </div>
                    </div>
                    {/* Thoát */}
                    <div className="mx-7 text-center pb-20 border-t-2 pt-4 text-lg cursor-pointer flex items-center pl-10 gap-2 mb-3">
                        <LuLogOut />
                        <button>Thoát</button>
                    </div>
                </div>
            </div>
        </StyledTabAdmin>
    );
};

export default TabAdmin;

const StyledTabAdmin = styled.div`
    background-color: #fff;
`;
