import ReactDOM from 'react-dom';
import React from 'react'
import App from './components/App'
import axios from 'axios';

axios.get('/api/testdata')
.then(resp => {
  ReactDOM.render(
    <App testData={resp.data.testData}/>,
    document.getElementById('root'),
  );
    // this.setState({testData: resp.data.testData})
})





// setTimeout(()=>{
//   ReactDOM.render(
//     <h2>H2</h2>,
//     document.getElementById('root'),
//   );
// }, 4000)