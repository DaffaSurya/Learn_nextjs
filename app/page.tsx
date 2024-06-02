'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";
// import Content from "./Components/page";
Link
const Home = () => {
  const route = useRouter();
  return(
    <div>
    <Link href="/Posts">Post</Link>
    <br/>
     <button type="button" onClick={() => {route.push("/Components")}}>Click!!</button>
    </div>
  )
}

export default Home;