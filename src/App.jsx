import {Route, Routes,} from "react-router-dom";
import './App.css'
import {lazy} from "react";

const Home = lazy(() => import('./pages/Home.jsx'));
const GameDetails = lazy(() => import('./pages/GameDetails.jsx'));
function App() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            `<Route path="/game-details" element={<GameDetails/>}/>
        </Routes>
    )
}

export default App
