
import { useHistory } from "react-router-dom";
import "./header.css";

const Header = ({ title, shouldShowBackButton = true }) => {
    const history = useHistory();
    return (
        <div>
            <div style={{display:'flex',alignItems:'center'}}>
                {shouldShowBackButton && (
                    <button
                        className="back-button"
                        onClick={() => history.goBack()}>
                        ←
                    </button>
                )}
                <h1>{title}</h1>
            </div>
            <hr style={{border:'2px solid black'}}/>
        </div>
    );
};

export default Header;
