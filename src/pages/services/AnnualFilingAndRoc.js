import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ServiceHero from '../../components/ServiceHero';
import { PageContent } from './ServicePage.styles.js';

const AnnualFilingAndRoc = () => {
  return (
    <>
      <Header />
      <ServiceHero
        title="Annual Filing & ROC"
        subtitle="Ensuring your company's compliance with annual filing and ROC requirements."
        breadcrumb="Annual Filing & ROC"
      />
      <PageContent>
        <h2>Content Coming Soon</h2>
        <p>This page is under construction. Please check back later for more information on our Annual Filing & ROC services.</p>
      </PageContent>
      <Footer />
    </>
  );
};

export default AnnualFilingAndRoc;
