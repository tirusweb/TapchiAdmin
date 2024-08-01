import { useState, useEffect } from 'react';
import TabAdmin from './Tabs/TabAdmin';
import { Catrgory, Comment, Home, Menu, Post, Setting, User } from './Content';
import { Button, Drawer } from '@mui/material';
import { GiHamburgerMenu } from 'react-icons/gi';

const AdminPage = () => {
    const [activeTab, setActiveTab] = useState('home');
    const [isMobileView, setIsMobileView] = useState(false);
    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    // List Tab Admin
    const renderTab = () => {
        switch (activeTab) {
            case 'home':
                return <Home />;
            case 'category':
                return <Catrgory />;
            case 'post':
                return <Post />;
            case 'menu':
                return <Menu />;
            case 'comment':
                return <Comment />;
            case 'setting':
                return <Setting />;
            case 'user':
                return <User />;
            default:
                return <div>Home</div>;
        }
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobileView(window.innerWidth <= 830);
        };

        handleResize(); // Kiểm tra kích thước màn hình ban đầu

        window.addEventListener('resize', handleResize); // Thêm sự kiện lắng nghe resize
        return () => {
            window.removeEventListener('resize', handleResize); // Xóa sự kiện khi component bị unmount
        };
    }, []);
    return (
        <>
            {isMobileView && (
                <>
                    <div className="mb-3 flex justify-between items-center">
                        <Button onClick={toggleDrawer(true)}>
                            <GiHamburgerMenu size={26} />
                        </Button>

                        <h1 className="mr-6 font-bold">BLOG</h1>
                    </div>
                    <Drawer open={open} onClose={toggleDrawer(false)}>
                        <TabAdmin activeTab={activeTab} setActiveTab={setActiveTab} onClose={toggleDrawer} />
                    </Drawer>
                </>
            )}
            <div className="grid grid-cols-12">
                {/* thanh tabs */}
                {!isMobileView && (
                    <div className="col-span-2">
                        <TabAdmin activeTab={activeTab} setActiveTab={setActiveTab} onClose={toggleDrawer} />
                    </div>
                )}

                {/* Content */}
                <div className="col-span-10 box_content">{renderTab()}</div>
            </div>
        </>
    );
};

export default AdminPage;
