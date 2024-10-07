import { db } from './firebase';
import {
  addDoc,
  collection,
  getDocs,
  updateDoc,
  doc,
} from 'firebase/firestore';

const checkInCustomer = async (data) => {
  return await addDoc(collection(db, 'check-ins'), data);
};

const getCustomers = async () => {
  const querySnapshot = await getDocs(collection(db, 'check-ins'));
  return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

const markCustomerInService = async (id) => {
  const customerRef = doc(db, 'check-ins', id);
  await updateDoc(customerRef, { inService: true });
};

export { checkInCustomer, getCustomers, markCustomerInService };
