import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history'
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const history = createBrowserHistory()
  ReactDOM.render(<App history={history} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
