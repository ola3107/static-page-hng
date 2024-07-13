import { IoArrowBackSharp } from "react-icons/io5";
import { GrLinkNext } from "react-icons/gr";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
// import {carts} from '../costant/index'
import { useSelector } from "react-redux";
import { removeFromCart } from "../../features/cart/cartSlice";
import { useDispatch } from "react-redux";
import { useToast } from "@chakra-ui/react";


const Cart = () => {
    const cartLength = useSelector((state) => state.cartLength);
    const carts = useSelector((state) => state.cart);
    const subTotal = useSelector((state) => state.subTotal);
    const baseUrl = 'https://api.timbu.cloud/images/';
    const dispatch = useDispatch();
    const toast = useToast();

    const removeItem = (item) => {
        dispatch(removeFromCart(item));
        toast({
            title: "Item removed from cart",
            status: "success",
            duration: 2000,
            isClosable: true,
        })
    }



  return (
    <section className="pb-16">
        <header className="px-6 py-4 md:px-16 md:py-6 flex justify-between">
            <nav className="text-3xl">
                <Link to="/">
                    <IoArrowBackSharp />
                </Link>
            </nav>
            <div className="flex font-semibold">
                <h3>
                    Shopping Bag
                </h3>
                <span className="text-xs px-1 mb-8 rounded border bg-customBrown text-white">{cartLength}</span>
            </div>
        </header>
        
        {
            carts.map((cart, index) => {
                const firstPhoto = cart.photos.length > 0 ? cart.photos[0] : null;
                const fullImageUrl = firstPhoto ? `${baseUrl}${firstPhoto.url}` : '';
                let currentPrice = 'Price not available';
                if (cart.current_price && cart.current_price.length > 0 && cart.current_price[0].NGN) {
                    currentPrice = cart.current_price[0].NGN[0];
                }
                return(
                    <div className="flex justify-between md:px-16 px-6 md:mt-8 mt-6" key={index}>
                        <div className="flex gap-8 md:gap-60">
                            <div className="bg-lightCustombrown md:w-135 md:h-150 md:py-4 px-2 py-3 md:px-5 rounded-xl flex justify-center items-center">
                                <img src={fullImageUrl} alt="" />
                            </div>
                            <div className="mt-4">
                                <p className="text-sm md:base">{cart.name}</p>
                                <p className="text-sm md:base font-semibold">&#8358;{currentPrice}</p>
                                <div className='flex justify-around items-center border border-customBrown md:w-16 rounded mr-2 w-10 text-xs md:text-sm mt-4'>
                                    <button>-</button>
                                    <p>1</p>
                                    <button>+</button>
                                </div>
                            </div>
                        </div>
                        <div className="text-3xl">
                            <IoMdClose onClick={() => removeItem(cart)}/>
                        </div>
                    </div>
                )
            })
        }

        <div className="flex md:gap-72 mt-14 justify-between md:justify-start px-6 md:px-16">
            <p>Sub Total</p>
            <p className="font-semibold">&#8358; <span>{subTotal}</span></p>
        </div>
        <div className="flex md:gap-60 mt-8 justify-between md:justify-start px-6 md:px-16">
            <button className="bg-lightCustombrown py-2.5 px-5 text-sm md:text-base font-semibold">View Cart</button>
            <Link to="/Checkout"><button className="bg-customBrown text-white py-2.5 px-5 text-sm md:text-base font-semibold flex items-center gap-1">CheckOut<GrLinkNext className="text-lg"/></button></Link>
        </div>
        
    </section>
  )  
}

export default Cart