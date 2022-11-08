import { Navigate, Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";

const Home = React.lazy(() => import("../../features/home/home.page"));
const About = React.lazy(() => import("../../features/about/about"));

export function AppRoutes() {
    return (
        <Suspense>
            <Routes>
                <Route path="home" element={<Home></Home>}></Route>
                <Route path="about" element={<About></About>}></Route>
                <Route path="" element={<Home></Home>}></Route>
                <Route path="*" element={<Navigate replace to="" />}></Route>
            </Routes>
        </Suspense>
    );
}
