import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getSingleProduct } from '../../API/api'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../features/cart/cartSlice'
import { useToast } from '@chakra-ui/react'




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
        <div>
           {
                product.photos && product.photos.length > 0 && (
                     <img src={`${baseUrl}${product.photos[0].url}`} alt={product.name} />
                )
           }
        </div>
        <div>
            <h2>{product.name}</h2>
            <p>Price: &#8358;{product.current_price}</p>
        </div>
        <button onClick={() => addItem(product)}>Add to cart</button>
    </section>
  )
}

export default SingleProduct