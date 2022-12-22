import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div>
            <h1>
                Страница не найдена! Вернуться на домашнюю страницу:{" "}
                <Link to="./FirstTask">Перейти</Link>
            </h1>
        </div>
    );
}
