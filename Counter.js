import { render } from '@testing-library/react'
import React, {Component} from 'react'

class Counter extends Component {

    constructor(prpos) {
        super(props)

        this.state = {count: 0}
    }
    handleClick() {
        this.setState(count: this.state.count+1})
    }
    render() {
        return(
            <button onClick={this.handleClick}>(this.state.count)</button>
        )
    }
}