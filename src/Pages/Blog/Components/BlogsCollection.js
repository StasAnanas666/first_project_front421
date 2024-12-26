import BlogCard from "./BlogCard";
import { Link } from "react-router-dom";


function BlogsCollection(props) {

    return (
        <>
            <Link className="btn btn-outline-primary mt-3 mb-5 d-block w-25 ms-auto" to="/blog/add">Добавить новый блог</Link>
            <div class="row row-cols-1 g-4">
                {props.blogs.map((blog) => (
                    <BlogCard
                        key={blog.id}
                        id={blog.id}
                        title={blog.title}
                        text={blog.text}
                        image={blog.image}
                    />
                ))}
            </div>            
        </>
    );
}

export default BlogsCollection;
