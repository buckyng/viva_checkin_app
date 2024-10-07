'use client';

import { useEffect, useState } from 'react';
import {
  getCustomers,
  markCustomerInService,
} from '../../services/customerService';
import { Customer } from '../../utils/constants';

const OwnerDashboard = () => {
  const [customers, setCustomers] = useState<Customer[]>([]); // Explicitly set type to Customer[]

  useEffect(() => {
    const fetchCustomers = async () => {
      const data = await getCustomers();
      setCustomers(data as Customer[]); // Ensure that data matches the Customer type
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
    <div>
      <h1>Today&apos;s Check-ins</h1>
      {customers.map((customer) => (
        <div key={customer.id}>
          <p>
            {customer.name} - {customer.phone}
          </p>
          <button onClick={() => toggleInService(customer.id)}>
            Mark as In Service
          </button>
        </div>
      ))}
    </div>
  );
};

export default OwnerDashboard;
