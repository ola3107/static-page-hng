import { IoArrowBackSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
const Checkout = () => {
  return (
    <section>
        <header className="flex justify-between md:px-16 px-6 py-5">
            <nav>
                <Link to="/Cart">
                    <IoArrowBackSharp className="md:text-3xl text-2xl" />
                </Link>
            </nav>
            <h1 className="md:text-2xl font-semibold">
                CheckOut
            </h1>
            <div className="w-6">

            </div>
        </header>
        <div className="md:px-16 px-6">
            <form action="" className="md:py-11 py-8">
                <div className="">
                    <label htmlFor="" className="mb-6 md:text-lg text-sm block font-semibold">Delivery Address</label>
                    <input type="text" placeholder="2 Tompolo St, Ajah. Lagos" className="md:text-base text-sm border border-customBrown  px-3 border-2"/>
                </div>
                <div className="mt-5 ">
                    <label htmlFor="" className="mb-6 md:text-lg text-sm block font-semibold">Name</label>
                    <input type="text" placeholder="James Sandra" className="md:text-base text-sm border border-customBrown  px-3 border-2"/>
                </div>
                <div className="mt-5 ">
                    <label htmlFor="" className="mb-6 md:text-lg text-sm block font-semibold">Phone No</label>
                    <input type="text" placeholder="09054234467 " className="md:text-base text-sm border border-customBrown  px-3 border-2"/>
                </div>
            </form>
        </div>
        <div className=" mt-2 md:mt-8">
            <div className="md:px-16 px-6 py-1.5 md:py-4 bg-lightCustombrown mx-6 md:mx-0">
                <h1 className="md:text-lg text-sm font-semibold">Payment Summary</h1>
            </div>
            <div className="px-6 md:px-16 mt-6 md:mt-11">
                <div className="max-w-3xl flex justify-between md:mt-3">
                    <p>SubTotal</p>
                    <p>&#8358;218000</p>
                </div>
                <div className="max-w-3xl flex justify-between md:mt-3">
                    <p>Transaction Fee</p>
                    <p>&#8358;5750</p>
                </div>
                <div className="max-w-3xl flex justify-between md:mt-3">
                    <p>Delivery</p>
                    <p>&#8358;3550</p>
                </div>
                <div className="max-w-3xl flex justify-between md:mt-3">
                    <p>Total</p>
                    <p>&#8358;227300</p>
                </div>
            </div>
        </div>

        <div className="text-center my-20">
            <button className="md:py-3 py-2 px-6 bg-customBrown rounded-xl text-white text-sm md:text-lg">Make Payment</button>
        </div>
    </section>
  )
}

export default Checkout