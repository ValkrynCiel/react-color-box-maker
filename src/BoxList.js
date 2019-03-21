import React, { Component } from 'react';
import Box from "./Box";
import uuid from 'uuid/v4'

class BoxList extends Component {

    constructor(props) {
        super(props);
        this.state = { boxArray: [] };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    handleSubmit(evt) {
        evt.preventDefault();
        //come back later
    }
    //state = array of boxes [.... {width, height, color, id: uuid}]
    //function to remove a box
    //function to create a box
    //function to handle submit
    //function handle change

    //render form
    /**
     * pass in function to create box
     * 
     */

    //render box list
    //pass in properties needed in array of boxes

}
