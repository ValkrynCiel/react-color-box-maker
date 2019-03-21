import React, { Component } from 'react';

class Box extends Component {

    render() {
        let { color, height, width, handleClick } = this.props;
        let style = { backgroundColor: color,
                     height: height + 'px',
                     width: width + 'px' }
        return (
            <div className="Box">
                <div className="Box-div" style={style}>

                </div>
                <button onClick={ handleClick }>X</button>
            </div>
        )
    }
}

export default Box;