export const popupCloseHandler = setAction => {
  const scrollY = document.body.style.top;
  document.body.style.position = ``;
  document.body.style.top = ``;
  document.body.style.minWidth = `320px`;
  window.scrollTo(0, parseInt(scrollY || `0`, 10) * -1);
  setAction(false);
};
