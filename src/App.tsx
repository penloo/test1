import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
    return (
        <Routes>
            {/* 기본 홈 경로 ('/') 접속 시 HomePage 연결 */}
            <Route path="/" element={<HomePage />} />
            {/* 404 처리 (잘못된 경로 접근 시) */}
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
}
