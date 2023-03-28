import Link from 'next/link'

export default function Document() {

  return (
    <div>
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="mb-20 text-slate-900 dark:text-white mt-5 text-6xl font-bold tracking-tight">
          QR Code Image Generator
        </h1>

        <p className="mb-8 dark:text-white font-light lg:text-xl">Hello, my name is <span className="text-gray-500 font-bold">Mateus Oliveira</span>. {"I'm"} fullstack engineer.</p>  
        <p className="mb-8 dark:text-white font-light lg:text-xl">I created this project as test for Buzzvel</p>

        <Link className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" href={"/generate"}>
            Create your qr-code
        </Link>
      </main>
    </div>
  )
}
