import React, { Component } from 'react';
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import uuid from 'uuid/v4';

class BoxList extends Component {

    constructor(props) {
        super(props);

        //state = array of boxes [.... {width, height, color, id: uuid}]
        this.state = { 
            boxArray: []
        };
        
        this.createBox = this.createBox.bind(this);

    }
    
    //function to remove a box
    removeBox(id) {
        this.setState(state => ({
            boxArray: state.boxArray.filter(box => box.id !== id)
        }))
    }

    //function to create a box
    createBox(box) {
        let newBox = {...box, id: uuid()};
        this.setState(state => ({
            boxArray: [...state.boxArray, newBox]
        }))
    }

    render() {
        return (
            <div>
                <NewBoxForm notifyCreateBox={ this.createBox }/>
                
                { this.state.boxArray.map( b => (
                    <Box
                        key={b.id} 
                        width={ b.width }
                        height={ b.height }
                        color={ b.color }
                        notifyRemoveBox={ () => this.removeBox(b.id) }
                    />
                    )
                )}
            </div>
        );
    }
}

export default BoxList;