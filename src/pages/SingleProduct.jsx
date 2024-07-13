import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getSingleProduct } from '../../API/api'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../features/cart/cartSlice'
import { useToast } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { IoArrowBackSharp } from 'react-icons/io5'




const SingleProduct = () => {
    const { id } = useParams()
    const baseUrl = 'https://api.timbu.cloud/images/'
    const [product, setProduct] = useState({})
    const fetchSingleProduct = async () => {
        try {
            const singleProduct = await getSingleProduct(id)
            setProduct(singleProduct)
            

        } catch (error) {
            console.error('Error fetching single product:', error)
        }
    }
    const dispatch = useDispatch()
    const toast = useToast()

    const addItem = (product) => {
        dispatch(addToCart(product))
        toast({
            title: "Item added to cart",
            status: "success",
            duration: 4000,
            isClosable: true,
        })
    }

    useEffect(() => {
        fetchSingleProduct()
    }, [])



   
    

  return (
    <section>
        <header className="px-6 py-4 md:px-16 md:py-6 ">
            <nav className="text-3xl">
                <Link to="/">
                    <IoArrowBackSharp />
                </Link>
            </nav>
        </header>
        <div className='flex justify-center'>
            <div className='mt-10 text-center'>
                <div className=' md:w-96 md:h-80 bg-lightCustombrown flex justify-center items-center '>
                   {
                        product.photos && product.photos.length > 0 && (
                             <img src={`${baseUrl}${product.photos[0].url}`} alt={product.name} className='w-80 '/>
                        )
                   }
                </div>
                <div className='font-semibold text-2xl mt-6'>
                    <h2>{product.name}</h2>
                    <p>Price: &#8358;{product.current_price}</p>
                </div>
                <button onClick={() => addItem(product)} className='px-3 py-2 bg-customBrown text-white rounded-xl mt-7'>Add to cart</button>
            </div>
        </div>
    </section>
  )
}

export default SingleProduct