import React from 'react'

class Counter extends React.Component {
    // props are passed in from the parent as attributes on the
    // component's tag (just like id, class, etc.)
    constructor(props) {
        // call the parent constructor & pass it Counter's props
        super(props)

        // MUST be called 'state' (built in functionality from React components)
        this.state = {
            count: this.props.start || 0,
            step: this.props.step || 1,
            clickTimes: [],
        }
    }

    handleClick = () => {
        // WE CANNOT MUTATE STATE DIRECTLY, we MUST call the this.setState function
        // and pass in updated key/value pairs
        // this.state.count += 1
        this.setState({
            count: this.state.count + this.state.step,
            clickTimes: [...this.state.clickTimes, new Date()],
        })
    }

    // create a class method, called render b/c that's what react expects
    // we can then use the render method to display HTML for our component
    render = () => {
        return (
            <>
                <h3>{this.props.title}</h3>
                <button onClick={this.handleClick}>Count {this.state.count}</button>
                
                {/* using map to transform our click time array into individual list items to display */}
                <ul>
                    {this.state.clickTimes.map((clickTime, i) => {
                        return <li key={i}>{clickTime.toString()}</li>
                    })}
                </ul>
            </>
        )
    }
}

// default export which will be imported like:
// import WhateverYouWantToCallIt from 'folder/file.js'
export default Counter;