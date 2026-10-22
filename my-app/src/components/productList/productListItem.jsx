import { Link } from "react-router-dom/cjs/react-router-dom.min";
import './productListItem.css'
import routes from "../../routes";
import { buildUrl } from "../utils/url";

const ProductListItem=({images,title,price,id,thumbnail})=>{
return (
    <Link className='product-list-item' to={buildUrl(routes.products.show,{id})}>
    <img style={{width:'10rem',height:'10rem'}} alt={title} src={thumbnail}/>
    <p>{title}</p>
    <p>${price}</p>
 </Link>
) 


}
export default ProductListItem