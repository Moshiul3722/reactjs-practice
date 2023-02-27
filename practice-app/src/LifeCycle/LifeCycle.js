import React, { Component } from 'react'


// Mounting 
        // ->constructor, -> render -> componentDidMount

// Updating
    // -> state/props, -> render

// Unmounting
export default class LifeCycle extends Component {
    constructor(props) {
      super(props)
        console.log("Constructor")
      this.state = {
         count:0
      }
    }

    componentDidMount(){
        console.log("Component Did Mount");
    }

    componentWillUnmount(){
        console.log("Component Did Update")
    }

    shouldComponentUpdate(){
        console.log('Should Component update')
    }
    
    // componentWillUnmount(){
    //     console.log('Component will unmount');
    // }

    handleIncrement=()=>{
        this.setState({
            count:this.state.count+1
        })
    }


  render() {
    console.log("Render")
    return (
      <div>
        <h1>Counter: {this.state.count}</h1>
        <button onClick={this.handleIncrement}>Increment</button>
      </div>
    )
  }
}
