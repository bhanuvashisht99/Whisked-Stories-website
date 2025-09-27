import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Instagram, Facebook, Mail, Heart, Award, Users, Leaf, Clock, MapPin, Star } from 'lucide-react'

const values = [
  {
    icon: Heart,
    title: "Passion for Quality",
    description: "Every cake is made with love, using only the finest ingredients sourced locally whenever possible."
  },
  {
    icon: Leaf,
    title: "Seasonal Approach",
    description: "We believe in celebrating nature's rhythm, creating menus that change with the seasons."
  },
  {
    icon: Users,
    title: "Community Connection",
    description: "Building relationships with our customers and local suppliers is at the heart of what we do."
  },
  {
    icon: Award,
    title: "Artisan Craftsmanship",
    description: "Traditional techniques combined with innovative flavors to create unique baking experiences."
  }
]

const story = [
  {
    year: "2019",
    title: "The Beginning",
    content: "Ayushi's journey started in her home kitchen, experimenting with her grandmother's recipes and local Indian flavors."
  },
  {
    year: "2020",
    title: "First Orders",
    content: "Word spread among friends and family, leading to the first custom orders and positive feedback that encouraged growth."
  },
  {
    year: "2021",
    title: "Seasonal Philosophy",
    content: "Developed our unique approach to seasonal baking, creating limited-time menus that celebrate each season's best ingredients."
  },
  {
    year: "2022",
    title: "Community Gatherings",
    content: "Started hosting intimate baking gatherings to share knowledge and connect with fellow baking enthusiasts."
  },
  {
    year: "2023",
    title: "Digital Presence",
    content: "Launched our journal and expanded online presence to share stories, recipes, and the philosophy behind our baking."
  },
  {
    year: "2024",
    title: "Whisked Stories Today",
    content: "Continuing to grow while maintaining our commitment to quality, community, and seasonal innovation."
  }
]

export default function AboutPage() {
  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-warm-cream to-warm-butter overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-warm-wheat/30 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-warm-honey/30 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-warm-wheat/60 rounded-full text-warm-coffee font-medium text-sm mb-6">
                <MapPin className="h-4 w-4 mr-2" />
                Crafted with love in Delhi
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Every Cake Has a
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-warm-caramel to-warm-coffee"> Story</span>
              </h1>
              <p className="text-xl text-gray-700 mb-4 leading-relaxed">
                Hi, I'm Ayushi—a passionate baker who believes that the most beautiful cakes are born from the heart, not just the oven.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                What started as weekend experiments in my tiny Delhi kitchen has grown into something magical:
                a bakery where every creation carries the warmth of home and the story of its season.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/menu">Explore Our Menu</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/events">Join Our Gatherings</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl group">
                <div className="absolute inset-0 bg-gradient-to-br from-warm-wheat/80 via-warm-honey/60 to-warm-butter rounded-2xl flex items-center justify-center transition-all duration-700 group-hover:scale-105">
                  <div className="text-center text-warm-coffee">
                    <div className="text-8xl mb-4 group-hover:scale-110 transition-transform duration-500">👩‍🍳</div>
                    <p className="text-lg font-medium">Ayushi in her element</p>
                    <p className="text-sm opacity-75 mt-1">Where stories begin</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Floating Stats */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-4 border border-warm-wheat/40">
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-warm-honey fill-current" />
                    ))}
                  </div>
                  <span className="text-sm font-medium text-gray-900">100+ Happy Customers</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values & Approach
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              What drives us to create exceptional baking experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-warm-wheat/60 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-warm-coffee" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Story Behind */}
      <section className="py-24 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-br from-warm-cream to-warm-wheat/20 opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-80 lg:h-96 rounded-xl overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-warm-wheat/40 via-warm-honey/30 to-warm-butter rounded-xl flex items-center justify-center">
                <div className="text-center text-warm-coffee relative">
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-warm-wheat/60 rounded-full opacity-60 animate-pulse"></div>
                  <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-warm-honey/40 rounded-full opacity-40 animate-pulse delay-500"></div>
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">💫</div>
                  <p className="text-lg font-medium">The Whisked Promise</p>
                  <p className="text-sm opacity-75 mt-1">Creating memories, one cake at a time</p>
                </div>
              </div>
            </div>

            <div>
              <div className="space-y-6">
                <div className="inline-flex items-center px-3 py-1 bg-warm-wheat/60 rounded-full text-warm-coffee font-medium text-sm">
                  The Beginning
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                  It Started with a Simple Question:
                  <span className="text-warm-caramel"> "What if baking could be storytelling?"</span>
                </h2>

                <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                  <p className="text-xl text-gray-800 font-medium">
                    I remember the exact moment everything changed. It was a rainy Delhi evening in 2019,
                    and I was making my grandmother's cardamom cake for a friend's birthday.
                  </p>

                  <p>
                    As I whisked the batter, I could smell the stories in those spices—memories of
                    festival mornings, family gatherings, and the gentle hands that taught me these
                    recipes. That's when I realized:
                    <strong className="text-warm-coffee"> every ingredient has a story, every technique carries tradition</strong>.
                  </p>

                  <div className="bg-warm-cream border-l-4 border-warm-wheat/60 p-6 rounded-r-lg my-8">
                    <p className="text-warm-coffee font-medium italic text-lg">
                      "What if instead of just making cakes, I could create edible stories?
                      What if every bite could transport someone to a memory, a season, a feeling?"
                    </p>
                  </div>

                  <p>
                    That night, Whisked Stories was born—not as a business plan, but as a promise.
                    A promise that every cake we create would carry the soul of its ingredients,
                    the rhythm of its season, and the love of hands that shaped it.
                  </p>

                  <p className="text-warm-caramel font-semibold text-xl">
                    Because in a world of mass production, we choose connection.
                    In a world of rushing, we choose mindfulness.
                    In a world of forgetting, we choose to remember—through taste.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-warm-wheat/60 rounded-full text-warm-coffee font-medium text-sm mb-6">
              <Clock className="h-4 w-4 mr-2" />
              Our Story Unfolds
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              From Kitchen Dreams to Sweet Reality
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every great story has chapters. Here are the moments that shaped Whisked Stories
              from a weekend hobby into Delhi's most heartwarming bakery experience.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-warm-caramel to-warm-coffee"></div>

            <div className="space-y-12">
              {story.map((milestone, index) => (
                <div key={index} className="relative flex gap-8 group">
                  <div className="flex-shrink-0 relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-warm-caramel to-warm-coffee rounded-full flex items-center justify-center text-white font-bold shadow-lg group-hover:scale-110 transition-all duration-300 border-4 border-white">
                      <span className="text-sm">{milestone.year}</span>
                    </div>
                    {/* Connecting dot */}
                    <div className="absolute top-1/2 -right-2 w-4 h-4 bg-warm-wheat/60 rounded-full -translate-y-1/2 opacity-60"></div>
                  </div>
                  <div className="flex-1 bg-white rounded-xl p-6 shadow-md group-hover:shadow-lg transition-all duration-300 border border-warm-wheat/40">
                    <div className="flex items-center space-x-3 mb-3">
                      <h3 className="text-xl font-bold text-gray-900">{milestone.title}</h3>
                      <div className="h-1 flex-1 bg-gradient-to-r from-warm-wheat/60 to-transparent rounded"></div>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{milestone.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Flavor Philosophy */}
      <section className="py-24 bg-gradient-to-br from-warm-cream to-warm-wheat/40 relative">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-warm-wheat/40 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-warm-honey/30 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-4 mb-8">
                <div className="inline-flex items-center px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full text-warm-coffee font-medium text-sm">
                  Our Philosophy
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  The Art of Flavor Storytelling
                </h2>
                <p className="text-xl text-gray-700">
                  Every flavor combination we create is a carefully crafted narrative,
                  designed to evoke emotions and memories.
                </p>
              </div>
              <div className="space-y-8 text-lg text-gray-700">
                <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-white/50">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-lg">🌱</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">Seasonal Soul</h3>
                  </div>
                  <p className="leading-relaxed">
                    We don't fight the seasons—we dance with them. Spring whispers of rose and cardamom,
                    summer sings with mango and coconut, monsoons bring the earthiness of fresh spices,
                    and winter wraps us in the warmth of jaggery and nuts.
                  </p>
                </div>

                <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-white/50">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-lg">🤝</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">Community Partners</h3>
                  </div>
                  <p className="leading-relaxed">
                    Every ingredient tells the story of its maker. Our Alphonso mangoes come from
                    a third-generation farm in Ratnagiri, our vanilla from a small cooperative in Kerala,
                    and our heritage wheat from Punjab fields that have fed families for decades.
                  </p>
                </div>

                <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-white/50">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-lg">✨</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">Heritage Meets Innovation</h3>
                  </div>
                  <p className="leading-relaxed">
                    My grandmother's kheer becomes a layered cake, traditional kulfi transforms into mousse,
                    and festival sweets inspire contemporary creations. We honor the past while creating new memories.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative h-80 lg:h-96 rounded-xl overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-warm-wheat/30 via-warm-honey/20 to-warm-butter rounded-xl">
                {/* Ingredient Icons Floating */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="grid grid-cols-3 gap-8 text-4xl">
                    <span className="transform group-hover:scale-110 transition-transform duration-500 delay-100">🥭</span>
                    <span className="transform group-hover:scale-110 transition-transform duration-500 delay-200">🌹</span>
                    <span className="transform group-hover:scale-110 transition-transform duration-500 delay-300">🥥</span>
                    <span className="transform group-hover:scale-110 transition-transform duration-500 delay-400">🌿</span>
                    <span className="transform group-hover:scale-110 transition-transform duration-500 delay-500 text-5xl">✨</span>
                    <span className="transform group-hover:scale-110 transition-transform duration-500 delay-600">🍯</span>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-center">
                  <p className="text-lg font-medium text-warm-coffee">Stories in Every Ingredient</p>
                  <p className="text-sm text-warm-caramel opacity-80">Sourced with love, crafted with care</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media & Contact */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 text-9xl">🧁</div>
          <div className="absolute top-40 right-20 text-7xl">✨</div>
          <div className="absolute bottom-20 left-1/3 text-6xl">🌟</div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="space-y-6 mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Let's Create
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-warm-caramel to-warm-coffee"> Sweet Memories</span> Together
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Join our community of cake lovers, home bakers, and story enthusiasts.
              Every post is a new chapter in our delicious journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <a
              href="https://instagram.com/whiskedstories"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                <Instagram className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2 group-hover:text-warm-honey transition-colors">Instagram</h3>
              <p className="text-sm text-gray-400 group-hover:text-gray-300">Behind-the-scenes stories & daily inspirations</p>
            </a>

            <a
              href="https://facebook.com/whiskedstories"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                <Facebook className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2 group-hover:text-warm-honey transition-colors">Facebook</h3>
              <p className="text-sm text-gray-400 group-hover:text-gray-300">Community updates & event announcements</p>
            </a>

            <a
              href="mailto:hello@whiskedstories.com"
              className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-warm-caramel to-warm-coffee rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2 group-hover:text-warm-honey transition-colors">Email Us</h3>
              <p className="text-sm text-gray-400 group-hover:text-gray-300">Custom orders & personal conversations</p>
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-gradient-to-r from-warm-caramel to-warm-coffee hover:from-warm-coffee hover:to-warm-cocoa border-0 px-8" asChild>
              <Link href="/custom-orders">Order Your Story</Link>
            </Button>
            <Button variant="outline" size="lg" className="border-warm-honey text-warm-honey hover:bg-warm-honey hover:text-gray-900 px-8" asChild>
              <Link href="/journal">Read Our Stories</Link>
            </Button>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-700">
            <p className="text-gray-400 text-sm">
              "Every cake tells a story. What story will yours tell?"
            </p>
            <p className="text-warm-honey font-medium mt-2">— Ayushi, Founder</p>
          </div>
        </div>
      </section>
    </main>
  )
}