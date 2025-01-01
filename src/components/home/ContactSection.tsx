'use client';

import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function ContactSection() {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Form submission logic
  };

  return (
    <section className="py-12 md:py-24 bg-gradient-to-br from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-lg uppercase tracking-widest text-primary mb-4 block">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Contact Us
          </h2>
          <p className="text-base md:text-lg text-white/70 max-w-2xl mx-auto">
            Let's discuss your photography needs and create something amazing together
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <LocationOnIcon />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Location</h3>
                <p className="text-white/70">
                  123 Photography Street<br />
                  Istanbul, Turkey 34000
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <EmailIcon />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                <p className="text-white/70">
                  info@photography.com<br />
                  booking@photography.com
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <PhoneIcon />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
                <p className="text-white/70">
                  +90 (555) 123 45 67<br />
                  +90 (555) 987 65 43
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-primary text-white placeholder-white/50"
              />
            </div>
            
            <div>
              <input
                type="email"
                placeholder="Your Email"
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-primary text-white placeholder-white/50"
              />
            </div>
            
            <div>
              <input
                type="text"
                placeholder="Subject"
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-primary text-white placeholder-white/50"
              />
            </div>
            
            <div>
              <textarea
                placeholder="Your Message"
                rows={4}
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-primary text-white placeholder-white/50 resize-none"
              />
            </div>
            
            <button
              type="submit"
              className="w-full px-8 py-4 bg-gradient-primary text-white rounded-lg transform hover:-translate-y-0.5 transition-all duration-300 font-semibold"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
