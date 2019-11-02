import React from 'react';
import ClickComponent from './ClickComponent'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';


let color = Math.random() > 0.5 ? 'red' : 'green'

const pushState = (obj, url) => {
    window.history.pushState(obj, '', url)
}

export default class App extends React.Component {
    constructor(props) {
      super(props)
      this.state={
          testData: props.testData
      }
    }
    componentDidMount(){

      console.log('!!! conmonent has just mounted')
    //   debugger
    }
    // componentWillUnmount() {
    //   console.log('componentWillUnmount')
    //   debugger
    // }
    fetchTestData = (dataId) => {
        pushState(
            { currentID: dataId },
            `/testData/${dataId}`
        )
    }

    render () {
      return (
        <React.Fragment>
          <CssBaseline />
          <Container maxWidth="lg">
            <h2 style={{color: color}}>????????</h2>
            {this.state.testData.map(obj => (
                <ClickComponent key={obj.id} name={obj.name} onTestClick={this.fetchTestData}/>
            ))}
            <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} />
          </Container>
        </React.Fragment>
      )
    }
  }