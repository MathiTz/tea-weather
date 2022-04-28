import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AppProvider } from "./context";
import { GlobalStyle } from "./global";
import { Home } from "./pages/Home";

function App() {
  return (
    <>
      <AppProvider>
        <Home />
      </AppProvider>
      <ToastContainer />
      <GlobalStyle />
    </>
  );
}

export default App;
