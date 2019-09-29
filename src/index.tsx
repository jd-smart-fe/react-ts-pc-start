import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import './index.less';

serviceWorker.unregister();

ReactDOM.render(<App />, document.getElementById('root'));
