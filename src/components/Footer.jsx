export default function Footer() {
  return (
    <footer className="mt-16 border-t border-black/5 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-sm">
          <div>
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded-md bg-gradient-to-br from-indigo-500 via-sky-500 to-emerald-400" />
              <span className="font-semibold text-gray-900">MarketFlow</span>
            </div>
            <p className="mt-3 text-gray-600 max-w-sm">
              A minimalist marketplace built for modern commerce — secure payments, sleek design, and effortless checkout.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:col-span-2">
            <div>
              <h4 className="font-medium text-gray-900">Company</h4>
              <ul className="mt-3 space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-gray-900">About</a></li>
                <li><a href="#" className="hover:text-gray-900">Careers</a></li>
                <li><a href="#" className="hover:text-gray-900">Press</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-900">Support</h4>
              <ul className="mt-3 space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-gray-900">Help Center</a></li>
                <li><a href="#" className="hover:text-gray-900">Contact</a></li>
                <li><a href="#" className="hover:text-gray-900">Status</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-10 flex items-center justify-between text-xs text-gray-500">
          <p>© {new Date().getFullYear()} MarketFlow. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-gray-700">Privacy</a>
            <a href="#" className="hover:text-gray-700">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
