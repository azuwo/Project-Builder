//test for theme in material UI

//import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';

//'linear-gradient(90deg, rgba(26,24,57,1) 0%, rgba(94,94,94,1) 28%, rgba(87,98,115,1) 65%, rgba(23,37,57,1) 100%)'
const coreTheme = createMuiTheme({
  palette: {
    type: 'dark',
    background: {
      default: "#222222"
    },
    text: {
      primary: "#ffffff"
    }
  }
});
export {coreTheme}
