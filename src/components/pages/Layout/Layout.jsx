import { Outlet } from "react-router";
import { Navbar } from "../../organisms";

export default function Layout() {
    return (
        <>
        <div className="layout-container">
            <Navbar />
            <Outlet />
        </div>
        </>
    )
}