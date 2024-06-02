import Link from "next/link";
import Styles from "./Style.module.css";
import Buttonclick from "./Buttonclick";

Link
const Posts = () => {
  return(
    <div className={Styles.body}>
        <h2>Postinganpages</h2>
        <br/>
        <button><Link href= "/">Home</Link></button>
        <Buttonclick/>
    </div>
  )

}

export default Posts;