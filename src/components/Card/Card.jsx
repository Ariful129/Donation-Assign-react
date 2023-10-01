
//<div className={`card card-compact w-96 ${bgColorClass} shadow-xl`}>

import { Link } from "react-router-dom";

const Card = ({ card }) => {
    const {id,img,title,category,card_bg,category_bg,text_color} = card;
    
    return (
        <div>

            <Link to={`/card/${id}`}>
              
            <div className={`card card-compact bg-[${`${card_bg}`}] shadow-xl`}>
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className={`font-bold bg-[${`${category_bg}`}] text-[${`${text_color}`}] w-14 p-1 rounded-xl`}>{category}</h2>
                    <p className={`text-[${`${text_color}`}] text-xl font-semibold`}>{title}</p>
                </div>
            </div>
              
            </Link>
            

        </div>
    );
};

export default Card;