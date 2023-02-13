import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
  constructor(props){
    super(props)
    this.state = {
        isError : false
    }
  }

  componentDidCatch(error){
    this.setState({
        isError : true
    })
  }

  render() {
    return this.state.isError ? <div>Something went wrong</div> : this.props.children
  }
}
