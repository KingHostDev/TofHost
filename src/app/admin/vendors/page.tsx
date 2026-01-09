import { prisma } from "@/lib/prisma";
import { Badge } from "@/components/shared/Badge";

export default async function AdminVendors() {
  const vendors = await prisma.vendorProfile.findMany({ include: { user: true } });

  return (
    <div className="space-y-6 font-manrope">
      <h1 className="font-heading text-4xl font-bold">Merchant Requests</h1>
      <div className="bg-white rounded-[40px] border border-gray-100 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-50 border-b border-gray-100">
            <tr>
              <th className="p-6 text-xs font-bold uppercase text-gray-400">Store</th>
              <th className="p-6 text-xs font-bold uppercase text-gray-400">Status</th>
              <th className="p-6 text-xs font-bold uppercase text-gray-400">Action</th>
            </tr>
          </thead>
          <tbody>
            {vendors.map((v) => (
              <tr key={v.id} className="border-b border-gray-50">
                <td className="p-6 font-bold">{v.storeName}</td>
                <td className="p-6"><Badge variant={v.status === "PENDING" ? "warning" : "success"}>{v.status}</Badge></td>
                <td className="p-6"><button className="text-sm font-bold text-blue-600">Review</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}