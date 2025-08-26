import logo from '../../assets/logo-kasa.svg';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <img src={logo} alt="" className="footer__logo" aria-hidden />
        <p className="footer__copy">© 2020 Kasa. All <span>rights reserved</span></p>
      </div>
    </footer>
  );
}