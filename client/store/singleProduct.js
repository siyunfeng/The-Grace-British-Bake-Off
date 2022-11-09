import axios from "axios";

const SET_PRODUCT = "SET_PRODUCT";
const DELETE_PRODUCT = "DELETE_PRODUCT";
const DECREASE_PRODUCT_QUANTITY = "DECREASE_PRODUCT_QUANTITY";

const _setProduct = (product) => ({ type: SET_PRODUCT, product });
const _decreaseProductQuantity = (product) => ({
  type: DECREASE_PRODUCT_QUANTITY,
  product,
});

export const fetchProduct = (productId) => {
  return async (dispatch) => {
    try {
      const { data: product } = await axios.get(`/api/products/${productId}`);
      dispatch(_setProduct(product));
    } catch (error) {
      console.log("store/singleProduct fetchProduct ERROR: ", error);
      throw error;
    }
  };
};

const initialState = [];

export default function singleProductReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PRODUCT:
      return action.product;
    case DECREASE_PRODUCT_QUANTITY:
      if (action.product.quantity > 0) {
        let updatedQuantity = action.product.quantity - 1;
        return [...state, { ...action.product, quantity: updatedQuantity }];
      }
    default:
      return state;
  }
}
