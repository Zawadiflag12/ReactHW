//build my portfolio page
// create a grid of images that link to my projects
function Portfolio() {
  return (
    <div className="Portfolio">
      <h1 className="title"> Portfolio</h1>
      <div className="grid-container">
        <div className="grid-item">
          <a href=" https://zawadi-brown.github.io/Weather-Dashboard/">
            <img
              src="https://via.placeholder.com/150"
              alt="Weather Dashboard"
            ></img>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
