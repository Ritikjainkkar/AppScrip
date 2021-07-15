import React, { useState, useEffect} from 'react'
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import useStyles from './styles'


import { update } from '../../actions/states'
import { useDispatch, useSelector } from 'react-redux'
import { activeCasesUpdate, recoveredCasesUpdate } from '../../actions/states'

export default function Slidebar() {
  const { states, activeCases, recoveredCases, data } = useSelector((state) => state.states);
  const dispatch = useDispatch();
  const classes = useStyles();
  const [selectedState, setState] = useState([]);

  const handleChange = (newState) => {
    if(selectedState.includes(newState)) {
      setState(selectedState.filter((e) => e !== newState))
      subTotalCases(newState);
    } else {
      setState((oldArray) => [...oldArray, newState]);
      dispatch(update(selectedState));
      addTotalCases(newState);
    }
  }

  const addTotalCases = (newState) => {
    const currA = data[newState].total.confirmed;
    const currR = data[newState].total.recovered;
    dispatch(recoveredCasesUpdate(recoveredCases + currR))
    dispatch(activeCasesUpdate(activeCases + currA))
  }

  const subTotalCases = (newState) => {
    const currA = data[newState].total.confirmed;
    const currR = data[newState].total.recovered;
    dispatch(recoveredCasesUpdate(recoveredCases - currR))
    dispatch(activeCasesUpdate(activeCases - currA))
  }

  useEffect(() => {
    dispatch(update(selectedState));
  }, [ selectedState ])

  return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Select States</FormLabel>
        <FormGroup>
        {
          states.map((state) => {
            return(
              <FormControlLabel
                key={state}
                control={<Checkbox onChange={(e) => handleChange(state)} name={state} />}
                label={state}
              />
            )
          })
        }
        </FormGroup>
      </FormControl>
    </div>
  )
}
