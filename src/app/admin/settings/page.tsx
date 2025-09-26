'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Save,
  Settings,
  Store,
  Bell,
  Shield,
  Palette,
  Mail,
  Globe,
  CreditCard,
  Users,
  FileText,
  Database
} from 'lucide-react'

export default function AdminSettingsPage() {
  const [activeTab, setActiveTab] = useState('general')
  const [settings, setSettings] = useState({
    // General Settings
    bakeryName: 'Whisked Stories',
    tagline: 'Crafting Sweet Moments',
    description: 'A boutique bakery specializing in artisanal cakes and seasonal treats.',
    address: 'Mumbai, Maharashtra, India',
    phone: '+91 9876543210',
    email: 'hello@whiskedstories.com',

    // Business Hours
    mondayHours: '9:00 AM - 7:00 PM',
    tuesdayHours: '9:00 AM - 7:00 PM',
    wednesdayHours: '9:00 AM - 7:00 PM',
    thursdayHours: '9:00 AM - 7:00 PM',
    fridayHours: '9:00 AM - 8:00 PM',
    saturdayHours: '9:00 AM - 8:00 PM',
    sundayHours: '10:00 AM - 6:00 PM',

    // Notifications
    emailNotifications: true,
    orderNotifications: true,
    inventoryAlerts: true,
    customerMessages: true,

    // Payment
    razorpayEnabled: true,
    razorpayKeyId: 'rzp_test_...',
    minimumOrderAmount: 500,
    deliveryCharge: 100,

    // Website
    maintenanceMode: false,
    allowRegistration: true,
    showPrices: true,
    enableReviews: true
  })

  const tabs = [
    { id: 'general', name: 'General', icon: Store },
    { id: 'notifications', name: 'Notifications', icon: Bell },
    { id: 'payment', name: 'Payment', icon: CreditCard },
    { id: 'website', name: 'Website', icon: Globe },
    { id: 'security', name: 'Security', icon: Shield },
    { id: 'backup', name: 'Backup', icon: Database }
  ]

  const handleSave = () => {
    // Save settings logic would go here
    console.log('Saving settings:', settings)
    alert('Settings saved successfully!')
  }

  const renderTabContent = () => {
    switch (activeTab) {
      case 'general':
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900">Bakery Information</h3>
              <p className="text-sm text-gray-500">Update your bakery's basic information.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Bakery Name</label>
                <input
                  type="text"
                  value={settings.bakeryName}
                  onChange={(e) => setSettings(prev => ({ ...prev, bakeryName: e.target.value }))}
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-amber-500 focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Tagline</label>
                <input
                  type="text"
                  value={settings.tagline}
                  onChange={(e) => setSettings(prev => ({ ...prev, tagline: e.target.value }))}
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-amber-500 focus:border-amber-500"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700">Description</label>
                <textarea
                  rows={3}
                  value={settings.description}
                  onChange={(e) => setSettings(prev => ({ ...prev, description: e.target.value }))}
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-amber-500 focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Address</label>
                <input
                  type="text"
                  value={settings.address}
                  onChange={(e) => setSettings(prev => ({ ...prev, address: e.target.value }))}
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-amber-500 focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Phone</label>
                <input
                  type="tel"
                  value={settings.phone}
                  onChange={(e) => setSettings(prev => ({ ...prev, phone: e.target.value }))}
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-amber-500 focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  value={settings.email}
                  onChange={(e) => setSettings(prev => ({ ...prev, email: e.target.value }))}
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-amber-500 focus:border-amber-500"
                />
              </div>
            </div>
          </div>
        )

      case 'notifications':
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900">Notification Preferences</h3>
              <p className="text-sm text-gray-500">Choose which notifications you want to receive.</p>
            </div>

            <div className="space-y-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={settings.emailNotifications}
                  onChange={(e) => setSettings(prev => ({ ...prev, emailNotifications: e.target.checked }))}
                  className="rounded border-gray-300 text-amber-600 focus:ring-amber-500 mr-3"
                />
                <div>
                  <span className="text-sm font-medium text-gray-700">Email Notifications</span>
                  <p className="text-sm text-gray-500">Receive email notifications for important updates</p>
                </div>
              </label>

              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={settings.orderNotifications}
                  onChange={(e) => setSettings(prev => ({ ...prev, orderNotifications: e.target.checked }))}
                  className="rounded border-gray-300 text-amber-600 focus:ring-amber-500 mr-3"
                />
                <div>
                  <span className="text-sm font-medium text-gray-700">Order Notifications</span>
                  <p className="text-sm text-gray-500">Get notified when new orders are placed</p>
                </div>
              </label>

              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={settings.inventoryAlerts}
                  onChange={(e) => setSettings(prev => ({ ...prev, inventoryAlerts: e.target.checked }))}
                  className="rounded border-gray-300 text-amber-600 focus:ring-amber-500 mr-3"
                />
                <div>
                  <span className="text-sm font-medium text-gray-700">Inventory Alerts</span>
                  <p className="text-sm text-gray-500">Receive alerts when items are running low</p>
                </div>
              </label>

              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={settings.customerMessages}
                  onChange={(e) => setSettings(prev => ({ ...prev, customerMessages: e.target.checked }))}
                  className="rounded border-gray-300 text-amber-600 focus:ring-amber-500 mr-3"
                />
                <div>
                  <span className="text-sm font-medium text-gray-700">Customer Messages</span>
                  <p className="text-sm text-gray-500">Get notified of new customer inquiries</p>
                </div>
              </label>
            </div>
          </div>
        )

      case 'payment':
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900">Payment Settings</h3>
              <p className="text-sm text-gray-500">Configure payment methods and pricing.</p>
            </div>

            <div className="space-y-6">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={settings.razorpayEnabled}
                  onChange={(e) => setSettings(prev => ({ ...prev, razorpayEnabled: e.target.checked }))}
                  className="rounded border-gray-300 text-amber-600 focus:ring-amber-500 mr-3"
                />
                <span className="text-sm font-medium text-gray-700">Enable Razorpay Payments</span>
              </label>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Razorpay Key ID</label>
                  <input
                    type="text"
                    value={settings.razorpayKeyId}
                    onChange={(e) => setSettings(prev => ({ ...prev, razorpayKeyId: e.target.value }))}
                    className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-amber-500 focus:border-amber-500"
                    placeholder="rzp_test_..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Minimum Order Amount (₹)</label>
                  <input
                    type="number"
                    value={settings.minimumOrderAmount}
                    onChange={(e) => setSettings(prev => ({ ...prev, minimumOrderAmount: Number(e.target.value) }))}
                    className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-amber-500 focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Delivery Charge (₹)</label>
                  <input
                    type="number"
                    value={settings.deliveryCharge}
                    onChange={(e) => setSettings(prev => ({ ...prev, deliveryCharge: Number(e.target.value) }))}
                    className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-amber-500 focus:border-amber-500"
                  />
                </div>
              </div>
            </div>
          </div>
        )

      case 'website':
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900">Website Settings</h3>
              <p className="text-sm text-gray-500">Control website features and behavior.</p>
            </div>

            <div className="space-y-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={settings.maintenanceMode}
                  onChange={(e) => setSettings(prev => ({ ...prev, maintenanceMode: e.target.checked }))}
                  className="rounded border-gray-300 text-amber-600 focus:ring-amber-500 mr-3"
                />
                <div>
                  <span className="text-sm font-medium text-gray-700">Maintenance Mode</span>
                  <p className="text-sm text-gray-500">Enable maintenance mode to temporarily disable the website</p>
                </div>
              </label>

              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={settings.allowRegistration}
                  onChange={(e) => setSettings(prev => ({ ...prev, allowRegistration: e.target.checked }))}
                  className="rounded border-gray-300 text-amber-600 focus:ring-amber-500 mr-3"
                />
                <div>
                  <span className="text-sm font-medium text-gray-700">Allow User Registration</span>
                  <p className="text-sm text-gray-500">Allow new users to create accounts</p>
                </div>
              </label>

              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={settings.showPrices}
                  onChange={(e) => setSettings(prev => ({ ...prev, showPrices: e.target.checked }))}
                  className="rounded border-gray-300 text-amber-600 focus:ring-amber-500 mr-3"
                />
                <div>
                  <span className="text-sm font-medium text-gray-700">Show Prices</span>
                  <p className="text-sm text-gray-500">Display product prices on the website</p>
                </div>
              </label>

              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={settings.enableReviews}
                  onChange={(e) => setSettings(prev => ({ ...prev, enableReviews: e.target.checked }))}
                  className="rounded border-gray-300 text-amber-600 focus:ring-amber-500 mr-3"
                />
                <div>
                  <span className="text-sm font-medium text-gray-700">Enable Reviews</span>
                  <p className="text-sm text-gray-500">Allow customers to leave product reviews</p>
                </div>
              </label>
            </div>
          </div>
        )

      case 'security':
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900">Security Settings</h3>
              <p className="text-sm text-gray-500">Manage security and access controls.</p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4">
              <div className="flex">
                <Shield className="h-5 w-5 text-yellow-400" />
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-yellow-800">Security Features</h3>
                  <div className="mt-2 text-sm text-yellow-700">
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Admin authentication is enabled</li>
                      <li>API endpoints are protected</li>
                      <li>Database access is restricted</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <Button variant="outline">
                Change Admin Password
              </Button>
            </div>
          </div>
        )

      case 'backup':
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900">Backup & Export</h3>
              <p className="text-sm text-gray-500">Backup your data and export information.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-gray-200 rounded-lg p-6">
                <Database className="h-8 w-8 text-blue-600 mb-4" />
                <h4 className="text-lg font-medium text-gray-900 mb-2">Database Backup</h4>
                <p className="text-sm text-gray-500 mb-4">
                  Create a backup of all your data including products, orders, and customers.
                </p>
                <Button variant="outline">
                  Create Backup
                </Button>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <FileText className="h-8 w-8 text-green-600 mb-4" />
                <h4 className="text-lg font-medium text-gray-900 mb-2">Export Data</h4>
                <p className="text-sm text-gray-500 mb-4">
                  Export your data in various formats for reporting or migration.
                </p>
                <Button variant="outline">
                  Export Data
                </Button>
              </div>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-gray-900">Settings</h1>
          <p className="mt-2 text-sm text-gray-700">
            Manage your bakery's configuration and preferences.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-64">
            <nav className="space-y-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                    activeTab === tab.id
                      ? 'bg-amber-100 text-amber-700'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <tab.icon className="mr-3 h-5 w-5" />
                  {tab.name}
                </button>
              ))}
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="bg-white shadow rounded-lg">
              <div className="px-6 py-8">
                {renderTabContent()}
              </div>

              <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 rounded-b-lg">
                <div className="flex justify-end">
                  <Button onClick={handleSave}>
                    <Save className="h-4 w-4 mr-2" />
                    Save Settings
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}