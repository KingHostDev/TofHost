"use client";
import { Check, X, Eye } from "lucide-react";

const pendingKYC = [
  { id: "v1", store: "Ultimate Spiritual", name: "John Doe", type: "NIN", date: "Jan 08, 2026" },
  { id: "v2", store: "Faith Works", name: "Sarah Smith", type: "Driver License", date: "Jan 09, 2026" },
];

export default function AdminKYC() {
  return (
    <div className="max-w-6xl">
      <h1 className="font-heading text-3xl font-bold mb-8 text-tof-navy">Pending Verifications</h1>

      <div className="bg-white rounded-[32px] border border-gray-100 shadow-sm overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-50 text-gray-400 text-[10px] uppercase font-bold tracking-widest">
            <tr>
              <th className="p-6">Store Name</th>
              <th className="p-6">Owner</th>
              <th className="p-6">Document</th>
              <th className="p-6">Date Sent</th>
              <th className="p-6 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50 font-manrope">
            {pendingKYC.map((req) => (
              <tr key={req.id} className="hover:bg-gray-50/50 transition-colors">
                <td className="p-6 font-bold text-tof-navy">{req.store}</td>
                <td className="p-6 text-gray-500">{req.name}</td>
                <td className="p-6"><span className="bg-tof-blue-light text-tof-blue px-2 py-1 rounded-md text-xs font-bold">{req.type}</span></td>
                <td className="p-6 text-gray-400">{req.date}</td>
                <td className="p-6">
                  <div className="flex justify-end gap-2">
                    <button className="p-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-tof-blue hover:text-white transition-all"><Eye size={18} /></button>
                    <button className="p-2 bg-green-50 text-green-600 rounded-lg hover:bg-green-600 hover:text-white transition-all"><Check size={18} /></button>
                    <button className="p-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-600 hover:text-white transition-all"><X size={18} /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}