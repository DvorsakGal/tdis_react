import { Link } from "react-router-dom"
import styles from "./Navbar.module.css";

export default function Navbar() {
    return(
        <nav className={styles.navbar}>
            <Link to="/">Home</Link>
            <Link to="/workstation">Workstation</Link>
            <Link to="/profile">Profile</Link>
        </nav>
    )
}