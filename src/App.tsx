import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AnalysisPage } from './pages/AnalysisPage';
import { VehiclesPage } from './pages/VehiclesPage';
import { AboutPage } from './pages/AboutPage';
import { PageView, Vehicle } from './types';
import { CarFormParams } from './components/SearchForm';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageView>('home');
  const [analysisPreset, setAnalysisPreset] = useState<Partial<CarFormParams> | undefined>(
    undefined
  );
  const [autoRunDemo, setAutoRunDemo] = useState<boolean>(false);

  // Triggered when user clicks "Mulai Analisis"
  const handleStartAnalysis = () => {
    setAutoRunDemo(false);
    setCurrentPage('analysis');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Triggered when user clicks "Lihat Demo" (Avanza 2021)
  const handleViewDemo = () => {
    setAnalysisPreset({
      brand: 'Toyota',
      model: 'Avanza',
      type: '1.5 G',
      year: 2021,
      mileage: 60000,
      transmission: 'Automatic',
      fuel: 'Bensin',
      location: 'Surabaya',
    });
    setAutoRunDemo(true);
    setCurrentPage('analysis');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Triggered when user clicks "Bandingkan Harga Ini" from vehicle catalog or featured cards
  const handleSelectVehicleForCompare = (vehicle: Vehicle) => {
    setAnalysisPreset({
      brand: vehicle.brand,
      model: vehicle.model,
      type: vehicle.type,
      year: vehicle.year,
      mileage: vehicle.mileage,
      transmission: vehicle.transmission,
      fuel: vehicle.fuel,
      location: vehicle.location,
    });
    setAutoRunDemo(true);
    setCurrentPage('analysis');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-emerald-100 selection:text-emerald-900">
      
      {/* Sticky Navbar */}
      <Navbar
        currentPage={currentPage}
        setCurrentPage={(page) => {
          setCurrentPage(page);
          setAutoRunDemo(false);
        }}
        onStartAnalysis={handleStartAnalysis}
      />

      {/* Main Page Content */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onStartAnalysis={handleStartAnalysis}
            onViewDemo={handleViewDemo}
            onSelectVehicleForCompare={handleSelectVehicleForCompare}
            setCurrentPage={setCurrentPage}
          />
        )}

        {currentPage === 'analysis' && (
          <AnalysisPage
            initialCar={analysisPreset}
            autoRunDemo={autoRunDemo}
          />
        )}

        {currentPage === 'vehicles' && (
          <VehiclesPage
            onCompareVehicle={handleSelectVehicleForCompare}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage setCurrentPage={setCurrentPage} />
        )}
      </main>

      {/* Footer */}
      <Footer setCurrentPage={setCurrentPage} />

    </div>
  );
}
