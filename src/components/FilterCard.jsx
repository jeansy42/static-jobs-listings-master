import { useJobsContext } from "../context/JobsContext";

function FilterCard({ ctg }) {
  const { setFilters, filters } = useJobsContext();

  const removeFilter = (cat) => {
    const newfilter = {};
    for (const f in filters) {
      if (Array.isArray(filters[f]))
        newfilter[f] = filters[f].filter((e) => e !== cat);
      else {
        if (filters[f] === cat) newfilter[f] = "";
        else newfilter[f] = filters[f];
      }
    }
    setFilters(newfilter);
  };
  return (
    <div>
      <span className="filter">{ctg}</span>
      <span
        onClick={() => {
          removeFilter(ctg);
        }}
        className="close_container"
      >
        <span className="close"></span>
      </span>
    </div>
  );
}

export default FilterCard;
