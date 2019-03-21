import React, { Component } from 'react';


class NewBoxForm extends Component {

    // states
    constructor(props) {
        super(props);

        this.state = {
            width: 0,
            height: 0,
            color: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(evt) {
        evt.preventDefault();
        this.props.notifyCreateBox(this.state);
        this.setState({
            width: 0,
            height: 0,
            color: ""
        });
    }

    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    render() {
        return (
            <form onSubmit={ this.handleSubmit }>
                <label htmlFor="width">Width</label>
                <input 
                    name="width" 
                    id="width" 
                    value={ this.state.width }
                    onChange={ this.handleChange }
                    type="number"
                />
                <br/>

                <label htmlFor="height">Height</label>
                <input 
                    name="height" 
                    id="height" 
                    value={ this.state.height }
                    onChange={ this.handleChange }
                    type="number"
                />
                <br/>

                <label htmlFor="color">Color</label>
                <input 
                    name="color" 
                    id="color" 
                    value={ this.state.color }
                    onChange={ this.handleChange }
                />
                <br/>
                
                <button>Create Box</button>
            </form>
        )
    }

}

export default NewBoxForm;