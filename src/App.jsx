import { useEffect } from "react";
import "./App.sass";
import { useJobsContext } from "./context/JobsContext";
import Main from "./layouts/Main";
import Header from "./layouts/Header";
import Filters from "./layouts/Filters";

function App() {
  const {
    getFilteredJobs,
    setData,
    data,
    filters,
    filterActive,
    setFilterActive,
  } = useJobsContext();

  const filterVerificate = () => {
    for (const f in filters) {
      if (filters[f].length !== 0) return true;
    }
    return false;
  };

  useEffect(() => {
    const fetchData = async () => {
      setData(await getFilteredJobs());
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      setData(await getFilteredJobs());
    };
    fetchData();
    setFilterActive(filterVerificate);
  }, [filters]);
  return (
    <>
      <Header />
      {filterActive ? <Filters /> : null}
      <Main jobs={data} />
    </>
  );
}

export default App;
