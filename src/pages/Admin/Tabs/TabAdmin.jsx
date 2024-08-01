import styled from 'styled-components';
import { FaClipboardList, FaComments, FaHome, FaUsers } from 'react-icons/fa';
import { BsFillPostcardFill } from 'react-icons/bs';
import { FiMenu } from 'react-icons/fi';
import { IoSettingsSharp } from 'react-icons/io5';
import { LuLogOut } from 'react-icons/lu';

const TabAdmin = (props) => {
    const { activeTab, setActiveTab, onClose } = props;
    return (
        <StyledTabAdmin>
            <aside className="container">
                <div className="flex flex-col justify-between h-screen">
                    <div className="pt-5 text-center mr-5">
                        {/* Trang chủ */}
                        <div
                            className={`flex items-center justify-start pl-16 gap-2 mb-3 py-2 rounded-xl max-sm:pl-12  ${
                                activeTab === 'home' ? 'text-blue-600 font-bold' : 'text-slate-400'
                            }`}
                            onClick={onClose(false)}
                        >
                            <FaHome />
                            <button onClick={() => setActiveTab('home')}>Trang chủ</button>
                        </div>
                        {/* Thể loại */}
                        <div
                            className={`flex items-center justify-start pl-16 gap-2 mb-3 py-2 rounded-xl max-sm:pl-12 ${
                                activeTab === 'category' ? 'text-blue-600 font-bold' : 'text-slate-400'
                            }`}
                            onClick={onClose(false)}
                        >
                            <FaClipboardList />
                            <button onClick={() => setActiveTab('category')}>Thể loại</button>
                        </div>
                        {/* Bài đăng */}
                        <div
                            className={`flex items-center justify-start pl-16 gap-2 mb-3 py-2 rounded-xl max-sm:pl-12 ${
                                activeTab === 'post' ? 'text-blue-600 font-bold' : 'text-slate-400'
                            }`}
                            onClick={onClose(false)}
                        >
                            <BsFillPostcardFill />
                            <button onClick={() => setActiveTab('post')}>Bài đăng</button>
                        </div>
                        <div
                            className={`flex items-center justify-start pl-16 gap-2 mb-3 py-2 rounded-xl max-sm:pl-12 ${
                                activeTab === 'comment' ? 'text-blue-600 font-bold' : 'text-slate-400'
                            }`}
                            onClick={onClose(false)}
                        >
                            <FaComments />
                            <button onClick={() => setActiveTab('comment')}>Bình luận</button>
                        </div>
                        {/* Menu */}
                        <div
                            className={`flex items-center justify-start pl-16 gap-2 mb-3 py-2 rounded-xl max-sm:pl-12 ${
                                activeTab === 'menu' ? 'text-blue-600 font-bold' : 'text-slate-400'
                            }`}
                            onClick={onClose(false)}
                        >
                            <FiMenu />
                            <button onClick={() => setActiveTab('menu')}>Menu</button>
                        </div>
                        {/* Người dùng */}
                        <div
                            className={`flex items-center justify-start pl-16 gap-2 mb-3 py-2 rounded-xl max-sm:pl-12 ${
                                activeTab === 'user' ? 'text-blue-600 font-bold' : 'text-slate-400'
                            }`}
                            onClick={onClose(false)}
                        >
                            <FaUsers />
                            <button onClick={() => setActiveTab('user')}>Người dùng</button>
                        </div>
                        {/* Cài đặt */}
                        <div
                            className={`flex items-center justify-start pl-16 gap-2 mb-3 py-2 rounded-xl max-sm:pl-12 ${
                                activeTab === 'setting' ? 'text-blue-600 font-bold' : 'text-slate-400'
                            }`}
                            onClick={onClose(false)}
                        >
                            <IoSettingsSharp />
                            <button onClick={() => setActiveTab('setting')}>Cài đặt</button>
                        </div>
                    </div>
                    {/* Thoát */}
                    <div
                        className="mx-7 text-center pb-20 border-t-2 pt-4 text-lg cursor-pointer flex items-center pl-10 gap-2 mb-3 max-sm:pl-6"
                        onClick={onClose(false)}
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
