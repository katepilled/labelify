import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import '../styles/footer.css'

function Footer() {
  return (
    <footer class="text-center text-lg-start text-muted">
      <section class="d-flex justify-content-center justify-content-lg-between p-3 border-top">
        <div class="d-none d-lg-block">
          <span>created by kate yoon ★</span>
        </div>

        <div>
          {" "}
          <a
            href="https://github.com/katepilled/labelify"
            class="me-4 text-reset"
          >
            <i class="fab fa-github" style={{ fontSize: "1.5em" }}></i>
          </a>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
