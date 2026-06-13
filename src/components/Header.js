import React, { Component } from "react";

class Header extends Component {
    shouldComponentUpdate(nextProps, nextState) { // determimne if the component update when props changes ; use only when necessary
        return false;
    }

    render() {
        return <h1 className='f1'>Robofriends</h1>
    }
}

export default Header