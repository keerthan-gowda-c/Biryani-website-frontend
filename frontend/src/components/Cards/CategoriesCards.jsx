

const CategoriesCards = ({ content }) => {

    return (
        <>
            {
                <div className="card" style="width: 18rem;">
                    <img src={content.img_src} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <p className="card-text">{content.title}</p>
                    </div>
                </div>
            }

        </>
    )

}
export default CategoriesCards;