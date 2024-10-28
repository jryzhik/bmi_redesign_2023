import { useSyncExternalStore } from 'react';

export function useLocalStorageSync(key, initValue = '') {
   const getSnapshot = () => {
      const item = localStorage.getItem(key);
      return item !== null ? item : initValue;
   };

   const getServerSnapshot = () => initValue;

   const subscribe = (cb) => {
      const handleStorageChange = (e) => {
         if (e.key === key) {
            cb();
         }
      };

      window.addEventListener('storage', handleStorageChange);

      return () => {
         window.removeEventListener('storage', handleStorageChange);
      };
   };

   const localStorageValue = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
   const setLocalStorageValue = (newValue) => {
      if (newValue) {
         const value = typeof newValue === 'string' ? newValue : JSON.stringify(newValue);
         localStorage.setItem(key, value);
      } else {
         localStorage.removeItem(key);
      }
   };

   return [localStorageValue, setLocalStorageValue];
}
