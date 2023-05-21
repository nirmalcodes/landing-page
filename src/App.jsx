import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './components';
import { HomePage, NotFoundPage } from './pages';

function App() {
    return (
        <>
            <Routes>
                <Route
                    path="/"
                    element={
                        <Layout>
                            <HomePage />
                        </Layout>
                    }
                />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </>
    );
}

export default App;
