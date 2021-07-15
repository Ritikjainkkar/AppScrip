import { makeStyles } from '@material-ui/core/styles';
export default makeStyles((theme) => ({
  root: {
    display: 'flex',
    height: '90vh',
    overflow: 'auto',
    backgroundColor: '#f2f2f2'
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));