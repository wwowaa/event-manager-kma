import Footer from "../footer";
import MainHeader from "../main_header";

const MainLayout = ({ children }) => {
  return (
    <>
      <MainHeader username={"username"} />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
