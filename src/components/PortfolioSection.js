import ImageComponent from "./ImageComponent";

export default function PortfolioSection() {
  return (
    <>
      <div
        className="untree_co-section untree_co-section-4 pb-0"
        id="portfolio-section"
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
                paragraph="Ecommerce Website"
              />
              <ImageComponent
                src="images/apple.png"
                heading="Music Website"
                paragraph="Web Design"
              />
              <ImageComponent
                src="images/fashion.jpg"
                heading="Clothing Website"
                paragraph="Ecommerce Website"
              />
              <ImageComponent
                src="images/business.jpg"
                heading="Business Portfolio"
                paragraph="Web Design"
              />

              <ImageComponent
                src="images/sound.png"
                heading="Apple Watch"
                paragraph="Concept Web Design"
              />

              <ImageComponent
                src="images/Blogging.png"
                heading="Blogging Website"
                paragraph="Concept Web Design"
              />

              <ImageComponent
                src="images/interior.jpg"
                heading="Interior Decor Web"
                paragraph="Ecommerce Website"
              />
              <ImageComponent
                src="images/tesla.PNG"
                heading="Car Showroom Website"
                paragraph="Concept Web Design"
              />

              <ImageComponent
                src="images/spacex.png"
                heading="LuxeLane"
                paragraph="sorr"
              />
              <ImageComponent
                src="images/GAME2.png"
                heading="LuxeLane"
                paragraph="sorr"
              />
              <ImageComponent
                src="images/Portfolio.PNG"
                heading="Portfolio Design"
                paragraph="Static Website"
              />

              <ImageComponent
                src="images/game.jpg"
                heading="Gaming Store"
                paragraph="Ecommerce Concept Web"
              />

              <ImageComponent
                src="images/apple1.png"
                heading="Apple Watch"
                paragraph="Concept Web Design"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
