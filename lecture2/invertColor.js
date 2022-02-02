export const invertColor = (hex) => {
  if (typeof hex !== 'string') {
    return 'Error: wrong type of argument';
  }

  const color = hex.toLowerCase();
  
  const colors = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
  const newColor = [...colors].reverse();
  let inverseColor = '#';

  color.replace('#','').split('').forEach(sign => {
    const index = colors.indexOf(sign);

    inverseColor += newColor[index];
  });

  return inverseColor;
};