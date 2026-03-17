import './Carousel.css'

const Carousel = ({ images }) => {
    return (
        <>
            <div id="carouselExampleCaptions" className="carousel slide custom_carousel " data-bs-ride='carousel'>
                {/* <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div> */}
                <div className="carousel-inner">
                    {
                        images.map((img_object, index) => (
                            <div key={index} className={index === 0 ? 'carousel-item active' : 'carousel-item'}>
                                <img src={img_object.img_src} className="d-block  carousel_image"  data-bs-interval='100' alt="" />
                                <div className='carousel-caption d-none d-md-block ' >
                                    <h5 className='text-center '>{img_object.img_title}</h5>
                                    <p className='text-center'>{img_object.img_description}</p>
                                </div>

                            </div>
                        )
                        )
                    }
                </div>


                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}

export default Carousel;