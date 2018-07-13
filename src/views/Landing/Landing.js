import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Brand from '../../components/Brand';
import Headline from '../../components/Headline';
import Context from '../../components/Context';
import CallToAction from '../../components/CallToAction';

export class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: undefined
        }
    }
    handleChange = e => {
        this.setState({ email: e.target.value });
    }
    handleSubmit = e => {
        e.preventDefault();
    }
    render() {
        return (
            <div className={this.props.className}>
                <Brand />
                <Headline />
                <Context />
                <CallToAction onChange={this.handleChange} onSubmit={this.handleSubmit} />
            </div>
        );
    }
}

Landing.propTypes = {
    className: PropTypes.string.isRequired
}

export default Landing;