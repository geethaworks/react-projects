import { Link } from "react-router-dom/cjs/react-router-dom.min";
import './productListItem.css'
import routes from "../../routes";
import { buildUrl } from "../utils/url";

const ProductListItem=({image_url,name,offer_price,slug})=>{
return (
    <Link className='product-list-item' to={buildUrl(routes.products.show,{slug})}>
    <img style={{width:'4rem',height:'4rem'}} alt={name} src={image_url}/>
    <p>{name}</p>
    <p>${offer_price}</p>
 </Link>
) 


}
export default ProductListItem