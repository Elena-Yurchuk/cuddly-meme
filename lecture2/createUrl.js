export const createUrl = (string, object) => {
  const elements = string.match(/{.+?}/g);

  elements.forEach(element => {
    const wihtoutParentheses = element.slice(1, element.length - 1);
    const value = object[wihtoutParentheses];
      
    // eslint-disable-next-line no-param-reassign
    string = string.replace(element, value);
  });

  return string;
};