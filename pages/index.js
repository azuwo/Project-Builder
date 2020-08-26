import {BuilderAppBar} from '../components/builderAppBar'
import {Banner} from '../components/Banner'
import { ThemeProvider } from '@material-ui/styles';
import {CssBaseline} from '@material-ui/core'
import {coreTheme} from '../styles/theme'

const Index = () => {
  return(
    <ThemeProvider theme = {coreTheme}>
      <CssBaseline/>
      <BuilderAppBar/>
      <Banner/>
    </ThemeProvider>
  )
}
export default Index