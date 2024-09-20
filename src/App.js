import React, { useEffect, useState } from "react";
import "./App.css";
import CompanyName from "./component/common/company-name";
import Loading from "./component/common/loader";


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const datat = () => {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    };

    datat();
  }, []);

  return (
    <React.Fragment>
      {loading ? <Loading /> : <CompanyName />}
      <div>Hello</div>
    </React.Fragment>
  );
}

export default App;
