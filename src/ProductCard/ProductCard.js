import "./ProductCard.css";

function ProductCard({ productSrc, productName, productPrice }) {
   return (
      <div id="product">
         <div className="product-img">
            <img src={`${productSrc}`} alt={productName} />
         </div>
         <h2>{productName}</h2>
         <p> {productPrice}</p>
      </div>
   );
}

export default ProductCard;
