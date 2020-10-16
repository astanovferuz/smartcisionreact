import React from "react";
import { Link } from "react-router-dom";

function Footer()   {
    return(
        <React.Fragment>
            <footer className="page-footer font-small stylish-color-dark pt-4 mt-0">

                <div className="container text-center text-md-left">

                <div className="row">

                    <div className="col-md-4 mx-auto">

                    <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Leave Your Feedback</h5>
                    <p>Your experience with our app is our top priority. We would like to hear from you on how we can improve user experience.</p>
                    <Link to="/contactus" className="btn btn-yellow sf">Send Feedback</Link>

                    </div>

                    <hr className="clearfix w-100 d-md-none" />

                    <div className="col-md-2 mx-auto">

                    <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Menu</h5>

                    <ul className="list-unstyled">
                        <li>
                        <Link to="/home">Home</Link>
                        </li>
                        <li>
                        <Link to="/aboutus">About</Link>
                        </li>
                        <li>
                        <Link to="/demo">Demo</Link>
                        </li>
                        <li>
                        <Link to="/contactus">Contact</Link>
                        </li>
                    </ul>

                    </div>

                    <hr className="clearfix w-100 d-md-none" />

                    <div className="col-md-2 mx-auto">

                    <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Location</h5>

                    <p>#404, A-10, Ghoroob, Mirdif District, Tripoli Street, Dubai, UAE.</p>

                    </div>

                    <hr className="clearfix w-100 d-md-none" />

                    <div className="col-md-2 mx-auto p-0">

                    <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Contact</h5>

                    <p>Phone: +971 777 000 745</p>
                    <p>info@smartcision.com</p>

                    </div>

                </div>

                </div>
                    <ul className="list-unstyled d-flex justify-content-center mt-4">
                    <li className="footer-social-btn bs">
                        <a href="http://facebook.com" className="btn btn-facebook roundicon"><i className="fa fa-lg fa-facebook cent"></i></a>
                    </li>
                    <li className="footer-social-btn bs">
                        <a href="http://instagram.com" className="btn btn-google roundicon"><i className="fa fa-lg fa-instagram cent"></i></a>
                    </li>
                    <li className="footer-social-btn bs">
                        <a href="http://twiter.com" className="btn btn-twitter roundicon"><i className="fa fa-lg fa-twitter cent"></i></a>
                    </li>
                    <li className="footer-social-btn bs">
                        <a href="http://google.com" className="btn btn-google roundicon"><i className="fa fa-lg fa-google-plus cent"></i></a>
                    </li>
                    <li className="footer-social-btn bs">
                        <a href="http://linkedin.com" className="btn btn-linkedin roundicon"><i className="fa fa-lg fa-linkedin cent"></i></a>
                    </li>
                    </ul>

                    <hr />

                    <div className="footer-copyright text-center py-3">© 2020 Copyright:
                    <a href="https://mdbootstrap.com/"> Smartcision.com</a>
                </div>

            </footer>
        </React.Fragment>
    );
}

export default Footer;