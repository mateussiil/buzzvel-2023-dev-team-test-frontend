import FormItem from '@/components/FormItem'
import Input from '@/components/Input'
import Head from 'next/head'
import { FormEventHandler, useState } from 'react'
import QRCode from 'qrcode'
import { createUser } from '@/services/users/createUser'
import Errors from '@/components/Error'
import Image from 'next/image'

export default function Document() {
  const [user, setUser] = useState({ name: '', linkedin_url: '', github_url: '' })
  const [qrCodeImageUrl, setQRCodeImageUrl] = useState("")

  const [errors, setErrors] = useState<string[]>([]);

  const generateQRCode: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()

    setQRCodeImageUrl("");
    setErrors([]);

    const res = await createUser(user)

    if(res.error) {
      return setErrors(res.error);
    }

    const url = window.location.origin + '/' + user.name

    try {
      const imageUrl = await QRCode.toDataURL(url)

      setQRCodeImageUrl(imageUrl)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div>
      <Head>
        <title>QR Code Image Generator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="mb-4 text-slate-900 dark:text-white mt-5 text-6xl font-bold tracking-tight">
          QR Code Image Generator
        </h1>

        <form
          onSubmit={generateQRCode}
        >
          <FormItem
            label="Name"
            id="name"
          >
            <Input
              id="name"
              type="text"
              required
              placeholder="Please input name"
              onChange={(e) => {
                const name = e.currentTarget.value;
                console.log(name)

                setUser(prev => {
                  return { ...prev, name }
                })
              }}
            />
          </FormItem>
          <FormItem
            id="linkedin"
            label="Linkedin URL"
          >
            <Input
              id="linkedin"
              type="text"
              required
              placeholder="Please input Linkedin URL"
              onChange={(e) => {
                const linkedin = e.currentTarget.value;

                setUser(prev => {
                  return { ...prev, linkedin_url: linkedin }
                })
              }}
            />
          </FormItem>
          <FormItem
            id="github"
            label="Github URL"
          >
            <Input
              id="github"
              type="text"
              required
              placeholder="Please input Github URL"
              onChange={(e) => {
                const github = e.currentTarget.value;
                console.log(github)

                setUser(prev => {
                  return { ...prev, github_url: github }
                })
              }}
            />
          </FormItem>

          {errors ? <Errors errors={errors} /> : null}

          <div className="flex flex-col items-center justify-center mt-8">
            <button
              className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              type='submit'
            >
              Generate QR Code
            </button>
          </div>


        </form>

        {qrCodeImageUrl && (
          <Image 
            className="mt-8"
            width={200}
            height={200} 
            src={qrCodeImageUrl} 
            alt="QR code" />
        )}
      </main>
    </div>
  )
}
