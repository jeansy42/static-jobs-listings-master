import { createContext, useContext, useState } from "react";
const Context = createContext();

export const useJobsContext = () => {
  const jobsContext = useContext(Context);
  return jobsContext;
};

export function JobsContext({ children }) {
  const getJobs = async () => {
    const request = await fetch("../src/data/data.json");
    const result = await request.json();
    return result;
  };
  const initialState = {
    role: "",
    level: "",
    languages: [],
    tools: [],
  };
  const [filters, setFilters] = useState(initialState);
  const [filterActive, setFilterActive] = useState(false);

  const resetFilters = () => setFilters(initialState);

  const getFilteredJobs = async () => {
    const jobs = await getJobs();
    const filteredJobs = jobs.filter((job) => {
      return (
        (filters.role === "" || job.role === filters.role) &&
        (filters.level === "" || job.level === filters.level) &&
        (filters.languages.length === 0 ||
          filters.languages.every((lang) => job.languages.includes(lang))) &&
        (filters.tools.length === 0 ||
          filters.tools.every((tool) => job.tools.includes(tool)))
      );
    });
    return filteredJobs;
  };

  const [data, setData] = useState([]);

  return (
    <Context.Provider
      value={{
        getFilteredJobs,
        filters,
        setFilters,
        getJobs,
        data,
        setData,
        resetFilters,
        filterActive,
        setFilterActive,
      }}
    >
      {children}
    </Context.Provider>
  );
}
