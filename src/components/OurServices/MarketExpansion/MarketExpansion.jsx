import { marketExpansion, marketing } from "../../../assets"
import PopUpMarketExpansion from "./PopMarketExpansion"
const MarketExpansion = () => {
  return (
    <div className="div lg:w-[34%] relative">
                <img className=' peer ease-in transition-all duration-700   m-auto lg object-fit ' src={marketExpansion} alt="" />
                <PopUpMarketExpansion/>
        </div>
  )
}

export default MarketExpansion