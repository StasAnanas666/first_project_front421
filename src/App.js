import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";

function App() {
    return (
        <div className="container-fluid-">
            <div className="d-flex flex-column min-vh-100">
                <Header />
                <main className="flex-grow-1">
                    <div className="container my-4">
                      <Home />
                    </div>
                </main>
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
