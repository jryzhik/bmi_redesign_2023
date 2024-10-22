import { useSyncExternalStore } from 'react';

export const useMediaQuery = (media) => {
   const getSnapshot = () => window.matchMedia(media).matches;
   const getServerSnapshot = () => false;
   const subscribe = (mediaChange) => {
      const matchMedia = window.matchMedia(media);
      matchMedia.addEventListener('change', mediaChange);

      return () => {
         matchMedia.removeEventListener('change', mediaChange);
      };
   };

   return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
};
