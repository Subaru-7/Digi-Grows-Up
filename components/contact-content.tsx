import { ContactForm } from "@/components/contact-form"

export function ContactContent() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Let's Build Something
              <span className="block text-gray-400">Extraordinary</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Ready to transform your digital presence? Get in touch and let's discuss how we can drive growth for your
              business.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Get In Touch</h2>
                <p className="text-lg text-gray-400 mb-8">
                  We're here to help you achieve your digital marketing goals. Whether you need a complete strategy
                  overhaul or want to optimize specific campaigns, our team is ready to deliver results.
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-white mb-2">Response Time</h3>
                  <p className="text-gray-400">We typically respond within 24 hours</p>
                </div>

                <div>
                  <h3 className="font-semibold text-white mb-2">What Happens Next?</h3>
                  <ul className="space-y-2 text-gray-400">
                    <li>• We'll review your requirements</li>
                    <li>• Schedule a discovery call</li>
                    <li>• Create a custom proposal</li>
                    <li>• Start building your success</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-white mb-2">Our Expertise</h3>
                  <div className="flex flex-wrap gap-2">
                    {["SEO", "PPC", "Social Media", "Content Marketing", "Analytics", "Conversion Optimization"].map(
                      (skill) => (
                        <span key={skill} className="px-3 py-1 bg-black text-white text-sm rounded-full">
                          {skill}
                        </span>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Prefer to talk directly?</h2>
          <p className="text-gray-400 mb-6">Schedule a free 30-minute consultation to discuss your goals</p>
          <button className="bg-background text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">
            Book a Call
          </button>
        </div>
      </section>
    </div>
  )
}
