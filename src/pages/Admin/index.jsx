import { useState, useEffect } from 'react';
import TabAdmin from './Tabs/TabAdmin';
import { Catrgory, Comment, Home, Menu, Post, Setting, User } from './Content';
import { Button, Drawer, useMediaQuery } from '@mui/material';
import { GiHamburgerMenu } from 'react-icons/gi';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const AdminPage = () => {
    const [activeTab, setActiveTab] = useState('home');
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const isMobileView = useMediaQuery('(max-width: 830px)');

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const token = sessionStorage.getItem('accessToken');

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
        if (!token) {
            navigate('/login');
        }
    }, [token, navigate]);

    return (
        <StyledAdminPage>
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
                <div className="col-span-10 box_content max-md:col-span-12">{renderTab()}</div>
            </div>
        </StyledAdminPage>
    );
};

const StyledAdminPage = styled.div`
    .box_content {
        background-color: #ecedf4;
    }
`;

export default AdminPage;
