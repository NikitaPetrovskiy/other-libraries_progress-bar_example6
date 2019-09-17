import React from 'react'
import {ProgressBar} from "./ProgressBar";
const MAX_PERCENTAGE = 100;
const MIN_PERCENTAGE = 0;
const ADD_PERCENTAGE = 10;

export class ProgressBarContainer extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            percentage: 30
        }
        this.doProgressMore = this.doProgressMore.bind(this);
        this.doProgressLess = this.doProgressLess.bind(this);
    }
    doProgressMore() {
        if (this.state.percentage < MAX_PERCENTAGE) {
            this.setState((state) => ({percentage: state.percentage + ADD_PERCENTAGE}))
        } else {
            this.setState({percentage: 0});
        }
    }
    doProgressLess() {
        if (this.state.percentage > MIN_PERCENTAGE) {
            this.setState((state) => ({percentage: state.percentage - ADD_PERCENTAGE}))
        } else {
            this.setState({percentage: 0});
        }
    }

    render() {
        return (
            <div>
                <ProgressBar percentage={this.state.percentage} />
                <button className="btn info" onClick={this.doProgressMore}>Больше</button>
                <button className="btn warning" onClick={this.doProgressLess}>Меньше</button>
            </div>
        )
    }
}
