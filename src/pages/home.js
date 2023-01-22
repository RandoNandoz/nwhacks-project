import { getAuth } from "firebase/auth"

export default function Home() {
    console.log(getAuth().currentUser);
    return <h1>Home</h1>
}