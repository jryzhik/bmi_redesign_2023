import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Shop() {
  const router = useRouter();

  useEffect(() => {
    window.location.href = 'https://shop.belarusmission.org';
  }, []);

  return null;
}