import Link from 'next/link';
import { Card } from '../components/ui/card';

export default function HomePage() {
  return (
    <div className="max-w-2xl p-8 mx-auto">
      <Card className="p-6 space-y-8 text-center shadow-md">
        <h1 className="text-3xl font-bold text-gray-800">
          Welcome to the Service App
        </h1>
        <nav>
          <ul className="space-y-4">
            <li>
              <Link
                href="/check-in"
                className="block px-6 py-3 text-white transition-all duration-300 bg-blue-500 rounded-md hover:bg-blue-600"
              >
                Customer Check-In
              </Link>
            </li>
            <li>
              <Link
                href="/owner"
                className="block px-6 py-3 text-white transition-all duration-300 bg-blue-500 rounded-md hover:bg-blue-600"
              >
                Owner Dashboard
              </Link>
            </li>
          </ul>
        </nav>
      </Card>
    </div>
  );
}
