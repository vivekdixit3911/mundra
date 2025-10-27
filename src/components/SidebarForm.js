import React, { useState } from 'react';
import styled from 'styled-components';

const SidebarCard = styled.div`
  background: white;
  padding: 32px 24px;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(28, 41, 81, 0.12);
  border: 1px solid rgba(28, 41, 81, 0.08);
  margin-bottom: 24px;
`;

const FormTitle = styled.h4`
  color: #1C2951;
  font-size: 1.4rem;
  margin-bottom: 8px;
  text-align: center;
  font-family: 'Playfair Display', serif;
`;

const MutedText = styled.p`
  color: #718096;
  font-size: 0.9rem;
  text-align: center;
  margin-bottom: 24px;
`;

const QuickForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 100%;
  padding: 14px 16px;
  border: 2px solid rgba(28, 41, 81, 0.1);
  border-radius: 8px;
  font-size: 1rem;
  margin-bottom: 16px;
  transition: all 0.3s ease;
  font-family: 'Inter', sans-serif;

  &:focus {
    outline: none;
    border-color: #D4AF37;
    box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.1);
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  background: linear-gradient(135deg, #1C2951, #D4AF37);
  color: white;
  border: none;
  padding: 16px 24px;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  box-shadow: 0 8px 24px rgba(28, 41, 81, 0.12);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 16px 48px rgba(28, 41, 81, 0.16);
  }
`;

const StatusMessage = styled.p`
  font-size: 0.95rem;
  margin-top: 14px;
  text-align: center;
`;

const SuccessMessage = styled(StatusMessage)`
  color: #065f46; /* green-700 */
`;

const ErrorMessage = styled(StatusMessage)`
  color: #b91c1c; /* red-700 */
`;

const OrDivider = styled.div`
  text-align: center;
  margin: 20px 0;
  position: relative;
  color: #718096;
  font-size: 0.9rem;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    width: 40%;
    height: 1px;
    background: rgba(28, 41, 81, 0.1);
  }

  &::before {
    left: 0;
  }

  &::after {
    right: 0;
  }
`;

const ContactInfo = styled.div`
  margin-top: 20px;
`;

const ContactLink = styled.p`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px;
  color: #4a5568;

  i {
    color: #D4AF37;
    width: 20px;
  }

  a {
    color: #1C2951;
    text-decoration: none;
    font-weight: 600;

    &:hover {
      color: #D4AF37;
    }
  }
`;


const SidebarForm = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess('');
    setError('');
    const form = e.target;
    const formData = new FormData(form);
    const name = formData.get('name') || '';
    const email = formData.get('email') || '';
    const phone = formData.get('phone') || '';

    // minimal validation
    if (!name || !email || !phone) {
      setError('Please fill all required fields.');
      return;
    }

    setLoading(true);
    try {
      const payload = {
        name,
        email,
        mobile: phone, // backend expects mobile/mobile or phone
        phone, // include phone too
        pageUrl: (typeof window !== 'undefined' && window.location && window.location.href) ? window.location.href : '',
      };

      const resp = await fetch('https://backend-one-puce-53.vercel.app/api/send-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!resp.ok) {
        const text = await resp.text().catch(() => null);
        throw new Error(text || `Server responded with ${resp.status}`);
      }

      const data = await resp.json().catch(() => ({}));
      setSuccess(data && data.message ? String(data.message) : 'Thank you! Your request was submitted.');
      form.reset();
    } catch (err) {
      console.error('[SidebarForm] submit error:', err);
      setError('Failed to submit. Please try again or call us at +91 85068 74280.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <SidebarCard>
      <FormTitle>Get Assistance</FormTitle>
      <MutedText>Fill the form for a quick consultation</MutedText>
      <QuickForm onSubmit={handleSubmit}>
        <Input type="text" name="name" placeholder="Your Name *" required />
        <Input type="email" name="email" placeholder="Your Email *" required />
        <Input type="tel" name="phone" placeholder="Your Phone *" required />
        <SubmitButton type="submit">
          <i className="fas fa-paper-plane"></i> Submit Request
        </SubmitButton>
      </QuickForm>
      <OrDivider>OR</OrDivider>
      <ContactInfo>
        <ContactLink><i className="fas fa-phone"></i> <a href="tel:+918506874280">+91 85068 74280</a></ContactLink>
        <ContactLink><i className="fas fa-envelope"></i> <a href="mailto:mundralegal@gmail.com">mundralegal@gmail.com</a></ContactLink>
      </ContactInfo>
    </SidebarCard>
  );
};

export default SidebarForm;
