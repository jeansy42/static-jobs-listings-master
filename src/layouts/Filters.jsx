import "../assets/styles/Filters.sass";
import { useJobsContext } from "../context/JobsContext";
import FilterCard from "../components/FilterCard";

function Filters() {
  const { filters, resetFilters, setFilterActive } = useJobsContext();

  return (
    <div className="nav_filter" role="complementary">
      <div className="filters_container">
        <div className="filters">
          {filters.role ? <FilterCard ctg={filters.role} /> : null}
          {filters.level ? <FilterCard ctg={filters.level} /> : null}
          {filters.languages.map((lang) => (
            <FilterCard key={window.crypto.randomUUID()} ctg={lang} />
          ))}
          {filters.tools.map((tool) => (
            <FilterCard key={window.crypto.randomUUID()} ctg={tool} />
          ))}
        </div>
        <span className="clear"
          onClick={() => {
            setFilterActive(false);
            resetFilters();
          }}
        >
          Clear
        </span>
      </div>
    </div>
  );
}

export default Filters;
