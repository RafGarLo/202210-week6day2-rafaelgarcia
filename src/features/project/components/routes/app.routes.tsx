import { Navigate, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("../../../home/home.page"));
const CharacterList = lazy(() => import("../character.list/character.list"));
const About = lazy(() => import("../About/About"));

export function AppRoutes() {
    return (
        <Suspense>
            <Routes>
                <Route path="home" element={<Home></Home>}></Route>
                <Route
                    path="characters"
                    element={<CharacterList></CharacterList>}
                ></Route>
                <Route path="about" element={<About></About>}></Route>
                <Route path="" element={<Home></Home>}></Route>
                <Route path="*" element={<Navigate replace to="" />}></Route>
            </Routes>
        </Suspense>
    );
}
