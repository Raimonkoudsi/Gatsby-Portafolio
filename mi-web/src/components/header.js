import React from "react";
import illustration from '../imgs/undraw_build_wireframe_u9m2.svg';
import Form from './contact.form';

export default () => (
    <header className="bg-gray-300">
        <div className="container mx-auto p-12 max-w-4xl">
            <div className="flex justify-center items-center">
                <div className="flex-1">
                    <h1 className="text-6xl">Raimon Koudsi</h1>
                    <p className= "text-xl">Desarrollador Web Front End</p>
                </div>
                <img src={illustration} alt="Hombre seleccionando" style={{height:"300px"}}></img>
            </div>
            <div>
                <Form />
            </div>
        </div>
    </header>
)