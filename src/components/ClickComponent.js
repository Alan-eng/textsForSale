import React from 'react';

export default class ClickComponent extends React.Component {
    handleClick = () => {
        console.log('hey')
        this.props.fetchTestData(this.props.name)
    }

    render () {
      return (
        <h1 onClick = {this.handleClick} >{this.props.name}</h1>
      )
    }
  }