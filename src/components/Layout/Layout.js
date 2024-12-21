import React from 'react';
import Footer from './Footer/footer';
import Navbar from './Navbar/Navbar';

export default function Layout(props) {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: '80vh' }}>{props.children}</main>
      <Footer />
    </>
  );
}
