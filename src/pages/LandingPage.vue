<template>
  <div>
    <header>
      <nav class="bg-white">
        <div class="w-[90%] mx-auto flex justify-between items-center py-2">
          <div class="flex space-x-20">
            <div><img src="../assets/images/logo.png" alt="" /></div>
            <ul class="flex space-x-20">
              <li
                v-for="nav in navs"
                :key="nav"
                class="uppercase text-lg text-[#222222]"
              >
                {{ nav.name }}
              </li>
            </ul>
          </div>
          <div class="flex space-x-10">
            <form action="">
              <div class="flex">
                <input
                  type="text"
                  placeholder="Find events, concerts, tv shows and many more"
                  class="rounded-l-lg py-2 w-[24rem] placeholder:text-[#545454] placeholder:text-sm px-4 bg-[#57BFC580] focus:outline-none"
                />
                <button class="rounded-r-lg py-2 bg-[#0F2E6C] px-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="white"
                    class="w-5 h-5"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </form>
            <div class="flex space-x-2 items-center">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-8 h-8"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div class="bg-[#0F2E6C]">
        <div class="grid grid-cols-2">
          <div class="col-span-1 w-[50%] m-auto">
            <p class="text-[35px] text-white font-semibold">
              Catch up with your favourite events & concerts live
            </p>
            <div class="flex items-center space-x-6 mt-10">
              <button
                class="bg-[#57BFC5] text-center py-2 px-14 rounded-md uppercase text-white text-base"
              >
                sign in
              </button>
              <button
                class="text-base text-center px-14 rounded-md py-2 border uppercase text-[#57BFC5] border-[#57BFC5]"
              >
                register
              </button>
            </div>
          </div>
          <div class="col-span-1">
            <div class="absolute translate-y-[19rem] -translate-x-1">
              <svg
                width="140"
                height="339"
                viewBox="0 0 140 339"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M60.1429 338L139 1L1 338H60.1429Z"
                  fill="#57BFC5"
                  stroke="#57BFC5"
                />
              </svg>
            </div>
            <div class="absolute translate-y-[28rem] translate-x-[3rem]">
              <svg
                width="53"
                height="206"
                viewBox="0 0 53 206"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M38.5 205L51.9286 1L1 205H38.5Z"
                  fill="white"
                  stroke="white"
                />
              </svg>
            </div>
            <img src="../assets/images/header.png" alt="" />
          </div>
        </div>
      </div>
    </header>
    <section>
      <div class="bg-[#F1F1F1]">
        <div class="py-4 px-20 grid grid-cols-2 gap-x-[26rem]">
          <div class="col-span-1">
            <img src="../assets/images/Wizkid-Uganda-Concert.png" alt="" />
          </div>
          <div class="w-[50%] my-auto">
            <h3 class="uppercase text-black text-lg font-semibold pl-4">
              happening now!
            </h3>
            <p class="font-bold uppercase text-5xl text-[#0F2E6C] mt-2">
              wizkid
            </p>
            <p class="uppercase text-lg text-[#0F2E6C] px-10">live in</p>
            <p class="uppercase text-4xl text-[#0F2E6C] pl-2">kampala</p>
            <button
              class="uppercase bg-[#0F2E6C] text-white text-base px-10 py-2 rounded-md mt-3"
            >
              <p class="flex justify-center items-center space-x-3">
                <span>watch now</span>
                <span
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </span>
              </p>
            </button>
          </div>
        </div>
      </div>
      <div class="w-[90%] mx-auto py-4 grid grid-cols-2 gap-x-32">
        <div class="text-black text-[18px] font-medium text-center">
          DO NOT MISS OUT ON YOUR FAVORITE EVENTS, CONCERTS AND TV SHOWS
          SUBSCRIBE TO OUR NEWSLETTER
        </div>
        <div>
          <form action="">
            <div class="flex">
              <input
                type="text"
                placeholder="Find events, concerts, tv shows and many more"
                class="rounded-l-lg py-2 w-[24rem] placeholder:text-[#545454] placeholder:text-sm px-4 bg-[#57BFC580] focus:outline-none"
              />
              <button class="py-2 bg-[#0F2E6C] px-10 uppercase text-white">
                subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
    <section>
      <div class="py-4 px-10 bg-[#0F2E6C]">
        <div class="flex space-x-4 items-center text-white">
          <p class="text-base text-white font-medium uppercase">
            trending events
          </p>
          <span
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </span>
        </div>
        <div class="grid grid-cols-5 mt-6">
          <img
            class="col-span-1"
            src="../assets/images/trending.png"
            alt=""
            v-for="i in 5"
            :key="i"
          />
        </div>
        <div class="flex justify-center py-3">
          <button
            class="uppercase bg-white text-[#0F2E6C] text-base px-10 py-2 rounded-md mt-3"
          >
            <p class="flex justify-center items-center space-x-3">
              <span>find more events</span>
              <span
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </span>
            </p>
          </button>
        </div>
      </div>
    </section>
    <section>
      <div class="py-20 bg-[#F7F7F7]">
        <div class="flex justify-center">
          <img
            src="../assets/images/streams.png"
            alt=""
            class="flex justify-center"
          />
        </div>
        <p class="text-[40px] text-black font-bold flex justify-center">
          Stream anywhere
        </p>
        <p class="text-black text-base mt-5 flex justify-center">
          Visio is available on Android, iOS, Roku, Apple TV, Amazon Fire TV,
          Xfinity X1,<br />
          Xbox, Samsung Smart TV, Sony Smart TV, Playstation and the web
        </p>
      </div>
    </section>
    <footer class="bg-[#0F2E6C] py-10">
      <div class="w-[60%] mx-auto">
        <ul class="flex justify-between">
          <li class="text-base text-[#F1F1F1]">About us</li>
          <li class="text-base text-[#F1F1F1] capitalize">
            blog &media center
          </li>
          <li class="text-base text-[#F1F1F1] capitalize">FAQ</li>
          <li class="text-base text-[#F1F1F1] capitalize">
            term and conditions
          </li>
          <li class="text-base text-[#F1F1F1] capitalize">privacy</li>
        </ul>
      </div>
      <p class="flex justify-center text-white text-base mt-5">
        Visioplug 2020. All rights reserved
      </p>
    </footer>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "LandingPage",
  setup() {
    const navs = ref([
      { name: "home", to: "/" },
      { name: "about", to: "/about" },
      { name: "event", to: "/" },
      { name: "tv shows", to: "/tv-shows" },
    ]);
    return { navs };
  },
};
</script>
