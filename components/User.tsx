"use client";

import { UserSchema } from "@/lib/schema";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useFormStore } from "@/store/formStore";

type UserSchema = z.infer<typeof UserSchema>;

export default function UserPage() {
  const { updateUser } = useFormStore();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserSchema>({
    resolver: zodResolver(UserSchema),
  });

  const onSubmit: SubmitHandler<UserSchema> = (data) => {
    updateUser(data);
    router.push("/status");
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-white rounded-md">
      <h2 className="text-xl font-medium text-gray-900 mb-4 text-center">
        User Info
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
        <div>
          <label htmlFor="firstName" className="block text-sm text-gray-600">
            First Name
          </label>
          <input
            {...register("firstName")}
            type="text"
            className="mt-1 w-full rounded-md border border-gray-200 p-2 text-sm focus:border-blue-400 focus:outline-none"
          />
          {errors.firstName && (
            <div className="text-red-500">{errors.firstName.message}</div>
          )}
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm text-gray-600">
            Last Name
          </label>
          <input
            {...register("lastName")}
            type="text"
            className="mt-1 w-full rounded-md border border-gray-200 p-2 text-sm focus:border-blue-400 focus:outline-none"
          />
          {errors.lastName && (
            <div className="text-red-500">{errors.lastName.message}</div>
          )}
        </div>
        <div>
          <label htmlFor="email" className="block text-sm text-gray-600">
            Email
          </label>
          <input
            {...register("email")}
            type="email"
            className="mt-1 w-full rounded-md border border-gray-200 p-2 text-sm focus:border-blue-400 focus:outline-none"
          />
          {errors.email && (
            <div className="text-red-500">{errors.email.message}</div>
          )}
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
        >
          Next
        </button>
      </form>
    </div>
  );
}
