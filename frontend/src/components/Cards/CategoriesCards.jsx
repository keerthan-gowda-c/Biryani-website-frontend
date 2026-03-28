import './CategoriesCards.css'

const CategoriesCards = ({ content }) => {

    return (
        <>
            
                <div className="card ol-12 col-sm-6 col-md-4 col-lg-3 mb-5 categ" id='category-card'>
                    <img src={content.img_src} className="card-img-top category-img" alt="..." />
                    {/* <div className="card-body"> */}
                        <p className="card-text text-center">{content.title}</p>
                    {/* </div> */}
                </div>
            

        </>
    )

}
export default CategoriesCards;