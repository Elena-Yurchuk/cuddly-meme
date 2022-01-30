export const invertColor = (hex) => {
  const color = hex.toLowerCase();

  const colors = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
  let inverseColor = '#';

  color.replace('#','').split('').forEach(sign => {
    const index = colors.indexOf(sign);

    inverseColor += colors.reverse()[index];
  });

  return inverseColor;
};