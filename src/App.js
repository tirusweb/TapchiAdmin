import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '+/routes';
import { DefaultLayout } from '+/components/Layout';
import Post from '+/pages/Post/Post';
import Login from './pages/Login';
// import About from '+/pages/About/About';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((routerPath, i) => {
                        <Route path={routerPath} element={<DefaultLayout children={<Post />} />} />;
                    })}
                    <Route path="/login" element={<Login />} />
                </Routes>
                {/* <Routes>
                    <Route path="/about" element={<DefaultLayout children={<About />} />} />
                </Routes> */}
            </div>
        </Router>
    );
}

export default App;
