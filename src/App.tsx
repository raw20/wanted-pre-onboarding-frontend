import "./App.css";
import Router from "./routes/Router";
import {
  unstable_createMuiStrictModeTheme,
  ThemeProvider,
} from "@mui/material/styles";
import Footer from "./components/Footer/Footer";

function App() {
  const theme = unstable_createMuiStrictModeTheme();

  return (
    <ThemeProvider theme={theme}>
      <Router />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
