const Navbar = ({ setCategory, setSearch }) => {
  const handleSearch = (e) => {
    e.preventDefault();
    const searchQuery = e.target.elements.searchInput.value; // Get the search input value
    setSearch(searchQuery); // Call setSearch to update the search state
    setCategory(""); // Clear category when performing a search
  };

  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <span className="badge text-bg-success">
            <h3>News Article</h3>
          </span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item btn btn-outline-success me-2 fw-bold">
              <div
                className="nav-link"
                onClick={() => setCategory("technology")}
              >
                Technology
              </div>
            </li>
            <li className="nav-item btn btn-outline-success me-2 fw-bold">
              <div className="nav-link" onClick={() => setCategory("business")}>
                Business
              </div>
            </li>
            <li className="nav-item btn btn-outline-success me-2 fw-bold">
              <div className="nav-link" onClick={() => setCategory("health")}>
                Health
              </div>
            </li>
            <li className="nav-item btn btn-outline-success me-2 fw-bold">
              <div className="nav-link" onClick={() => setCategory("science")}>
                Science
              </div>
            </li>
            <li className="nav-item btn btn-outline-success me-2 fw-bold">
              <div className="nav-link" onClick={() => setCategory("sports")}>
                Sports
              </div>
            </li>
            <li className="nav-item btn btn-outline-success me-2 fw-bold">
              <div
                className="nav-link"
                onClick={() => setCategory("entertainment")}
              >
                Entertainment
              </div>
            </li>
          </ul>
          <form className="d-flex" role="search" onSubmit={handleSearch}>
            <input
              className="form-control me-2"
              type="search"
              name="searchInput"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
