import { Login } from "./pages/Login";
import { Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home";


export function RouteComponent() {

    return (
        <Routes>
            <Route path="*" element={<Login/>} />
            <Route path="/Home" element={<Home/>} />
        </Routes>
    )
}