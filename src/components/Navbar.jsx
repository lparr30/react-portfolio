function Navbar(props) { return(
    <div>
        <ul>
            <li onClick={() => props.setView("about-me")}><a href="#">About Me</a></li>
            <li onClick={() => props.setView("portfolio")}><a href="#">Portfolio</a></li>
            <li onClick={() => props.setView("contact")}><a href="#">Contact</a></li>
            <li onClick={() => props.setView("resume")}><a href="#">Resume</a></li>
        </ul>
    </div>
)
};

export default Navbar;
