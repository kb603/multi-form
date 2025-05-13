"use client";

import { useFormStore } from "@/store/formStore";

export default function SummaryPage() {
  const { data } = useFormStore();

  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-white rounded-md space-y-4">
      <h2 className="text-2xl font-semibold text-center">Summary</h2>
      <div>
        <h3 className="font-medium text-lg">User Info</h3>
        <p>First Name: {data.user?.firstName}</p>
        <p>Last Name: {data.user?.lastName}</p>
        <p>Email: {data.user?.email}</p>
      </div>
      <div>
        <h3 className="font-medium text-lg">Status</h3>
        <p>Marital Status: {data.status?.maritalStatus}</p>
        <p>Age: {data.status?.age}</p>
        <p>ID Number: {data.status?.idNumber}</p>
      </div>
      <div>
        <h3 className="font-medium text-lg">Address</h3>
        <p>Street: {data.address?.streetAddress}</p>
        <p>City: {data.address?.city}</p>
        <p>State: {data.address?.state}</p>
        <p>Zip Code: {data.address?.zipCode}</p>
      </div>
    </div>
  );
}
