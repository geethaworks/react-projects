import { Link } from "react-router-dom/cjs/react-router-dom.min";
import './pageNotFound.css'

const PageNotFound = () => {
    <div className="page-not-found">
        <p>The page you're looking for can't be found.</p>
        <Link to="/" className="home-button">
            Back to home
        </Link>
    </div>
}
export default PageNotFound