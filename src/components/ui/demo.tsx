import { LogoCloud } from "@/components/ui/logo-cloud-2";

export default function DemoOne() {
  return (
    <div className="w-full py-16 sm:py-20 place-content-center px-4">
      <section className="relative mx-auto grid max-w-4xl">
        <h2 className="mb-8 text-center font-medium text-lg text-muted-foreground tracking-tight md:text-2xl">
          Selected{" "}
          <span className="font-semibold text-primary text-[#C4D600]">clients</span> I’ve designed for.
        </h2>

        <LogoCloud />
      </section>
    </div>
  );
}
