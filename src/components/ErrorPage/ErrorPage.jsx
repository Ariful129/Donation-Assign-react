import { Link } from "react-router-dom";



const ErrorPage = () => {
    return (
        <div className="text-center mt-28">
             <h1 className="text-4xl mb-4">404 Not Found</h1>
             <Link to="/">
                <button className="border-2">Home</button>
             </Link>
        </div>
    );
};

export default ErrorPage;