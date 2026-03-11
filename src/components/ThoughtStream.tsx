import { useState } from "react";
import { Leaf } from "lucide-react";

interface ReleasedThought {
  id: number;
  text: string;
}

const ThoughtStream = () => {
  const [thoughts, setThoughts] = useState<ReleasedThought[]>([]);
  const [currentThought, setCurrentThought] = useState("");

  const placeOnLeaf = () => {
    if (!currentThought.trim()) return;
    setThoughts((prev) => [...prev, { id: Date.now(), text: currentThought.trim() }]);
    setCurrentThought("");
  };

  return (
    <div className="space-y-6">
      {thoughts.map((t) => (
        <div key={t.id} className="flex items-start gap-3 animate-fade-downstream">
          <Leaf className="w-5 h-5 text-leaf-accent mt-0.5 shrink-0" />
          <p className="font-body text-thought-text text-sm leading-relaxed">{t.text}</p>
        </div>
      ))}

      <div className="space-y-3">
        <textarea
          value={currentThought}
          onChange={(e) => setCurrentThought(e.target.value)}
          placeholder="Notice a thought or feeling..."
          className="w-full bg-input border border-border rounded-sm px-4 py-3 text-thought-text font-body text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring resize-none min-h-[80px]"
        />
        <button
          onClick={placeOnLeaf}
          disabled={!currentThought.trim()}
          className="flex items-center gap-2 bg-secondary hover:bg-primary/20 text-leaf-accent border border-border rounded-sm px-4 py-2 text-sm font-body transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <Leaf className="w-4 h-4" />
          Place on a leaf
        </button>
      </div>
    </div>
  );
};

export default ThoughtStream;
