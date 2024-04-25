import styles from "./style.css"
import { BackButton } from "@/components/ui/backButton"

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
                    ここにデータを集めたものを書く 画像サイズは幅175、高さ250
                </div>
            </section>
        </main>
    )
}
