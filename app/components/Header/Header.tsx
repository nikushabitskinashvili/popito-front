"use client"
import Link from "next/link";
import styles from "./Header.module.scss";
import Image from "next/image";
import NavbarItem from "../navbarItem/navbarItem";
import { usePathname } from "next/navigation";
import HeaderInput from "../HeaderInput/HeaderInput";
const Header = () => {

    const navLinks = [
        { title: "Home", pathname: "/", key: "/" },
        { title: "Movies", pathname: "/movies", key: "/movies" },
        { title: "List", pathname: "/list", key: "/list" }
    ];

    let pathName = usePathname();

    return (
        <div className={styles.container}>
            <div className={styles.containerWrapper}>

                <Link href={"/"}>
                    <Image
                        src={"/images/headerLogo.svg"}
                        alt="Logo"
                        width={202}
                        height={40}
                        className={styles.logo}
                    />
                </Link>

                <div className={styles.navbarList}>
                    <ul>
                        {navLinks.map((link, idx) => (
                            <NavbarItem
                                key={idx}
                                active={pathName === link.key}
                                pathname={link.pathname}
                                title={link.title}
                            />
                        ))}
                    </ul>
                </div>


            </div>

            <div className={styles.inputContainer}>
                <HeaderInput />
                <div className={styles.userImg}>
                <Image src={"/icons/user.svg"} alt={"user"} width={20} height={20}/>
                </div>
                
            </div>

        </div>
    )
}

export default Header;