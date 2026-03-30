import Navbar from './Navbar';
import Footer from './Footer';
import Breadcrumbs from './Breadcrumbs';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-darkBg text-slate-100 font-sans">
      <Navbar />
      <main className="grow pt-16">
        <Breadcrumbs />
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
