"use client";
import Section from "./Section";
import "./Landing.css";
import Header from "./Header";

export default function Landing() {
  return (
    <div className="container">
      <Header />
      <Section
        title="Experience Tesla"
        description="Schedule a Demo Drive"
        leftBtnText="Demo Drive"
        backgroungImg={"bg-[url(./assets/images/model-3.jpg)]"}
      />
      <Section
        title="Model 3"
        description="Starting at $32,740 After Federal Tax Credit"
        leftBtnText="Explor Inventory"
        rightBtnText="Custom Order "
        backgroungImg={"bg-[url(./assets/images/model-3.jpg)]"}
      />
      <Section
        title="Model Y"
        description="Starting at $40,240 After Federal Tax Credit"
        leftBtnText="Explore Inventory"
        rightBtnText="Custom Order "
        backgroungImg={"bg-[url(./assets/images/model-y.jpg)]"}
      />
      <Section
        title="Model S"
        description="Explore Inventory"
        leftBtnText="Demo Drive"
        rightBtnText="Drive Demo "
        backgroungImg={"bg-[url(./assets/images/model-s.jpg)]"}
      />
      <Section
        title="Model X"
        description="Explore Inventory"
        leftBtnText="Demo Drive"
        rightBtnText="Drive Demo "
        backgroungImg={"bg-[url(./assets/images/model-x.jpg)]"}
      />
      <Section
        title="Solar Panels"
        description="Schedule a Virtual Consultation"
        leftBtnText="Order Now"
        rightBtnText="Learn More"
        backgroungImg={"bg-[url(./assets/images/solar-panel.jpg)]"}
      />
      <Section
        title="Solar Roof"
        description="Produce Clean Energy From Your Roof"
        leftBtnText="Order Now"
        rightBtnText="Learn More"
        backgroungImg={"bg-[url(./assets/images/solar-roof.jpg)]"}
      />
      <Section
        title="Powerwall"
        description=""
        leftBtnText="Order Now"
        rightBtnText="Learn More"
        backgroungImg={"bg-[url(./assets/images/powerwall.jpg)]"}
      />
      <Section
        title="Accessories"
        description=""
        leftBtnText="Shop Now"
        backgroungImg={"bg-[url(./assets/images/accessories.jpg)]"}
      />
    </div>
  );
}
