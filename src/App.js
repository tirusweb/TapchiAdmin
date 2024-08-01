import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '+/routes';
import { DefaultLayout } from '+/components/Layout';
import Post from '+/pages/Post/Post';
// import About from '+/pages/About/About';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<DefaultLayout children={<Post />} />} />
                </Routes>
                {/* <Routes>
                    <Route path="/about" element={<DefaultLayout children={<About />} />} />
                </Routes> */}
            </div>
        </Router>
    );
}

export default App;
