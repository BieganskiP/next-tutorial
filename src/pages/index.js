import Head from "next/head";
import css from "@/styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={css.title}>HomePage</h1>
        <p className={css.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora vel
          laborum optio recusandae unde reiciendis, vitae sequi aspernatur
          inventore aliquam voluptatibus voluptatum nemo animi modi, maxime
          commodi neque libero deleniti.
        </p>
        <p className={css.text}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam sunt
          placeat possimus, laborum dignissimos porro architecto cupiditate
          officia nihil nobis autem iusto sapiente perspiciatis quis quas hic a
          optio mollitia!
        </p>
        <Link href="/ninjas" className={css.btn}>
          See ninja listing
        </Link>
      </div>
    </>
  );
}
