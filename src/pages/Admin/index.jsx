import { useState } from 'react';
import TabAdmin from './Tabs/TabAdmin';
import { Banner, Catrgory, Comment, File, Home, Menu, Post, Setting, User } from './Content';

const AdminPage = () => {
    const [activeTab, setActiveTab] = useState('home');
    const renderTab = () => {
        switch (activeTab) {
            case 'home':
                return <Home />;
            case 'category':
                return <Catrgory />;
            case 'post':
                return <Post />;
            case 'file':
                return <File />;
            case 'banner':
                return <Banner />;
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
    return (
        <>
            <div className="grid grid-cols-12">
                {/* thanh tabs */}
                <div className="col-span-2">
                    <TabAdmin activeTab={activeTab} setActiveTab={setActiveTab} />
                </div>

                {/* Content */}
                <div className="col-span-10 box_content">{renderTab()}</div>
            </div>
        </>
    );
};

export default AdminPage;
