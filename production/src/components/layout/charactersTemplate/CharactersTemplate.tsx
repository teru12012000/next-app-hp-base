import Image from "next/image"
import Link from "next/link"
import { Loading } from "../loading"
import styles from "./style.css"
import { HPType } from "@/model/fetcher"
import { BackButton } from "@/components/ui/backButton"
//import { BackButton } from "@/components/ui/backButton"

interface props {}

export const CharactersTemplate = (props: props) => {
    return (
        <main className={styles.container}>
            <header className={styles.header}>
                <div className={styles.backButton}>
                    <BackButton />
                </div>
                <div className={styles.titleTextBox}>
                    <h1>[ここは変数]でのハリーポッター図鑑</h1>
                </div>
            </header>

            <section>
                <div className={styles.itemImage}>
                    ここにデータを集めたものを書く
                </div>
            </section>
        </main>
    )
}
