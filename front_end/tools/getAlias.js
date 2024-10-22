export const getAlias = (string) => string.toLocaleLowerCase().split(' ').join('_').replace(/[^\w]/gi, '');
