import React from 'react';

class Waiter extends React.Component {
    state = {
        status: false
    }

    handleClick = () => {
        setTimeout(() => {
            this.setState({
                status: true
            })
        }, 100);
    }

    render(){
        return(    
            <div>
                <button data-testid="click" onClick={this.handleClick}>Click Me</button>
                {
                    this.state.status ? <h1 data-testid="text">Secret Message</h1> : ""
                }
            </div>
        );
    }
}

export default Waiter;