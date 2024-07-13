import logo from '../assets/Frame 76.png'
import user from '../assets/Vector (Stroke).png'
import cart from '../assets/Vector.png'
import { IoMdMenu } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import mobileLogo from '../assets/F.png'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
    const cartLength = useSelector((state) => state.cartLength);
  return (
    <header className='md:px-14 px-5 md:py-1 py-3 md:bg-lightCustombrown'>
        <div className='flex justify-between items-center md:mt-3.5'>
            <div className='flex gap-2 items-center'>
                <IoMdMenu className='text-2xl block md:hidden'/>
                <div className='md:w-409 w-28 md:h-12 h-5 border border-customBrown flex rounded '>
                    <input type="search" className='flex-1 w-20 h-full md:h-12 bg-inherit text-xs md:text-base outline-none md:pl-2 pl-1 '/>
                    <button className='md:text-2xl'><IoSearchOutline /></button>
                </div>
            </div>
            <div>
                <img src={logo} alt="" className='hidden md:block'/>
                <img src={mobileLogo} alt="" className='block md:hidden'/>
            </div>
            <div className='md:w-24 flex justify-between w-14 '>
                <button><img src={user} alt="" className='md:w-6 md-h-6 w-4' /></button>
                <div>
                    <button className='mt-1'><Link to="/cart"><img src={cart} alt="" className='md:w-6 md-h-6 w-4' /></Link></button>
                    <span className="text-xs px-1 absolute rounded border bg-customBrown text-white">{cartLength}</span>
                </div>
            </div>
        </div>
        <div className='hidden md:block'>
            <ul className='flex justify-between text-xl my-4 px-4 font-medium'>
                <li>About Us</li>
                <li>Brand</li>
                <li>Sale & Offer</li>
                <li>Wholeasale</li>
                <li>FAQ</li>
            </ul>
        </div>
    </header>
  )
}

export default Header