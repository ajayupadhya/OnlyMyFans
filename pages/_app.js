import "../styles/globals.css";
import "../styles/Login.css";

import Provider from "react-redux";
// import { useStore } from "../src/Redux/Store/Store";

export default function App({ Component, pageProps }) {
  // const store = useStore(pageProps.initialReduxState);

  return (
    // <Provider store={store}>
    <Component {...pageProps} />
    // </Provider>
  );
}
