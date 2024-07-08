import { Link } from "react-router-dom"
const Subnav = () => {
  return (
    <div className="mt-5">
        <ul className="flex md:justify-evenly px-5 justify-between md:mt-8 flex-wrap font-medium text-xs md:text-base">
            <li>All Catigories</li>
            <li><Link to="/perfumes">Perfumes</Link></li>
            <li>Body Spray</li>
            <li>Deodorants</li>
        </ul>
    </div>
  )
}

export default Subnav