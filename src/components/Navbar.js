import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
    const router = useRouter();
    console.log(router.pathname)
    return(
        <nav>
            <Link legacyBehavior href="/">
                <a style={{color: router.pathname == "/" ? "red": "blue"}}>Home</a>
            </Link>
            <Link legacyBehavior href="/about">
                <a style={{color: router.pathname == "/about" ? "red": "blue"}}>about</a>
            </Link>
        </nav>
    )
}