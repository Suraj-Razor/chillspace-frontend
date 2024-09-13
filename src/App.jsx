import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import NotFound from "./pages/notfound";
function App() {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<NotFound />} />
                <Route />
            </Routes>
        </>
    );
}

export default App;
