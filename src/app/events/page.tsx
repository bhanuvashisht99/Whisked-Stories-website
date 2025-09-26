import Link from 'next/link'
import { mockEvents } from '@/lib/mock-data'
import { Calendar, Clock, MapPin, Users, Star, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const upcomingEvents = [
  ...mockEvents,
  {
    id: '3',
    title: 'Monsoon Cake Tasting Evening',
    description: 'Join us for an intimate evening celebrating monsoon flavors. Sample our seasonal collection with warm chai and good company.',
    date: '2024-06-15',
    time: '6:00 PM - 8:00 PM',
    location: 'Whisked Stories Café, Mumbai',
    images: ['/api/placeholder/500/300'],
    is_featured: false,
    max_attendees: 25,
    current_attendees: 12,
    price: 800,
    created_at: '2024-04-01'
  },
  {
    id: '4',
    title: 'Summer Solstice Sweet Celebration',
    description: 'Celebrate the longest day with our community! Enjoy seasonal treats, live acoustic music, and connect with fellow food lovers.',
    date: '2024-06-21',
    time: '4:00 PM - 7:00 PM',
    location: 'Whisked Stories Garden Space, Mumbai',
    images: ['/api/placeholder/500/300'],
    is_featured: true,
    max_attendees: 40,
    current_attendees: 18,
    price: 1200,
    created_at: '2024-04-05'
  }
]

export default function EventsPage() {
  const featuredEvent = upcomingEvents.find(event => event.is_featured) || upcomingEvents[0]
  const regularEvents = upcomingEvents.filter(event => !event.is_featured)

  return (
    <main className="pt-20">
      {/* Header */}
      <section className="py-16 bg-gradient-to-b from-neutral-50 to-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center space-x-2 text-sm text-neutral-600 bg-primary/10 px-4 py-2 rounded-full">
              <Calendar className="h-4 w-4" />
              <span>Community Events & Experiences</span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-light text-neutral-900">
              Sweet Gatherings &
              <br />
              <span className="font-serif italic text-primary">Community Events</span>
            </h1>

            <p className="text-lg lg:text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed">
              Join our community for special events celebrating seasons, flavors, and the joy of sharing
              sweet moments together. From tastings to seasonal celebrations.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Event */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <div className="inline-flex items-center space-x-2 text-sm text-primary font-medium">
                <Star className="h-4 w-4" />
                <span>Featured Event</span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 via-accent to-primary/5 p-8 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="text-6xl opacity-60">🎉</div>
                    <div className="space-y-2">
                      <p className="font-serif text-lg text-neutral-700">Event Image</p>
                      <p className="text-sm text-neutral-500">Community celebration</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-6">
                <div className="space-y-4">
                  <h2 className="text-3xl lg:text-4xl font-light text-neutral-900 leading-tight">
                    {featuredEvent.title}
                  </h2>

                  <p className="text-lg text-neutral-600 leading-relaxed">
                    {featuredEvent.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-4">
                    <div className="flex items-start space-x-3">
                      <Calendar className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <div className="font-medium text-neutral-900">
                          {new Date(featuredEvent.date).toLocaleDateString('en-IN', {
                            weekday: 'long',
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </div>
                        <div className="text-sm text-neutral-600">{featuredEvent.time}</div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <div className="font-medium text-neutral-900">Venue</div>
                        <div className="text-sm text-neutral-600">{featuredEvent.location}</div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Users className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <div className="font-medium text-neutral-900">
                          {featuredEvent.current_attendees}/{featuredEvent.max_attendees} Spots
                        </div>
                        <div className="text-sm text-neutral-600">
                          {featuredEvent.max_attendees - featuredEvent.current_attendees} spots remaining
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <span className="w-5 h-5 text-primary mt-0.5 text-lg">₹</span>
                      <div>
                        <div className="font-medium text-neutral-900">₹{featuredEvent.price.toLocaleString('en-IN')}</div>
                        <div className="text-sm text-neutral-600">Includes all tastings & refreshments</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full text-base font-medium"
                  >
                    Join This Event
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="px-8 py-4 rounded-full text-base font-medium border-neutral-300 hover:bg-neutral-50"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Events */}
      <section className="py-16 bg-neutral-50">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <h2 className="text-2xl lg:text-3xl font-light text-neutral-900 mb-4">
                Upcoming Events
              </h2>
              <p className="text-neutral-600">
                Intimate gatherings designed to celebrate seasons, flavors, and community connections
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {regularEvents.map((event) => (
                <div
                  key={event.id}
                  className="group bg-white rounded-2xl border border-neutral-200 overflow-hidden hover:border-neutral-300 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="aspect-[16/9] bg-gradient-to-br from-primary/10 via-accent to-primary/5 p-8 flex items-center justify-center">
                    <div className="text-center space-y-2">
                      <div className="text-5xl opacity-60">🎊</div>
                      <p className="text-sm text-neutral-600">Event Image</p>
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-xl font-medium text-neutral-900 group-hover:text-primary transition-colors">
                        {event.title}
                      </h3>
                      <p className="text-sm text-neutral-600 leading-relaxed line-clamp-2">
                        {event.description}
                      </p>
                    </div>

                    <div className="space-y-3 text-sm">
                      <div className="flex items-center space-x-2 text-neutral-600">
                        <Calendar className="h-4 w-4" />
                        <span>
                          {new Date(event.date).toLocaleDateString('en-IN', {
                            month: 'short',
                            day: 'numeric'
                          })}
                        </span>
                        <Clock className="h-4 w-4 ml-2" />
                        <span>{event.time}</span>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2 text-neutral-600">
                          <Users className="h-4 w-4" />
                          <span>{event.current_attendees}/{event.max_attendees} spots</span>
                        </div>
                        <div className="text-lg font-medium text-primary">
                          ₹{event.price.toLocaleString('en-IN')}
                        </div>
                      </div>
                    </div>

                    <Button
                      className="w-full bg-primary hover:bg-primary/90 text-white rounded-full"
                      disabled={event.current_attendees >= event.max_attendees}
                    >
                      {event.current_attendees >= event.max_attendees ? 'Fully Booked' : 'Join Event'}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <div className="space-y-4">
              <h2 className="text-2xl lg:text-3xl font-light text-neutral-900">
                What to Expect
              </h2>
              <p className="text-neutral-600">
                Our events are designed to be warm, welcoming, and deliciously memorable
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                  <span className="text-2xl">🫖</span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-medium text-neutral-900">Intimate Gatherings</h3>
                  <p className="text-sm text-neutral-600">
                    Small, cozy events where you can connect with fellow sweet enthusiasts in a relaxed atmosphere
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                  <span className="text-2xl">🍰</span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-medium text-neutral-900">Seasonal Tastings</h3>
                  <p className="text-sm text-neutral-600">
                    Sample our current seasonal collection and learn about the stories behind each flavor
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                  <span className="text-2xl">💫</span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-medium text-neutral-900">Sweet Memories</h3>
                  <p className="text-sm text-neutral-600">
                    Take home special moments, new friendships, and sometimes exclusive treats or recipes
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Private Events */}
      <section className="py-16 bg-neutral-50 border-t border-neutral-100">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl lg:text-3xl font-light text-neutral-900">
                Private Group Events
              </h2>
              <p className="text-neutral-600">
                Looking for a unique celebration or team bonding experience?
                We can host custom gatherings for your group with personalized tastings and activities.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full text-base font-medium"
                asChild
              >
                <Link href="/custom-orders"className="flex items-center gap-2"> 
                  Inquire About Private Events
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}