const HeroSection = () =>{
  return(
    <main className="Hero container">
      <div className="Hero-Content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>YOUR FEET DESERVE THE BEST AND WE ARE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE ARE HERE TO HELP YOU WITH OUR SHOES.</p>
        <div className="Hero-btn">
          <button>Shop Now</button>
          <button className="secondary-btn">Category</button>
        </div>
        <div className="shopping">
          <p>Also Available On</p>
          <div className="Brand-icons">
            <img src="./images/amazon.png" alt="amamzon-logo" />
            <img src="./images/flipkart.png" alt="flipkart-logo" />
          </div>
        </div>
      </div>
      <div className="Hero-image"></div>
      <img src="./images/shoe_image.png" alt="Hero_Shoe" />
    </main>
  );
};

export default HeroSection;