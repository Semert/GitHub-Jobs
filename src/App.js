import React from "react";
import "./App.css";
import UseFetchJobs from "./useFetchJobs";
import { Contanier } from "react-bootstrap";

const App = () => {
  const { jobs, loading, error } = UseFetchJobs();

  return (
    <Contanier>
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error, Try Refreshing.</h1>}
      <h1> {jobs.length} </h1>
    </Contanier>
  );
};

export default App;
