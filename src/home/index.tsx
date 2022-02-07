import * as React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Link to="UseContext">
        <div style={{ textAlign: "center", marginTop: 50 }}>useContext示例</div>
      </Link>
      <Link to="UseReducer">
        <div style={{ textAlign: "center", marginTop: 28 }}>useReducer示例</div>
      </Link>
      <Link to="UseMemo">
        <div style={{ textAlign: "center", marginTop: 28 }}>useMemo示例</div>
      </Link>
    </div>
  );
};

export default Home;
