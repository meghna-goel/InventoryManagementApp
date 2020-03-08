import { GETPRODUCT } from '../actions/ActionType'

const initialState = {
    allProjectData: []
}

const initialAction = {
    type: "",
    allProjectData: []
}

export function allProject( state = initialState, action = initialAction ) {
  const { type } = action;
  if(type === GETPRODUCT){
    return Object.assign({}, state, { allProjectData: action.project });
  } else {
    return state;
  }

}