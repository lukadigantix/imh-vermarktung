type PropertyGalleryProps = {
  title: string;
  imageCount?: number;
};

export function PropertyGallery({ title, imageCount = 5 }: PropertyGalleryProps) {
  const placeholderGradients = [
    "from-stone-300 to-stone-400",
    "from-zinc-200 to-stone-300",
    "from-stone-400 to-stone-500",
    "from-zinc-300 to-zinc-400",
    "from-stone-200 to-stone-300",
  ];

  const shown = Math.min(imageCount, placeholderGradients.length);

  return (
    <div className="grid grid-cols-4 grid-rows-2 gap-1 h-[500px]">
      {/* Main image */}
      <div
        className={`col-span-4 row-span-1 bg-gradient-to-br ${placeholderGradients[0]} flex items-center justify-center md:col-span-3 md:row-span-2`}
        aria-label={`Hauptbild: ${title}`}
      >
        <span className="font-sans text-xs tracking-widest uppercase text-stone-500/60">
          Hauptbild
        </span>
      </div>

      {/* Thumbnails */}
      {placeholderGradients.slice(1, shown).map((gradient, i) => (
        <div
          key={i}
          className={`hidden bg-gradient-to-br ${gradient} md:flex items-center justify-center`}
          aria-label={`Bild ${i + 2}`}
        >
          <span className="font-sans text-[0.6rem] tracking-widest uppercase text-stone-500/50">
            Foto {i + 2}
          </span>
        </div>
      ))}
    </div>
  );
}
