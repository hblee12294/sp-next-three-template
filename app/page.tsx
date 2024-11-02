import { Banner } from "@/components/banner";

export default function Home() {
  return (
    <div className="h-dvh">
      <header className="fixed top-0 left-0 p-6 text-2xl leading-normal md:p-12 md:text-4xl md:leading-normal">
        # Next.js <br />
        # Three.js <br />
        # Shader Park
      </header>

      <Banner></Banner>
    </div>
  );
}
