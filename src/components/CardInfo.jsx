import "../assets/styles/CardInfo.sass";
function CardInfo({ job }) {
  return (
    <div className="card_info">
      <img src={job.logo} alt={job.position} />
      <div className="info_container">
        <div className="info_header">
          <span className="company">{job.company}</span>
          {job.new ? <span className="new">NEW!</span> : null}
          {job.featured ? <span className="featured">FEATURED</span> : null}
        </div>
        <span className="ocupation">{job.position}</span>
        <div className="info_feet">
          <span>{job.postedAt}</span>
          <span className="point">.</span>
          <span>{job.contract}</span>
          <span className="point">.</span>
          <span>{job.location}</span>
        </div>
      </div>
    </div>
  );
}

export default CardInfo;
