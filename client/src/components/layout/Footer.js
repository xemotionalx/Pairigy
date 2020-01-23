import React from 'react'

function Footer() {
    return (
        <footer className="footer">
        <div className="footer__logobox">
            <h4 className="logo">
                Pairigy
            </h4>
            <i class="fas fa-moon"></i>
        </div>
        <div className="row">
            <div className="col s6">
                <div className="footer__navigation">
                    <ul className="footer__list">
                        <li className="footer__item"><a href="#" className="footer__link">Company</a></li>
                        <li className="footer__item"><a href="#" className="footer__link">Contact us</a></li>
                    </ul>
                </div>
            </div>
            <div className="col s6">
                <p className="footer__copyright">

                    Copyright &copy; MaiAda Carpano, Maria Gordon, Josh Coleman, Xat Gomez
                </p>
            </div>
        </div>
    </footer>
    )
}

export default Footer;
