import styled from "styled-components";

export const ImportExportCodeContainer = styled.div`
  --primary-color: #1c2951;
  --secondary-color: #d4af37;
  --accent-color: #d4af37;
  --text-dark: #374151;
  --text-light: #6b7280;
  --bg-light: #f8fafc;
  --white: #ffffff;
  --gradient-primary: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
  --gradient-secondary: linear-gradient(135deg, #d4af37 0%, #b59323 100%);
  --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 8px 25px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 15px 35px rgba(0, 0, 0, 0.12);
  --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  --border-radius: 16px;

  .iec-overview {
    padding: 80px 0;
    background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
    position: relative;
  }

  .service-details {
    padding: 80px 0;
    background: white;
  }

  .enhanced-cta {
    padding: 100px 0;
    background: linear-gradient(135deg, #1c2951 0%, #2d4a7c 50%, #3b5a9a 100%);
    color: white;
  }

  .contact-cta {
    padding: 80px 0;
    background: linear-gradient(135deg, #1c2951 0%, #3b5a9a 100%);
    color: white;
    text-align: center;
  }
`;
