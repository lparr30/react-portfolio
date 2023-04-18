import picture from "../assets/picture.jpg"

function About() { return (
    <div>
        <h2>About Me</h2>
        <img className="picture" src={picture}/>
        <p>Liza is trying to make it through boot camp in one piece. Snacks help and so does studying literally all the time.</p>
    </div>
)};

export default About;