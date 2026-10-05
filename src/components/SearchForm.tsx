import React, { useState } from 'react';
import { 
  Sparkles, 
  Car, 
  MapPin, 
  Gauge, 
  Calendar, 
  Settings2, 
  Fuel, 
  Layers, 
  RotateCcw,
  CheckCircle2,
  Clock,
  Zap
} from 'lucide-react';
import { 
  CAR_BRANDS, 
  MODELS_BY_BRAND, 
  TYPES_BY_MODEL, 
  CITIES 
} from '../data/mockData';

export interface CarFormParams {
  brand: string;
  model: string;
  type: string;
  year: number;
  mileage: number;
  transmission: 'Automatic' | 'Manual';
  fuel: 'Bensin' | 'Diesel' | 'Hybrid';
  location: string;
}

interface SearchFormProps {
  onAnalyze: (params: CarFormParams) => void;
  isLoading: boolean;
  initialParams?: Partial<CarFormParams>;
}

export const SearchForm: React.FC<SearchFormProps> = ({
  onAnalyze,
  isLoading,
  initialParams,
}) => {
  const [brand, setBrand] = useState<string>(initialParams?.brand || 'Toyota');
  const [model, setModel] = useState<string>(initialParams?.model || 'Avanza');
  const [type, setType] = useState<string>(initialParams?.type || '1.5 G');
  const [year, setYear] = useState<number>(initialParams?.year || 2021);
  const [mileage, setMileage] = useState<number>(initialParams?.mileage || 60000);
  const [transmission, setTransmission] = useState<'Automatic' | 'Manual'>(
    initialParams?.transmission || 'Automatic'
  );
  const [fuel, setFuel] = useState<'Bensin' | 'Diesel' | 'Hybrid'>(
    initialParams?.fuel || 'Bensin'
  );
  const [location, setLocation] = useState<string>(initialParams?.location || 'Surabaya');

  // Update models when brand changes
  const handleBrandChange = (newBrand: string) => {
    setBrand(newBrand);
    const availableModels = MODELS_BY_BRAND[newBrand] || ['Lainnya'];
    const newModel = availableModels[0] || 'Lainnya';
    setModel(newModel);
    const availableTypes = TYPES_BY_MODEL[newModel] || ['Standar'];
    setType(availableTypes[0] || 'Standar');
  };

  // Update types when model changes
  const handleModelChange = (newModel: string) => {
    setModel(newModel);
    const availableTypes = TYPES_BY_MODEL[newModel] || ['Standar'];
    setType(availableTypes[0] || 'Standar');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAnalyze({
      brand,
      model,
      type,
      year: Number(year),
      mileage: Number(mileage),
      transmission,
      fuel,
      location,
    });
  };

  // Quick Presets for instant sales pitch / testing
  const presets = [
    {
      label: 'Toyota Avanza 1.5 G (2021)',
      data: {
        brand: 'Toyota',
        model: 'Avanza',
        type: '1.5 G',
        year: 2021,
        mileage: 60000,
        transmission: 'Automatic' as const,
        fuel: 'Bensin' as const,
        location: 'Surabaya',
      },
    },
    {
      label: 'Honda Brio 1.2 RS (2022)',
      data: {
        brand: 'Honda',
        model: 'Brio',
        type: '1.2 RS',
        year: 2022,
        mileage: 28000,
        transmission: 'Automatic' as const,
        fuel: 'Bensin' as const,
        location: 'Surabaya',
      },
    },
    {
      label: 'Toyota Innova 2.4 V (2020)',
      data: {
        brand: 'Toyota',
        model: 'Innova',
        type: '2.4 V',
        year: 2020,
        mileage: 75000,
        transmission: 'Automatic' as const,
        fuel: 'Diesel' as const,
        location: 'Surabaya',
      },
    },
    {
      label: 'Mitsubishi Xpander Ultimate (2021)',
      data: {
        brand: 'Mitsubishi',
        model: 'Xpander',
        type: '1.5 Ultimate',
        year: 2021,
        mileage: 45000,
        transmission: 'Automatic' as const,
        fuel: 'Bensin' as const,
        location: 'Surabaya',
      },
    },
  ];

  const applyPreset = (presetData: typeof presets[0]['data']) => {
    setBrand(presetData.brand);
    setModel(presetData.model);
    setType(presetData.type);
    setYear(presetData.year);
    setMileage(presetData.mileage);
    setTransmission(presetData.transmission);
    setFuel(presetData.fuel);
    setLocation(presetData.location);
  };

  const handleReset = () => {
    applyPreset(presets[0].data);
  };

  const availableModels = MODELS_BY_BRAND[brand] || ['Avanza'];
  const availableTypes = TYPES_BY_MODEL[model] || ['1.5 G', '1.3 G', 'Standar'];

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header Form */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold mb-2">
          <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
          ESTIMASI HARGA PASAR CERDAS
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
          Analisis Harga Mobil
        </h2>
        <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-xl mx-auto">
          Lengkapi spesifikasi kendaraan di bawah ini untuk melihat perbandingan harga PT Fokus Abadi Mobil dengan showroom kompetitor.
        </p>
      </div>

      {/* Quick Select Presets Bar */}
      <div className="bg-emerald-50/60 border border-emerald-200/80 rounded-2xl p-4 mb-6">
        <div className="flex items-center justify-between gap-2 mb-2.5">
          <span className="text-xs font-bold text-emerald-900 flex items-center gap-1.5">
            <Zap className="w-4 h-4 text-emerald-600" />
            Pilih Cepat Contoh Unit Populer:
          </span>
          <button 
            type="button" 
            onClick={handleReset}
            className="text-[11px] font-semibold text-emerald-700 hover:text-emerald-900 flex items-center gap-1 cursor-pointer"
          >
            <RotateCcw className="w-3 h-3" />
            Reset Form
          </button>
        </div>

        <div className="flex flex-wrap gap-2">
          {presets.map((p, idx) => {
            const isSelected = 
              brand === p.data.brand && 
              model === p.data.model && 
              year === p.data.year;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => applyPreset(p.data)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-emerald-700 text-white shadow-xs'
                    : 'bg-white text-slate-700 border border-slate-200 hover:border-emerald-400 hover:bg-emerald-50'
                }`}
              >
                {p.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Form Box */}
      <form 
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          
          {/* Merek */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Merek Mobil
            </label>
            <div className="relative">
              <select
                value={brand}
                onChange={(e) => handleBrandChange(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 hover:border-slate-400 focus:border-emerald-600 focus:bg-white rounded-xl px-4 py-3 text-slate-900 text-sm font-semibold focus:outline-none transition-colors appearance-none cursor-pointer"
              >
                {CAR_BRANDS.map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                <Car className="w-4 h-4" />
              </div>
            </div>
            <p className="text-[11px] text-slate-400 mt-1">Pilih pabrikan mobil</p>
          </div>

          {/* Model */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Model
            </label>
            <div className="relative">
              <select
                value={model}
                onChange={(e) => handleModelChange(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 hover:border-slate-400 focus:border-emerald-600 focus:bg-white rounded-xl px-4 py-3 text-slate-900 text-sm font-semibold focus:outline-none transition-colors appearance-none cursor-pointer"
              >
                {availableModels.map((m) => (
                  <option key={m} value={m}>
                    {m}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                <Layers className="w-4 h-4" />
              </div>
            </div>
            <p className="text-[11px] text-slate-400 mt-1">Seri / varian model</p>
          </div>

          {/* Tipe */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Tipe / Varian
            </label>
            <div className="relative">
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 hover:border-slate-400 focus:border-emerald-600 focus:bg-white rounded-xl px-4 py-3 text-slate-900 text-sm font-semibold focus:outline-none transition-colors appearance-none cursor-pointer"
              >
                {availableTypes.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                <Settings2 className="w-4 h-4" />
              </div>
            </div>
            <p className="text-[11px] text-slate-400 mt-1">Spesifikasi trim grade</p>
          </div>

          {/* Tahun */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Tahun Perakitan
            </label>
            <div className="relative">
              <select
                value={year}
                onChange={(e) => setYear(Number(e.target.value))}
                className="w-full bg-slate-50 border border-slate-300 hover:border-slate-400 focus:border-emerald-600 focus:bg-white rounded-xl px-4 py-3 text-slate-900 text-sm font-semibold focus:outline-none transition-colors appearance-none cursor-pointer"
              >
                {[2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016].map((yr) => (
                  <option key={yr} value={yr}>
                    {yr}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                <Calendar className="w-4 h-4" />
              </div>
            </div>
            <p className="text-[11px] text-slate-400 mt-1">Tahun pada STNK / BPKB</p>
          </div>

          {/* Kilometer */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Kilometer Odometer
            </label>
            <div className="relative">
              <input
                type="number"
                step="5000"
                min="0"
                max="300000"
                value={mileage}
                onChange={(e) => setMileage(Number(e.target.value))}
                placeholder="60.000"
                className="w-full bg-slate-50 border border-slate-300 hover:border-slate-400 focus:border-emerald-600 focus:bg-white rounded-xl px-4 py-3 text-slate-900 text-sm font-semibold focus:outline-none transition-colors pr-14"
              />
              <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-xs font-bold text-slate-400">
                KM
              </span>
            </div>
            <p className="text-[11px] text-slate-400 mt-1">
              Jarak tempuh saat ini ({new Intl.NumberFormat('id-ID').format(mileage)} km)
            </p>
          </div>

          {/* Transmisi */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Transmisi
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setTransmission('Automatic')}
                className={`py-3 px-4 rounded-xl text-sm font-bold border transition-all cursor-pointer flex items-center justify-center gap-2 ${
                  transmission === 'Automatic'
                    ? 'bg-emerald-50 border-emerald-600 text-emerald-800 shadow-xs'
                    : 'bg-slate-50 border-slate-300 text-slate-600 hover:bg-slate-100'
                }`}
              >
                <span className={`w-2 h-2 rounded-full ${transmission === 'Automatic' ? 'bg-emerald-600' : 'bg-slate-300'}`}></span>
                Automatic (AT)
              </button>
              <button
                type="button"
                onClick={() => setTransmission('Manual')}
                className={`py-3 px-4 rounded-xl text-sm font-bold border transition-all cursor-pointer flex items-center justify-center gap-2 ${
                  transmission === 'Manual'
                    ? 'bg-emerald-50 border-emerald-600 text-emerald-800 shadow-xs'
                    : 'bg-slate-50 border-slate-300 text-slate-600 hover:bg-slate-100'
                }`}
              >
                <span className={`w-2 h-2 rounded-full ${transmission === 'Manual' ? 'bg-emerald-600' : 'bg-slate-300'}`}></span>
                Manual (MT)
              </button>
            </div>
            <p className="text-[11px] text-slate-400 mt-1">Pilihan transmisi penggerak</p>
          </div>

          {/* Bahan Bakar */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Bahan Bakar
            </label>
            <div className="relative">
              <select
                value={fuel}
                onChange={(e) => setFuel(e.target.value as any)}
                className="w-full bg-slate-50 border border-slate-300 hover:border-slate-400 focus:border-emerald-600 focus:bg-white rounded-xl px-4 py-3 text-slate-900 text-sm font-semibold focus:outline-none transition-colors appearance-none cursor-pointer"
              >
                <option value="Bensin">Bensin</option>
                <option value="Diesel">Diesel</option>
                <option value="Hybrid">Hybrid</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                <Fuel className="w-4 h-4" />
              </div>
            </div>
            <p className="text-[11px] text-slate-400 mt-1">Jenis bahan bakar mesin</p>
          </div>

          {/* Lokasi */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Lokasi Pasar Showroom
            </label>
            <div className="relative">
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 hover:border-slate-400 focus:border-emerald-600 focus:bg-white rounded-xl px-4 py-3 text-slate-900 text-sm font-semibold focus:outline-none transition-colors appearance-none cursor-pointer"
              >
                {CITIES.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                <MapPin className="w-4 h-4" />
              </div>
            </div>
            <p className="text-[11px] text-slate-400 mt-1">Area perbandingan showroom kompetitor</p>
          </div>

        </div>

        {/* Submit Button */}
        <div className="pt-4 border-t border-slate-100">
          <button
            type="submit"
            disabled={isLoading}
            className="w-full flex items-center justify-center gap-3 py-4 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-400 text-white font-extrabold text-base sm:text-lg shadow-md shadow-emerald-600/20 transition-all hover:scale-[1.01] active:scale-98 cursor-pointer"
          >
            {isLoading ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                <span>MEMPROSES ANALISIS AI...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-5 h-5 text-emerald-200" />
                <span>ANALISIS HARGA DENGAN AI</span>
              </>
            )}
          </button>
          
          <div className="flex items-center justify-center gap-4 mt-3 text-xs text-slate-500 font-medium">
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              Algoritma valuasi pasar objektif
            </span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-emerald-600" />
              Data komparasi terupdate 2026
            </span>
          </div>
        </div>

      </form>
    </div>
  );
};
