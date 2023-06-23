import Footer from "../footer";
import MainHeader from "../main_header";

const MainLayout = ({ children, username }) => {
  return (
    <>
      <MainHeader username={username} />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
