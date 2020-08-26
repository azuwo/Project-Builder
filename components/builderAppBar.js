import {AppBarStyles} from '../styles/theme'
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import {Login} from './login'

//style={{ background: 'linear-gradient(90deg, rgba(26,24,57,1) 0%, rgba(94,94,94,1) 28%, rgba(87,98,115,1) 65%, rgba(23,37,57,1) 100%)'}}
const BuilderAppBar = () => {
    const classes = AppBarStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static"style={{ background: 'transparent', boxShadow: 'none'}}>
        <Toolbar>
        <Typography variant="h6" className={classes.title}></Typography>
          <Typography variant="h6" className={classes.title}></Typography>
          <Login/>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export {BuilderAppBar}