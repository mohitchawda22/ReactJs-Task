export const OPEN_OFFCANVAS = "OPEN_OFFCANVAS";
export const CLOSE_OFFCANVAS = "CLOSE_OFFCANVAS";

export const openOffcanvas = (product) => ({
  type: OPEN_OFFCANVAS,
  payload: product,
});

export const closeOffcanvas = () => ({
  type: CLOSE_OFFCANVAS,
});