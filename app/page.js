import Link from "next/link";

import style from "./page.module.css";
import ImageSlideshow from "@/components/silde-images/image-slides";

export default function Home() {
  return (
    <>
      <header className={style.header}>
        <div className={style.slideshow}>
          <ImageSlideshow />
        </div>

        <div>
          <div className={style.hero}>
            <h1>Delicious Foods for Foodies</h1>
            <p>Taste and share food from all over the world</p>
          </div>

          <div className={style.cta}>
            <Link href="/community">Join the Community</Link>
            <Link href="meals">Explore Meals</Link>
          </div>
        </div>
      </header>
      <main>
        <section className={style.section}>
          <h2>How it works</h2>
          <p>
            Foodies Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p>
            Foodies Food is a place to discover new dishes, and to connect with
            other food lovers.
          </p>
        </section>

        <section className={style.section}>
          <h2>Why Foodies Food?</h2>
          <p>
            Foodies Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p>
            Foodies Food is a place to discover new dishes, and to connect with
            other food lovers.
          </p>
        </section>
      </main>
    </>
  );
}
