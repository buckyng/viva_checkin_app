'use client';

import { useEffect, useState } from 'react';
import {
  getCustomers,
  markCustomerInService,
} from '../../services/customerService';

import { Customer } from '../../utils/constants';
import { Card } from '../../components/ui/card';
import { Button } from '../../components/ui/button';

const OwnerDashboard = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);

  useEffect(() => {
    const fetchCustomers = async () => {
      const data = await getCustomers();
      setCustomers(data as Customer[]);
    };
    fetchCustomers();
  }, []);

  const toggleInService = async (id: string) => {
    try {
      await markCustomerInService(id);
      setCustomers((prev) => prev.filter((customer) => customer.id !== id));
    } catch (error) {
      console.error('Error updating document: ', error);
    }
  };

  return (
    <div className="max-w-4xl p-8 mx-auto space-y-6">
      <h1 className="mb-6 text-3xl font-bold text-center text-gray-800">
        Today&apos;s Check-ins
      </h1>
      {customers.length === 0 ? (
        <p className="text-center text-gray-600">No check-ins available.</p>
      ) : (
        customers.map((customer) => (
          <Card
            key={customer.id}
            className="flex items-center justify-between p-4 mb-4 shadow-sm"
          >
            <div>
              <p className="font-semibold text-gray-700">
                {customer.name} - {customer.phone}
              </p>
              <p className="text-sm text-gray-500">{customer.technician}</p>
            </div>
            <Button
              className="px-4 py-2 text-white transition-all duration-300 bg-green-500 rounded-md hover:bg-green-600"
              onClick={() => toggleInService(customer.id)}
            >
              Mark as In Service
            </Button>
          </Card>
        ))
      )}
    </div>
  );
};

export default OwnerDashboard;
