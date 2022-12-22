import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import FirstTask from "./tasks/first-task/FirstTask";
import SecondTask from "./tasks/second-task/SecondTask";
import { HomePage, NotFound } from "./pages";
import Element from "./tasks/second-task/Element";

export default function RenderPage() {
    return (
        <>
            <header className="header">
                <Link to='/'>Главная</Link>
                <Link to='/FirstTask'>Task 1</Link>
                <Link to='/SecondTask'>Task 2</Link>
            </header>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/FirstTask" element={<FirstTask />} />
                <Route path="/SecondTask" element={<SecondTask />} />
                <Route path="/Element" element={<Element />} />
                <Route path="/*" element={<NotFound />} />
            </Routes>
        </>
    );
}