import { Leaf } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import ThoughtStream from "@/components/ThoughtStream";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-[600px] mx-auto px-6 py-12 md:py-20">
        {/* Title */}
        <header className="mb-12">
          <h1 className="font-display text-4xl md:text-5xl font-light text-foreground tracking-tight">
            Leaves on a Stream
          </h1>
          <p className="font-display text-lg text-muted-foreground mt-2">
            mindfulness exercise
          </p>
        </header>

        {/* Overview */}
        <section className="mb-12">
          <SectionHeader title="Overview" />
          <p className="font-body text-sm leading-relaxed text-foreground">
            During the <strong>leaves on a stream</strong> exercise, you will visualize yourself
            resting near a stream. Whenever thoughts enter your mind, you will imagine placing
            them atop a leaf, and watching as they float away. Instead of seeing the world from
            "inside" your thoughts, you will take a step back and view them from afar. By doing
            so, you will gain perspective on your thoughts and feelings, reducing their power.
          </p>
        </section>

        {/* Getting Started */}
        <section className="mb-12">
          <SectionHeader title="Getting Started" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              "Find a quiet place, free of distractions.",
              "Sit or lie down in a comfortable position.",
              "Close your eyes or let your gaze soften.",
              "Begin taking slow, deep breaths.",
            ].map((step, i) => (
              <div
                key={i}
                className="bg-secondary border border-border rounded-sm px-3 py-4 text-center"
              >
                <p className="font-body text-xs leading-relaxed text-foreground">{step}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Instructions */}
        <section className="mb-12">
          <SectionHeader title="Instructions" />
          <div className="space-y-6">
            {[
              {
                title: "Visualize",
                text: "Imagine you are resting by the side of a stream. This scene can look however you like. Use all your senses to imagine what the stream and its surroundings look like, the sound of the water and other ambiance, the physical sensations, and anything else that comes to mind.",
              },
              {
                title: "Meditate",
                text: 'Your objective during this exercise is simply to focus on the stream. When distractions enter your mind, such as thoughts or feelings, take a moment to notice them without judgment. For example, if you are distracted by other obligations, notice and acknowledge to yourself: "I am thinking about my to-do list."',
              },
              {
                title: "Manage Your Thoughts",
                text: "After taking a moment to observe a thought or feeling, return your attention to the stream. Place your thought upon a leaf. You might imagine writing the thought on the leaf or attaching it in some other way. Place the leaf in the water and watch it float down the stream until it disappears.",
              },
              {
                title: "Practice",
                text: "Continue visualizing the stream, simply observing and releasing any thoughts that enter your mind. There is nothing else you need to do. You may set a timer for 10-15 minutes to know when practice concludes.",
              },
            ].map((item, i) => (
              <div key={i}>
                <h3 className="flex items-center gap-2 font-display text-base font-medium text-foreground mb-1">
                  <Leaf className="w-4 h-4 text-leaf-accent" />
                  {item.title}
                </h3>
                <p className="font-body text-sm leading-relaxed text-foreground pl-6">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Notes */}
        <section className="mb-16">
          <SectionHeader title="Notes" />
          <ul className="space-y-3">
            {[
              "Treat all of your thoughts and feelings the same, whether comfortable, uncomfortable, or neutral. The goal is to become aware of your experience—not to change or improve it.",
              "With regular practice, the leaves on a stream exercise will become easier, and its positive effects more powerful.",
            ].map((note, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-note-bullet mt-1.5 shrink-0" />
                <p className="font-body text-sm leading-relaxed text-foreground">{note}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Interactive Stream */}
        <section className="mb-20">
          <SectionHeader title="Your Stream" />
          <p className="font-body text-sm text-muted-foreground mb-6">
            When you're ready, notice a thought or feeling. Type it below, place it on a leaf,
            and watch it drift away.
          </p>
          <ThoughtStream />
        </section>
      </div>
    </div>
  );
};

export default Index;
