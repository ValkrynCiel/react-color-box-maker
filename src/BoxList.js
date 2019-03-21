import React, { Component } from 'react';
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import uuid from 'uuid/v4';

class BoxList extends Component {

    constructor(props) {
        super(props);

        //state = array of boxes [.... {width, height, color, id: uuid}]
        this.state = { 
            boxArray: [],
            newBox: {}
        };
        
        this.createBox = this.createBox.bind(this);
        this.removeBox = this.removeBox.bind(this);
    }
    
    //function to remove a box
    removeBox() {

    }

    //function to create a box
    createBox() {

    }

    render() {
        return (
            <div>
                <NewBoxForm notifyCreateBox={ this.createBox }/>
                
                { this.state.boxArray.map( b => (
                    <Box 
                        width={ b.width }
                        height={ b.height }
                        color={ b.color }
                        notifyRemoveBox={ this.removeBox }
                    />
                    )
                )}
            </div>
        );
    }
}

export default BoxList;