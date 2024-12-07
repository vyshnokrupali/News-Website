const NewsCard = ({ title, description, src, url }) => {
  return (
    <div
      className="card bg-light text-dark mb-3 d-inline-block my-3 mx-3 px-2 py-2"
      style={{ maxWidth: "345px" }}
    >
      <img
        src={src || "https://via.placeholder.com/150"}
        style={{ height: "200px", width: "327px" }}
        className="card-img-top"
        alt="news"
      />
      <div className="card-body">
        <h5 className="card-title">
          {title?.slice(0, 50) || "No Title Available"}
        </h5>
        <p className="card-text">
          {description
            ? description.slice(0, 90)
            : "News is unavailable or expired in this article"}
        </p>
        <a href={url} className="btn btn-success">
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsCard;
