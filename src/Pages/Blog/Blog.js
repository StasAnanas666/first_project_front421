import { Outlet, Link } from "react-router-dom";


function Blog() {
    return (
        <>
            <h1 className="mb-3">Blog Page</h1>
            <Outlet />
        </>
    )
}

export default Blog;