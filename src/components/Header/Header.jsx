import { NavLink } from 'react-router-dom';
import profile from '../../assets/image/Logo.png'


const Header = () => {
    return (
        <div className="flex flex-col md:flex-row  justify-between items-center p-2">
              <div>
                   <img src={profile} alt=""  />
              </div>
              <div>
                 <ul className="flex gap-6 font-semibold">
                   <NavLink to='/'>
                     <li className='hover:bg-red-600 rounded-xl'>Home</li>
                   </NavLink>
                   <NavLink to='/donation'>
                     <li className='hover:bg-red-600 rounded-xl'>Donation</li>
                   </NavLink>
                   <NavLink to='/statistic'>
                     <li className='hover:bg-red-600 rounded-xl'>Statistic</li>
                   </NavLink>
                 </ul>
              </div>
        </div>
    );
};

export default Header;