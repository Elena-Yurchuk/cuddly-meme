export const invertObject = (object) => {
  const values = Object.values(object);
  
  if ( new Set(values).size !== values.length) {
    return null;
  }
  
  const invertedObject = {};

  for (const key in object) {
    invertedObject[object[key]] = key;
  }

  return invertedObject;
};