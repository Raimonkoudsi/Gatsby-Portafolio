import React, {useEffect, useState} from "react";
//import repos from '../data/repos';
import Repo from './repo';

export default () => {

    const [repos, setRepos]=useState([]);
    const [reposCount, setReposCount]=useState([]);

    useEffect(() => {

        //obtiene el json de las peticiones guardadas
        const data=sessionStorage.getItem("repos");
        let myRepos;

        //para verificar si hay datos
        if(data)
        {
            myRepos=JSON.parse(data);

            //para saber la cantidad de repositorios
            setReposCount(myRepos.length);

            //esto es para obtener solo un numero de repositorios y no todos
            //myRepos=myRepos.slice(1,13);
            return setRepos(myRepos);
        }


        async function fetchRepos() {
            //funcion asincrona
            const response= await fetch("https://api.github.com/users/raimonkoudsi/repos");
        
            //lo devuelve en formato json
            myRepos= await response.json();

            //para saber la cantidad de repositorios
            setReposCount(myRepos.length);

            //guarda el json para no hacer muchas peticiones a github y perder la cantidad gratis
            sessionStorage.setItem("repos", JSON.stringify(myRepos));
            
            setRepos(myRepos);
        }

        fetchRepos();
    }, []);

    return(
    <div className="max-w-4xl mx-auto mt-12 text-center">
            <header className="text-center">
                <h2 className="text-3xl mb-2 font-bold"> Mi trabajo en Github</h2>
            </header>
            <ul className="container-repositories">
                {
                    repos.map((repo)=>{
                    return <Repo repo= {repo} key={repo.id} />
                    })
                }
            </ul>
            <div className="mt-8 text-center">
                <a href="https://github.com/raimonkoudsi" className="btn" target="_blank" rel="noopener noreferrer">
                    Ver más en Github ({reposCount})
                </a>
            </div>
    </div>
    );
};