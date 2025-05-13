"use client";

import { StatusSchema } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { useFormStore } from "@/store/formStore";

type StatusSchema = z.infer<typeof StatusSchema>;

export default function StatusForm() {
  const { updateStatus } = useFormStore();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<StatusSchema>({
    resolver: zodResolver(StatusSchema),
  });

  const onSubmit: SubmitHandler<StatusSchema> = (data) => {
    updateStatus(data);
    router.push("/address");
  };
  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-white rounded-md">
      <h2 className="text-xl font-medium text-gray-900 mb-4 text-center">
        Personal Info
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
        <div>
          <label
            htmlFor="maritalStatus"
            className="block text-sm text-gray-600"
          >
            Marital Status
          </label>
          <select
            {...register("maritalStatus")}
            className="mt-1 w-full rounded-md border border-gray-200 p-2 text-sm focus:border-blue-400 focus:outline-none"
          >
            <option value="" disabled hidden>
              Select status
            </option>
            <option value="single">Single</option>
            <option value="married">Married</option>
          </select>
        </div>
        {errors.maritalStatus && (
          <div className="text-red-500">{errors.maritalStatus.message}</div>
        )}
        <div>
          <label htmlFor="age" className="block text-sm text-gray-600">
            Age
          </label>
          <input
            {...register("age", { valueAsNumber: true })}
            type="number"
            className="mt-1 w-full rounded-md border border-gray-200 p-2 text-sm focus:border-blue-400 focus:outline-none"
          />
          {errors.age && (
            <div className="text-red-500">{errors.age.message}</div>
          )}
        </div>
        <div>
          <label htmlFor="idNumber" className="block text-sm text-gray-600">
            ID Number
          </label>
          <input
            {...register("idNumber")}
            type="number"
            className="mt-1 w-full rounded-md border border-gray-200 p-2 text-sm focus:border-blue-400 focus:outline-none"
          />
          {errors.idNumber && (
            <div className="text-red-500">{errors.idNumber.message}</div>
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
