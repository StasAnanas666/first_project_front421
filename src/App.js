import { useState } from "react";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import Blog from "./Pages/Blog/Blog";
import About from "./Pages/About/About";
import Contacts from "./Pages/Contacts/Contacts";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BlogPage from "./Pages/Blog/Components/BlogPage";
import BlogsCollection from "./Pages/Blog/Components/BlogsCollection";
import NewBlogForm from "./Pages/Blog/Components/NewBlogForm";
import img1 from "./Pages/images/work1.jpg";
import img2 from "./Pages/images/work2.jpg";
import img3 from "./Pages/images/work3.jpg";
import img4 from "./Pages/images/work4.jpg";
import img5 from "./Pages/images/work5.jpg";
import img6 from "./Pages/images/work6.jpg";

function App() {
    const blogs = [
        {
            id: 1,
            title: "Blog #1",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil eos magni velit fuga unde.",
            image: img1,
        },
        {
            id: 2,
            title: "Blog #2",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil eos magni velit fuga unde.",
            image: img2,
        },
        {
            id: 3,
            title: "Blog #3",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil eos magni velit fuga unde.",
            image: img3,
        },
        {
            id: 4,
            title: "Blog #4",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil eos magni velit fuga unde.",
            image: img4,
        },
        {
            id: 5,
            title: "Blog #5",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil eos magni velit fuga unde.",
            image: img5,
        },
        {
            id: 6,
            title: "Blog #6",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil eos magni velit fuga unde.",
            image: img6,
        },
    ];

    const [blogsArray, setBlogsArray] = useState(blogs);    

    return (
        <div className="container-fluid-">
            <div className="d-flex flex-column min-vh-100">
                <Router>
                    <Header />
                    <main className="flex-grow-1">
                        <div className="container my-4">
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/blog" element={<Blog />}>
                                    <Route index element={<BlogsCollection blogs={blogsArray} />} />
                                    <Route path=":id" element={<BlogPage blogs={blogsArray} />} />
                                    <Route path="add" element={<NewBlogForm blogs={blogsArray} setBlogsArray={setBlogsArray} />} />
                                </Route>
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
