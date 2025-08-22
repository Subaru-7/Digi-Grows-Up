export function AboutContent() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About
              <span className="block text-gray-400">The Digigrows Up</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              We're a team of digital marketing experts dedicated to engineering growth for ambitious businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
            <p className="text-lg text-gray-400">
              To transform businesses through data-driven digital marketing strategies that deliver measurable results.
              We believe in the power of precision, creativity, and relentless optimization to drive sustainable growth.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Leadership Team</h2>
            <p className="text-lg text-gray-400">Meet the experts behind your growth</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Chen",
                role: "Founder & CEO",
                bio: "10+ years in performance marketing with expertise in scaling D2C brands from startup to $100M+",
                avatar: "/placeholder.svg?height=120&width=120",
              },
              {
                name: "Marcus Rodriguez",
                role: "Head of Strategy",
                bio: "Former Google Ads specialist with a track record of managing $50M+ in ad spend across industries",
                avatar: "/placeholder.svg?height=120&width=120",
              },
              {
                name: "Priya Patel",
                role: "Creative Director",
                bio: "Award-winning creative with expertise in brand storytelling and conversion-focused design",
                avatar: "/placeholder.svg?height=120&width=120",
              },
            ].map((member) => (
              <div key={member.name} className="text-center">
                <img
                  src={member.avatar || "/placeholder.svg"}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="font-semibold text-white mb-1">{member.name}</h3>
                <p className="text-sm text-gray-400 mb-3">{member.role}</p>
                <p className="text-sm text-gray-500">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Our Values</h2>
            <p className="text-lg text-gray-400">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Data-Driven",
                description: "Every decision backed by solid data and measurable outcomes",
              },
              {
                title: "Transparent",
                description: "Clear reporting and honest communication at every step",
              },
              {
                title: "Results-Focused",
                description: "We're only successful when our clients achieve their goals",
              },
              {
                title: "Innovative",
                description: "Always exploring new strategies and technologies for better results",
              },
            ].map((value) => (
              <div key={value.title} className="text-center">
                <div className="w-12 h-12 bg-white rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <div className="w-8 h-8 bg-black rounded"></div>
                </div>
                <h3 className="font-semibold text-white mb-2">{value.title}</h3>
                <p className="text-sm text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why The Digigrows Up?</h2>
            <p className="text-lg text-gray-300">What sets us apart in the digital marketing landscape</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                title: "Proven Track Record",
                points: [
                  "Managed $100M+ in ad spend",
                  "Achieved 300%+ ROAS for clients",
                  "Scaled 50+ businesses to 7-figures",
                ],
              },
              {
                title: "Full-Stack Expertise",
                points: [
                  "SEO, PPC, Social, and Content",
                  "Technical implementation",
                  "Creative and strategy alignment",
                ],
              },
            ].map((section) => (
              <div key={section.title}>
                <h3 className="text-xl font-semibold mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.points.map((point, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
