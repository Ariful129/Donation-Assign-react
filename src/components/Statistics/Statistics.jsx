


import {
    PieChart,
    Pie,
    Tooltip,
  } from "recharts";
import { getStoredJobApplication } from "../Utiliets/localstorage";

 

const Statistics = () => {
    const length = getStoredJobApplication().length;
    
   
    const total=12;
    const get=length;
    const a=(get*100)/total;
    const b=((total-get)*100)/total;
    const m=Number(a.toFixed(2));
    const n=Number(b.toFixed(2));
    console.log(m,n)

    const data = [
        { name: "Total Donation"},
        { name: "Your Donation"},
      ];
      data[0].users = n;
      data[1].users = m;


    return (
         <div className="text-center mt-10 ">
      <h1 className="text-2xl font-semibold text-green-500">Statistics</h1>
      <div className="text-center">
        <PieChart width={500} height={600} className="flex items-center max-w-7xl mx-auto">
          <Pie
            dataKey="users"
            isAnimationActive={false}
            data={data}
            cx={200}
            cy={200}
            outerRadius={80}
            fill="#8884d8"
            label
          />
          <Tooltip />
        </PieChart>
      </div>
    </div>
    );
};

export default Statistics;