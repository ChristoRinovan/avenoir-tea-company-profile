function Footer() {
  return (
    <footer>
      <h1>
        <footer className="footer sm:footer-horizontal footer-center bg-black font-navbar text-white p-4">
          <aside>
            <p>
              Copyright © {new Date().getFullYear()} - All right reserved by{" "}
              <span className="font-brand">Avenoir Co.</span>
            </p>
          </aside>
        </footer>
      </h1>
    </footer>
  );
}

export default Footer;
