import { create } from "zustand";
import { fetchAllEmails } from "@/services/api.js";

export type Email = {
  _id: string;
  subject: string;
  sender: string;
  body: string;
  category: string;
};

export type EmailStore = {
  allEmails: Email[];
  emails: Email[];
  category: string;
  setCategory: (category: string) => void;
  loadEmails: () => Promise<void>;
};

export const useEmailStore = create<EmailStore>((set, get) => ({
  allEmails: [],
  emails: [],
  category: "Important",

  loadEmails: async () => {
    const allEmails = await fetchAllEmails();
    set({ allEmails });
    // filter based on current category
    const { category } = get();
    set({
      emails: allEmails.filter(
        (email: any) => email.category.toLowerCase() === category.toLowerCase()
      ),
    });
  },

  setCategory: (category) => {
    const { allEmails } = get();
    set({
      category,
      emails: allEmails.filter(
        (email) => email.category.toLowerCase() === category.toLowerCase()
      ),
    });
  },
}));
