import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/global";
import theme from "../components/theme";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
