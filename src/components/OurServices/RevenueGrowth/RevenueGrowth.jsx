import { innovation, revenue } from "../../../assets"
import PopUpRevenueGrowth from "./PopUpRevenueGrowth"
const RevenueGrowth = () => {
    return (
        <div className="div lg:w-[34%] relative">
            <img className=' peer ease-in transition-all duration-700   m-auto lg object-fit ' src={revenue} alt="" />
            <PopUpRevenueGrowth />
        </div>
    )
}

export default RevenueGrowth