import * as api from '../api/index';
import { ACTIVE_CASES, RECOVERED_CASES, UPDATE, FETCH_DATA } from '../constants/constants'

export const fetchData = () => async(dispatch) => {
  try{
    const { data } = await api.fetchData();
    dispatch({ type:FETCH_DATA, payload: data})
  }catch(err){
    console.log(err)
  }
}

export const update = (states) => async (dispatch) => {
  try{
    dispatch({ type:UPDATE, payload: states})
  } catch(err){
    console.log(err);
  }
}

export const activeCasesUpdate = (number) => async (dispatch) => {
  try {
    dispatch({ type:ACTIVE_CASES, payload: number})
  } catch(err){
    console.log(err);
  }
}

export const recoveredCasesUpdate = (number) => async (dispatch) => {
  try {
    dispatch({ type: RECOVERED_CASES, payload: number})
  } catch(err){
    console.log(err);
  }
}