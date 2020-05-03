import React from "react";
import illustration from '../imgs/undraw_build_wireframe_u9m2.svg';
import Form from './contact.form';

import bootstrapImg from "../imgs/languages/Bootstrap.png";
import cssImg from "../imgs/languages/Css.png";
import htmlImg from "../imgs/languages/Html.png";
import jsImg from "../imgs/languages/Js.png";
import nodeImg from "../imgs/languages/NodeJs.png";
import pythonImg from "../imgs/languages/Python.png";
import reactImg from "../imgs/languages/ReactJs.png";
import csharpImg from "../imgs/languages/CSharp.png";

import codepenImg from "../imgs/social/Codepen.png";
import gmailImg from "../imgs/social/Gmail.png";
import linkedinImg from "../imgs/social/Linkedin.png";



export default () => (
    <header className="header">
        <div className="container mx-auto p-12 max-w-4xl">
            <div className="title-header">
                <br></br>
                <h1>
                    <span>R</span>
                    <span>a</span>
                    <span>i</span>
                    <span>m</span>
                    <span>o</span>
                    <span>n</span>
                    <span> </span>
                    <span>K</span>
                    <span>o</span>
                    <span>u</span>
                    <span>d</span>
                    <span>s</span>
                    <span>i</span>
                </h1>
                <br></br>
                <p className= "text-xl">Desarrollador Web-Desktop Full Stack<br></br>
                    <p className="header-languages">
                        <img src={htmlImg} alt="html" title="HTML 5" className="img-header"></img>
                        <img src={cssImg} alt="css" title="CSS" className="img-header"></img>
                        <img src={jsImg} alt="js" title="JavaScript" className="img-header"></img>
                        <img src={reactImg} alt="react" title="React Js" className="img-header"></img>
                        <img src={nodeImg} alt="node" title="Node Js" className="img-header"></img>
                        <img src={pythonImg} alt="python" title="Python" className="img-header"></img>
                        <img src={csharpImg} alt="csharp" title="C#" className="img-header"></img>
                    </p>
                </p>
            </div>
        </div>
        

        <div className="container mx-auto max-w-4xl">
            <p className= "header-social">Mis Redes<br></br>
                    <div className="social-container">
                        <div class="social-card" align="center" title="https://twitter.com/raimonkoudsi">
                            <div class="social-face">
                                <a class="button_a btn-twitter" href="https://twitter.com/raimonkoudsi" target="_blank" rel="nofollow noopener">
                                    <div className="social-content">
                                        <div alt="twitter" title="Twitter" className="svg-social-twitter"></div>
                                        <p className="txt-social-twitter">@RaimonKoudsi</p>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div class="social-card" align="center" title="https://www.linkedin.com/in/raimon-koudsi-a14079188/">
                            <div class="social-face">
                                <a class="button_a btn-linkedin" href="https://www.linkedin.com/in/raimon-koudsi-a14079188/" target="_blank" rel="nofollow noopener">
                                    <div className="social-content">
                                        <div alt="linkedin" title="LinkedIn" className="svg-social-linkedin"></div>
                                        <p className="txt-social-linkedin">RaimonKoudsi</p>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div class="social-card" align="center" title="https://github.com/raimonkoudsi">
                            <div class="social-face">
                                <a class="button_a btn-github" href="https://github.com/raimonkoudsi" target="_blank" rel="nofollow noopener">
                                    <div className="social-content">
                                        <div alt="github" title="GitHub" className="svg-social-github"></div>
                                        <p className="txt-social-github">Raimonkoudsi</p>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div class="social-card" align="center" title="Ramonkoudsi@gmail.com">
                            <div class="social-face">
                                <a class="button_a btn-gmail" href="mailto:ramonkoudsi@gmail.com" target="_blank" rel="nofollow noopener">
                                    <div className="social-content">
                                        <div alt="gmail" title="Gmail" className="svg-social-gmail"></div>
                                        <p className="txt-social-gmail">Ramonkoudsi@Gmail.com</p>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div class="social-card" align="center" title="https://codepen.io/raimonkoudsi">
                            <div class="social-face">
                                <a class="button_a btn-codepen" href="https://codepen.io/raimonkoudsi" target="_blank" rel="nofollow noopener">
                                    <div className="social-content">
                                        <div alt="codepen" title="Codepen" className="svg-social-codepen"></div>
                                        <p className="txt-social-codepen">@RaimonKoudsi</p>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div class="social-card" align="center" title="https://t.me/RaiKoudsi">
                            <div class="social-face">
                                <a class="button_a btn-telegram" href="https://t.me/RaiKoudsi" target="_blank" rel="nofollow noopener">
                                    <div className="social-content">
                                        <div alt="telegram" title="Telegram" className="svg-social-telegram"></div>
                                        <p className="txt-social-telegram">@RaiKoudsi</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </p>
            </div>
            <br></br>
    </header>
)