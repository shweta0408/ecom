'use client';

import { HeroBanner } from '../../component/Hero/hero';
import Footer from '../../component/Footer/footer';
import { Header } from '../../component/Header/Header';
import Featured from '../../component/Featured/featured';

const navigation = [
  { name: 'Home', href: '/Home' },
  { name: 'Product', href: '/productScreen' },
  { name: 'Cart', href: '/cart' },
  { name: 'Contact us', href: 'contact', scrollTo: 'contact' },
  { name: 'login', href: '/login' },
];

export default function LandingPage() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      id="Home"
    >
      <Header navigation={navigation} />
      <Featured />
      <HeroBanner />
      <Footer />
    </div>
  );
}
