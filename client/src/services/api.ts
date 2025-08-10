const BASE_URL = import.meta.env.VITE_BACKEND_URL;

export const fetchEmailsByCategory = async (category: string) => {
  const normalizedCategory = category.toLowerCase(); // 👈 normalize
  const res = await fetch(`${BASE_URL}/category/${normalizedCategory}`);
  if (!res.ok) throw new Error(`Failed to fetch emails: ${res.status}`);
  return res.json();
};

export const fetchAllEmails = async () => {
  const res = await fetch(BASE_URL);
  if (!res.ok) throw new Error(`Failed to fetch emails: ${res.status}`);
  return res.json();
};
