export default function ImageComponent({ src, heading, paragraph }) {
  return (
    <>
      <div className="item web branding col-sm-6 col-md-6 col-lg-4 isotope-mb-2">
        <a
          href="portfolio-single-3.html"
          className="portfolio-item ajax-load-page isotope-item gsap-reveal-img"
          data-id="3"
        >
          <div className="overlay">
            <span className="wrap-icon icon-link2"></span>
            <div className="portfolio-item-content">
              <h3>{heading}</h3>
              <p>{paragraph}</p>
            </div>
          </div>
          <img src={src} className="lazyload img-fluid h-100" alt="" />
        </a>
      </div>
    </>
  );
}
