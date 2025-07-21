import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";
import Comments from "./components/Comments";

export default function Home() {
  return (
    <main>
      <h1>Main Page</h1>
      <Link href="/users">Users</Link>
      <ProductCard />
    </main>
  );
}
