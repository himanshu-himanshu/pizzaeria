import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeaders from "@/components/layout/SectionHeaders";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeMenu />
      <section className="text-center my-16">
        <SectionHeaders subHeader={"Our Story"} mainHeader={"About Us"} />
        <div className="max-w-2xl mx-auto text-gray-500 mt-6 flex flex-col gap-4">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi,
            voluptatum maxime at inventore fuga repellat quo porro dignissimos
            eos quas ad sequi facere molestias ullam voluptas eligendi
            temporibus sunt. Ipsam!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            perspiciatis perferendis esse in ipsam sequi ut quaerat fugiat error
            quae iste, voluptas voluptates recusandae culpa accusamus ex
            debitis! Veritatis, quasi?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum maiores
            impedit sed deleniti saepe sunt eveniet eaque, praesentium cum natus
            repudiandae amet adipisci.
          </p>
        </div>
      </section>
      <section className="text-center my-12">
        <SectionHeaders
          subHeader={"Don't hesitate"}
          mainHeader={"Contact Us"}
        />
        <div className="mt-8">
          <a href="tel:6166168811" className="text-4xl text-gray-600 underline">
            +1 616 616 6811
          </a>
        </div>
      </section>
    </>
  );
}
