import { useState, useEffect } from 'react'
// import {products} from '../costant/index'
import { getProducts } from '../../API/api'
import { useDispatch } from 'react-redux';
import { addToCart } from '../../features/cart/cartSlice';
import { useToast } from '@chakra-ui/react';
import { Link } from 'react-router-dom';



const Perfumes = () => {
    const [products, setProduct] = useState([]);
    const baseUrl = 'https://api.timbu.cloud/images/';
    const dispatch = useDispatch();
    const toast = useToast();

    
    const addItem = (product) => {
        dispatch(addToCart(product));
        toast({
            title: "Item added to cart",
            status: "success",
            duration: 2000,
            isClosable: true,
        })
    };

    const fetchProducts = async () => {
        try {
            const perfumes = await getProducts();
            setProduct(perfumes);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };
    
    useEffect(() => {
          fetchProducts();
    }, [])

    
  return (
    <section className='md:px-12 px-4 flex flex-wrap md:gap-x-12 justify-between gap-x-2  '>
        
        {
            products.map((product, index) => {
                const firstPhoto = product.photos.length > 0 ? product.photos[0] : null;
                const fullImageUrl = firstPhoto ? `${baseUrl}${firstPhoto.url}` : '';
                let currentPrice = 'Price not available';
                if (product.current_price && product.current_price.length > 0 && product.current_price[0].NGN) {
                    currentPrice = product.current_price[0].NGN[0];
                }

                return(
                    <div className='md:w-135 w-20 mt-8' key={index}>
                        <Link to={`../page/SingleProduct/${product.id}`}>
                            <div className='bg-lightCustombrown md:w-135 md:h-44 md:py-4 md:px-5 h-24 rounded-xl flex justify-center items-center'>
                                <img src={fullImageUrl} alt="" className='md:w-90 md:h-115 w-16 h-20' />
                            </div>
                            <div className='md:text-sm text-vs font-semibold md:mt-5 mt-2 '>
                                <p className='truncate ... md:w-135 w-20'>{product.name}</p>
                                <p className='font-semibold'>&#8358; {currentPrice}</p>
                            </div>
                        </Link>

                        <div className='flex md:mt-6 mt-2 md:text-sm text-vs'>
                            <div className='flex justify-around items-center border border-customBrown md:w-16 rounded mr-2 w-8'>
                                <button>-</button>
                                <p>1</p>
                                <button>+</button>
                            </div>
                            <button onClick={() => addItem(product)} className='font-xs bg-customBrown text-small text-white md:px-1  md:text-small rounded-3xl text-vvs px-1 py-0.5 hover:bg-hover '>Add to Cart</button>
                        </div>
                    </div>
                )
            })
        }

        

    </section>
  )
}

export default Perfumes