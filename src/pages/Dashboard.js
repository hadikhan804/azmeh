import React from 'react';
import { 
  Package, 
  ShoppingCart, 
  Users, 
  DollarSign,
  TrendingUp,
  TrendingDown
} from 'lucide-react';

const Dashboard = () => {
  const stats = [
    {
      title: 'Total Products',
      value: '24',
      change: '+12%',
      changeType: 'increase',
      icon: Package,
      color: 'bg-blue-500'
    },
    {
      title: 'Total Orders',
      value: '1,234',
      change: '+8%',
      changeType: 'increase',
      icon: ShoppingCart,
      color: 'bg-alonox-green'
    },
    {
      title: 'Total Users',
      value: '5,678',
      change: '+15%',
      changeType: 'increase',
      icon: Users,
      color: 'bg-alonox-yellow'
    },
    {
      title: 'Total Revenue',
      value: '$45,678',
      change: '+23%',
      changeType: 'increase',
      icon: DollarSign,
      color: 'bg-purple-500'
    }
  ];

  const recentOrders = [
    { id: '#1234', customer: 'John Doe', product: 'Alonox Face Wash', amount: '$12.99', status: 'Delivered' },
    { id: '#1235', customer: 'Jane Smith', product: 'Alonox Shampoo', amount: '$15.99', status: 'Processing' },
    { id: '#1236', customer: 'Mike Johnson', product: 'Alonox Hair Oil', amount: '$18.99', status: 'Shipped' },
    { id: '#1237', customer: 'Sarah Wilson', product: 'Alonox Hair Gel', amount: '$9.99', status: 'Pending' }
  ];

  const topProducts = [
    { name: 'Alonox Face Wash', sales: 234, revenue: '$3,039.66' },
    { name: 'Alonox Shampoo', sales: 189, revenue: '$3,022.11' },
    { name: 'Alonox Hair Oil', sales: 156, revenue: '$2,962.44' },
    { name: 'Alonox Hair Gel', sales: 98, revenue: '$979.02' }
  ];

  return (
    <div className="space-y-6">
      {/* Page header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600">Welcome to your Alonox admin panel</p>
      </div>

      {/* Stats cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                <div className="flex items-center mt-2">
                  {stat.changeType === 'increase' ? (
                    <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                  ) : (
                    <TrendingDown className="w-4 h-4 text-red-500 mr-1" />
                  )}
                  <span className={`text-sm font-medium ${
                    stat.changeType === 'increase' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {stat.change}
                  </span>
                  <span className="text-sm text-gray-500 ml-1">from last month</span>
                </div>
              </div>
              <div className={`p-3 rounded-lg ${stat.color}`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts and tables */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Orders */}
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Orders</h3>
          <div className="space-y-4">
            {recentOrders.map((order, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">{order.id}</p>
                  <p className="text-sm text-gray-600">{order.customer}</p>
                  <p className="text-sm text-gray-500">{order.product}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-gray-900">{order.amount}</p>
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                    order.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                    order.status === 'Processing' ? 'bg-blue-100 text-blue-800' :
                    order.status === 'Shipped' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {order.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Products */}
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Products</h3>
          <div className="space-y-4">
            {topProducts.map((product, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">{product.name}</p>
                  <p className="text-sm text-gray-600">{product.sales} sales</p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-alonox-green">{product.revenue}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="card">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="btn-primary flex items-center justify-center space-x-2">
            <Package className="w-5 h-5" />
            <span>Add New Product</span>
          </button>
          <button className="btn-secondary flex items-center justify-center space-x-2">
            <ShoppingCart className="w-5 h-5" />
            <span>View Orders</span>
          </button>
          <button className="btn-secondary flex items-center justify-center space-x-2">
            <Users className="w-5 h-5" />
            <span>Manage Users</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 