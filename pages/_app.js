import "../styles/globals.css";
import Provider from "react-redux";
import withRedux from "next-redux-wrapper";
import { useStore } from "../Redux/Store/Store";
import { createWrapper } from "next-redux-wrapper";

const App = ({ Component, pageProps }) => {
  const reduxStore = useStore(pageProps.initialReduxState);

  return (
    <Provider store={reduxStore}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default withRedux(App);
