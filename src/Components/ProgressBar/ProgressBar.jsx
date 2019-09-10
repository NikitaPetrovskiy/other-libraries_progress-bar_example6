import React from 'react';
import Nanobar from "nanobar";

export class ProgressBar extends React.Component {
    componentDidMount() {
        this.nanobar = new Nanobar({
            className: this.props.barClassName || null,
            id: this.props.barId || null,
            target: document.getElementById(`${this.props.containerId}`) || null
        })
        this.nanobar.go(this.props.percentage);
    }
    componentDidUpdate(prevProps) {
        (prevProps.percentage !== this.props.percentage) &&
        this.nanobar.go(this.props.percentage);
    }

    render() {
        return <div id={this.props.containerId} />
    }
}
