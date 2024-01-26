import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="homepage max-w-md text-primary-800">
        <p>
          Dive into this extraordinary app crafted with passion by and for
          enthusiasts!
          <br />
          <span></span>Names and images seamlessly flow from the heart of{" "}
          <a className="underline" href="https://ggc.eshiksabd.com/">
            GGC
          </a>
          &apos;s Education Management System (EMS).
        </p>
      <Link to="/science" className="custom-button rounded-lg">Reveal</Link>
      </div>
    </>
  );
}
