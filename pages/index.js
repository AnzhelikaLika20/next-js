import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home({ posts }) {
    return (
        <Layout>
            <Head>
                <title>Мой блог на Next.js</title>
            </Head>

            <div className={styles.container}>
                <h1>Добро пожаловать в мой блог!</h1>

                <div className={styles.logo}>
                    <Image src="/nextjs.png" alt="Next.js Logo" width={200} height={200} />
                </div>

                <h2>Статьи:</h2>
                <ul>
                    {posts.map(post => (
                        <li key={post.id}>
                            <Link href={`/posts/${post.id}`}>{post.title}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </Layout>
    )
}

export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
    const posts = await res.json()

    return {
        props: { posts },
    }
}
