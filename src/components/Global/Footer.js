import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div className="footer-content">
                <footer className="footer-main fat-footer">
                    <section className="top">
                        <div className="row">
                            <div className="large-12 columns">
                                <ul className="accordion" data-accordion>
                                    <li className="accordion-navigation">
                                        <a href="#footer-solutions" id="footer-solutions-heading" className="hide-for-large-up" role="tab" aria-controls="footer-solutions">
                                            <p className="heading">Solutions<span className="open-icon" /></p>
                                        </a>
                                        <p className="heading show-for-large-up">Solutions</p>
                                        <div id="footer-solutions" className="content" role="tabpanel" aria-labelledby="footer-solutions-heading">
                                            <ul className="first">
                                                <li><a href="//www.elsevier.com/solutions/scopus" title="Scopus">Scopus</a></li>
                                                <li><a href="//www.elsevier.com/solutions/sciencedirect" title="ScienceDirect">ScienceDirect</a></li>
                                                <li><a href="//www.elsevier.com/solutions/mendeley" title="Mendeley">Mendeley</a></li>
                                                <li><a href="//www.elsevier.com/solutions/evolve" title="Evolve">Evolve</a></li>
                                                <li><a href="//www.elsevier.com/solutions/knovel-engineering-information" title="Knovel">Knovel</a></li>
                                                <li><a href="//www.elsevier.com/solutions/reaxys" title="Reaxys">Reaxys</a></li>
                                                <li><a href="//www.elsevier.com/solutions/clinicalkey" title="ClinicalKey">ClinicalKey</a></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="accordion-navigation">
                                        <a href="#footer-researchers" id="footer-researchers-heading" className="hide-for-large-up" role="tab" aria-controls="footer-researchers">
                                            <p className="heading">Researchers<span className="open-icon" /></p>
                                        </a>
                                        <p className="heading show-for-large-up">Researchers</p>
                                        <div id="footer-researchers" className="content" role="tabpanel" aria-labelledby="footer-researchers-heading">
                                            <ul>
                                                <li><a href="//www.elsevier.com/authors/journal-authors/submit-your-paper" title="Submit your paper">Submit your paper</a></li>
                                                <li><a href="//www.elsevier.com/books-and-journals" title="Find Books & Journals">Find
                                                    books &amp; journals</a></li>
                                                <li><a href="//www.elsevier.com/authors" title="visit Author Hub">Visit
                                                    Author Hub</a></li>
                                                <li><a href="//www.elsevier.com/editors" title="visit Editor Hub">Visit
                                                    Editor Hub</a></li>
                                                <li><a href="//www.elsevier.com/librarians" title="visit Librarian Hub">Visit
                                                    Librarian Hub</a></li>
                                                <li><a href="//www.elsevier.com/reviewers" title="visit Reviewer Hub">Visit
                                                    Reviewer Hub</a></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="accordion-navigation">
                                        <a href="#footer-elsevier" id="footer-elsevier-heading" className="hide-for-large-up" role="tab" aria-controls="footer-elsevier">
                                            <p className="heading">About Elsevier<span className="open-icon" /></p>
                                        </a>
                                        <p className="heading show-for-large-up">About Elsevier</p>
                                        <div id="footer-elsevier" className="content" role="tabpanel" aria-labelledby="footer-elsevier-heading">
                                            <ul>
                                                <li><a href="//www.elsevier.com/about" title="About">About</a></li>
                                                <li><a href="//www.elsevier.com/about/careers" title="Careers">Careers</a></li>
                                                <li><a href="//www.elsevier.com/about/newsroom" title="Newsroom">Newsroom</a></li>
                                                <li><a href="//www.elsevier.com/events" title="Events">Events</a></li>
                                                <li><a href="//www.elsevier.com/publisher-relations" title="Publisher relations">Publisher
                                                    relations</a></li>
                                                <li><a href="//www.elsevier.com/advertising-reprints-supplements" title="Advertising">Advertising,
                                                    reprints and supplements</a></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="accordion-navigation last">
                                        <a href="#footer-help" id="footer-website-heading" className="hide-for-large-up" role="tab" aria-controls="footer-help">
                                            <p className="heading">How can we help?<span className="open-icon" /></p>
                                        </a>
                                        <p className="heading show-for-large-up">How can we help?</p>
                                        <div id="footer-help" className="content" role="tabpanel" aria-labelledby="footer-website-heading">
                                            <ul>
                                                <li><a href="https://www.elsevier.com/support" title="Support and feedback" target="_blank">Support and Contact</a></li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                                <div className="footer-social">
                                    <span className="heading">Follow Elsevier</span>
                                    <div className="social-share">
                                        <a href="https://www.facebook.com/ElsevierConnect" className="svg-icon-social" target="_blank" title="Icon social media facebook">
                                            <img alt="Icon social media facebook" src="https://cdn.elsevier.io/verona/includes/svg/icon-social-facebook.svg" />
                                        </a>
                                        <a href="https://www.linkedin.com/company/elsevier" className="svg-icon-social" target="_blank" title="Icon social media linkedin">
                                            <img alt="Icon social media linkedin" src="https://cdn.elsevier.io/verona/includes/svg/icon-social-linkedin.svg" />
                                        </a>
                                        <a href="https://twitter.com/ElsevierConnect" className="svg-icon-social" target="_blank" title="Icon social media twitter">
                                            <img alt="Icon social media twitter" src="https://cdn.elsevier.io/verona/includes/svg/icon-social-twitter.svg" />
                                        </a>
                                        <a href="https://www.youtube.com/c/elsevier/" className="svg-icon-social" target="_blank">
                                            <img alt="Icon social media youtube" src="https://cdn.elsevier.io/verona/includes/svg/icon-social-youtube.svg" />
                                        </a>
                                    </div>
                                </div>
                                {/* country selector */}
                                <div className="region-container">
                                    <span className="heading">Select location/language</span>
                                    <ul className="region-select">
                                        <li className="region-current">Global <span className="language">English</span><span aria-hidden="true" className="icon-standalone-navigatedown" /></li>
                                        <ul className="region-options">
                                            <li><a href="/" data-locale="global"><span className="locale">Global</span> <span className="language">English</span></a></li>
                                            <li><a href="/en-gb" data-locale="en-gb"><span className="locale">United Kingdom</span>
                                                <span className="language">English</span></a></li>
                                            <li><a href="/pl-pl" data-locale="pl-pl"><span className="locale">Poland</span>
                                                <span className="language">Polski</span></a></li>
                                            <li><a href="/es-es" data-locale="es-es"><span className="locale">Spain</span>
                                                <span className="language">Español</span></a></li>
                                            <li><a href="/fr-fr" data-locale="fr-fr"><span className="locale">Français</span>
                                                <span className="language">France</span></a></li>
                                            <li><a href="/en-in" data-locale="en-in"><span className="locale">India</span>
                                                <span className="language">English</span></a></li>
                                        </ul>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="bottom">
                        <div className="row">
                            <div className="large-2 columns show-for-large-up">
                                <a href="https://www.elsevier.com" className="els_link-image">
                                    <img src="https://www.elsevier.com/__data/assets/file/0003/278661/ELS_NS_Logo_2C_RGB.svg" width={80} height={88} className="nonsolus-logo" style={{ background: 'white' }} alt="Elsevier logo" />
                                </a>
                            </div>
                            <div className="large-7 columns">
                                <p>Copyright © 2018 Elsevier, except certain content provided by third parties</p>
                                <p>Cookies are used by this site. To decline or learn more, visit our <a href="//www.elsevier.com/legal/use-of-cookies" title="Cookies" target="_blank">Cookies</a> page.</p>
                                <p><a href="//www.elsevier.com/legal/elsevier-website-terms-and-conditions" title="Terms and Conditions" target="_blank">Terms and Conditions</a>
                                    <a href="//www.elsevier.com/legal/privacy-policy" className="els-document-link" title="Privacy Policy" target="_blank">Privacy Policy</a> <a href="//www.elsevier.com/sitemap" className="els-document-link" title="Sitemap">Sitemap</a></p>
                            </div>
                            <div className="large-5 columns hide-for-large-up">
                                <a href="https://www.elsevier.com" className="els_link-image">
                                    <img src="https://www.elsevier.com/__data/assets/file/0003/278661/ELS_NS_Logo_2C_RGB.svg" width={80} height={88} className="nonsolus-logo" style={{ background: 'white' }} alt="Elsevier logo" />
                                </a>
                                <a title="Go to RELX Group Homepage" href="https://www.relx.com/" className="els_link-image">
                                    <img width={150} alt="RELX Group Wordmark" src="https://cdn.elsevier.io/verona/includes/svg/logo-relxgroup.svg" />
                                </a>
                            </div>
                            <div className="large-3 columns show-for-large-up">
                                <a title="Go to RELX Group Homepage" href="https://www.relx.com/" className="els_link-image">
                                    <img width={150} alt="RELX Group Wordmark" src="https://cdn.elsevier.io/verona/includes/svg/logo-relxgroup.svg" />
                                </a>
                            </div>
                        </div>
                    </section>
                </footer>
            </div>
        )
    }
}

export default Footer