import "./Product.css";
import Price from "./Price";


function Product({ title, idx }) {
let oldPrice = ["13,000", "10,000", "1,300", "700"];
 let newPrice = ["15,000", "9,000", "2,000", "900"];
 let description=["8,000 DPI","intutive surface", "designed for ipad ","wireless"];
 
 return (
    <div className="Product" >
        <h4>{title}</h4>
        <p>{description[idx]}</p>
        <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]}/>
        </div>
    );
        
    }
       
export default Product; 
