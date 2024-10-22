import Footer from './footer/footer';
import { Auto_nav_bar } from '../components/navigation/Auto_nav_bar';

export default function Layout({ children }) {
   return (
      <>
         <Auto_nav_bar />
         <main>{children}</main>
         <Footer />
      </>
   );
}
