import React from 'react';
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import * as colors from "@material-ui/core/colors";
import CssBaseline from "@material-ui/core/CssBaseline";
import 'fontsource-roboto';
import GlobalMenu from './components/GlobalMenu';
import WordPage from './pages/WordPage';
import WordGrammerPage from './pages/WordGrammerPage';
import GrammerPage from './pages/GrammerPage';

interface AppProps {
}

interface AppState {
  currentPage: pageNames
}

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    
    this.state = {
      currentPage: 'WordPage'
    }
  }

  render () {
    const theme = createMuiTheme({
      palette: {
        primary: {
          main: colors.blue[800],
        },
        type: 'dark',
      },
    });

    const changePage = (val: pageNames) => {
      this.setState({
        currentPage: val
      })
    }

    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {
          this.state.currentPage === 'WordPage'
          &&
          <WordPage />
        }
        {
          this.state.currentPage === 'WordGrammerPage'
          &&
          <WordGrammerPage />
        }
        {
          this.state.currentPage === 'GrammerPage'
          &&
          <GrammerPage />
        }
        <GlobalMenu
            currentPage={this.state.currentPage}
            changeCurrentPage= {(val) => changePage(val)}
        />
      </ThemeProvider>
    );
  }
}

export default App;