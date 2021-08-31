import ReactDOM from 'react-dom';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { Router as BrowserRouter } from 'react-router-dom';

import App from './components/app/app';

import { redirect } from './store/middleware/redirect';
import browserHistory from './browser-history';
import rootReducer from './store/root-reducer';
import './scss/style.scss';

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(redirect),
});

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter history={browserHistory}>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
