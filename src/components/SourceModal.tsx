import React from 'react';
import { ShowroomComparison } from '../types';
import { formatRupiah, formatNumber } from '../utils/formatters';
import { 
  X, 
  ExternalLink, 
  MapPin, 
  Calendar, 
  FileText, 
  CheckCircle2, 
  ShieldCheck, 
  Building2,
  Clock
} from 'lucide-react';

interface SourceModalProps {
  item: ShowroomComparison | null;
  onClose: () => void;
}

export const SourceModal: React.FC<SourceModalProps> = ({ item, onClose }) => {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-2xl max-w-lg w-full shadow-2xl border border-slate-200 overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Modal */}
        <div className="bg-slate-50 px-6 py-4 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold text-xs">
              FA
            </span>
            <div>
              <h3 className="text-base font-extrabold text-slate-900 leading-tight">
                Sumber Data Pembanding
              </h3>
              <p className="text-[11px] text-slate-500 font-medium">
                Verifikasi transparansi pasar FA PriceCheck
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200 flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Tutup modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-5">
          
          {/* Showroom & Price Highlight */}
          <div className="bg-slate-50 rounded-xl p-4 border border-slate-200/90">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  Showroom Pembanding
                </span>
                <h4 className="text-xl font-black text-slate-900 mt-0.5">
                  {item.showroom}
                </h4>
              </div>
              <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-slate-200/80 text-slate-700">
                Peringkat #{item.rank}
              </span>
            </div>

            <div className="mt-3 pt-3 border-t border-slate-200/70 flex items-baseline justify-between">
              <span className="text-xs font-semibold text-slate-500">Harga Listing:</span>
              <span className="text-2xl font-black text-slate-900">
                {formatRupiah(item.price)}
              </span>
            </div>
          </div>

          {/* Details Grid */}
          <div className="space-y-3 text-sm">
            
            {/* Kendaraan */}
            <div className="flex items-center justify-between py-1.5 border-b border-slate-100">
              <span className="text-slate-500 font-medium text-xs flex items-center gap-1.5">
                <FileText className="w-4 h-4 text-slate-400" />
                Kendaraan
              </span>
              <span className="font-bold text-slate-900 text-xs sm:text-sm">
                {item.vehicle} ({item.year})
              </span>
            </div>

            {/* Odometer */}
            <div className="flex items-center justify-between py-1.5 border-b border-slate-100">
              <span className="text-slate-500 font-medium text-xs">
                Kilometer (KM)
              </span>
              <span className="font-semibold text-slate-800 text-xs sm:text-sm">
                {formatNumber(item.mileage)} KM
              </span>
            </div>

            {/* Lokasi */}
            <div className="flex items-center justify-between py-1.5 border-b border-slate-100">
              <span className="text-slate-500 font-medium text-xs flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-slate-400" />
                Lokasi
              </span>
              <span className="font-semibold text-slate-800 text-xs sm:text-sm">
                {item.location}
              </span>
            </div>

            {/* Sumber Data */}
            <div className="flex items-center justify-between py-1.5 border-b border-slate-100">
              <span className="text-slate-500 font-medium text-xs flex items-center gap-1.5">
                <Building2 className="w-4 h-4 text-slate-400" />
                Sumber Data
              </span>
              <span className="font-bold text-emerald-700 text-xs sm:text-sm">
                {item.sourceName}
              </span>
            </div>

            {/* Tanggal */}
            <div className="flex items-center justify-between py-1.5 border-b border-slate-100">
              <span className="text-slate-500 font-medium text-xs flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-slate-400" />
                Tanggal Pencatatan
              </span>
              <span className="font-semibold text-slate-800 text-xs sm:text-sm">
                {item.date}
              </span>
            </div>

          </div>

          {/* Notes */}
          {item.notes && (
            <div className="bg-emerald-50/60 rounded-xl p-3 border border-emerald-100 text-xs text-slate-600">
              <span className="font-bold text-emerald-900 block mb-0.5">Catatan Unit:</span>
              <p>{item.notes}</p>
            </div>
          )}

          {/* Trust Guarantee info */}
          <div className="flex items-center gap-2 text-[11px] text-slate-400">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>
              Data diperoleh dari listing terbuka showroom dan dipublikasikan untuk keperluan perbandingan konsumen.
            </span>
          </div>
        </div>

        {/* Modal Footer with Actions */}
        <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-end gap-2.5">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-100 text-xs sm:text-sm font-bold transition-colors cursor-pointer"
          >
            Tutup
          </button>

          <button
            type="button"
            onClick={() => {
              // Notification for prototype behavior
              alert(`Prototype Mode: Menampilkan link sumber eksternal untuk "${item.sourceName}" (${item.showroom}).`);
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold shadow-xs transition-colors cursor-pointer"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Buka Sumber</span>
          </button>
        </div>

      </div>
    </div>
  );
};
