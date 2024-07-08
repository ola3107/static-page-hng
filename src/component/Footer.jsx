import icon from '../assets/Frame 76.png'
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import mobileIcon from '../assets/F.png'
const Footer = () => {
  return (
    <section className='mt-16 px-5 md:px-16 py-3 flex justify-between bg-white md:bg-lightCustombrown md:rounded-t-xxl'>
      <div className='flex justify-between w-full md:w-24 md:inline-block'>
        <img src={icon} alt="" className='md:block hidden' />
        <img src={mobileIcon} alt="" className='block md:hidden'/>
        <div className=' flex gap-4 items-center md:inline-block'>
          <p className='font-semibold'>Follow us</p>
          <div className='flex gap-2 text-2xl mt-2'>
            <FaFacebook />
            <FaXTwitter />
            <FaInstagram />
          </div>
        </div>
      </div>
      <div className='w-252 hidden md:block'>
        <h3 className='font-semibold'>Our Vision</h3>
        <p className='text-xs'>Fragrance Fusion is dedicated to providing an exceptional perfume shopping experience, offering a curated selection of premium fragrances from around the world. We aim to inspire our customers to discover new scents and explore their personal style</p>
      </div>
      <div className='hidden md:block'>
        <h3 className='font-semibold'>Information</h3>
        <ul className='text-xs leading-6'>
          <li>About Us</li>
          <li>About Us</li>
        </ul>
      </div>
      <div className='hidden md:block'>
        <h3 className='font-semibold'>Our Services</h3>
        <ul className='text-xs leading-6'>
          <li>Shipping & delivery</li>
          <li>Fragrance Recommendation</li>
        </ul>
      </div>
      <div className='hidden md:block'>
        <h3 className='font-semibold'>My Account</h3>
        <ul className='text-xs leading-6'>
          <li>My Profile</li>
          <li>My Cart</li>
          <li>Checkout</li>
          <li>Track Order</li>
        </ul>
      </div>
    </section>
  )
}

export default Footer