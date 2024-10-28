export const getAlias = (string) => encodeURIComponent(string.split(' ').join('_')).toLocaleLowerCase().replace(/[^\w]/gi, '');
