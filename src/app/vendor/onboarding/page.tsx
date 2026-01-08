"use client";
import { ShieldCheck, Upload, Landmark, Store } from "lucide-react";

export default function VendorOnboarding() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="font-heading text-4xl font-bold text-tof-navy">Vendor Verification</h1>
          <p className="text-gray-500 mt-2">Complete these steps to start listing products on TofHost.</p>
        </div>

        <div className="space-y-6">
          {/* Step 1: Identity */}
          <div className="bg-white p-8 rounded-[32px] shadow-sm border border-gray-100 flex gap-6 items-start">
            <div className="bg-tof-blue-light p-4 rounded-2xl text-tof-blue"><ShieldCheck /></div>
            <div className="flex-1">
              <h3 className="font-bold text-lg">Identity Verification</h3>
              <p className="text-sm text-gray-500 mb-4">Upload a Government Issued ID (NIN, PVC, or Passport).</p>
              <div className="border-2 border-dashed border-gray-200 rounded-2xl p-8 text-center hover:border-tof-blue transition-colors cursor-pointer">
                <Upload className="mx-auto text-gray-300 mb-2" />
                <span className="text-xs font-bold text-gray-400">Click to upload ID Front & Back</span>
              </div>
            </div>
          </div>

          {/* Step 2: Bank Info */}
          <div className="bg-white p-8 rounded-[32px] shadow-sm border border-gray-100 flex gap-6 items-start">
            <div className="bg-green-50 p-4 rounded-2xl text-tof-green"><Landmark /></div>
            <div className="flex-1">
              <h3 className="font-bold text-lg">Payout Details</h3>
              <p className="text-sm text-gray-500 mb-4">Where should we send your earnings?</p>
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="Account Number" className="p-4 bg-gray-50 rounded-xl border-none outline-none focus:ring-2 ring-tof-blue" />
                <select className="p-4 bg-gray-50 rounded-xl border-none outline-none focus:ring-2 ring-tof-blue">
                  <option>Select Bank</option>
                  <option>GTBank</option>
                  <option>Zenith Bank</option>
                </select>
              </div>
            </div>
          </div>

          <button className="w-full bg-tof-blue text-white font-bold py-5 rounded-[24px] shadow-xl hover:bg-tof-navy transition-all">
            SUBMIT FOR VERIFICATION
          </button>
        </div>
      </div>
    </main>
  );
}