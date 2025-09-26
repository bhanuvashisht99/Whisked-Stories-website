'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
  Plus,
  Search,
  Filter,
  MessageSquare,
  Calendar,
  Clock,
  Users,
  IndianRupee,
  Edit,
  Eye,
  CheckCircle,
  XCircle,
  AlertCircle
} from 'lucide-react'

interface CustomOrder {
  id: string
  name: string
  email: string
  phone: string
  event_type: string
  event_date: string
  guest_count: number
  cake_description: string
  budget_range: string | null
  additional_notes: string | null
  status: string
  created_at: string
}

export default function AdminCustomOrdersPage() {
  const [customOrders, setCustomOrders] = useState<CustomOrder[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')

  useEffect(() => {
    fetchCustomOrders()
  }, [])

  const fetchCustomOrders = async () => {
    try {
      const response = await fetch('/api/custom-orders?admin=true')
      const data = await response.json()
      setCustomOrders(data.inquiries || [])
    } catch (error) {
      console.error('Error fetching custom orders:', error)
    } finally {
      setLoading(false)
    }
  }

  const filteredOrders = customOrders.filter(order => {
    const matchesSearch = order.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.event_type.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === 'all' || order.status === statusFilter
    return matchesSearch && matchesStatus
  })

  if (loading) {
    return (
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center py-12">Loading custom orders...</div>
        </div>
      </div>
    )
  }

  return (
    <div className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Header */}
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-2xl font-semibold text-gray-900">Custom Orders</h1>
            <p className="mt-2 text-sm text-gray-700">
              Manage custom cake orders and special event inquiries.
            </p>
          </div>
        </div>

        {/* Filters */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          {/* Search */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search custom orders..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
            />
          </div>

          {/* Status Filter */}
          <div className="flex items-center">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
            >
              <option value="all">All Status</option>
              <option value="new">New</option>
              <option value="quoted">Quoted</option>
              <option value="confirmed">Confirmed</option>
              <option value="in_progress">In Progress</option>
              <option value="completed">Completed</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </div>
        </div>

        {/* Custom Orders Table */}
        <div className="mt-8 bg-white shadow overflow-hidden sm:rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Customer
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Event Details
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Budget
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="relative px-6 py-3">
                  <span className="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredOrders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <div className="h-12 w-12 bg-amber-100 rounded-lg flex items-center justify-center">
                          <MessageSquare className="h-6 w-6 text-amber-600" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {order.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          {order.email}
                        </div>
                        <div className="text-sm text-gray-500">
                          {order.phone}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-900">
                      <div className="font-medium">{order.event_type}</div>
                      <div className="flex items-center mt-1">
                        <Calendar className="h-4 w-4 mr-1 text-gray-400" />
                        <span>{new Date(order.event_date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center mt-1">
                        <Users className="h-4 w-4 mr-1 text-gray-400" />
                        <span>{order.guest_count} guests</span>
                      </div>
                    </div>
                    <div className="text-sm text-gray-500 mt-2 max-w-xs truncate">
                      {order.cake_description}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {order.budget_range ? (
                      <div className="flex items-center">
                        <IndianRupee className="h-4 w-4 mr-1" />
                        {order.budget_range}
                      </div>
                    ) : (
                      <span className="text-gray-400">Not specified</span>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      order.status === 'completed' ? 'bg-green-100 text-green-800' :
                      order.status === 'cancelled' ? 'bg-red-100 text-red-800' :
                      order.status === 'confirmed' ? 'bg-blue-100 text-blue-800' :
                      order.status === 'new' ? 'bg-amber-100 text-amber-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {order.status === 'new' ? 'New' :
                       order.status === 'quoted' ? 'Quoted' :
                       order.status === 'confirmed' ? 'Confirmed' :
                       order.status === 'in_progress' ? 'In Progress' :
                       order.status === 'completed' ? 'Completed' :
                       order.status === 'cancelled' ? 'Cancelled' : order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex justify-end space-x-2">
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filteredOrders.length === 0 && (
            <div className="text-center py-12">
              <MessageSquare className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-2 text-sm font-medium text-gray-900">No custom orders found</h3>
              <p className="mt-1 text-sm text-gray-500">
                {searchTerm
                  ? 'Try adjusting your search criteria.'
                  : 'Custom order inquiries will appear here.'}
              </p>
            </div>
          )}
        </div>

        {/* Summary */}
        {filteredOrders.length > 0 && (
          <div className="mt-6 flex justify-between items-center">
            <div className="text-sm text-gray-500">
              Showing {filteredOrders.length} custom order{filteredOrders.length !== 1 ? 's' : ''}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}