// @flow 
import * as React from 'react';
import styled from 'styled-components'

type Props = {
    
};

const Foot = styled.div`
    background-color: #1a1a1a;
    width: 100vw;
    padding: 50px;
`

const Span = styled.span`
    display: block;
`

export const Footer = (props: Props) => {

    return (
        <footer className="footer-section" id="contact">
        <div className="container">
            <div className="footer-cta pt-5 pb-5">
                <div className="row">
                    <div className="col-xl-5 col-md-4 mb-30">
                        <div className="single-cta">
                            <i className="fas fa-map-marker-alt"></i>
                            <div className="cta-text p-2">
                                <h4>Besöksadress</h4>
                                <span>Tulegatan 4 652 21, Karlstad</span>
                                
                            </div>
                        </div>
                        <div className="single-cta">
                            <i className="fas fa-phone"></i>
                            <div className="cta-text p-2">
                                <h4>Telefon</h4>
                                <a href="tel:+054-853560"><span>054-853560</span></a>
                                <span></span>
                            </div>
                        </div>
                        <div className="single-cta">
                            <i className="far fa-envelope-open"></i>
                            <div className="cta-text p-2">
                                <h4>Öppettider</h4>
                                <Span>Måndag-fredag: 11:00-20:00</Span>
                                <Span>Lördag och Söndag: 12:00-20:00</Span>
                            </div>
                        </div>

                        <div className="single-cta">
                            <i className="far fa-envelope-open"></i>
                            <div className="cta-text p-2">
                                <h4>Dagens lunch:</h4>
                                <Span>11:00-14:00</Span>
                                
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-5 col-md-4 mb-30">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2032.2396307766496!2d13.530013052210858!3d59.379028381586345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465cb17050cd2e5b%3A0xb1c429b3ab8d0dd8!2sTulegatan%204%2C%20652%2021%20Karlstad!5e0!3m2!1sen!2sse!4v1654204207607!5m2!1sen!2sse" width="600" height="325"></iframe>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    );
};