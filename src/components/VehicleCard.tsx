import React from 'react';
import { Vehicle } from '../types';
import { formatRupiah, formatNumber } from '../utils/formatters';
import { 
  MapPin, 
  Gauge, 
  Calendar, 
  Cog, 
  Building2, 
  ArrowRight, 
  Sparkles,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

interface VehicleCardProps {
  vehicle: Vehicle;
  onCompare: (vehicle: Vehicle) => void;
}

export const VehicleCard: React.FC<VehicleCardProps> = ({ vehicle, onCompare }) => {
  const isFA = vehicle.showroom.includes('PT Fokus Abadi');

  return (
    <div className="bg-white rounded-2xl border border-slate-200 hover:border-emerald-500/50 hover:shadow-lg transition-all duration-200 overflow-hidden flex flex-col justify-between group">
      
      {/* Top Card Body */}
      <div className="p-5">
        
        {/* Top Badges */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-200/80 px-2.5 py-0.5 rounded-full">
            {vehicle.brand}
          </span>
          {vehicle.statusBadge && (
            <span className={`text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full ${
              vehicle.statusBadge.includes('Terendah')
                ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                : 'bg-amber-100 text-amber-900 border border-amber-300'
            }`}>
              {vehicle.statusBadge}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-emerald-700 transition-colors">
          {vehicle.brand} {vehicle.model}
        </h3>
        <p className="text-xs font-semibold text-slate-500 mb-4">
          Tipe {vehicle.type}
        </p>

        {/* Specifications Pills */}
        <div className="grid grid-cols-2 gap-2 text-xs py-3 border-y border-slate-100 text-slate-600 mb-4 font-medium">
          <div className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-slate-400" />
            <span>Tahun {vehicle.year}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Cog className="w-3.5 h-3.5 text-slate-400" />
            <span>{vehicle.transmission}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Gauge className="w-3.5 h-3.5 text-slate-400" />
            <span>{formatNumber(vehicle.mileage)} KM</span>
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-slate-400" />
            <span>{vehicle.location}</span>
          </div>
        </div>

        {/* Showroom Label */}
        <div className="flex items-center gap-2 mb-2 text-xs">
          {isFA ? (
            <span className="w-5 h-5 rounded-md bg-emerald-600 text-white font-black text-[10px] flex items-center justify-center">
              FA
            </span>
          ) : (
            <Building2 className="w-4 h-4 text-slate-400" />
          )}
          <span className={`font-bold ${isFA ? 'text-emerald-900' : 'text-slate-700'}`}>
            {vehicle.showroom}
          </span>
        </div>

        {/* Price Display */}
        <div className="mt-2 pt-2">
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
            Harga Penawaran:
          </span>
          <div className="text-xl sm:text-2xl font-black text-slate-900 mt-0.5">
            {formatRupiah(vehicle.price)}
          </div>
        </div>

      </div>

      {/* Card Action Footer */}
      <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between gap-2">
        <span className="text-[11px] text-slate-400 font-medium">
          {vehicle.plateRegion ? `Plat ${vehicle.plateRegion}` : 'Siap Diuji'}
        </span>
        <button
          onClick={() => onCompare(vehicle)}
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all shadow-2xs group-hover:shadow-sm cursor-pointer"
        >
          <span>Bandingkan Harga</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

    </div>
  );
};
