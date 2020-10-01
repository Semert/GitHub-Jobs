import React from "react";
import "./App.css";
import UseFetchJobs from "./useFetchJobs";
import { Contanier } from "react-bootstrap";

const App = () => {
  const [params, setParams] = useState({});
  const [page, setPage] = useState(1);
  const { jobs, loading, error } = UseFetchJobs(params, page);

  return (
    <Contanier>
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error, Try Refreshing.</h1>}
      {jobs.map((job) => {
        return <Job key={job.id} job={job} />;
      })}
    </Contanier>
  );
};

export default App;
