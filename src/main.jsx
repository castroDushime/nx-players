import {StrictMode, Suspense} from 'react'
import {createRoot} from 'react-dom/client'
import {BrowserRouter as Router} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import './scss/styles.scss'
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from "react-toastify";
import PageLoader from "./layouts/PageLoader.jsx";

createRoot(document.getElementById('root')).render(
    <StrictMode>
            <Router>
                <Suspense fallback={<PageLoader/>}>
                    <App/>
                </Suspense>
                <ToastContainer/>
            </Router>
    </StrictMode>,
)
