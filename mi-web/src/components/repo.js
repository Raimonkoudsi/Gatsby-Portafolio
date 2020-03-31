import React from "react";


const Repo = (props) => {

    let color=false;
    
    if(props.repo.language==='JavaScript')
    {
        color="text-sm text-yellow-700 overflow-y-hidden";
    }
    else if(props.repo.language==='C#')
    {
        color="text-sm text-green-700 overflow-y-hidden";
    }
    else if(props.repo.language==='HTML')
    {
        color="text-sm text-orange-700 overflow-y-hidden";       
    }
    else if(props.repo.language===null)
    {
        color=false;
    }

    if(color)
    {
        return (
            <a href={props.repo.html_url} target="_blank" rel="noopener noreferrer" className="link-repositories">
                <div className="box-repositories">
                    <div className="content-repositories">
                            <h4 className={'truncate font-bold '}>{props.repo.name}</h4>
                            <p className={color} style={{height: "1.5em"}}> {props.repo.language}</p>
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
