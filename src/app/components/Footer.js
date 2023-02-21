/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div
        className="max-w-7xl mx-auto py-6">
        <footer className="text-center lg:text-left bg-gray-100 text-gray-600">
          <div className="flex justify-center items-center lg:justify-between p-6 border-b border-gray-300">
            <div className="mr-12 hidden lg:block">
              <span>Get connected with us on social networks:</span>
            </div>
            <div className="flex justify-center">
              
              
              <Link href="mailto:arsirana.jpg@gmail.com" className="mr-6 text-gray-600">
                <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google"
                  className="w-3.5" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
                  <path fill="currentColor"
                    d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z">
                  </path>
                </svg>
              </Link>
              <Link href="https://instagram.com/arsirana.jpg?igshid=NmE0MzVhZDY=" className="mr-6 text-gray-600">
                <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="instagram"
                  className="w-3.5" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path fill="currentColor"
                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z">
                  </path>
                </svg>
              </Link>
             
             
            </div>
          </div>
          <div className="mx-6 py-10 text-center md:text-left">
            <div className="grid grid-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="">
                <h6 className="
            uppercase
            font-semibold
            mb-4
            flex
            items-center
            justify-center
            md:justify-start
          ">
                  <Link href="/"><img className="h-10" src="arsirana simbol.jpg" /></Link>

                </h6>
                <p className="">
                  Arsirana
                </p>
              </div>
              <div className="">
                <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
                  
                </h6>
                
              </div>
              <div className="">
                <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
                  Link
                </h6>
                <p class="mb-4">
                  <Link href="about" class="text-gray-600">About</Link>
                </p>
                <p className="mb-4">
                  <Link href="galery" class="text-gray-600">Galery</Link>
                </p>
                <p className="mb-4">
                  <Link href="contact" class="text-gray-600">Contact</Link>
                </p>
                
              </div>
              <div className="">
                <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
                  Contact
                </h6>
                
                <p className="flex items-center justify-center md:justify-start mb-4">
                arsirana.jpg@gmail.com
                </p>
                <p class="flex items-center justify-center md:justify-start mb-4"><Link href="https://wa.me/6287884582884">+ 62 8788 4582 884</Link>
                </p>
               
              </div>
            </div>
          </div>
          <div className="text-center p-6 bg-gray-200">
            <span>Â© 2023 Copyright:</span>
            <Link class="text-gray-600 font-semibold" href="/">Arsirana</Link>
          </div>
        </footer>
      </div>
    </>
  )
}