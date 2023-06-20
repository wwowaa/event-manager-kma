import AuthHeader from "../auth_header";
import Footer from "../footer";

const AuthLayout = ({ children }) => {
  return (
    <>
      <AuthHeader />
      {children}
      <Footer />
    </>
  );
};

export default AuthLayout;
