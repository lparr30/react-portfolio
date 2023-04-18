import logo from "../assets/logo.png"
import notes from "../assets/notes.png"
import readme from "../assets/readme.png"
import weather from "../assets/weather.png"
import work from "../assets/work.png"
import quiz from "../assets/quiz.png"

function Portfolio() { return (
    <div>
        <h3>SVG Logo Maker</h3>
        <img src={logo}/>
        <a target="_blank" href="https://github.com/lparr30/svg-logo-maker"><p>GitHub Repo</p></a>
        <h3>Note Taker</h3>
        <img src={notes}/>
        <a target="_blank" href="https://github.com/lparr30/note-taker"><p>GitHub Repo</p></a>
        <a target="_blank" href="https://lparr30-note-taker.herokuapp.com/"><p>Deployed Application</p></a>
        <h3>README Generator</h3>
        <img src={readme}/>
        <a target="_blank" href="https://github.com/lparr30/readme-generator"><p>GitHub Repo</p></a>
        <h3>Weather Dashboard</h3>
        <img src={weather}/>
        <a target="_blank" href="https://github.com/lparr30/weather-dashboard"><p>GitHub Repo</p></a>
        <a target="_blank" href="https://lparr30.github.io/weather-dashboard/"><p>Deployed Application</p></a>
        <h3>Work Day Scheduler</h3>
        <img src={work}/>
        <a target="_blank" href="https://github.com/lparr30/work-day-scheduler"><p>GitHub Repo</p></a>
        <a target="_blank" href="https://lparr30.github.io/work-day-scheduler/"><p>Deployed Application</p></a>
        <h3>Code Quiz</h3>
        <img src={quiz}/>
        <a target="_blank" href="https://github.com/lparr30/code-quiz"><p>GitHub Repo</p></a>
        <a target="_blank" href="https://lparr30.github.io/code-quiz/"><p>Deployed Application</p></a>
    </div>
)};

export default Portfolio;