import { ThemeProvider } from 'styled-components';

import { Routers } from './routes/Routers';

import { theme, GlobalStyle } from './global/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routers />
      <GlobalStyle />
    </ThemeProvider>  
  );
}

export default App;
