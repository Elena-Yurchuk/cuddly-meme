export const transformStateWithClones = (state, transforms) => {
  const cloneState = {...state};
  
  const arrayWithStateClones = [];
  
  transforms.forEach((item) => {
    if (item.operation === 'addProperties') {
      const objProperties = item.properties;
  
      for (const key in objProperties) {
        cloneState[key] = objProperties[key];
      }
    } else if (item.operation === 'clear') {
      Object.keys(cloneState).forEach(key => delete cloneState[key]);
    }  else if (item.operation === 'removeProperties') {
      const arrayProperties = item.properties;

      for (const key in cloneState) {
        arrayProperties.forEach((property) => {
          if (property === key) {
            delete cloneState[key];
          }
        });
      }
    }
  
    arrayWithStateClones.push({...cloneState});
  });

  return arrayWithStateClones;
};
