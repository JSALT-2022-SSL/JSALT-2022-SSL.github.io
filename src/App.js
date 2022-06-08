import './App.css';
import './assets/css/main.css';
import React from "react";
import Video from './assets/videos/bg.mp4';
import {IntroPage} from "./Intro";
import {ProgressPage} from "./Progress";
import {MemberPage} from "./Member";

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selected: 'intro'
        };
        this.handleClick = this.handleClick.bind(this)
    }


    handleClick(item) {
        this.setState({'selected': item});
    }


    render() {
        return (<div className="App">
            <div className="is-preload">
                <video autoPlay muted loop>
                    <source src={Video} type="video/mp4"/>
                </video>
                <div id="wrapper" className="fade-in">
                    <div id="intro">
                        <h1>JSALT 2022</h1>
                        <p>Leveraging Pre-training Models for Speech Processing</p>
                        <ul className="actions">
                            <li><a href="#header" className="button icon solid solo fa-arrow-down scrolly">Continue</a>
                            </li>
                        </ul>
                    </div>

                    <header id="header">
                        <a href="index.html" className="logo">JSALT 2022</a>
                    </header>

                    <nav id="nav">
                        <ul className="links">
                            <li className={(this.state.selected === 'intro' ? 'active' : '')}><a
                                onClick={() => this.handleClick('intro')}>Intro</a></li>
                            <li>
                                <a href="https://twitter.com/JSALT_pretrain">News</a>
                            </li>
                            <li className={(this.state.selected === 'progress' ? 'active' : '')}><a
                                onClick={() => this.handleClick('progress')}>Progress</a></li>
                            <li className={(this.state.selected === 'member' ? 'active' : '')}><a
                                onClick={() => this.handleClick('member')}>Member</a></li>

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

                </div>

            </div>
        </div>)
    }
}


export default App;
