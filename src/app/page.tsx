import { IssuesTable } from "@/components/issues-table";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "@radix-ui/react-icons";

export default function Home() {
  return (
    <main className="max-w-2xl mx-auto py-5 h-screen">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Hello Alejandro! 🔥</h1>
        <Button size="icon" variant="ghost" className="rounded-full">
          <PlusIcon className="h-5 w-5" />
        </Button>
      </div>
      <IssuesTable />
    </main>
  );
}
