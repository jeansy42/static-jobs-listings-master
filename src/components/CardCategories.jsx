import "../assets/styles/CardCategories.sass";
import { useJobsContext } from "../context/JobsContext";

function CardCategories({ job }) {
  const { setFilters, filters } = useJobsContext();

  const filterByRole = () => {
    setFilters((prev) => ({ ...prev, role: job.role }));
  };

  const filterByLevel = () => {
    setFilters((prev) => ({ ...prev, level: job.level }));
  };

  return (
    <div className="card_categories">
      <span className="filter" onClick={filterByRole}>
        {job.role}
      </span>
      <span className="filter" onClick={filterByLevel}>
        {job.level}
      </span>
      {job.languages.map((lang) => (
        <span
          className="filter"
          onClick={() => {
            if (!filters.languages.includes(lang))
              setFilters((prev) => ({
                ...prev,
                languages: [...prev.languages, lang],
              }));
          }}
          key={window.crypto.randomUUID()}
        >
          {lang}
        </span>
      ))}
      {job.tools.map((tool) => (
        <span
          className="filter"
          onClick={() => {
            if (!filters.tools.includes(tool))
              setFilters((prev) => ({ ...prev, tools: [...prev.tools, tool] }));
          }}
          key={window.crypto.randomUUID()}
        >
          {tool}
        </span>
      ))}
    </div>
  );
}

export default CardCategories;
