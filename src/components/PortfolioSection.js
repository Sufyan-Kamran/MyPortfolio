import ImageComponent from "./ImageComponent";

export default function PortfolioSection(props) {
  return (
    <>
      <div
        className="untree_co-section untree_co-section-4 pb-0"
        id={props.id}
      >
        <div className="container">
          <div className="relative">
            <div className="loader-portfolio-wrap">
              <div className="loader-portfolio"></div>
            </div>{" "}
          </div>
          <div id="portfolio-single-holder"></div>

          <div className="portfolio-wrapper">
            <div id="posts" className="row">
              <ImageComponent
                src="images/luxelane1.jpg"
                heading="LuxeLane Shop"
                paragraph="A full eCommerce website I built for a fashion brand, allowing them to sell products online and scale their revenue."
              />
              <ImageComponent
                src="images/apple.png"
                heading="Apple Watch Store (Concept)"
                paragraph="A custom landing page concept I designed and developed for showcasing the Apple Watch."
              />
              <ImageComponent
                src="images/fashion.jpg"
                heading="Fashion Ecommerece Store"
                paragraph="A complete fashion store I created from scratch, built to help the business reach more customers and increase online sales"
              />
              <ImageComponent
                src="images/business.jpg"
                heading="Company Portofolio Single Page Website"
                paragraph="A clean, single-page portfolio site I developed for a company to build trust and improve their online presence."
              />

              <ImageComponent
                src="images/sound.png"
                heading="Online Music Streaming Website"
                paragraph="A music streaming website I built that lets users listen online, create playlists, and stream tracks."
              />

              <ImageComponent
                src="images/Blogging.PNG"
                heading="Blogging Website"
                paragraph="A simple, clean blogging website I designed and developed. Backend built with a REST API and JWT authentication."
              />

              <ImageComponent
                src="images/interior.jpg"
                heading="Interior Decor Store"
                paragraph="An eCommerce website I built for an interior décor brand to showcase and sell their products."
              />
              <ImageComponent
                src="images/tesla.PNG"
                heading="Car Showroom Website"
                paragraph="A full website I built for a car showroom to present their vehicles and services."
              />

              <ImageComponent
                src="images/spacex.PNG"
                heading="SpaceX Inspired Web Concept"
                paragraph="A fun UI concept I designed inspired by the SpaceX website style."
              />
              <ImageComponent
                src="images/Game2.PNG"
                heading="Gaming Store Website"
                paragraph="A complete eCommerce interface I developed for a gaming products store."
              />
              <ImageComponent
                src="images/Portfolio.PNG"
                heading="Personal Portfolio Website"
                paragraph="A static portfolio website I created to highlight my work and skills."
              />

              <ImageComponent
                src="images/game.jpg"
                heading="Gaming Store"
                paragraph="An eCommerce concept site I built for selling gaming accessories and products."
              />

              <ImageComponent
                src="images/apple1.PNG"
                heading="Online Watch Store (Concept)"
                paragraph="A modern concept landing page I designed and built for an online watch store."
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
