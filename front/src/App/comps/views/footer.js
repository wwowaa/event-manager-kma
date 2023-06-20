// import s from "../styles/footer.module.css";
import s from "../styles/layout.module.css";

const Footer = () => {
  return (
    <footer className={`${s["section-3"]} ${s["wf-section"]}`}>
      <div className={`${s["container-2"]} ${s["w-container"]}`}>
        <h1 className={`${s["heading-2"]}`}>©VabeTech 2023</h1>
      </div>
    </footer>
  );
};

export default Footer;
