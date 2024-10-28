import { useEffect } from 'react';

export const useClickOutside = (ref, callback) => {
   const handleClick = (e) => {
      e.stopPropagation();
      const target = e.target;

      if (ref.current && !ref.current.contains(target)) {
         callback();
      }
   };

   useEffect(() => {
      document.addEventListener('click', handleClick);

      return () => {
         document.removeEventListener('click', handleClick);
      };
   });
};
