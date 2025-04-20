import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-green-300">
      <div className="bg-white p-10 rounded-xl shadow-2xl text-center space-y-4">
        <h1 className="text-3xl font-bold text-green-700">Welcome to eGrocer</h1>
        <p className="text-gray-600">Choose your portal</p>
        <div className="space-y-3">
          <Link href="/admin/login">
            <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition">
              Admin Panel
            </button>
          </Link>
          <Link href="/seller/login">
            <button className="w-full mt-2 bg-green-600 text-white py-2 rounded hover:bg-green-700 transition">
              Seller Panel
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
