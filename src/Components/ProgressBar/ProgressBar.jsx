import React from 'react';
import Nanobar from "nanobar";
import PropTypes from 'prop-types';

export class ProgressBar extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }
    componentDidMount() {
        this.nanobar = new Nanobar({
            className: this.props.barClassName || null,
            id: this.props.barId || null,
            target: this.myRef.current
        })
        this.nanobar.go(this.props.percentage);
    }
    componentDidUpdate(prevProps) {
        if (prevProps.percentage !== this.props.percentage) {
            this.nanobar.go(this.props.percentage);
        }
    }

    render() {
        return <div ref={this.myRef} className={this.props.containerBarClass}/>
    }
}
ProgressBar.defaultProps = {
    containerBarClass: 'containerNanobar'
}
ProgressBar.propTypes = {
    barClassName: PropTypes.string,
    barId: PropTypes.string,
    containerBarClass: PropTypes.string,
    percentage: PropTypes.number.isRequired
}
