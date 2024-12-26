'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useState, useEffect } from 'react';
import { Loader2 } from 'lucide-react';
import { Modal } from '@/components/ui/modal';
import { toast } from 'sonner';

interface ContactFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

const HUBSPOT_PORTAL_ID = "48646825";
const HUBSPOT_FORM_ID = "6a4229cb-ad4a-4040-a18f-42376052b2a4";

const DISALLOWED_EMAIL_DOMAINS = [
  'gmail.com',
  'yahoo.com',
  'hotmail.com',
  'outlook.com',
  'aol.com',
  'mail.com',
  'protonmail.com',
  'icloud.com',
  'me.com',
  'msn.com',
  'live.com',
  'ymail.com'
];

export default function ContactFormModal({ isOpen, onClose }: ContactFormModalProps) {
  const [formData, setFormData] = useState<FormData>({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [showThankYou, setShowThankYou] = useState(false);
  const [ipAddress, setIpAddress] = useState('');

  useEffect(() => {
    // Fetch IP address when component mounts
    const getIpAddress = async () => {
      try {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        setIpAddress(data.ip);
      } catch (error) {
        console.error('Error fetching IP:', error);
      }
    };

    getIpAddress();
  }, []);

  const validateEmail = (email: string) => {
    const domain = email.split('@')[1]?.toLowerCase();
    if (!domain) return false;
    
    if (DISALLOWED_EMAIL_DOMAINS.includes(domain)) {
      setEmailError('Please use your business email address');
      return false;
    }
    
    setEmailError('');
    return true;
  };

  const resetForm = () => {
    setFormData({
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
      company: '',
      message: ''
    });
    setShowThankYou(false);
    setEmailError('');
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateEmail(formData.email)) {
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch(`https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_ID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          fields: [
            { name: 'firstname', value: formData.firstname },
            { name: 'lastname', value: formData.lastname },
            { name: 'email', value: formData.email },
            { name: 'phone', value: formData.phone },
            { name: 'company', value: formData.company },
            { name: 'message', value: formData.message }
          ],
          context: {
            pageUri: window.location.href,
            pageName: document.title,
            ipAddress: ipAddress
          },
          legalConsentOptions: {
            consent: {
              consentToProcess: true,
              text: "I agree to allow Thor Services to store and process my personal data."
            }
          }
        })
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      setShowThankYou(true);
      toast.success('Message sent successfully!');
      
      // Clear form data after 3 seconds and close modal
      setTimeout(() => {
        handleClose();
      }, 3000);
      
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (name === 'email') {
      validateEmail(value);
    }
  };

  if (showThankYou) {
    return (
      <Modal
        title="Thank You!"
        description="We've received your message and will get back to you shortly."
        isOpen={isOpen}
        onClose={handleClose}
      >
        <div className="flex flex-col items-center justify-center py-8">
          <p className="text-lg text-center mb-6">
            Thank you for reaching out! Our team will contact you within the next 24-48 hours.
          </p>
          <Button
            onClick={handleClose}
            className="bg-[#FF3D00] hover:bg-[#FF3D00]/90 text-white"
          >
            Close
          </Button>
        </div>
      </Modal>
    );
  }

  return (
    <Modal
      title="Contact Us"
      description="Fill out the form below and we'll get back to you as soon as possible."
      isOpen={isOpen}
      onClose={handleClose}
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="firstname">First Name</Label>
            <Input
              id="firstname"
              name="firstname"
              placeholder="John"
              value={formData.firstname}
              onChange={handleChange}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastname">Last Name</Label>
            <Input
              id="lastname"
              name="lastname"
              placeholder="Doe"
              value={formData.lastname}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Business Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="john.doe@company.com"
            value={formData.email}
            onChange={handleChange}
            required
            className={emailError ? 'border-red-500' : ''}
          />
          {emailError && (
            <p className="text-sm text-red-500 mt-1">{emailError}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+1 (555) 000-0000"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="company">Company</Label>
          <Input
            id="company"
            name="company"
            placeholder="Company Name"
            value={formData.company}
            onChange={handleChange}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">Message</Label>
          <textarea
            id="message"
            name="message"
            placeholder="How can we help you?"
            value={formData.message}
            onChange={handleChange}
            required
            className="min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          />
        </div>

        <div className="flex justify-end">
          <Button
            type="submit"
            disabled={isLoading || !!emailError}
            className="bg-[#FF3D00] hover:bg-[#FF3D00]/90 text-white"
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : (
              'Send Message'
            )}
          </Button>
        </div>
      </form>
    </Modal>
  );
}
