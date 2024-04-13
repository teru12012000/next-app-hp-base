import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./global.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "ハリーポッタ図鑑",
    description: "勉強会にて作成するハリーポッタAPI図鑑です",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="ja">
            <body className={inter.className}>{children}</body>
        </html>
    )
}
