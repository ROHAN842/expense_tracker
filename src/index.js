import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { SpeechProvider } from '@speechly/react-client';
import { Provider } from './context/context';

ReactDOM.render( <
    SpeechProvider appId = "a3981f89-58b2-4b44-a4dc-e47f5d01d8c1"
    language = "en-US" >
    <
    Provider >
    <
    App / >
    <
    /Provider>  

    <
    /SpeechProvider > ,
    document.getElementById('root'),
);