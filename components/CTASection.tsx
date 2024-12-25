'use client';

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { toast } from 'sonner'
import { Calendar, Mail, Loader2 } from 'lucide-react'
import { Label } from '@/components/ui/label'

export default function CTASection() {
  const [showForm, setShowForm] = useState(false)
  const [showMeetings, setShowMeetings] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (isSubmitting) return
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        toast('Success!', {
          description: 'Your message has been sent successfully.'
        })
        setFormData({
          firstname: '',
          lastname: '',
          email: '',
          phone: '',
          company: '',
          message: ''
        })
        setShowForm(false)
      } else {
        toast('Error', {
          description: 'Failed to submit form. Please try again later.',
          variant: 'destructive'
        })
      }
    } catch (error) {
      toast('Error', {
        description: 'Failed to submit form. Please try again later.',
        variant: 'destructive'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleScheduleMeeting = () => {
    console.log("Schedule meeting clicked");
    setShowMeetings(true);
  };

  const handleContactUs = () => {
    console.log("Contact us clicked");
    setShowForm(!showForm);
  };

  const handleCloseMeetingModal = () => {
    console.log("Close meeting modal clicked");
    setShowMeetings(false);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-8">Ready to Transform Your IT?</h2>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
          <Button 
            size="lg" 
            className="w-full sm:w-auto bg-[#FF4B11] hover:bg-[#FF4B11]/90 text-white"
            onClick={handleScheduleMeeting}
          >
            Schedule a Strategy Session
            <Calendar className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            size="lg" 
            className="w-full sm:w-auto bg-white border-2 border-[#FF4B11] text-[#FF4B11] hover:bg-[#FF4B11] hover:text-white"
            onClick={handleContactUs}
          >
            Contact Us
            <Mail className="ml-2 h-5 w-5" />
          </Button>
        </div>

        {showMeetings && (
          <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg w-full max-w-2xl h-[80vh] relative">
              <Button
                variant="ghost"
                className="absolute top-2 right-2 z-50"
                onClick={handleCloseMeetingModal}
              >
                ✕
              </Button>
              <iframe
                src="https://meetings.hubspot.com/jhamdi?embed=true"
                frameBorder="0"
                className="w-full h-full rounded-lg"
                title="Schedule a meeting"
              />
            </div>
          </div>
        )}
        
        {showForm && (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstname">First Name</Label>
                  <Input
                    id="firstname"
                    value={formData.firstname}
                    onChange={(e) => setFormData({...formData, firstname: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="lastname">Last Name</Label>
                  <Input
                    id="lastname"
                    value={formData.lastname}
                    onChange={(e) => setFormData({...formData, lastname: e.target.value})}
                    required
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                />
              </div>
              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
              <div>
                <Label htmlFor="company">Company</Label>
                <Input
                  id="company"
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                />
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows={4}
                />
              </div>
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  'Submit'
                )}
              </Button>
            </div>
          </form>
        )}
      </div>
    </section>
  )
}
