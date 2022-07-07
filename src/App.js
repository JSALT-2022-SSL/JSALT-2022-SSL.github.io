import './App.css';
import './assets/css/main.css';
import React from "react";
import Video from './assets/videos/bg.mp4';
import {IntroPage} from "./Intro";
import {ProgressPage} from "./Progress";
import {MemberPage} from "./Member";

export const appendScript = (scriptToAppend) => {
    const head = document.querySelector("head");
    const script = document.createElement("script");
    script.src = scriptToAppend;
    script.async = false;
    head.appendChild(script);

}

class App extends React.Component {

    constructor(props) {
        super(props);
        let selected
        switch (window.location.pathname.split('/').pop()) {
            case 'intro':
                selected = 'intro'
                break;
            case 'member':
                selected = 'member'
                break;
            case 'progress':
                selected = 'progress'
                break;
            default:
                selected = 'intro'
        }
        this.state = {
            selected: selected
        };
        // this.handleClick = this.handleClick.bind(this)
        console.log(this.props.match)
    }


    // handleClick(item) {
    //     this.setState({'selected': item});
    // }

    componentWillMount() {
        appendScript("assets/js/jquery.min.js");
        appendScript("assets/js/jquery.scrollex.min.js");
        appendScript("assets/js/jquery.scrolly.min.js");
        appendScript("assets/js/browser.min.js");
        appendScript("assets/js/breakpoints.min.js");
        appendScript("assets/js/util.js");
        appendScript("assets/js/main.js");
    }


    render() {
        return (
            <div id="wrapper" className="fade-in">
                <video autoPlay muted loop poster="/poster.jpg">
                    <source src={Video} type="video/mp4"/>
                </video>
                <div id="intro">
                    <h1>JSALT 2022</h1>
                    <p>Leveraging Pre-training Models for Speech Processing</p>
                    <ul className="actions">
                        <li><a href="#header"
                               className="button icon solid solo fa-arrow-down scrolly">Continue</a>
                        </li>
                    </ul>
                </div>

                <header id="header">
                    <a href="index.html" className="logo">JSALT 2022</a>
                </header>

                <nav id="nav">
                    <ul className="links">
                        <li className={(this.state.selected === 'intro' ? 'active' : '')}><a
                            href={'/intro'}>Intro</a></li>
                        <li>
                            <a href="https://twitter.com/JSALT_pretrain">News</a>
                        </li>
                        <li>
                            <a href="https://docs.google.com/presentation/d/1ZpAX0cwZlrVn8ynMUOqUh1DqnJzrChvlTR9X2CjzxuY/edit?usp=sharing">Report</a>
                        </li>
                        <li className={(this.state.selected === 'progress' ? 'active' : '')}><a
                            href={'/progress'}>Progress</a></li>
                        <li className={(this.state.selected === 'member' ? 'active' : '')}><a
                            href={'/member'}>Member</a></li>

                    </ul>
                    <ul className="icons">
                        <li>
                            <a href="https://www.clsp.jhu.edu/2022-eighth-frederick-jelinek-memorial-summer-workshop/"
                               className="icon solid fa-globe ">
                                <span className="label">Website</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/JSALT-2022-SSL" className="icon brands fa-github">
                                <span className="label">GitHub</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/JSALT_pretrain" className="icon brands fa-twitter">
                                <span className="label">Twitter</span>
                            </a>
                        </li>
                    </ul>
                </nav>

                {
                    {
                        'intro': <IntroPage/>,
                        'progress': <ProgressPage/>,
                        'member': <MemberPage/>
                    }[this.state.selected]
                }
                <div id="copyright">
                    <ul>
                        <li>&copy; voidful</li>
                        <li>Design: <a href="https://html5up.net">HTML5 UP</a></li>
                    </ul>
                </div>
            </div>)
    }
}


export default App;
