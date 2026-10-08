// Fonts for the 2026 banquet theme. Only imported by banquet components,
// so they load on /banquet and nowhere else.
import {Dela_Gothic_One, Special_Gothic, Special_Gothic_Expanded_One} from 'next/font/google';

export const delaGothic = Dela_Gothic_One({
  subsets: ['latin'],
  weight: ['400'],
});

export const specialGothic = Special_Gothic({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const specialGothicExpanded = Special_Gothic_Expanded_One({
  subsets: ['latin'],
  weight: ['400'],
});
