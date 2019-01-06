import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './middleware/reactotronConfig'
import App from './app/App';
import registerServiceWorker from './registerServiceWorker';
import store, { history } from './store'
import AppAnalytics from './middleware/appAnalytics'

import './index.css';

new AppAnalytics({
  history
})

ReactDOM.render(
  <Provider store={store}>
    <App history={history} />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
