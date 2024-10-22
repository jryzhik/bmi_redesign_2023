import { useEffect, useRef, useState } from 'react';

export const usePlaceholder = (value = '') => {
   const ref = useRef(null);
   const [placeholder, setPlaceholder] = useState(value);
   const [tempPlaceholder, setTempPlaceholder] = useState('');

   function placeholderChange() {
      setTempPlaceholder(placeholder);
      setPlaceholder(tempPlaceholder);
   }

   useEffect(() => {
      const { current } = ref;

      current?.addEventListener('focus', placeholderChange);
      current?.addEventListener('blur', placeholderChange);

      return () => {
         current?.removeEventListener('focus', placeholderChange);
         current?.removeEventListener('blur', placeholderChange);
      };
   });

   return [ref, placeholder];
};
