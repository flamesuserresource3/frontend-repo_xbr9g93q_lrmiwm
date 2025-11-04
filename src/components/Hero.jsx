import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[80vh] lg:min-h-[88vh] flex items-center">
      {/* Spline background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* subtle gradient overlays that don't block interaction */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-white/60 to-white/20" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="inline-flex items-center rounded-full bg-black/5 px-3 py-1 text-xs font-medium text-gray-700 ring-1 ring-black/10 mb-4">
            Fintech-ready marketplace
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-gray-900">
            The modern marketplace for digital commerce
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            Discover sleek, secure shopping with instant checkout. Sell smarter with tools built for
            financial services, subscriptions, and cross-border e‑commerce.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="#featured"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-gray-900 text-white px-5 py-3 text-sm font-medium shadow-sm hover:bg-gray-800"
            >
              Start selling
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#explore"
              className="inline-flex items-center justify-center rounded-lg border border-black/10 bg-white px-5 py-3 text-sm font-medium text-gray-900 hover:bg-gray-50"
            >
              Browse products
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
