export const popupCloseHandler = setAction => {
  const scrollY = document.body.style.top;
  document.body.style.position = ``;
  document.body.style.top = ``;
  document.body.style.minWidth = `320px`;
  window.scrollTo(0, parseInt(scrollY || `0`, 10) * -1);
  setAction(false);
};

export const popupOpenHandler = setAction => {
  const scrollY = window.pageYOffset;
  const screenWidth = document.body.clientWidth;
  document.body.style.position = `fixed`;
  document.body.style.minWidth = `${screenWidth}px`;
  document.body.style.top = `-${scrollY}px`;
  setAction(true);
};

export const getNumberFromString = (string, key) => {
  const cutIndex = string.search(key);
  return parseInt(string.slice(0, cutIndex - 1).replaceAll(/\s/g, ``), 10);
};

export const onMenuLinkClick = link => {
  const scrollTarget = document.getElementById(link);
  if (scrollTarget) {
    const topOffset = document.querySelector(`header`).offsetHeight;
    const elementPosition = scrollTarget.getBoundingClientRect().top;
    const offsetPosition = elementPosition - topOffset;

    window.scrollBy({
      top: offsetPosition,
      behavior: `smooth`,
    });
  }
};

export const completePopupOpen = setAction => {
  const goTo = document.querySelector(`#loan`);
  const gotoBlockValue =
    goTo.getBoundingClientRect().top +
    window.pageYOffset -
    document.querySelector(`header`).offsetHeight;
  window.scrollTo({
    top: gotoBlockValue,
  });
  popupOpenHandler(setAction);
};

export const getLoanTermNumber = value => {
  if (value.search(`лет`) > 0) {
    return getNumberFromString(value, `лет`);
  } else if (value.search(`год`) > 0) {
    return getNumberFromString(value, `год`);
  } else if (value.search(`года`) > 0) {
    return getNumberFromString(value, `года`);
  }
  return parseInt(value, 10);
};

export const getLoanTermDescription = value => {
  if (Math.floor(value / 10) !== 1) {
    if (value === 1 || value % 10 === 1) {
      return ` год`;
    } else if ((value > 1 && value <= 4) || (value % 10 > 1 && value % 10 <= 4)) {
      return ` года`;
    }
  }
  return ` лет`;
};

export const getCaret = el => {
  if (el.selectionStart) {
    return el.selectionStart;
  } else if (document.selection) {
    el.focus();
    const r = document.selection.createRange();
    if (r == null) {
      return 0;
    }
    let re = el.createTextRange(),
      rc = re.duplicate();
    re.moveToBookmark(r.getBookmark());
    rc.setEndPoint(`EndToStart`, re);

    return rc.text.length;
  }
  return 0;
};

export const setSelectionRange = (input, selectionStart, selectionEnd) => {
  if (input.setSelectionRange) {
    input.focus();
    input.setSelectionRange(selectionStart, selectionEnd);
  } else if (input.createTextRange) {
    let range = input.createTextRange();
    range.collapse(true);
    range.moveEnd(`character`, selectionEnd);
    range.moveStart(`character`, selectionStart);
    range.select();
  }
};

export const setCaretToPos = (input, pos) => {
  setSelectionRange(input, pos, pos);
};
