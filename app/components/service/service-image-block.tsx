import Image from "next/image";

interface Props {
  title: string;
  description: string;
  imgPath: string;
  reverse?: boolean;
}

export default function ServiceImageBlock({
  title,
  description,
  imgPath,
  reverse = false,
}: Props) {
  return (
    <section className="py-16 px-6">
      <div
        className={`max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 ${
          reverse ? "md:flex-row-reverse" : ""
        }`}
      >
        <div className="flex-1">
          <Image
            src={imgPath}
            alt={title}
            width={600}
            height={400}
            className="rounded-2xl shadow-2xl"
          />
        </div>

        <div className="flex-1 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-black">{title}</h2>
          <p className="text-black leading-relaxed text-lg">{description}</p>
        </div>
      </div>
    </section>
  );
}
