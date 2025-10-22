import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ServiceHero from "../../components/ServiceHero";
import styled from "styled-components";

import { PageContent } from "./ServicePage.styles.js";

const FranchiseAgreement = () => {
  return (
    <>
      <Header />
      <ServiceHero
        title="Franchise Agreement"
        subtitle="Drafting and reviewing franchise agreements to protect your business interests."
        breadcrumb="Franchise Agreement"
      />
      <PageContent>
        <h2>Content Coming Soon</h2>
        <p>
          This page is under construction. Please check back later for more
          information on our Franchise Agreement services.
        </p>
      </PageContent>
      <Footer />
    </>
  );
};

export default FranchiseAgreement;
