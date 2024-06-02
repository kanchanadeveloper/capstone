import Dish from "../Assets/lemondessert.jpg"
import greekSalad from "../Assets/greek salad.jpg"
import Dish1 from "../Assets/dis1.jpg"
import './Menu.css'

export default function  Menu()
{
    return(
        <>
          <div className="row p-4">
            <h1 className="red text-center">Our Menus</h1>
                <div className="col-xl-4 text-center p-4">
                <img src={greekSalad} alt="The Little Lemon Restaurant" className="dishes" /><br />
                <p>Chicago</p>
                </div>
                <div className="col-xl-4 text-center p-4">
                <img src={Dish} alt="The Little Lemon Restaurant" className="dishes" /><br />
                <p>Chicago</p>
                </div>
                <div className="col-xl-4 text-center p-4">
                <img src={Dish1} alt="The Little Lemon Restaurant" className="dishes" /><br />
                <p>Chicago</p>
                </div>
            </div></>
    )
    
}