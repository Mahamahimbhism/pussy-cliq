import { useContext } from "react";
import "./products.css"
import AppContext from "../../store/app-context";
import Loading from "../loading/loading";

function Products() {
    const {handleOnAddToCart, productsData, loading} = useContext(AppContext);
    if(loading){
        return <Loading />;
    }
    return <div className="products-all">
        {Object.keys(productsData).map(k => <div key={k} className="product">
            <img src = {productsData[k].image} alt = {productsData[k].name}/>
            <div className="productname">{productsData[k].name}</div>
            <button onClick={() => handleOnAddToCart(k, productsData[k].name, productsData[k].image)}>Add to cart</button>
        </div>)}
        
    </div>;
}

export default Products;