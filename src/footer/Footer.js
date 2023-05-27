import "./footer.css";
import logo from './logo.png';

const Footer = () => {
    return(
        <footer>
            <img src={logo} alt="logo no footer" className="img-footer"/>
            <p className="paragraph">&#xA9;Projeto Restaurante-2023</p>
        </footer>
    );
}

export default Footer;