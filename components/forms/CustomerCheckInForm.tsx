'use client';

import { checkInCustomer } from '../../services/customerService';
import { validateCustomerForm } from '../../utils/formValidation';
import { useState } from 'react';
import { Input } from '../ui/input';
import { Checkbox } from '../ui/checkbox';
import { Button } from '../ui/button';
import { Card } from '../ui/card';

const CustomerCheckInForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [technician, setTechnician] = useState('');
  const [agreed, setAgreed] = useState(false);

  const handleCheckIn = async () => {
    const formData = { name, phone, email, technician, agreed };
    if (!validateCustomerForm(formData)) {
      alert('Please fill in the required fields.');
      return;
    }
    if (!agreed) {
      alert('Please agree to the terms and conditions.');
      return;
    }
    try {
      await checkInCustomer({
        name,
        phone,
        email,
        technician,
        checkInTime: new Date(),
        inService: false,
      });
      alert('Checked in successfully!');
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  return (
    <Card className="max-w-md p-6 mx-auto space-y-6 shadow-md">
      <h2 className="text-2xl font-semibold text-center">Customer Check-In</h2>
      <div className="space-y-4">
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name"
        />
        <Input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Phone Number"
        />
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email (Optional)"
        />
        <Input
          value={technician}
          onChange={(e) => setTechnician(e.target.value)}
          placeholder="Technician Name or Anyone"
        />
        <div className="flex items-center">
          <Checkbox
            checked={agreed}
            onCheckedChange={() => setAgreed(!agreed)}
            id="agree-terms"
          />
          <label htmlFor="agree-terms" className="ml-2 text-sm">
            I agree to the terms and conditions
          </label>
        </div>
      </div>
      <Button
        onClick={handleCheckIn}
        className="w-full py-2 text-white transition duration-300 bg-blue-500 rounded-md hover:bg-blue-600"
      >
        Check In
      </Button>
    </Card>
  );
};

export default CustomerCheckInForm;
