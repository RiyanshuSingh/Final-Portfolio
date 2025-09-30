
import React, { useState } from 'react';
import Section from './Section';
import { portfolioData } from '../data/portfolioData';

type FormStatus = 'idle' | 'sending' | 'sent' | 'error';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<FormStatus>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    // Mock API call
    setTimeout(() => {
      // Simulate success/error
      if (formData.email.includes('@')) {
        setStatus('sent');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    }, 2000);
  };

  const buttonContent = {
    idle: 'Send Message',
    sending: (
      <>
        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        Sending...
      </>
    ),
    sent: '✔ Message Sent!',
    error: '✖ Sending Failed',
  };

  return (
    <Section id="contact" title="Get In Touch">
      <div className="max-w-2xl mx-auto text-center">
        <p className="mb-8 text-lg">
          I'm currently open to new opportunities. If you have a project in mind or just want to say hi, feel free to reach out. My inbox is always open!
        </p>
        <div className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full p-3 bg-gray-100 dark:bg-slate-700 rounded-md border-2 border-transparent focus:outline-none focus:border-cyan-500 transition-colors"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full p-3 bg-gray-100 dark:bg-slate-700 rounded-md border-2 border-transparent focus:outline-none focus:border-cyan-500 transition-colors"
              />
            </div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows={5}
              required
              className="w-full p-3 mb-6 bg-gray-100 dark:bg-slate-700 rounded-md border-2 border-transparent focus:outline-none focus:border-cyan-500 transition-colors"
            ></textarea>
            <button
              type="submit"
              disabled={status === 'sending'}
              className={`w-full flex justify-center items-center py-3 px-6 text-white font-bold rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 ${
                status === 'sent' ? 'bg-green-500' :
                status === 'error' ? 'bg-red-500' :
                'bg-cyan-600 hover:bg-cyan-700'
              }`}
            >
              {buttonContent[status]}
            </button>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
