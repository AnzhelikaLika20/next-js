import Link from 'next/link'

export default function Layout({ children }) {
    return (
        <div>
            <nav>
                <Link href="/">Главная</Link> |{' '}
                <Link href="/posts/1">Пример поста</Link>
            </nav>
            <main>{children}</main>
            <footer>
                <p>Создано с помощью Next.js</p>
            </footer>
        </div>
    )
}
