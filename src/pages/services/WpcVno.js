import React, { useEffect, useRef } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ServiceHero from '../../components/ServiceHero';
import { PageContent } from './ServicePage.styles.js';

const WpcVno = () => {
  const sidebarRef = useRef(null);
  const quickLinksRef = useRef(null);
  const backToTopRef = useRef(null);

  useEffect(() => {
    // Load dotlottie web component
    if (!document.querySelector('script[data-dotlottie]')) {
      const s = document.createElement('script');
      s.type = 'module';
      s.src = 'https://unpkg.com/@lottiefiles/dotlottie-wc@0.8.5/dist/dotlottie-wc.js';
      s.setAttribute('data-dotlottie', '1');
      document.head.appendChild(s);
    }

    // Load sidebar form HTML and its script
    (async () => {
      try {
        const resp = await fetch('../includes/sidebar-form.html');
        if (resp.ok) {
          const html = await resp.text();
          const placeholder = document.getElementById('sidebar-form-placeholder');
          if (placeholder) placeholder.innerHTML = html;
          const s = document.createElement('script');
          s.src = '../includes/sidebar-form.js';
          s.async = true;
          document.body.appendChild(s);
          // Trigger resize in case sidebar script depends on it
          window.dispatchEvent(new Event('resize'));
        }
      } catch (e) {
        // silent catch
        // console.warn('Sidebar form load failed', e);
      }
    })();

    // Quick links visibility, smooth scrolling, back-to-top, and sidebar sticky behavior
    const quickLinksBar = document.getElementById('quickLinksBar');
    const heroPlaceholder = document.getElementById('hero-placeholder');
    const bt = document.getElementById('backToTop');

    function updateQuickLinksVisibility() {
      if (!heroPlaceholder || !quickLinksBar) return;
      const heroBottom = heroPlaceholder.getBoundingClientRect().bottom;
      if (heroBottom < 100) quickLinksBar.classList.add('visible');
      else quickLinksBar.classList.remove('visible');
    }

    function smoothScrollInit() {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          const href = this.getAttribute('href');
          if (!href || href === '#') return;
          const target = document.querySelector(href);
          if (!target) return;
          e.preventDefault();
          const offset = 100;
          const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
          window.scrollTo({ top: targetPosition, behavior: 'smooth' });
        });
      });
    }

    function backToTopInit() {
      if (!bt) return;
      const onScroll = () => {
        if (window.scrollY > 300) {
          bt.style.opacity = '1';
          bt.style.visibility = 'visible';
        } else {
          bt.style.opacity = '0';
          bt.style.visibility = 'hidden';
        }
      };
      window.addEventListener('scroll', onScroll);
      bt.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
      onScroll();
      return () => {
        window.removeEventListener('scroll', onScroll);
      };
    }

    // Sidebar sticky behavior (basic port)
    function updateSidebar() {
      const sidebar = document.querySelector('.sidebar-scroll-wrapper');
      const sidebarParent = document.querySelector('.wpc-sidebar');
      const mainContent = document.querySelector('.wpc-main');
      const footer = document.querySelector('#footer-placeholder');
      if (!sidebar || !sidebarParent || !mainContent) return;

      if (window.innerWidth <= 900) {
        sidebar.classList.remove('fixed', 'absolute');
        sidebar.style.top = '';
        sidebar.style.width = '';
        return;
      }

      const heroBottom = heroPlaceholder ? heroPlaceholder.getBoundingClientRect().bottom : 0;
      const footerTop = footer ? footer.getBoundingClientRect().top : window.innerHeight;
      const sidebarHeight = sidebar.offsetHeight;
      const sidebarWidth = sidebarParent.offsetWidth;

      const stopPoint = footerTop - sidebarHeight - 140;

      if (heroBottom < 100 && stopPoint > 100) {
        sidebar.classList.add('fixed');
        sidebar.classList.remove('absolute');
        sidebar.style.width = sidebarWidth + 'px';
      } else if (stopPoint <= 100) {
        sidebar.classList.remove('fixed');
        sidebar.classList.add('absolute');
        sidebar.style.width = sidebarWidth + 'px';
      } else {
        sidebar.classList.remove('fixed', 'absolute');
        sidebar.style.width = '';
      }
    }

    // Initialize
    updateQuickLinksVisibility();
    smoothScrollInit();
    backToTopInit();
    updateSidebar();

    window.addEventListener('scroll', updateQuickLinksVisibility);
    window.addEventListener('resize', updateSidebar);
    window.addEventListener('scroll', updateSidebar);

    // cleanup
    return () => {
      window.removeEventListener('scroll', updateQuickLinksVisibility);
      window.removeEventListener('resize', updateSidebar);
      window.removeEventListener('scroll', updateSidebar);
    };
  }, []);

  return (
    <>
      <Header />
      <div id="hero-placeholder">
        <ServiceHero
          title="WPC / VNO License"
          subtitle="Assistance with WPC and VNO licensing for wireless and network operations."
          breadcrumb="WPC / VNO"
        />
      </div>

      <PageContent>
        <main id="main-content">
          <nav className="quick-links" id="quickLinksBar" aria-label="Quick jump navigation" ref={quickLinksRef}>
            <div className="ql-container">
              <a href="#wpc-overview">WPC Overview</a>
              <a href="#vno-overview">VNO Overview</a>
              <a href="#wpc-grounds">WPC Grounds</a>
              <a href="#vno-process">VNO Process</a>
              <a href="#documents">Documents</a>
              <a href="#benefits">Benefits</a>
              <a href="#faq">FAQ</a>
            </div>
          </nav>

          <section id="wpc-content" className="wpc-section" aria-labelledby="wpc-heading">
            <div className="wpc-container">
              <article className="wpc-main">
                <div className="inline-lottie">
                  <dotlottie-wc src="../assets/lottiefiles/Business.lottie" autoplay loop></dotlottie-wc>
                </div>

                <h1 id="wpc-heading">WPC & VNO Services</h1>
                <p className="wpc-byline">Constitutional Remedies & Telecom Licensing Excellence</p>

                <p>Navigate the complexities of <strong>Writ Petition Civil (WPC)</strong> and <strong>Virtual Network Operator (VNO)</strong> services with expert legal guidance. Whether you're seeking constitutional remedies through High Court or Supreme Court petitions, or establishing a telecom business with VNO licensing, Mundra Legal provides comprehensive support for both domains.</p>

                <div className="callout">
                  <p><i className="fas fa-info-circle" style={{ color: 'var(--primary-gold)', marginRight: 8 }}></i><strong>Dual Expertise:</strong> We handle both constitutional law matters (WPC) and telecom licensing (VNO) with equal proficiency, ensuring seamless service delivery across legal and regulatory landscapes.</p>
                </div>

                <div className="stats-grid">
                  <div className="stat-card">
                    <div className="stat-number">200+</div>
                    <div className="stat-label">WPC Cases Filed</div>
                  </div>
                  <div className="stat-card">
                    <div className="stat-number">50+</div>
                    <div className="stat-label">VNO Licenses</div>
                  </div>
                  <div className="stat-card">
                    <div className="stat-number">24/7</div>
                    <div className="stat-label">Support Available</div>
                  </div>
                  <div className="stat-card">
                    <div className="stat-number">92%</div>
                    <div className="stat-label">Success Rate</div>
                  </div>
                </div>

                <h2 id="wpc-overview"><i className="fas fa-gavel" style={{ color: 'var(--primary-gold)', marginRight: 12 }}></i>Writ Petition Civil (WPC) Overview</h2>

                <p>A <strong>Writ Petition Civil (WPC)</strong> is a powerful constitutional remedy available under <strong>Articles 32 and 226 of the Indian Constitution</strong>. It allows citizens to approach the Supreme Court or High Courts when their fundamental rights are violated or when government authorities act beyond their legal powers.</p>

                <div className="section-lottie">
                  <dotlottie-wc src="../assets/lottiefiles/Business team.lottie" autoplay loop></dotlottie-wc>
                </div>

                <div className="callout">
                  <p><i className="fas fa-phone" style={{ color: 'var(--primary-gold)', marginRight: 8 }}></i><strong>Need Expert Guidance?</strong> Contact Mundra Legal for professional assistance with WPC filing or VNO license registration. Our dual expertise in constitutional law and telecom licensing ensures comprehensive support.</p>
                </div>
              </article>

              <aside className="wpc-sidebar">
                <div className="sidebar-scroll-wrapper" id="sidebarForm" ref={sidebarRef}>
                  <div id="sidebar-form-placeholder"></div>
                </div>
              </aside>
            </div>
          </section>
        </main>

        <div id="footer-placeholder" />
        <button className="back-to-top" id="backToTop" aria-label="Back to top" ref={backToTopRef}><i className="fas fa-chevron-up"></i></button>
      </PageContent>

      <Footer />
    </>
  );
};

export default WpcVno;
