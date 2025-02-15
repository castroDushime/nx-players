import Sidebar from "../components/SideBar.jsx";
import TopNav from "../components/common/TopNav.jsx";
import {Outlet} from "react-router-dom";
import '../scss/styles.scss';
import Footer from "../components/common/Footer.jsx";

function MasterLayout() {
    return (
        <div className="bg-body">
            <div className="d-flex min-vh-100">
                <Sidebar className="sticky sidebar"/>
                <div className="container">
                    <TopNav />
                    <div className="mx-auto">
                        <Outlet/>
                    </div>
                    <Footer/>
                </div>
            </div>
        </div>
    );
}

export default MasterLayout;