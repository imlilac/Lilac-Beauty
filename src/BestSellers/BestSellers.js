import ProductCard from "../ProductCard/ProductCard";
import "./BestSellers.css";

function BestSellers() {
   return (
      <div id="bestSeller-container">
         <div className="bestSeller-title">
            <h3>پـرفـروش تـریـن هـا</h3>
            <a href="#">همه محصولات</a>
         </div>
         <div className="product-container">
            <ProductCard productSrc="img/products/1.svg" productName="محصول شماره 1" productPrice="540 تومان" />
            <ProductCard productSrc="img/products/2.svg" productName="محصول شماره 2" productPrice="230 تومان" />
            <ProductCard productSrc="img/products/3.svg" productName="محصول شماره 3" productPrice="369 تومان" />
            <ProductCard productSrc="img/products/4.svg" productName="محصول شماره 4" productPrice="278 تومان" />
            <ProductCard productSrc="img/products/5.svg" productName="محصول شماره 5" productPrice="699 تومان" />
         </div>
      </div>
   );
}

export default BestSellers;
