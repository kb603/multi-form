import { create } from "zustand";

type FormData = {
  user: {
    firstName: string;
    lastName: string;
    email: string;
  };
  status: {
    maritalStatus: string;
    age: number;
    idNumber: number;
  };
  address: {
    streetAddress: string;
    city: string;
    state: string;
    zipCode: number;
  };
};

type FormStore = {
  data: Partial<FormData>;
  updateUser: (user: FormData["user"]) => void;
  updateStatus: (status: FormData["status"]) => void;
  updateAddress: (address: FormData["address"]) => void;
  reset: () => void;
};

export const useFormStore = create<FormStore>((set) => ({
  data: {},
  updateUser: (user) => set((state) => ({ data: { ...state.data, user } })),
  updateStatus: (status) =>
    set((state) => ({ data: { ...state.data, status } })),
  updateAddress: (address) =>
    set((state) => ({ data: { ...state.data, address } })),
  reset: () => set({ data: {} }),
}));
