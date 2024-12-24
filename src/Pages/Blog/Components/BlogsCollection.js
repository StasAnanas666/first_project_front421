import img1 from "../../images/work1.jpg";
import img2 from "../../images/work2.jpg";
import img3 from "../../images/work3.jpg";
import img4 from "../../images/work4.jpg";
import img5 from "../../images/work5.jpg";
import img6 from "../../images/work6.jpg";
import BlogCard from "./BlogCard";
import { Outlet } from "react-router-dom";

function BlogsCollection() {
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

    return (
        <>
            <div class="row row-cols-1 g-4">
                {blogs.map((blog) => (
                    <BlogCard
                        key={blog.id}
                        id={blog.id}
                        title={blog.title}
                        text={blog.text}
                        image={blog.image}
                    />
                ))}
            </div>
            <Outlet />
        </>
    );
}

export default BlogsCollection;
