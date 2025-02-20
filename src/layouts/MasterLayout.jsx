
import {TopNav} from "../components/common/TopNav.jsx";
import {Outlet} from "react-router-dom";
import '../scss/styles.scss';
function MasterLayout() {
    return (
        <div className="bg-body">
            <div className="min-vh-100 ">
                <div className="">
                    <TopNav/>
                    <main >
                        <Outlet/>
                    </main>
                </div>
                <div className="bg-primary">
                    <div className="tw-flex bg-primary tw-flex-col tw-items-center tw-justify-center tw-py-5">
                        <p className="text-white mb-0 tw-text-sm tw-font-semibold">
                            © {new Date().getFullYear()} nx players. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MasterLayout;