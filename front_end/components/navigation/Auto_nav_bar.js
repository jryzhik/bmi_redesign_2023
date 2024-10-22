import { useMediaQuery } from '../../hooks/useMediaQuery';
import Default_nav_bar from './Default_nav_bar';
import Mobile_nav_bar from './Mobile_nav_bar';
import { menu } from '../../tools/constants';

export const Auto_nav_bar = () => {
   const isDesktop = useMediaQuery('(min-width: 900px)');

   return isDesktop ? <Default_nav_bar menu={menu} /> : <Mobile_nav_bar menu={menu} />;
};
