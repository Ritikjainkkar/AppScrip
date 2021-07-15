import { makeStyles } from '@material-ui/core/styles';
export default makeStyles( (theme) => ({
  content: {
    direction: "row",
    justifyContent: "center",
    alignItems: "stretch"
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '15px',
    height: '90%',
    position: 'relative',
  },
  root: {
    spacing: '8px',
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));