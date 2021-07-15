import { ACTIVE_CASES, RECOVERED_CASES, UPDATE, FETCH_DATA} from '../constants/constants'
export const states = (state = {states: [], selectedState: [], data: {}, activeCases: 0, recoveredCases: 0}, action) => {
  switch (action.type) {
    case FETCH_DATA:
      var arr = [];
      for (const [key, value] of Object.entries(action.payload)) {
        arr.push(key);
      }
      return { ...state, data: action.payload, states: arr }
    case UPDATE:
      return { ...state, selectedState: action.payload }
    case ACTIVE_CASES:
      return { ...state, activeCases: action.payload }
    case RECOVERED_CASES:
      return { ...state, recoveredCases: action.payload }
    default:
      return state; 
  }
}