import { useParams } from "react-router-dom";

function BlogPage() {
    const params = useParams();
    const id = params.id;

    return (
        <h1 className="mb-3">Blog Page #{id}</h1>
    )
}

export default BlogPage;