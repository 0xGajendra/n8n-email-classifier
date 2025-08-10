import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useEmailStore } from "@/store/emailStore.js";

const categories = ["Important", "Spam", "Social", "Promotional"];

export default function CategoryTabs() {
  const { category, setCategory } = useEmailStore();

  return (
    <Tabs value={category} onValueChange={setCategory} className="mb-6">
      <TabsList>
        {categories.map((cat) => (
          <TabsTrigger key={cat} value={cat} className="focus:inset-shadow-sm focus:inset-shadow-white/40 active:inset-shadow-sm active:inset-shadow-white/40">
            {cat}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
}
