import banner from "../Assets/banner.jpg"
import "./Home.css"
import Dish from "../Assets/lemondessert.jpg"
import greekSalad from "../Assets/greek salad.jpg"
import Dish1 from "../Assets/dis1.jpg"

export default function Home() {
    return (
        <>
            <img src={banner} alt="The Little Lemon Restaurant" className="bannerCls" />
            <div className="row">
                <div className="col-xl-4 text-center p-4">
                <img src={greekSalad} alt="The Little Lemon Restaurant" className="dishes" />
                <p>Chicago</p>
                </div>
                <div className="col-xl-4 text-center p-4">
                <img src={Dish} alt="The Little Lemon Restaurant" className="dishes" />
                <p>Chicago</p>
                </div>
                <div className="col-xl-4 text-center p-4">
                <img src={Dish1} alt="The Little Lemon Restaurant" className="dishes" />
                <p>Chicago</p>
                </div>
            </div>
        </>
    )
}