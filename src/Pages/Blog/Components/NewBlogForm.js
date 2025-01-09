import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function NewBlogForm(props) {
    const [id, setId] = useState("");
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const [image, setImage] = useState(null);
    const navigate = useNavigate();

    //useEffect будет срабатывать при первом рендере компонента, и при каждом изменении аргументов из списка зависимостей
    useEffect(() => {
        document.title = `${id} ${title}`;
        console.log("use effect running");
    }, [title]);

    const handleSubmit = (e) => {
        e.preventDefault();
        props.setBlogsArray([...props.blogs, {id, title, text, image}]);
        navigate("/blog");
    }

    return (
        <>
            <h1 className="mb-3">Добавление нового блога</h1>

            <form onSubmit={handleSubmit}>
                <div className="form-group my-2">
                    <label htmlFor="blogid" className="form-label">
                        ID блога:
                    </label>
                    <input
                        type="text"
                        id="blogid"
                        className="form-control"
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                    />
                </div>
                <div className="form-group my-2">
                    <label htmlFor="title" className="form-label">
                        Название:
                    </label>
                    <input
                        type="text"
                        id="title"
                        className="form-control"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="form-group my-2">
                    <label htmlFor="text" className="form-label">
                        Описание:
                    </label>
                    <input
                        type="text"
                        id="text"
                        className="form-control"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                </div>
                <div className="form-group my-2">
                    <label htmlFor="image" className="form-label">
                        Обложка:
                    </label>
                    <input
                        type="file"
                        id="image"
                        className="form-control"
                        files={image}
                        onChange={(e) => setImage(null)}
                    />
                </div>
                <button
                    type="submit"
                    className="btn btn-outline-success my-2 w-100"
                >
                    Отправить данные
                </button>
            </form>
        </>
    );
}

export default NewBlogForm;
