import { Card, CardContent } from "@/components/ui/card";
import { Mail } from "lucide-react";

export default function EmailCard({ email }: any) {
  return (
    <Card className="bg-muted text-muted-foreground inset-shadow-sm inset-shadow-white/40">
      <CardContent className="p-4 space-y-1">
        <h3 className="text-lg font-semibold text-white flex items-center gap-2">
          <Mail size={18} /> {email.subject}
        </h3>
        <p className="text-sm text-zinc-400">From: {email.sender}</p>
        <p className="text-sm">{email.body}</p>
        <p className="text-xs text-right text-gray-500">
          {new Date(email.time).toLocaleString()}
        </p>
      </CardContent>
    </Card>
  );
}
