/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */

import Link from "next/link"

export default function Home() {
  return (
    <div>
      <div className="max-w-7xl mx-auto">


        <section class="bg-white dark:bg-gray-900">
          <div class="container px-6 py-10 mx-auto">
            <div class="text-center">
              <h1 class="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">Arsirana</h1>

              <p class="max-w-lg mx-auto mt-4 text-gray-500">
                jpg
              </p>
            </div>

            <div class="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-2">
              <div>
                <img class="relative z-10 object-cover w-full rounded-md h-96" src="https://images.unsplash.com/photo-1644018335954-ab54c83e007f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />

                <div class="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
                  <a href="#" class="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl">
                    All the features you want to know
                  </a>

                  <p class="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veritatis sint autem nesciunt,
                    laudantium quia tempore delect
                  </p>

                  <p class="mt-3 text-sm text-blue-500">21 October 2019</p>
                </div>
              </div>

              <div>
                <img class="relative z-10 object-cover w-full rounded-md h-96" src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />

                <div class="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
                  <a href="#" class="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl">
                    How to use sticky note for problem solving
                  </a>

                  <p class="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veritatis sint autem nesciunt,
                    laudantium quia tempore delect
                  </p>

                  <p class="mt-3 text-sm text-blue-500">20 October 2019</p>
                </div>
              </div>
            </div>
          </div>
        </section>


        <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
          <div className="flex flex-col lg:flex-row justify-between gap-8">
            <div className="w-full lg:w-5/12 flex flex-col justify-center">
              <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">Memory</h1>
              <p className="font-normal text-base leading-6 text-gray-600 ">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.In the first place we have granted to God, and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, and shall have her rights entire, and her liberties inviolate; and we will that it be thus observed; which is apparent from</p>
            </div>
            <div className="w-full lg:w-8/12 ">
              <img className="w-full h-full" src="https://i.ibb.co/FhgPJt8/Rectangle-116.png" alt="A group of People" />
            </div>
          </div>

          <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
            <div className="w-full lg:w-5/12 flex flex-col justify-center">
              <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">Start</h1>
              <p className="font-normal text-base leading-6 text-gray-600 ">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.In the first place we have granted to God, and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, and shall have her rights entire, and her liberties inviolate; and we will that it be thus observed; which is apparent from</p>
            </div>
            <div className="w-full lg:w-8/12 lg:pt-8">
              <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
                <div className="p-4 pb-6 flex justify-center flex-col items-center">
                  <img className="md:block hidden" src="https://i.ibb.co/FYTKDG6/Rectangle-118-2.png" alt="Alexa featured Img" />
                  <img className="md:hidden block" src="https://i.ibb.co/zHjXqg4/Rectangle-118.png" alt="Alexa featured Img" />
                  <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Alexa</p>
                </div>
                <div className="p-4 pb-6 flex justify-center flex-col items-center">
                  <img className="md:block hidden" src="https://i.ibb.co/fGmxhVy/Rectangle-119.png" alt="Olivia featured Img" />
                  <img className="md:hidden block" src="https://i.ibb.co/NrWKJ1M/Rectangle-119.png" alt="Olivia featured Img" />
                  <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Olivia</p>
                </div>
                <div className="p-4 pb-6 flex justify-center flex-col items-center">
                  <img className="md:block hidden" src="https://i.ibb.co/Pc6XVVC/Rectangle-120.png" alt="Liam featued Img" />
                  <img className="md:hidden block" src="https://i.ibb.co/C5MMBcs/Rectangle-120.png" alt="Liam featued Img" />
                  <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Liam</p>
                </div>
                <div className="p-4 pb-6 flex justify-center flex-col items-center">
                  <img className="md:block hidden" src="https://i.ibb.co/7nSJPXQ/Rectangle-121.png" alt="Elijah featured img" />
                  <img className="md:hidden block" src="https://i.ibb.co/ThZBWxH/Rectangle-121.png" alt="Elijah featured img" />
                  <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Elijah</p>
                </div>
              </div>
            </div>
          </div>
        </div>


        <section class="overflow-hidden text-gray-700">
          <div class="container px-5 py-2 mx-auto lg:pt-24 lg:px-32">
            <div class="flex flex-wrap -m-1 md:-m-2">
              <div class="flex flex-wrap w-1/2">
                <div class="w-1/2 p-1 md:p-2">
                  <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                    src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp" />
                </div>
                <div class="w-1/2 p-1 md:p-2">
                  <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                    src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp" />
                </div>
                <div class="w-full p-1 md:p-2">
                  <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                    src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp" />
                </div>
              </div>
              <div class="flex flex-wrap w-1/2">
                <div class="w-full p-1 md:p-2">
                  <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                    src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp" />
                </div>
                <div class="w-1/2 p-1 md:p-2">
                  <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                    src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp" />
                </div>
                <div class="w-1/2 p-1 md:p-2">
                  <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                    src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp" />
                </div>
              </div>
            </div>
          </div>
        </section>





        <div className="flex justify-center items-center">
          <div className="2xl:mx-auto 2xl:container lg:px-20 lg:py-16 md:py-12 md:px-6 py-9 px-4 w-96 sm:w-auto">
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-4xl font-semibold leading-9 text-center text-gray-800"></h1>
              <p className="text-base leading-normal text-center text-gray-600 mt-4 lg:w-1/2 md:w-10/12 w-11/12">If you're looking for random paragraphs, you've come to the right place. When a random word or a random sentence isn't quite enough</p>
            </div>
            <div className="lg:flex items-stretch md:mt-12 mt-8">
              <div className="lg:w-1/2">
                <div className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6">
                  <div className="sm:w-1/2 relative">
                    <div>

                      <div className="absolute bottom-0 left-0 p-6">

                        <p className="text-base leading-4 text-white mt-2">Dive into minimalism</p>
                        <div className="flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">


                        </div>
                      </div>
                    </div>
                    <img src="https://i.ibb.co/DYxtCJq/img-1.png" className="w-full" alt="chair" />
                  </div>
                  <div className="sm:w-1/2 sm:mt-0 mt-4 relative">
                    <div>

                      <div className="absolute bottom-0 left-0 p-6">

                        <p className="text-base leading-4 text-white mt-2">Dive into minimalism</p>
                        <div className="flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">

                        </div>
                      </div>
                    </div>
                    <img src="https://i.ibb.co/3C5HvxC/img-2.png" className="w-full" alt="wall design" />
                  </div>
                </div>
                <div className="relative">
                  <div>

                    <div className="absolute bottom-0 left-0 md:p-10 p-6">

                      <p className="text-base leading-4 text-white mt-2">Dive into minimalism</p>
                      <div className="flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">

                      </div>
                    </div>
                  </div>
                  <img src="https://i.ibb.co/Ms4qyXp/img-3.png" alt="sitting place" className="w-full mt-8 md:mt-6 hidden sm:block" />
                  <img className="w-full mt-4 sm:hidden" src="https://i.ibb.co/6XYbN7f/Rectangle-29.png" alt="sitting place" />
                </div>
              </div>
              <div className="lg:w-1/2 xl:ml-8 lg:ml-4 lg:mt-0 md:mt-6 mt-4 lg:flex flex-col justify-between">
                <div className="relative">
                  <div>

                    <div className="absolute bottom-0 left-0 md:p-10 p-6">

                      <p className="text-base leading-4 text-white mt-2">Dive into minimalism</p>
                      <div className="flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">

                      </div>
                    </div>
                  </div>
                  <img src="https://i.ibb.co/6Wfjf2w/img-4.png" alt="sitting place" className="w-full sm:block hidden" />
                  <img className="w-full sm:hidden" src="https://i.ibb.co/dpXStJk/Rectangle-29.png" alt="sitting place" />
                </div>
                <div className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6 md:mt-6 mt-4">
                  <div className="relative w-full">
                    <div>

                      <div className="absolute bottom-0 left-0 p-6">

                        <p className="text-base leading-4 text-white mt-2">Dive into minimalism</p>
                        <div className="flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">

                        </div>
                      </div>
                    </div>
                    <img src="https://i.ibb.co/3yvZBpm/img-5.png" className="w-full" alt="chair" />
                  </div>
                  <div className="relative w-full sm:mt-0 mt-4">
                    <div>

                      <div className="absolute bottom-0 left-0 p-6">

                        <p className="text-base leading-4 text-white mt-2">Dive into minimalism</p>
                        <div className="flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">

                        </div>
                      </div>
                    </div>
                    <img src="https://i.ibb.co/gDdnJb5/img-6.png" className="w-full" alt="wall design" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="lg:px-20 md:px-6 px-4 md:py-12 py-8">
          <div className="lg:flex items-center justify-between">
            <div className="lg:w-1/3">
              <h1 className="text-4xl font-semibold leading-9 text-gray-800">Company Profile</h1>
              <p className="text-base leading-6 mt-4 text-gray-600">Company Profile Photoshoot.</p>
             
            </div>
            <div className="lg:w-7/12 lg:mt-0 mt-8">
              <div className="w-full h-full bg-red-200">
                <img src="https://i.ibb.co/cbyDY74/pexels-max-vakhtbovych-6782351-1-1.png" alt="apartment design" className="w-full sm:block hidden" />
                <img src="https://i.ibb.co/ZVPGjGJ/pexels-max-vakhtbovych-6782351-1.png" alt="apartment design" className="sm:hidden block w-full" />
              </div>
              <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 lg:gap-8 gap-6 lg:mt-8 md:mt-6 mt-4">
                <img src="https://i.ibb.co/4Jrp5TB/pexels-max-vakhtbovych-6782370-1.png" className="w-full" alt="kitchen" />
                <img src="https://i.ibb.co/0Jv3FSy/pexels-max-vakhtbovych-6436799-1-1.png" className="w-full" alt="sitting room" />
              </div>
            </div>
          </div>
        </div>



        <div className="p-6 container md:w-2/3 xl:w-auto mx-auto  flex flex-col xl:items-stretch justify-between xl:flex-row">
          <div className="xl:w-1/2 md:mb-14 xl:mb-0 relative h-auto flex items-center justify-center">
            <img src="camera.gif" alt="Envelope with a newsletter" role="img" className="h-full xl:w-full lg:w-1/2 w-full " />
          </div>
          <div className="w-full xl:w-1/2 xl:pl-40 xl:py-28 ">
            <Link href="/"><h1 className="text-2xl md:text-4xl xl:text-5xl font-bold leading-10 text-gray-800 mb-4 text-center xl:text-left md:mt-0 mt-4">Get Me To Shoot You</h1></Link>
            <p className="text-base leading-normal text-gray-600 text-center xl:text-left">Contact to Shoot Your photo.</p>
          </div>
        </div>


      </div>
    </div>
  )
}