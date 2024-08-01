import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import { publicRoutes } from '+/routes';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {publicRoutes.map((router, i) => {
                    const Page = router.component;
                    return <Route key={i} path={router.path} element={<Page />} />;
                })}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
