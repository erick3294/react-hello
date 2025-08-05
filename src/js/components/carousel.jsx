import react from 'react';

const Carousel = ()=> {
    return(
        <div>
            <div id="carouselExample" classname="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img 
        src="https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Manchester_United_FC_crest.svg/1200px-Manchester_United_FC_crest.svg.png"
         className="d-block w-100" 
         alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://m.media-amazon.com/images/I/71qdnf+mS+L._UF894,1000_QL80_.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div classname="carousel-item">
      <img src="..." className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        </div>
    )
}
export default Carousel