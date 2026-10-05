import React from 'react';
import { Hero } from '../components/Hero';
import { FeaturesSection } from '../components/FeaturesSection';
import { VehicleCard } from '../components/VehicleCard';
import { MOCK_VEHICLES_CATALOG } from '../data/mockData';
import { Vehicle, PageView } from '../types';
import { 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Star, 
  Award,
  Layers
} from 'lucide-react';

interface HomePageProps {
  onStartAnalysis: () => void;
  onViewDemo: () => void;
  onSelectVehicleForCompare: (vehicle: Vehicle) => void;
  setCurrentPage: (page: PageView) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onStartAnalysis,
  onViewDemo,
  onSelectVehicleForCompare,
  setCurrentPage,
}) => {
  // Show 3 featured cars from FA
  const featuredCars = MOCK_VEHICLES_CATALOG.filter((v) =>
    v.showroom.includes('PT Fokus Abadi')
  ).slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <Hero onStartAnalysis={onStartAnalysis} onViewDemo={onViewDemo} />

      {/* Section Keunggulan */}
      <FeaturesSection onStartAnalysis={onStartAnalysis} />

      {/* Showroom Featured Units Preview */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold mb-2">
                <Award className="w-3.5 h-3.5 text-emerald-600" />
                UNIT PILIHAN TERBAIK FA
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Contoh Unit Berharga Kompetitif
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                Lihat bagaimana FA PriceCheck membandingkan unit showroom PT Fokus Abadi langsung dengan pasar Surabaya.
              </p>
            </div>

            <button
              onClick={() => {
                setCurrentPage('vehicles');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 text-sm font-bold text-emerald-700 hover:text-emerald-800 transition-colors cursor-pointer self-start md:self-auto"
            >
              <span>Lihat Semua Katalog ({MOCK_VEHICLES_CATALOG.length} Unit)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredCars.map((car) => (
              <VehicleCard
                key={car.id}
                vehicle={car}
                onCompare={onSelectVehicleForCompare}
              />
            ))}
          </div>

          {/* Customer Assurance Strip */}
          <div className="mt-12 bg-white rounded-2xl p-6 border border-slate-200 shadow-xs grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900">Garansi Mesin & Transmisi</h4>
                <p className="text-[11px] text-slate-500">Jaminan perlindungan unit hingga 1 tahun</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900">150 Titik Inspeksi</h4>
                <p className="text-[11px] text-slate-500">Lolos uji bebas tabrakan dan banjir</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                <Star className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900">Transparansi Harga</h4>
                <p className="text-[11px] text-slate-500">Dapat dicek dan diverifikasi langsung ke pasar</p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
