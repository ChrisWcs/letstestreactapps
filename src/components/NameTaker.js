import React from 'react';

class NameTaker extends React.Component {
    state = {
        value: "",
        array: []
    }

    handleChange = (event) => {
        let { value } = event.target;
        this.setState( () => ({
            value: value
        }));
    }

    handleClick = () => {
        this.setState( prevState => ({
            array: [...prevState.array, prevState.value]
        }));
    }

    render(){
        return(
            <div>
                <input data-testid="input" value={this.state.value} onChange={this.handleChange}/>
                <button data-testid="enter" onClick={this.handleClick}>enter</button>
                {this.state.array.map( (x, i) => <h1 key={i} data-testid={`n${i}`}>{x}</h1> )}
            </div>
        );
    }
}

export default NameTaker;