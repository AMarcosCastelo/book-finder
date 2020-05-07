import React from 'react';
import Header from './components/Header';
import {ThemeProvider, DefaultTheme} from 'styled-components';
import usePersistedState from './Utils/usePersistedState';

import GlobalStyle from './styles/global';
import light from './styles/themes/light';
import dark from './styles/themes/dark';
import Search from './components/Search';

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyle/>
        <Header toggleTheme={toggleTheme} />
        <Search />
      </div>
    </ThemeProvider>
  );
}

export default App;
