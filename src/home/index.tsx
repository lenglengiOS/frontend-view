import * as React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Link to="UseContext">
        <div style={{ textAlign: "center", marginTop: 50 }}>useContext示例</div>
      </Link>
    </div>
  );
};

export default Home;
