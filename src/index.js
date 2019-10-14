import React from 'react';
import ReactDOM from 'react-dom';

import testData from './testData'

let color = Math.random() > 0.5 ? 'red' : 'green'
console.log(testData)

class App extends React.Component {
  constructor(props) {
    super(props)
  }
  // componentDidMount(){
  //   console.log('componentDidMount')
  //   debugger
  // }
  // componentWillUnmount() {
  //   console.log('componentWillUnmount')
  //   debugger
  // }
  render () {
    return (
      <div>
        <h2 style={{color: color}}>????????</h2>
        <h2 style={{color: color}}>????????</h2>
        {this.props.testData.map(obj => (
          <h1 key={obj.name} >{obj.name}</h1>
        ))}
      </div>
    )
  }
}

ReactDOM.render(
  <App testData={testData}/>,
  document.getElementById('root'),
);

// setTimeout(()=>{
//   ReactDOM.render(
//     <h2>H2</h2>,
//     document.getElementById('root'),
//   );
// }, 4000)