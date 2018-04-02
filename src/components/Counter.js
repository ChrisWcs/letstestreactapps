import React from 'react';

class Counter extends React.Component {
    state = {
        count: 0
    }

    increment = () => {
        this.setState(prevState => ({
            count: prevState.count + 1
        }));
    }

    render(){
        return(
            <div>
                <h1 data-testid="count">{this.state.count}</h1>
                <button onClick={this.increment} data-testid="plus">+</button>
            </div>
        );
    }
}

export default Counter;