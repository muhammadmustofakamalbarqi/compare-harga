import React, { useState, useMemo } from 'react';
import { MOCK_VEHICLES_CATALOG } from '../data/mockData';
import { Vehicle } from '../types';
import { VehicleCard } from '../components/VehicleCard';
import { 
  Search, 
  Filter, 
  RotateCcw, 
  Car, 
  Building2, 
  SlidersHorizontal,
  CheckCircle2,
  Calendar,
  Sparkles
} from 'lucide-react';

interface VehiclesPageProps {
  onCompareVehicle: (vehicle: Vehicle) => void;
}

export const VehiclesPage: React.FC<VehiclesPageProps> = ({ onCompareVehicle }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('Semua');
  const [selectedYear, setSelectedYear] = useState('Semua');
  const [selectedTransmission, setSelectedTransmission] = useState('Semua');
  const [selectedShowroom, setSelectedShowroom] = useState('Semua');
  const [selectedPriceRange, setSelectedPriceRange] = useState('Semua');

  // Filter logic
  const filteredVehicles = useMemo(() => {
    return MOCK_VEHICLES_CATALOG.filter((car) => {
      // Search text match
      const query = searchTerm.toLowerCase();
      const matchesSearch =
        car.brand.toLowerCase().includes(query) ||
        car.model.toLowerCase().includes(query) ||
        car.type.toLowerCase().includes(query);

      // Brand filter
      const matchesBrand =
        selectedBrand === 'Semua' || car.brand === selectedBrand;

      // Year filter
      const matchesYear =
        selectedYear === 'Semua' || car.year.toString() === selectedYear;

      // Transmission filter
      const matchesTransmission =
        selectedTransmission === 'Semua' ||
        car.transmission === selectedTransmission;

      // Showroom filter
      const matchesShowroom =
        selectedShowroom === 'Semua'
          ? true
          : selectedShowroom === 'FA'
          ? car.showroom.includes('PT Fokus Abadi')
          : !car.showroom.includes('PT Fokus Abadi');

      // Price range filter
      let matchesPrice = true;
      if (selectedPriceRange === '< 150 jt') {
        matchesPrice = car.price < 150000000;
      } else if (selectedPriceRange === '150 - 200 jt') {
        matchesPrice = car.price >= 150000000 && car.price <= 200000000;
      } else if (selectedPriceRange === '200 - 300 jt') {
        matchesPrice = car.price > 200000000 && car.price <= 300000000;
      } else if (selectedPriceRange === '> 300 jt') {
        matchesPrice = car.price > 300000000;
      }

      return (
        matchesSearch &&
        matchesBrand &&
        matchesYear &&
        matchesTransmission &&
        matchesShowroom &&
        matchesPrice
      );
    });
  }, [
    searchTerm,
    selectedBrand,
    selectedYear,
    selectedTransmission,
    selectedShowroom,
    selectedPriceRange,
  ]);

  const handleResetFilters = () => {
    setSearchTerm('');
    setSelectedBrand('Semua');
    setSelectedYear('Semua');
    setSelectedTransmission('Semua');
    setSelectedShowroom('Semua');
    setSelectedPriceRange('Semua');
  };

  return (
    <div className="py-10 sm:py-14 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold mb-2">
            <Car className="w-3.5 h-3.5 text-emerald-600" />
            INVENTARIS & DATABASE PEMBANDING
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Data Kendaraan
          </h1>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Jelajahi unit mobil bekas yang terdata di sistem FA PriceCheck. Pilih unit untuk langsung menguji perbandingan harganya.
          </p>
        </div>

        {/* Search & Filters Container */}
        <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-xs mb-8 space-y-4">
          
          {/* Main Search Input */}
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Cari merek atau model (misal: Avanza, Brio, Innova, Xpander)..."
              className="w-full bg-slate-50 border border-slate-300 hover:border-slate-400 focus:border-emerald-600 focus:bg-white rounded-xl pl-12 pr-4 py-3.5 text-sm font-semibold text-slate-900 focus:outline-none transition-colors"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-slate-600 cursor-pointer"
              >
                Hapus
              </button>
            )}
          </div>

          {/* Filter Dropdowns Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 pt-2">
            
            {/* Filter Merek */}
            <div>
              <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                Merek
              </label>
              <select
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs font-semibold text-slate-800 focus:border-emerald-600 focus:outline-none cursor-pointer"
              >
                <option value="Semua">Semua Merek</option>
                <option value="Toyota">Toyota</option>
                <option value="Honda">Honda</option>
                <option value="Mitsubishi">Mitsubishi</option>
                <option value="Daihatsu">Daihatsu</option>
                <option value="Suzuki">Suzuki</option>
              </select>
            </div>

            {/* Filter Tahun */}
            <div>
              <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                Tahun
              </label>
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs font-semibold text-slate-800 focus:border-emerald-600 focus:outline-none cursor-pointer"
              >
                <option value="Semua">Semua Tahun</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
              </select>
            </div>

            {/* Filter Harga */}
            <div>
              <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                Rentang Harga
              </label>
              <select
                value={selectedPriceRange}
                onChange={(e) => setSelectedPriceRange(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs font-semibold text-slate-800 focus:border-emerald-600 focus:outline-none cursor-pointer"
              >
                <option value="Semua">Semua Harga</option>
                <option value="< 150 jt">&lt; Rp150 Juta</option>
                <option value="150 - 200 jt">Rp150 - 200 Juta</option>
                <option value="200 - 300 jt">Rp200 - 300 Juta</option>
                <option value="> 300 jt">&gt; Rp300 Juta</option>
              </select>
            </div>

            {/* Filter Transmisi */}
            <div>
              <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                Transmisi
              </label>
              <select
                value={selectedTransmission}
                onChange={(e) => setSelectedTransmission(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs font-semibold text-slate-800 focus:border-emerald-600 focus:outline-none cursor-pointer"
              >
                <option value="Semua">Semua Transmisi</option>
                <option value="Automatic">Automatic (AT)</option>
                <option value="Manual">Manual (MT)</option>
              </select>
            </div>

            {/* Filter Showroom */}
            <div>
              <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                Showroom
              </label>
              <select
                value={selectedShowroom}
                onChange={(e) => setSelectedShowroom(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs font-semibold text-slate-800 focus:border-emerald-600 focus:outline-none cursor-pointer"
              >
                <option value="Semua">Semua Showroom</option>
                <option value="FA">Hanya PT Fokus Abadi</option>
                <option value="Kompetitor">Showroom Pembanding</option>
              </select>
            </div>

          </div>

          {/* Filter Status Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-2 text-xs text-slate-500 border-t border-slate-100">
            <div>
              Menampilkan <span className="font-bold text-slate-900">{filteredVehicles.length}</span> dari {MOCK_VEHICLES_CATALOG.length} kendaraan
            </div>

            <button
              onClick={handleResetFilters}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800 transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Semua Filter</span>
            </button>
          </div>

        </div>

        {/* Vehicle Cards Grid */}
        {filteredVehicles.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredVehicles.map((car) => (
              <VehicleCard
                key={car.id}
                vehicle={car}
                onCompare={onCompareVehicle}
              />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center max-w-md mx-auto space-y-4">
            <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-800">
              Tidak Ada Kendaraan Sesuai Filter
            </h3>
            <p className="text-xs text-slate-500">
              Coba ubah kata kunci pencarian atau reset filter untuk melihat katalog lengkap.
            </p>
            <button
              onClick={handleResetFilters}
              className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl transition-colors cursor-pointer"
            >
              Reset Filter
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
