import contact from "../Assets/contact.jpg"


export default function  Contact()
{
    return(
        <>
 <div className="row p-4">
            <h1 className="red text-center">Little Lemon Restaurant</h1>
            <div className="col-xl-4 justify-center p-4">
                </div>
                <div className="col-xl-4 justify-center p-4">
                <img src={contact} alt="The Little Lemon Restaurant" className="dishes" /><br />
                </div>
            </div></>
    )
}