export const getHero = (docs, blockName) => {
   const { hero } = docs.find((doc) => doc.hero.find((event) => event.blockName === blockName));
   return hero.find((event) => event.blockName === blockName);
};
