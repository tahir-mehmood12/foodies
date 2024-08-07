import Link from "next/link";
import style from "./page.module.css";
import getMeals from "@/lib/meals";
import MealGrid from "@/components/meals/meal-grid";
import { Suspense } from "react";

async function Meals() {
  const meals = await getMeals();

  return <MealGrid meals={meals} />;
}

export default async function MealsPage() {
  return (
    <>
      <header className={style.header}>
        <h1>
          Delicious meals, created{" "}
          <span className={style.highlight}>by you</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself. It is easy and fun!{" "}
        </p>
        <p className={style.cta}>
          <Link href="/meals/share">Share Your Favorite Recipe</Link>
        </p>
      </header>

      <main className={style.main}>
        <Suspense fallback={<p className={style.loading}>Fetching Meals...</p>}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
