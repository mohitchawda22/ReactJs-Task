import { OPEN_OFFCANVAS, CLOSE_OFFCANVAS } from "../actions/offcanvasActions";

const initialState = {
  open: false,
  product: null,
};

export default function offcanvasReducer(state = initialState, action) {
  switch (action.type) {
    case OPEN_OFFCANVAS:
      return { open: true, product: action.payload };
    case CLOSE_OFFCANVAS:
      return { open: false, product: null };
    default:
      return state;
  }
}