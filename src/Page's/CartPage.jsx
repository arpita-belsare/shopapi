import useCartStore from "../Zustand/store"
import '../CSS/Cart.css'
const CartPage = () => {

    const cartItems = useCartStore((state) => state.items);
    const clearCart = useCartStore((state)=> state.clearCart);

const handleClearCart = ()=>{
    clearCart();
}
  return (
  <div className="m"> 
    <h1>CartItems - ({cartItems.length})</h1><br />
    <button onClick={handleClearCart} >Clear Cart</button>
    <div className="Cartwrap">
    {
        cartItems?.map((item, index) => (
            <div className="one-cart">
            <div key={index} >
                  <img src={item.image} alt={item.title} />
             <div className="product-details">
             <h3> {item.title} </h3>
             <span className="strik">$400</span>
                <span>  ${item.price}</span>
                <p> {item.description}</p>
                <button>Buy Now</button>
             </div>
              </div>
            </div>
        ))
    }
    </div>
  </div>
  )
}

export default CartPage;