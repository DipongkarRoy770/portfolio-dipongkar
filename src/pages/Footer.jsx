import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="footer p-10 bg-neutral bg-opacity-25 text-neutral-content mt-12">
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Web Designer</a>
          <a className="link link-hover">Responsive Design</a>
          <a className="link link-hover">Marketing</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
         <Link to='/about'> <a className="link link-hover">About</a></Link>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </div>
      <hr className="border-1 border-cyan-50" />
      <div className="footer footer-center p-4 bg-neutral bg-opacity-25 text-neutral-content">
        <div>
          <p>Copyright © 2023 - All right reserved by dipongkar</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
