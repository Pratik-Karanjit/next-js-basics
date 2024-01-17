import Link from "next/link";
import ProductCard from "./components/ProductCard";

// Main page
export default function Home() {
  return (
   <main style= {{color: "black"}}>
     <h1>Hello WOrld</h1>
     <Link href="/users">Users</Link>
     <ProductCard></ProductCard>
   </main>
  )
}
