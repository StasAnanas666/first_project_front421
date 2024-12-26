import { useState } from "react";

function Contacts() {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [submittedData, setSubmittedData] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmittedData({ firstname, lastname, email });
        setFirstname("");
        setLastname("");
        setEmail("");
    };

    return (
        <>
            <h1 className="mb-3">Contacts Page</h1>

            <form onSubmit={handleSubmit}>
                <div className="form-group my-2">
                    <label htmlFor="firstname" className="form-label">
                        Имя:{" "}
                    </label>
                    <input
                        type="text"
                        id="firstname"
                        className="form-control"
                        value={firstname}
                        onChange={(e) => setFirstname(e.target.value)}
                    />
                </div>
                <div className="form-group my-2">
                    <label htmlFor="lastname" className="form-label">
                        Фамилия:{" "}
                    </label>
                    <input
                        type="text"
                        id="lastname"
                        className="form-control"
                        value={lastname}
                        onChange={(e) => setLastname(e.target.value)}
                    />
                </div>
                <div className="form-group my-2">
                    <label htmlFor="email" className="form-label">
                        Email:{" "}
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <button
                    type="submit"
                    className="btn btn-outline-success my-2 w-100"
                >
                    Отправить данные
                </button>
            </form>

            {submittedData && (
                <>
                    <h4 className="my-4">Ваши данные: </h4>
                    <p className="fw-bold">
                        Имя: <span>{submittedData.firstname}</span>
                    </p>
                    <p className="fw-bold">
                        Фамилия: <span>{submittedData.lastname}</span>
                    </p>
                    <p className="fw-bold">
                        Email: <span>{submittedData.email}</span>
                    </p>
                </>
            )}
        </>
    );
}

export default Contacts;
