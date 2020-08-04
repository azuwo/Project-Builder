import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';


export const theme = createMuiTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },
});

export const useStyles = makeStyles((theme) => ({
    root: {
      ...theme.typography.button,
      backgroundColor: theme.palette.primary.main,
      padding: theme.spacing(1),
    },
  }));