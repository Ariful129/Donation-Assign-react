import { useLoaderData, useParams } from "react-router-dom";
import { BsCurrencyDollar } from 'react-icons/bs';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../Utiliets/localstorage";

const CardDetails = () => {
     const cards=useLoaderData();

     const {id}=useParams();
     const idInt=parseInt(id);

    const card=cards.find(card =>card.id===idInt)
    //console.log(card.card_bg)

    //Tostify start
    const handleDonation=()=>{
        saveJobApplication(idInt) //Trans id to local storage(interg form)
        toast('Donated successfully Complete');
    }
    //Tostify end


    return (
        <div>

               <div className="mt-10 mb-10">
                  <div className="mb-10">
                  <img className="w-full h-[700px]" src={card.img} alt=""  />
                   <button onClick={handleDonation}
                   className="border-2 p-2 px-6 bg-emerald-800 text-white rounded-xl flex items-center text-xl"> Donate 
                    <BsCurrencyDollar className="text-xl ml-2"></BsCurrencyDollar>
                    {card.price}
                    </button>
                  </div>
                  <h1 className="text-2xl font-bold mb-4">{card.title}</h1>
                  <p>{card.description}</p>
               </div>
               
               <ToastContainer />
        </div>
    );
};

export default CardDetails;