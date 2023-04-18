import Navbar from "./Navbar"

function Header(props) { return(
    <div>
        <header>
            <h1>Liza Parr</h1>
            <Navbar {...props}/>
        </header>
    </div>
)}

export default Header;
