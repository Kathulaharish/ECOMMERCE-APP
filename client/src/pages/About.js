import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          1. Our ecommerce application provides a seamless and user-friendly shopping experience for customers.<br/>
          2. Browse a wide range of products with detailed descriptions, images, and reviews.<br/>
          3. Securely complete transactions using encrypted payment gateways for a safe purchase process.<br/>
          4. Enjoy personalized recommendations and promotions based on your browsing and purchase history.<br/>
          5. Track your orders in real-time with shipment updates and delivery notifications.<br/>
          6. Benefit from a responsive customer support system for inquiries, returns, and issue resolution.<br/>
          7. Utilize multiple payment options for convenience, including credit cards, digital wallets, and more.<br/>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;