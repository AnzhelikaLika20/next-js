import { useRouter } from 'next/router'
import Layout from '../../components/Layout'

export default function PostDetail({ post }) {
    const router = useRouter()

    if (router.isFallback) {
        return <div>Загрузка...</div>
    }

    return (
        <Layout>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </Layout>
    )
}

export async function getServerSideProps(context) {
    const { id } = context.params
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const post = await res.json()

    return { props: { post } }
}
