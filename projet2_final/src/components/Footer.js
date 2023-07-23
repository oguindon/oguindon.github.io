import logo from '../img/logo.png';

const Footer = () => {
    const english_version = [
        "By a book worm, for book worms",
        "Created by "
    ]
    const french_version = [
        "Pour les lecteurs passionés",
        "Créé par "
    ]

    var active_language = english_version;
    if (localStorage.getItem('language') == 'fr') {
        active_language = french_version;
    }

    return (  
        <div className="footer" style={{textAlign:"center", marginBottom:"3rem", marginTop:"2rem"}}>
            <hr></hr>
            <h4>{active_language[0]}</h4>
            <a href="/">
                <img src={logo} alt="logo" width="15%"/>
            </a>
            <br/>
            <br/>
            <p>
                {active_language[1]}
                <a href="https://github.com/oguindon">Olivier Guindon</a>
            </p>
        </div>
    );
}
 
export default Footer;