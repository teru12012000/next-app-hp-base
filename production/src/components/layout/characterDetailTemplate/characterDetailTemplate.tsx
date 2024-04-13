import styles from "./style.css"

interface props {}

export const CharacterDetailTemplate = (props: props) => {
    return (
        <>
            <main className={styles.container}>
                <section className={styles.button}>
                    {/*戻るボタンを呼び出しみてみて！ */}
                </section>
                <section className={styles.imageSection}>
                    <picture className={styles.imageBox}>
                        {/*ここは画像を呼び出す */}
                    </picture>
                </section>
                <section className={styles.tableSection}>
                    <table border={1} cellSpacing={0} className={styles.table}>
                        <tbody>
                            <tr>
                                <td>name</td>
                                <td>APIから名前を</td>
                            </tr>
                            <tr>
                                <td>nickname</td>
                                <td>APIからニックネームを</td>
                            </tr>
                            <tr>
                                <td>data of birth</td>
                                <td>APIから誕生日を</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </main>
        </>
    )
}
