export const frankenSplice = (data1, data2, idx) => {
  const splicedDatas = data2.slice();

  splicedDatas.splice(idx, 0, ...data1);

  return splicedDatas;
};

