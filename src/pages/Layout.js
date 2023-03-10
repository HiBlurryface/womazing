import React from "react";
import { Outlet } from "react-router";
import Footer from "../components/ordinary/footer/Footer";
import Header from "../components/ordinary/header/Header";

function Layout() {
    return <>
        <Header />
        <main className='main'>
            <Outlet />
        </main>
        <Footer />
    </>
}

export default Layout;