import { mockProducts, mockBlogPosts } from '@/lib/mock-data'
import {
  Package,
  ShoppingCart,
  Users,
  IndianRupee,
  TrendingUp,
  Calendar,
  MessageSquare,
  FileText
} from 'lucide-react'

// Mock data for dashboard metrics
const dashboardMetrics = {
  totalRevenue: 125000,
  totalOrders: 342,
  activeProducts: mockProducts.filter(p => !p.is_archived).length,
  totalCustomers: 156,
  pendingOrders: 12,
  customOrderInquiries: 8,
  publishedPosts: mockBlogPosts.filter(p => p.is_published).length,
  upcomingEvents: 3
}

const recentOrders = [
  { id: '1', customer: 'Priya Sharma', product: 'Chocolate Fudge Cake', amount: 1200, status: 'confirmed', date: '2024-03-20' },
  { id: '2', customer: 'Rajesh Kumar', product: 'Red Velvet Classic', amount: 1400, status: 'preparing', date: '2024-03-20' },
  { id: '3', customer: 'Anita Desai', product: 'Lemon Lavender Delight', amount: 1600, status: 'ready', date: '2024-03-19' },
  { id: '4', customer: 'Vikram Singh', product: 'Custom Birthday Cake', amount: 2500, status: 'pending', date: '2024-03-19' }
]

const recentInquiries = [
  { id: '1', customer: 'Meera Patel', event: 'Wedding', guestCount: 150, date: '2024-04-15', status: 'new' },
  { id: '2', customer: 'Arjun Gupta', event: 'Birthday Party', guestCount: 25, date: '2024-04-08', status: 'reviewed' },
  { id: '3', customer: 'Kavya Iyer', event: 'Anniversary', guestCount: 50, date: '2024-04-12', status: 'quoted' }
]

function StatCard({
  title,
  value,
  icon: Icon,
  color = "amber",
  subtitle
}: {
  title: string
  value: string | number
  icon: React.ElementType
  color?: string
  subtitle?: string
}) {
  const colorClasses = {
    amber: "bg-amber-500 text-white",
    blue: "bg-blue-500 text-white",
    green: "bg-green-500 text-white",
    purple: "bg-purple-500 text-white"
  }

  return (
    <div className="bg-white overflow-hidden shadow rounded-lg">
      <div className="p-5">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <div className={`w-8 h-8 rounded-md flex items-center justify-center ${colorClasses[color as keyof typeof colorClasses]}`}>
              <Icon className="h-5 w-5" />
            </div>
          </div>
          <div className="ml-5 w-0 flex-1">
            <dl>
              <dt className="text-sm font-medium text-gray-500 truncate">{title}</dt>
              <dd className="text-lg font-medium text-gray-900">{value}</dd>
              {subtitle && (
                <dd className="text-sm text-gray-600">{subtitle}</dd>
              )}
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function AdminDashboard() {
  const formatCurrency = (amount: number) => `₹${amount.toLocaleString('en-IN')}`

  return (
    <div className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
        <p className="mt-2 text-sm text-gray-600">
          Welcome back, Ayushi! Here's what's happening with your bakery today.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mt-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard
            title="Total Revenue"
            value={formatCurrency(dashboardMetrics.totalRevenue)}
            icon={IndianRupee}
            color="green"
            subtitle="This month"
          />
          <StatCard
            title="Total Orders"
            value={dashboardMetrics.totalOrders}
            icon={ShoppingCart}
            color="blue"
            subtitle={`${dashboardMetrics.pendingOrders} pending`}
          />
          <StatCard
            title="Active Products"
            value={dashboardMetrics.activeProducts}
            icon={Package}
            color="amber"
          />
          <StatCard
            title="Total Customers"
            value={dashboardMetrics.totalCustomers}
            icon={Users}
            color="purple"
          />
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mt-6">
          <StatCard
            title="Custom Inquiries"
            value={dashboardMetrics.customOrderInquiries}
            icon={MessageSquare}
            color="blue"
            subtitle="Awaiting response"
          />
          <StatCard
            title="Published Posts"
            value={dashboardMetrics.publishedPosts}
            icon={FileText}
            color="green"
          />
          <StatCard
            title="Upcoming Events"
            value={dashboardMetrics.upcomingEvents}
            icon={Calendar}
            color="purple"
          />
          <StatCard
            title="Monthly Growth"
            value="+23%"
            icon={TrendingUp}
            color="green"
            subtitle="vs last month"
          />
        </div>

        {/* Recent Activity */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 mt-8">
          {/* Recent Orders */}
          <div className="bg-white shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
                Recent Orders
              </h3>
              <div className="space-y-4">
                {recentOrders.map((order) => (
                  <div key={order.id} className="flex items-center justify-between">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">{order.customer}</p>
                      <p className="text-sm text-gray-500">{order.product}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-gray-900">{formatCurrency(order.amount)}</p>
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        order.status === 'confirmed' ? 'bg-blue-100 text-blue-800' :
                        order.status === 'preparing' ? 'bg-yellow-100 text-yellow-800' :
                        order.status === 'ready' ? 'bg-green-100 text-green-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {order.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4">
                <a href="/admin/orders" className="text-sm text-amber-600 hover:text-amber-500">
                  View all orders →
                </a>
              </div>
            </div>
          </div>

          {/* Recent Custom Order Inquiries */}
          <div className="bg-white shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
                Custom Order Inquiries
              </h3>
              <div className="space-y-4">
                {recentInquiries.map((inquiry) => (
                  <div key={inquiry.id} className="flex items-center justify-between">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">{inquiry.customer}</p>
                      <p className="text-sm text-gray-500">{inquiry.event} • {inquiry.guestCount} guests</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500">{new Date(inquiry.date).toLocaleDateString('en-IN')}</p>
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        inquiry.status === 'new' ? 'bg-red-100 text-red-800' :
                        inquiry.status === 'reviewed' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {inquiry.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4">
                <a href="/admin/custom-orders" className="text-sm text-amber-600 hover:text-amber-500">
                  View all inquiries →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white shadow rounded-lg mt-8">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
              Quick Actions
            </h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <a
                href="/admin/products/new"
                className="relative block w-full border-2 border-gray-300 border-dashed rounded-lg p-6 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
              >
                <Package className="mx-auto h-8 w-8 text-gray-400" />
                <span className="mt-2 block text-sm font-medium text-gray-900">Add New Product</span>
              </a>

              <a
                href="/admin/journal/new"
                className="relative block w-full border-2 border-gray-300 border-dashed rounded-lg p-6 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
              >
                <FileText className="mx-auto h-8 w-8 text-gray-400" />
                <span className="mt-2 block text-sm font-medium text-gray-900">Write New Post</span>
              </a>

              <a
                href="/admin/events/new"
                className="relative block w-full border-2 border-gray-300 border-dashed rounded-lg p-6 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
              >
                <Calendar className="mx-auto h-8 w-8 text-gray-400" />
                <span className="mt-2 block text-sm font-medium text-gray-900">Create Event</span>
              </a>

              <a
                href="/admin/orders"
                className="relative block w-full border-2 border-gray-300 border-dashed rounded-lg p-6 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
              >
                <ShoppingCart className="mx-auto h-8 w-8 text-gray-400" />
                <span className="mt-2 block text-sm font-medium text-gray-900">Manage Orders</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}