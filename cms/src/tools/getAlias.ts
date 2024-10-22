export const getAlias = (string: string) => string.toLocaleLowerCase().split(' ').join('_').replace(/[^\w]/gi, '');
