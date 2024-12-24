import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import Blog from "./Pages/Blog/Blog";
import About from "./Pages/About/About";
import Contacts from "./Pages/Contacts/Contacts";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    return (
        <div className="container-fluid-">
            <div className="d-flex flex-column min-vh-100">
                <Router>
                    <Header />
                    <main className="flex-grow-1">
                        <div className="container my-4">
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/blog" element={<Blog />} />
                                <Route path="/about" element={<About />} />
                                <Route
                                    path="/contacts"
                                    element={<Contacts />}
                                />
                            </Routes>
                        </div>
                    </main>
                </Router>
                <footer className="bg-dark py-4">
                    <div className="d-flex justify-content-center align-items-center text-light">
                        2024, Frontend 412. &copy; All Rights Reserved.
                    </div>
                </footer>
            </div>
        </div>
    );
}

export default App;
