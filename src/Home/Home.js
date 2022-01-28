import React from "react";
import { connect } from "react-redux";
const Home = ({ is_logged_in }) => {
  console.log(is_logged_in, "home");

  return <div></div>;
};

const mapStateToProps = (state) => ({
  is_logged_in: state.AuthReducer.is_logged_in,
});

export default connect(mapStateToProps, {})(Home);
