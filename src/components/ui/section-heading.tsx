import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
  align = "center",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mx-auto max-w-2xl space-y-3",
        align === "center" ? "text-center" : "text-left",
        className,
      )}
    >
      {eyebrow ? (
        <p className="text-xs font-medium tracking-[0.22em] text-rose-800/70 uppercase dark:text-rose-200/70">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-heading text-3xl tracking-tight text-stone-800 sm:text-4xl dark:text-stone-100">
        {title}
      </h2>
      {description ? (
        <p className="text-base leading-relaxed text-stone-600 dark:text-stone-300">
          {description}
        </p>
      ) : null}
    </div>
  );
}
