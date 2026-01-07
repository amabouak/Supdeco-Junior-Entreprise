"use client";  

import dynamic from 'next/dynamic';

const Prestations = dynamic(() => import('@/app/components/Prestations'), {
  ssr: false, 
  loading: () => (
    <div className="min-h-screen py-24 flex items-center justify-center bg-gradient-to-br from-slate-50 to-emerald-50">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-emerald-200 border-t-emerald-500 rounded-full animate-spin mx-auto mb-8 shadow-lg" />
        <h2 className="text-2xl font-bold text-midnightblue mb-2">Nos Prestations</h2>
        <p className="text-bluegrey">Chargement des services professionnels...</p>
      </div>
    </div>
  )
});

export default function NosPrestationsPage() {
  return <Prestations />;
}
