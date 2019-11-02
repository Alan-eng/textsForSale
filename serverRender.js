import React from 'react';
import ReactDOMServer from 'react-dom/server';

import axios from 'axios';
import App from './src/components/App';

import config from './config';

const serverRender = () => {
    return axios.get(`${config.serverUrl}/api/testdata`)
        .then((resp) => (
             ReactDOMServer.renderToString(<App testData={resp.data.testData}/>)
        ));
}

export default serverRender

