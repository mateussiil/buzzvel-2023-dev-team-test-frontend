const prod = process.env.NODE_ENV === 'production' 
export const environment = {
  api:{
    URLBase: process.env.NEXT_PUBLIC_BACKEND_URL || (prod ? 'https://www.pdfdesign.tech/laravel' : 'http://localhost:8989')
  }
}