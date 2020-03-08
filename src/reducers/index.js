import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router';
import { allProject } from './product.reducer';

const rootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    allProject
  });

  export default rootReducer;