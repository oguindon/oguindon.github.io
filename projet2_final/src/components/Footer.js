import logo from '../img/logo.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => {
    const english_version = [
        "By a book worm, for book worms",
        "Github: "
    ]
    const french_version = [
        "Pour les lecteurs passionés",
        "Github: "
    ]

    var active_language = english_version;
    if (localStorage.getItem('language') == 'fr') {
        active_language = french_version;
    }

    return (  
        <div className="footer" style={{textAlign:"center", marginBottom:"3rem", marginTop:"2rem", backgroundColor:"aqua"}}>
            <hr></hr>
            <h4>{active_language[0]}</h4>
            <a href="/">
                <img src={logo} alt="logo" width="15%"/>
            </a>
            <br/>
            <br/>
            <Row>
            <Col><p>613-555-5555</p></Col>
            <Col><p>
                {active_language[1]}
                <a href="https://github.com/oguindon">Olivier Guindon</a>
            </p></Col>
            
            <Col><p>courriel@placeholder.ca</p></Col></Row>
            
        </div>
    );
}
 
export default Footer;