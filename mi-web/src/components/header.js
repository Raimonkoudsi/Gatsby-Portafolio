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
import twitterImg from "../imgs/social/twitter.svg";



export default () => (
    <header className="header">
        <div className="container mx-auto p-12 max-w-4xl">
            <div className="title-header">
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

                <p className= "text-xl mt-10">Mis Redes<br></br>
                    <p className="header-social">
                        <div alt="html" title="HTML 5" className="svg-social"></div>
                        <img src={linkedinImg} alt="css" title="CSS" className="img-header"></img>
                        <img src={gmailImg} alt="js" title="JavaScript" className="img-header"></img>
                        <img src={codepenImg} alt="react" title="React Js" className="img-header"></img>
                    </p>
                </p>
                </div>
        </div>
    </header>
)