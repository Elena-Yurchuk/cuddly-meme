export const frankenSplice = (data1, data2, idx) => {
  if (!Array.isArray(data1) || !Array.isArray(data2) || typeof idx !== 'number') {
    return 'Error: wrong type of argument';
  }
  
  const splicedDatas = data2.slice();

  splicedDatas.splice(idx, 0, ...data1);

  return splicedDatas;
};

