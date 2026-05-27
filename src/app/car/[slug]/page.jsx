"use client";

import { use } from "react";
import singleCar from "@/hooks/singleCar";
import { ClipboardCheck, PhoneCall, Heart } from "lucide-react";

import CarGallery from "@/components/Cars/CarGallery";
import CarOverview from "@/components/Cars/CarOverview";
import CarFeatures from "@/components/Cars/CarFeatures";
import CarSpecs from "@/components/Cars/CarSpecs";
import SimilarCars from "@/components/Cars/SimilarCars";

export default function CarDetailsPage({ params }) {
  const { slug } = use(params);
  const { car, loading, error } = singleCar(slug);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-pulse flex flex-col items-center">
           <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-4"></div>
           <p className="text-xl font-bold text-gray-500">Fetching Premium Car Details...</p>
        </div>
      </div>
    );
  }

  if (error || !car) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
         <div className="text-center p-10 bg-white rounded-3xl shadow-xl border border-gray-100">
            <h2 className="text-4xl font-black text-gray-900 mb-4">Car Not Found</h2>
            <p className="text-gray-500 text-lg font-medium">The car you're looking for might have been sold or removed.</p>
         </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50/50 pb-20">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          <div className="lg:col-span-2 space-y-2">
            <CarGallery car={car} />
            <CarOverview car={car} />
            <CarFeatures car={car} />
            <CarSpecs car={car} />
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
              
              {/* Seller / Action Card */}
              <div className="bg-white rounded-3xl p-8 shadow-2xl shadow-gray-200/50 border border-gray-100 relative overflow-hidden group">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-[100px] -z-10 group-hover:scale-125 transition-transform duration-500"></div>
                 <h3 className="text-3xl font-black text-gray-900 mb-3">Interested?</h3>
                 <p className="text-gray-500 mb-8 font-medium leading-relaxed">Contact the seller to schedule a test drive or make a reasonable offer.</p>
                 
                 <div className="space-y-4">
                   <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg py-4 px-6 rounded-2xl flex items-center justify-center gap-3 transition-all hover:shadow-lg hover:-translate-y-1">
                     <PhoneCall size={22} /> Contact Seller
                   </button>
                   <button className="w-full bg-gray-50 hover:bg-gray-100 text-gray-800 font-bold text-lg py-4 px-6 rounded-2xl flex items-center justify-center gap-3 transition-all border border-gray-200 hover:border-gray-300">
                     <Heart size={22} className="text-red-500" /> Save to Shortlist
                   </button>
                 </div>
              </div>

              {/* Inspection Report */}
              {car.inspectionReport && (
                <div className="bg-white rounded-3xl p-8 shadow-xl shadow-gray-200/50 border border-gray-100">
                  <h3 className="text-2xl font-black text-gray-900 mb-6 flex items-center gap-3">
                    <ClipboardCheck className="text-blue-600" size={28} /> Inspection Report
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors">
                      <span className="text-gray-600 font-bold">Engine Condition</span>
                      <span className="font-extrabold text-green-700 bg-green-100 px-4 py-1.5 rounded-xl">{car.inspectionReport.engineCondition}</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors">
                      <span className="text-gray-600 font-bold">Tyre Condition</span>
                      <span className="font-extrabold text-green-700 bg-green-100 px-4 py-1.5 rounded-xl">{car.inspectionReport.tyreCondition}</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors">
                      <span className="text-gray-600 font-bold">Accidental History</span>
                      <span className={`font-extrabold px-4 py-1.5 rounded-xl ${car.inspectionReport.accidental ? 'text-red-700 bg-red-100' : 'text-green-700 bg-green-100'}`}>
                        {car.inspectionReport.accidental ? 'Yes' : 'Clean'}
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors">
                      <span className="text-gray-600 font-bold">Insurance Status</span>
                      <span className={`font-extrabold px-4 py-1.5 rounded-xl ${car.inspectionReport.insuranceValid ? 'text-green-700 bg-green-100' : 'text-red-700 bg-red-100'}`}>
                        {car.inspectionReport.insuranceValid ? 'Active' : 'Expired'}
                      </span>
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>

        <div className="mt-16">
          <SimilarCars />
        </div>
      </div>
    </div>
  );
}