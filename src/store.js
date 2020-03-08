import { applyMiddleware, createStore, compose } from 'redux';
import thunkMiddleware from 'redux-thunk'
import { createBrowserHistory } from "history";
import rootReducer from './reducers/index';
import { routerMiddleware } from "connected-react-router";
import { composeWithDevTools } from 'redux-devtools-extension';

const initial_state = window.__REDUX_STATE_ ? window.__REDUX_STATE_ : undefined;

export const history = createBrowserHistory();

const composeEnhancers = composeWithDevTools({
    // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});

const composeByEnv = () => {
      return compose(applyMiddleware(routerMiddleware(history), thunkMiddleware));
};
  
const store = createStore(rootReducer(history), initial_state, composeByEnv())

export default store;