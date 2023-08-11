//user slice
export { userReducer, authenticateUser, logout } from "./userSlice";

//product slice
export {
  productReducer,
  setSelecdetProduct,
  saveProduct,
  deleteroduct,
  fetchHomePageProducts,
  fetchCategoryProducts,
} from "./productSlice";

//cart slice
export { cartReducer, clearCart, addToCart, removeFromCart } from "./cartSlice";
