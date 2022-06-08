import React from 'react'
import './index.css';
import {ModelScatterChart} from "./component/chart";

class ProgressPage extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div id="main" style={{"fontSize": "medium"}}>
                <ModelScatterChart></ModelScatterChart>
            </div>
        )
    }
}

export {ProgressPage}
