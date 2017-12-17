import React from 'react';
import ReactDOM from 'react-dom';
import Home from 'containers/Home';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import configureStore from './configureStore';

ReactDOM.render( 
    <Provider store={configureStore()}>
        < Home/> 
    </Provider>
    ,document.getElementById('root'));
registerServiceWorker();