import { useEffect } from "react";
import { useEmailStore, type EmailStore } from "@/store/emailStore.js";
import CategoryTabs from "@/components/CategoryTabs";
import EmailCard from "@/components/EmailCard";
import { Mail } from "lucide-react";

function App() {
   const { loadEmails, allEmails, emails } = useEmailStore();

  useEffect(() => {
  loadEmails(); // Fetch all once on mount
}, []);


  return (
    <div className="min-h-screen w-full relative bg-background">
    {/* Crimson Shadow Background with Top Glow */}
    <div
      className="absolute inset-0 z-0"
      style={{
        background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(255, 225, 225, 0.1), transparent 70%), #000000",
      }}
    />
  
    {/* Your Content/Components */}
    <div className="min-h-screen p-20  text-foreground  max-w-7xl mx-auto relative">
      <h1 className=" font-bold mb-4 flex justify-center items-center text-6xl"><Mail className="size-16 mr-10 animate-bounce text-white inset-shadow-sm inset-shadow-white/40 bg-background p-2 rounded-xl"/> Check <span className="shadow-3xl inset-shadow-sm inset-shadow-white/40 shadow-white bg-accent rounded-2xl p-2 mx-2">Mails</span> That Truly <span className="shadow-3xl shadow-white bg-accent rounded-2xl p-2 mx-2 inset-shadow-sm inset-shadow-white/40">Matter</span></h1>
      <CategoryTabs />
      <div className="grid gap-4">
        {emails.length === 0 ? (
          <p className="text-muted-foreground">No emails in this category.</p>
        ) : (
          emails.map((email: any) => <EmailCard key={email._id} email={email} />)
        )}
      </div>
    </div>
    </div>
  );
}

export default App;
