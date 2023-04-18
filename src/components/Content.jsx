import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Resume from "./Resume";
import {useState} from "react"; 

function Content(props) { 
    let viewComponent
    if(props.view === "about-me"){
        viewComponent = <About />
    } else if(props.view === "portfolio"){
        viewComponent = <Portfolio />
    } else if(props.view === "contact"){
        viewComponent = <Contact />
    } else if(props.view === "resume"){
        viewComponent = <Resume />
    }

    return (
    <div>
        {viewComponent}
    </div>
)};

export default Content;
