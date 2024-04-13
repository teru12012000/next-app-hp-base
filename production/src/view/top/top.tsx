import Image from "next/image"
import styles from "./style.css"
import IMG from "@/assets/backgroundImage.png"
import { LinkBtn } from "@/components/ui/linkButton"

export const Top = () => {
    return (
        <main className={styles.container}>
            <section className={styles.section}>
                <picture className={styles.picture}>
                    <Image
                        src={IMG}
                        width={522}
                        height={260}
                        layout="responsive"
                        alt=""
                    />
                </picture>
            </section>
            <section className={styles.linkBox}>
                <LinkBtn />
            </section>
        </main>
    )
}
