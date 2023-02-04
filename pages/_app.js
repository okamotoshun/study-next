import '@/styles/globals.css'

// 共通化用のコンポーネント
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
