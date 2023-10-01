import {  useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../Utiliets/localstorage";
import { BsCurrencyDollar } from 'react-icons/bs';

const Donation = () => {
   

    const cards = useLoaderData();

    const [donate, setDonate] = useState([]);

    //paging data(slicing) strt
    const [datalength,setDatalength]=useState(4);
    //paging data(slicing) end

    //const storedonets = getStoredJobApplication();
    //local storage data load
    useEffect(() => {
        const storedonets = getStoredJobApplication();
        //console.log(storedonets.length)
        if (cards.length > 0) {
            const donatsAll = [];
            for (const id of storedonets) {
                const card = cards.find(card => card.id === id)
                if (card) {
                    donatsAll.push(card)
                }
            }
            setDonate(donatsAll);
            
        }
    }, [cards])

   
   
    


    return (
       
        <div>
            
        <div className="grid grid-cols-2 gap-6 mt-12 mb-10">
        {
            donate.slice(0,datalength).map(done => <div  key={done.id}>

                <div className={`flex  bg-[${`${done.card_bg}`}] shadow-xl `}>
                    <figure><img src={done.img} alt="Shoes" className="h-full"/></figure>
                    <div className="card-body ">
                        <h2 className={`font-bold bg-[${`${done.category_bg}`}] text-[${`${done.text_color}`}] w-14 p-1 rounded-xl`}>{done.category}</h2>
                        <p className={`text-[${`${done.text_color}`}] text-xl font-semibold`}>{done.title}</p>
                        <h1 className="flex text-xl items-center"><BsCurrencyDollar className="text-xl ml-2"></BsCurrencyDollar>{done.price}</h1>
                        <button className="border-2  p-2 bg-blue-800 text-white rounded-xl">View Details</button>
                    </div>
                </div>

            </div>)
        }
        </div>

        <div className={datalength>=donate.length?'hidden':'text-center mt-4'}>
          <button 
           onClick={()=>setDatalength(donate.length)}
           className="btn btn-primary ">Show All</button>
      </div>


    </div>
    );
};

export default Donation;