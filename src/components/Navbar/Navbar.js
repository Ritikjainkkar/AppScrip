import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import { useSelector } from 'react-redux';
import useStyles  from './styles'

export default function Navbar() {
  const { selectedState , activeCases, recoveredCases, data } = useSelector((state) => state.states);
  const classes = useStyles();

  const date = data.AN?.meta.date+"";
  return (
    <div classes={classes.root}>
      <Typography variant="h6" component="h6">Last Update { date }</Typography>
      <Grid container spacing={3} style={{ marginTop: 12}}>
        <Grid item xs={3}>
          <Card className={classes.card} raised elevation={6}>
            <CardContent className={classes.content}>
              <Typography variant="h4" component="h4">Total Cases</Typography>
              <Typography variant="h6" component="h6">{activeCases}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3} >
          <Card className={classes.card} raised elevation={6} >
            <CardContent className={classes.content}>
              <Typography variant="h4" component="h4">Recovered Cases</Typography>
              <Typography variant="h6" component="h6">{recoveredCases}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card className={classes.card} raised elevation={6}>
            <CardContent className={classes.content}>
              <Typography variant="h4" component="h4">Selected State</Typography>
              <Typography variant="h6" component="h6">{selectedState.length}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
        <Card className={classes.card} raised elevation={6}>
            <CardContent className={classes.content}>
              <Typography variant="h4" component="h4"></Typography>
              <Typography variant="h6" component="h6"></Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  )
}
