import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formAction, setFormAction] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    
    // Add the action if triggered by a specific button
    if (formAction) {
      data.action = formAction;
    }
    
    // Simulating form submission
    console.log('Form submitted:', data);
    alert('Thank you for your request! We will get back to you soon.');
    e.target.reset();
    setFormAction('');
  };

  const handleActionClick = (action) => {
    setFormAction(action);
    // In React, we can't easily dispatch a submit event that the onSubmit handler catches with the state updated immediately in the same tick if we just call submit() on the form ref.
    // Instead, we can manually trigger the submit logic or use a ref to submit the form.
    // However, state updates are async.
    // Better approach: just set the action and submit programmatically, or let the button be type="submit" and handle it.
    // But the buttons are type="button" in the original.
    // Let's change them to type="submit" and use onClick to set the action before submit fires?
    // Actually, if we change type to "submit" and onClick sets the state, the state might not update before onSubmit fires.
    // A ref for the action is better for synchronous access.
  };

  // Ref to hold the current action
  const actionRef = React.useRef('');

  const handleButtonClick = (action) => {
    actionRef.current = action;
    // Find the form and submit it
    const form = document.getElementById('contactForm');
    if (form) {
        // We need to trigger the onSubmit handler. 
        // Calling form.submit() bypasses the React onSubmit handler.
        // So we dispatch a submit event.
        form.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
    }
  };
  
  // Revised handleSubmit to use ref
  const handleSubmitWithRef = async (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      const data = Object.fromEntries(formData);

      const action = actionRef.current || 'proposal';
      const actionLabel = ACTION_LABELS[action] || 'Request';

      const templateParams = {
        subject: `CXO Boardroom: ${actionLabel}`,
        action: actionLabel,
        name: data.name,
        designation: data.designation,
        organization: data.organization,
        email: data.email,
        contact: data.contact,
        comments: data.comments || '',
        to_email: 'mosahel000@gmail.com',
        reply_to: data.email,
      };

      try {
        await emailjs.send(
          'service_thwtsbp',
          'template_omsuufo',
          templateParams,
          'alCMfN3XZPyXurv0o'
        );
        alert('Thank you! Your request has been sent.');
        e.target.reset();
      } catch (err) {
        console.error('Email send failed:', err);
        alert('Sorry, we could not send your request right now. Please try again later.');
      } finally {
        actionRef.current = '';
      }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Request an Invitation</h2>
        <form className="contact-form" id="contactForm" onSubmit={handleSubmitWithRef}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="designation">Designation:</label>
              <input type="text" id="designation" name="designation" required />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="organization">Organization:</label>
              <input type="text" id="organization" name="organization" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email ID:</label>
              <input type="email" id="email" name="email" required />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="contact">Contact Details:</label>
            <input type="tel" id="contact" name="contact" required />
          </div>
          <div className="form-group">
            <label htmlFor="comments">Comments Section:</label>
            <textarea id="comments" name="comments" rows="4"></textarea>
          </div>
          <div className="form-actions">
            <button type="submit" className="btn btn-primary" onClick={() => actionRef.current = 'proposal'}>Request for Proposal</button>
            <button type="button" className="btn btn-secondary" onClick={() => handleButtonClick('brochure')}>Request for Brochure</button>
            <button type="button" className="btn btn-secondary" onClick={() => handleButtonClick('callback')}>Schedule a Call Back</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;

// Map action keys to email subject headings
const ACTION_LABELS = {
  proposal: 'Request for Proposal',
  brochure: 'Request for Brochure',
  callback: 'Schedule a Call Back',
};
