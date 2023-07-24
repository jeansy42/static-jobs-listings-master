import CardInfo from "../components/CardInfo";
import CardCategories from "../components/CardCategories";

function Main({ jobs }) {
  return (
    <div className="main">
      {jobs.map((job) => (
        <div
          key={window.crypto.randomUUID()}
          className={`main_child ${job.featured ? "featured" : ""}`}
        >
          <CardInfo key={window.crypto.randomUUID()} job={job} />
          <CardCategories key={window.crypto.randomUUID()} job={job} />
        </div>
      ))}
    </div>
  );
}

export default Main;
