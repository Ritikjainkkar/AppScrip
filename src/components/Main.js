import React from 'react'
import Navbar from './Navbar/Navbar'
import Grid from '@material-ui/core/Grid';
import Slidebar from './Slidebar/Slidebar';
import Graph from './Graph/Graph'

export default function Main() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={3}><Slidebar /></Grid>
      <Grid item xs={9}>
        <Navbar />
        <Graph />
      </Grid>
    </Grid>
  )
}
