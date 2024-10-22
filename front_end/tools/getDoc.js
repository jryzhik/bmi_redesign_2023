export const getDoc = (docs = [], pathname = '') => {
   return docs.find((doc) => doc.alias === pathname);
};
