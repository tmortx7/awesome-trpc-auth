import React from 'react';
import Footer from './footer';
import Navbar from './navbar';

type porps = {
  children: JSX.Element;
};
const Layout: React.FC<porps> = props => {
  const styles = { targetDiv: { height: 'calc(100vh - 240px)' } };

  return (
    <div className="relative mx-auto ">
      <Navbar />
      <main className="pt-16 mb-24 min-h-[calc(100vh_-_96px)] ">
        {props.children}
      </main>

      <div className="relative right-0 left-0 bottom-0">
        <Footer />
      </div>
    </div>
  );
};
export default Layout;
