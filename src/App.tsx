import "./App.css";
import Router from "./routes/Router";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Footer from "./components/Footer/Footer";

function App() {
  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <Router />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
