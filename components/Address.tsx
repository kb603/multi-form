"use client";

import { AddressSchema } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { useFormStore } from "@/store/formStore";

type AddressSchema = z.infer<typeof AddressSchema>;

export default function AddressForm() {
  const { updateAddress } = useFormStore();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddressSchema>({
    resolver: zodResolver(AddressSchema),
  });

  const onSubmit: SubmitHandler<AddressSchema> = (data) => {
    updateAddress(data);
    router.push("/summary");
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-white rounded-md">
      <h2 className="text-xl font-medium text-gray-900 mb-4 text-center">
        Address
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
        <div>
          <label
            htmlFor="streetAddress"
            className="block text-sm text-gray-600"
          >
            Street Address
          </label>
          <input
            {...register("streetAddress")}
            type="text"
            className="mt-1 w-full rounded-md border border-gray-200 p-2 text-sm focus:border-blue-400 focus:outline-none"
          />
          {errors.streetAddress && (
            <div className="text-red-500">{errors.streetAddress.message}</div>
          )}
        </div>
        <div>
          <label htmlFor="city" className="block text-sm text-gray-600">
            City
          </label>
          <input
            {...register("city")}
            type="text"
            className="mt-1 w-full rounded-md border border-gray-200 p-2 text-sm focus:border-blue-400 focus:outline-none"
          />
          {errors.city && (
            <div className="text-red-500">{errors.city.message}</div>
          )}
        </div>
        <div>
          <label htmlFor="state" className="block text-sm text-gray-600">
            State
          </label>
          <input
            {...register("state")}
            type="text"
            className="mt-1 w-full rounded-md border border-gray-200 p-2 text-sm focus:border-blue-400 focus:outline-none"
          />
          {errors.state && (
            <div className="text-red-500">{errors.state.message}</div>
          )}
        </div>
        <div>
          <label htmlFor="postalCode" className="block text-sm text-gray-600">
            Zip Code
          </label>
          <input
            {...register("zipCode")}
            type="text"
            className="mt-1 w-full rounded-md border border-gray-200 p-2 text-sm focus:border-blue-400 focus:outline-none"
          />
          {errors.zipCode && (
            <div className="text-red-500">{errors.zipCode.message}</div>
          )}
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
