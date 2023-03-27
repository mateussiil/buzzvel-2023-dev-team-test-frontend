import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="h-screen bg-white dark:bg-slate-800 max-h-screen flex flex-col items-center justify-center">
      <div className="md:max-w-2xl">
        <Component {...pageProps} />
      </div>
    </div>
  )
}
