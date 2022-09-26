export const getItem = (key) => {
  if (localStorage.getItem(key)) {
    return localStorage.getItem(key);
  } else {
    return undefined;
  }
};

export const setItem = (key, value) => {
  return localStorage.setItem(key, value);
};

export const removeItem = (key) => {
  return localStorage.removeItem(key);
};
