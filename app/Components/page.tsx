'use client'
import { useRouter } from "next/navigation";
const Content = () => {
   const rout = useRouter();
 return(
    <div>
       <h2>inii content</h2> 
      <button type="button" onClick={() => {rout.push("/Components/Content")}}>sign in</button>
    </div>
 )

}

export default Content;