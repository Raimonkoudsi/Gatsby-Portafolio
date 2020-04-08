import React from "react";

import bootstrapImg from "../imgs/languages/Bootstrap.png";
import cssImg from "../imgs/languages/Css.png";
import htmlImg from "../imgs/languages/Html.png";
import jsImg from "../imgs/languages/Js.png";
import nodeImg from "../imgs/languages/NodeJs.png";
import pythonImg from "../imgs/languages/Python.png";
import reactImg from "../imgs/languages/ReactJs.png";
import unityImg from "../imgs/languages/Unity.png";
import csharpImg from "../imgs/languages/CSharp.png";

import next from "../imgs/next-1.png";

const Repo = (props) => {

    let bootstrap, css, html, js, node, python, react, unity, csharp;
    let exist=false;
    
    if(props.repo.html===true)
    {
        html = <img src={htmlImg} alt="html" title="HTML 5" className="img-language"></img>;
        exist=true;
    }
    if(props.repo.bootstrap===true)
    {
        bootstrap = <img src={bootstrapImg} alt="bootstrap" title="Bootstrap" className="img-language"></img>;
        exist=true;
    }
    if(props.repo.css===true)
    {
        css = <img src={cssImg} alt="css" title="CSS 3"className="img-language"></img>;
        exist=true;
    }
    if(props.repo.js===true)
    {
        js = <img src={jsImg} alt="js" title="JavaScript" className="img-language"></img>;
        exist=true;
    }
    if(props.repo.node===true)
    {
        node = <img src={nodeImg} alt="node" title="Node JS" className="img-language"></img>;
        exist=true;
    }
    if(props.repo.react===true)
    {
        react = <img src={reactImg} alt="react" title="React JS" className="img-language"></img>;
        exist=true;
    }
    if(props.repo.python===true)
    {
        python = <img src={pythonImg} alt="python" title="Python" className="img-language"></img>;
        exist=true;
    }
    if(props.repo.unity===true)
    {
        unity = <img src={unityImg} alt="unity" title="Unity" className="img-language"></img>;
        exist=true;
    }
    if(props.repo.csharp===true)
    {
        csharp = <img src={csharpImg} alt="csharp" title="C#" className="img-language"></img>;
        exist=true;    
    }



    if(exist)
    {
        return (
            <a href={props.repo.html_url} target="_blank" rel="noopener noreferrer" className="link-repositories">
                <div className="box-repositories">
                    <div className="content-repositories">
                            <h4 className={'truncate font-bold '} title={props.repo.name}>{props.repo.name}</h4>

                            <p style={{height: "1.5em", top: "8px"}}>
                                {html}
                                {css}
                                {js}
                                {react}
                                {bootstrap}
                                {node}
                                {python}
                                {unity}
                                {csharp}
                            </p>
                            <img src={next} alt="visitar" className="arrow"></img>
                    </div>
                </div>
            </a>
        );
    }
    else
    {
        return null;
    }

};

export default Repo;


//<p className={color} style={{height: "1.5em"}}> {props.repo.language}</p>

/*
<ul className="container-languages">
{
    {color}
}
</ul>
*/