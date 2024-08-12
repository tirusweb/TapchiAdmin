import styled from 'styled-components';
import { FaClipboardList, FaComments, FaHome, FaUsers } from 'react-icons/fa';
import { BsFillPostcardFill } from 'react-icons/bs';
import { FiMenu } from 'react-icons/fi';
import { IoSettingsSharp } from 'react-icons/io5';
import { LuLogOut } from 'react-icons/lu';
import axios from 'axios';

const TabAdmin = (props) => {
    const { activeTab, setActiveTab, onClose } = props;

    const handleLogout = async () => {
        const token = sessionStorage.getItem('accessToken');
        try {
            await axios.put('http://tapchikhcn.uneti.edu.vn/api/user/logout', null, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            sessionStorage.removeItem('accessToken');
            sessionStorage.removeItem('refreshToken');
            window.location.href = '/login';
            onClose(false);
        } catch (err) {
            console.log('>>>Error fetching logout: ', err);
        }
    };

    return (
        <StyledTabAdmin>
            <aside className="container">
                <div className="flex flex-col justify-between h-screen">
                    <div className="pt-5 text-center mx-5">
                        {/* Trang chủ */}
                        <div
                            className={`flex items-center justify-start hover:bg-slate-100 pl-16 gap-2 mb-3 py-2 rounded-xl max-sm:pl-12  ${
                                activeTab === 'home'
                                    ? 'text-blue-600 font-bold bg-blue-200 hover:bg-blue-200'
                                    : 'text-slate-400'
                            }`}
                            onClick={() => {
                                onClose(false);
                                setActiveTab('home');
                            }}
                        >
                            <FaHome />
                            <button>Trang chủ</button>
                        </div>
                        {/* Thể loại */}
                        <div
                            className={`flex items-center justify-start pl-16 hover:bg-slate-100 gap-2 mb-3 py-2 rounded-xl max-sm:pl-12 ${
                                activeTab === 'category'
                                    ? 'text-blue-600 font-bold bg-blue-200 hover:bg-blue-200'
                                    : 'text-slate-400'
                            }`}
                            onClick={() => {
                                onClose(false);
                                setActiveTab('category');
                            }}
                        >
                            <FaClipboardList />
                            <button>Thể loại</button>
                        </div>
                        {/* Bài đăng */}
                        <div
                            className={`flex items-center justify-start hover:bg-slate-100 pl-16 gap-2 mb-3 py-2 rounded-xl max-sm:pl-12 ${
                                activeTab === 'post'
                                    ? 'text-blue-600 font-bold bg-blue-200 hover:bg-blue-200'
                                    : 'text-slate-400'
                            }`}
                            onClick={() => {
                                onClose(false);
                                setActiveTab('post');
                            }}
                        >
                            <BsFillPostcardFill />
                            <button>Bài đăng</button>
                        </div>
                        <div
                            className={`flex items-center justify-start hover:bg-slate-100 pl-16 gap-2 mb-3 py-2 rounded-xl max-sm:pl-12 ${
                                activeTab === 'comment'
                                    ? 'text-blue-600 font-bold bg-blue-200 hover:bg-blue-200'
                                    : 'text-slate-400'
                            }`}
                            onClick={() => {
                                onClose(false);
                                setActiveTab('comment');
                            }}
                        >
                            <FaComments />
                            <button>Bình luận</button>
                        </div>
                        {/* Menu */}
                        <div
                            className={`flex items-center justify-start hover:bg-slate-100 pl-16 gap-2 mb-3 py-2 rounded-xl max-sm:pl-12 ${
                                activeTab === 'menu'
                                    ? 'text-blue-600 font-bold bg-blue-200 hover:bg-blue-200'
                                    : 'text-slate-400'
                            }`}
                            onClick={() => {
                                onClose(false);
                                setActiveTab('menu');
                            }}
                        >
                            <FiMenu />
                            <button>Menu</button>
                        </div>
                        {/* Người dùng */}
                        <div
                            className={`flex items-center justify-start hover:bg-slate-100 pl-16 gap-2 mb-3 py-2 rounded-xl max-sm:pl-12 ${
                                activeTab === 'user'
                                    ? 'text-blue-600 font-bold bg-blue-200 hover:bg-blue-200'
                                    : 'text-slate-400'
                            }`}
                            onClick={() => {
                                onClose(false);
                                setActiveTab('user');
                            }}
                        >
                            <FaUsers />
                            <button>Người dùng</button>
                        </div>
                        {/* Cài đặt */}
                        <div
                            className={`flex items-center justify-start hover:bg-slate-100 pl-16 gap-2 mb-3 py-2 rounded-xl max-sm:pl-12 ${
                                activeTab === 'setting'
                                    ? 'text-blue-600 font-bold bg-blue-200 hover:bg-blue-200'
                                    : 'text-slate-400'
                            }`}
                            onClick={() => {
                                onClose(false);
                                setActiveTab('setting');
                            }}
                        >
                            <IoSettingsSharp />
                            <button>Cài đặt</button>
                        </div>
                    </div>
                    {/* Thoát */}
                    <div
                        className="mx-7 text-center pb-20 border-t-2 pt-4 text-lg cursor-pointer flex items-center pl-14 gap-2 mb-3 max-sm:pl-6"
                        onClick={handleLogout}
                    >
                        <LuLogOut />
                        <button>Thoát</button>
                    </div>
                </div>
            </aside>
        </StyledTabAdmin>
    );
};

export default TabAdmin;

const StyledTabAdmin = styled.div`
    background-color: #fff;
`;
