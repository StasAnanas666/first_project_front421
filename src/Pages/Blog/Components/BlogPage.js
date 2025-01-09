import { Link, useParams } from "react-router-dom";
import topImg from "../../images/top.jpg";

function BlogPage(props) {
    const params = useParams();
    const id = params.id;

    //получаем объект массива по id из параметра
    const blog = props.blogs.find((b) => b.id == id);

    return (
        <>
            <Link to="/blog" className="link mb-4">
                Назад
            </Link>
            <h1 className="mb-3">{blog.title}</h1>
            {blog.image != null ? (
                <img
                    className="border-rounded-5"
                    src={blog.image}
                    alt={blog.title}
                />
            ) : (
                <img
                    className="border-rounded-5"
                    src={topImg}
                    alt={blog.title}
                />
            )}
            <p>{blog.text}</p>
        </>
    );
}

export default BlogPage;
