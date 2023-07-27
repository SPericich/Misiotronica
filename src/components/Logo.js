import logo from "../assets/logoMT.png";
import "./Logo.css";


const logoM = () => {
    return (
        <div>
            <img src={logo} className="nav-logo" alt="logo" />
        </div>
    );
}

export default logoM;