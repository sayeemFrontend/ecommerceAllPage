import classes from "./footer.module.css"
import tw from "./../../Asset/tweet.svg"
import youtube from "./../../Asset/youtube.svg"
import instagram from "./../../Asset/instagram.svg"
import playstore from "./../../Asset/playstore.svg"
import applestore from "./../../Asset/applestore.svg"
import bankgroup from "./../../Asset/bankgroup.png"

const Footer = () => {
    return (
        <div className={classes.footer}>
            <div className="container">
                <div className="row">
                    <div className="col-6 col-md-3">
                        <h4>Get In Touch</h4>
                        <div className={"d-flex justify-content-between " + classes.social}>
                            <img src={instagram} alt="fb" />
                            <img src={tw} alt="fb" />
                            <img src={instagram} alt="instagram" />
                            <img src={youtube} alt="youtube" />
                        </div>
                    </div>
                    <div className="col-6 col-md-3">
                        <h4>Contact Us</h4>
                        <ul className="">
                            <p>1658  Rosewood Lane New York city, NY</p>
                            <p>Pnone: <span>0123878923</span></p>
                            <li> Email: <span>admin@lotustech.dev</span></li>
                        </ul>

                    </div>

                    <div className="col-6 col-md-3 mt-4 mt-md-0">
                        <h4>Useful Links</h4>
                        <ul>
                            <li>Privacy Policy</li>
                            <li>Terms and Conditions</li>
                            <li>Purchasing Policy</li>
                            <li>Career</li>
                        </ul>
                    </div>
                    <div className="col-6 col-md-3 mt-4 mt-md-0">
                        <h4>Download</h4>
                        <img className="pointer" src={playstore} alt="playstore" />
                        <img className="my-2 pointer" src={applestore} alt="applestore" />
                    </div>

                </div>
                <div className="mt-4 d-flex justify-content-center">
                    <img src={bankgroup} alt="bankgroup" width="70%" />
                </div>
            </div>
            <hr></hr>
            <h6>© Copyright 2020 Lotus Groceries</h6>

        </div>
    );
}

export default Footer;