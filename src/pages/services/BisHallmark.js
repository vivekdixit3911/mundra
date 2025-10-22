import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ServiceHero from '../../components/ServiceHero';
import { PageContent } from './ServicePage.styles.js';

const BisHallmark = () => {
  return (
    <>
      <Header />
      <ServiceHero
        title="BIS / Hallmark"
        subtitle="Services for obtaining BIS certification and Hallmark registration."
        breadcrumb="BIS / Hallmark"
      />
      <PageContent>
        <h2>Content Coming Soon</h2>
        <p>This page is under construction. Please check back later for more information on our BIS / Hallmark services.</p>
      </PageContent>
      <Footer />
    </>
  );
};

export default BisHallmark;
