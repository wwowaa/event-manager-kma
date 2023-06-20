import Footer from "../footer";
import MainHeader from "../main_header";

const MainLayout = ({ children }) => {
  return (
    <>
      <MainHeader />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
