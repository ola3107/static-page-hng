import {products} from '../costant/index'
import { Link } from 'react-router-dom'



const Perfumes = () => {

  return (
    <section className='md:px-12 px-4 flex flex-wrap md:gap-x-12 justify-evenly gap-x-2  '>
        
        {
            products.map((product, index) => {
                return(
                    <div className='md:w-135 w-20 mt-8' key={index}>
                        <div className='bg-lightCustombrown md:w-135 md:h-44 md:py-4 md:px-5 h-24 rounded-xl flex justify-center items-center'>
                            <img src={product.image} alt="" className='md:w-90 md:h-115 w-16 h-20' />
                        </div>
                        <div className='md:text-sm text-vs font-semibold md:mt-5 mt-2 '>
                            <p className='truncate ... md:w-135 w-20'>{product.name}</p>
                            <p className='font-semibold'>&#8358; {product.price}</p>
                        </div>
                        <div className='flex md:mt-6 mt-2 md:text-sm text-vs'>
                            <div className='flex justify-around items-center border border-customBrown md:w-16 rounded mr-2 w-8'>
                                <button>-</button>
                                <p>1</p>
                                <button>+</button>
                            </div>
                            <Link to="/Cart"><button className='font-xs bg-customBrown text-small text-white md:px-1  md:text-small rounded-3xl text-vvs px-1 py-0.5 hover:bg-hover '>Add to Cart</button></Link>
                        </div>
                    </div>
                )
            })
        }
    </section>
  )
}

export default Perfumes