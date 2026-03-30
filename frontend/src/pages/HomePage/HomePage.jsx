import './HomePage.css'
import Carousel from "../../components/Carousel/Carousel";
import carousel_data from "../../data/carousel_data/carousel_data";
import CategoriesCards from '../../components/Cards/CategoriesCards';
import content_data from '../../data/content_data/content_data';


export default function HomePage() {
    

    return (
        <>

            <div className="home_carousel">
                <Carousel images={carousel_data} />
            </div>
            {/* <div id='home-login'>
                Login First
                <div>
                    <input type="text" placeholder='Enter Name' />
                </div>
                <button onClick={handleclick} id='submit-button'>submit</button>
            </div> */}
            <div className='category-section' id='category'>
                <div className='category-heading'>
                    <h1 className='text-center pt-sans-regular playwrite-ie'>
                        Categories
                    </h1>
                </div>
                <div className='categories row row-cols-1 row-cols-md-4 g-4 w-100'>
                    {
                        content_data.map((contents, index) => (
                            <CategoriesCards content={contents} />
                        ))
                    }

                </div>
            </div>

        </>
    )
}
