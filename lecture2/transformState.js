export const transformState = (state, transforms) => {
  transforms.forEach((item) => {
    if (item.operation === 'addProperties') {
      const objProperties = item.properties;
  
      for (const key in objProperties) {
        const addPropertyKey = key;
  
        state[addPropertyKey] = objProperties[key];
      }
    } else if (item.operation === 'clear') {
      Object.keys(state).forEach(key => delete state[key]);
    } else if (item.operation === 'removeProperties') {
      const arrayProperties = item.properties;

      for (const key in state) {
        const removePropertyKey = key;
  
        arrayProperties.forEach((property) => {
          if (property === removePropertyKey) {
            delete state[removePropertyKey];
          }
        });
      }
    }
  });
  
  return state;
};