import { Link } from "react-router-dom";

function BlogCard({ id, title, text, image }) {
    return (
        <div className="col">
            <div class="card mb-3" style={{height: "200px"}}>
                <div class="row g-0">
                    <div class="col-md-2">
                        <img
                            src={image}
                            class="rounded-start"
                            style={{height: "200px"}}
                            alt={title}
                        />
                    </div>
                    <div class="col-md-10">
                        <div class="card-body">
                            <Link to={`/blog/${id}`}>
                                <h5 class="card-title">{title}</h5>
                            </Link>
                            <p class="card-text">
                                {text}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogCard;
