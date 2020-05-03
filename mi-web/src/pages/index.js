import React from "react";
import Header from '../components/header';
import Repos from '../components/repos';
import Menu from '../components/Menu/menu';

export default () => (

    <div>
        <Menu />

        <section id="header">
            <Header />
        </section>
        <section id="github">
            <Repos />
        </section>

    </div>

)


