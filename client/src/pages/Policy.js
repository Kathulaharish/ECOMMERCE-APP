import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p>1. We prioritize the security of your personal information on our ecommerce platform.</p>
          <p>2. Your data is collected solely for transactional purposes and will not be shared with third parties.</p>
          <p>3. We employ industry-standard encryption to safeguard your sensitive information during online transactions.</p>
          <p>4. You have the right to control and request the deletion of your data as outlined in our privacy policy.</p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;