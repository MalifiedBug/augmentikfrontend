import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Page1() {
  const packagesData = [
    {
      img: "https://www.shutterstock.com/image-photo/sailboat-sea-evening-sunlight-over-260nw-717244969.jpg",
      name: "Indonesia",
      desc: "Exploring the beauty of the island for 3 day and 2 night  with our travel agency...",
      rating: "4.5",
    },
    {
      img: "https://www.shutterstock.com/image-photo/sailboat-sea-evening-sunlight-over-260nw-717244969.jpg",
      name: "Indonesia",
      desc: "Exploring the beauty of the island for 3 day and 2 night  with our travel agency...",
      rating: "4.5",
    },
    {
      img: "https://www.shutterstock.com/image-photo/sailboat-sea-evening-sunlight-over-260nw-717244969.jpg",
      name: "Indonesia",
      desc: "Exploring the beauty of the island for 3 day and 2 night  with our travel agency...",
      rating: "4.5",
    },
  ];
  return (
    <div>
        <Navbar />      
      <section class="relative bg-[url(https://img.freepik.com/premium-photo/rear-view-asian-man-hat-with-suitcase-bag-backpack-walking-beach_9083-3246.jpg?w=2000)] bg-cover bg-center bg-no-repeat">
        <div class="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25"></div>

        <div class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div class="max-w-xl text-center sm:text-left">
            <h1 class="text-3xl font-extrabold sm:text-5xl">
              The Exotic
              <strong class="block font-extrabold text-sky-600">
                Lakshadweep
              </strong>
              <span>Islands</span>
            </h1>

            <div class="mt-8 flex flex-wrap gap-4 text-center">
              <a
                href="_#"
                class="block w-full rounded border border-sky-500 bg-white px-12 py-3 text-sm font-medium text-sky-500 shadow focus:outline-none focus:ring active:text-white active:bg-sky-500 sm:w-auto"
              >
                Discover Now
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* all inputs */}
      <div class="flex-col w-screen h-auto my-4 bg-white dark:bg-slate-900 flex justify-center items-center">
        <div className="self-start text-lg mx-2">Where are you flying?</div>
        <div class="mb-3 flex w-full max-w-screen-xl transform cursor-pointer flex-col justify-between rounded-md bg-white bg-opacity-75 p-6 text-slate-800 transition duration-500 ease-in-out hover:-translate-y-1 hover:shadow-lg dark:bg-slate-700 dark:bg-opacity-25 dark:text-slate-300 lg:flex-row lg:p-4 border mx-2 px-1">
          <div class="w-full self-center pt-4 lg:w-1/6 lg:pt-0">
            <input
              class="border-2 rounded-lg px-2"
              placeholder="from-to"
            ></input>
          </div>
          <div class="w-full self-center pt-4 lg:w-1/6 lg:pt-0">
            <input class="border-2 rounded-lg px-2" placeholder="trip"></input>
          </div>
          <div class="w-full self-center pt-4 lg:w-1/6 lg:pt-0">
            <input
              class="border-2 rounded-lg px-2"
              placeholder="return"
            ></input>
          </div>
          <div class="w-full self-center pt-4 lg:w-1/6 lg:pt-0">
            <input
              class="border-2 rounded-lg px-2"
              placeholder="passenger-class"
            ></input>
          </div>
        </div>
        <div className="self-end flex text-lg mx-2">
          <button>+ Add Promo Code</button>
          <button className="bg-sky-500 text-white rounded-lg px-2 mx-2">
            Show Flights
          </button>
        </div>

        
      </div>
      {/* packages section */}
      <div>
        <p>Best Packages for you</p>
        <p>
          This is a unique exprience on ship, sea and land, exploring different
          coral islands of Lakshadweep.
        </p>
        <div className="flex justify-center m-2">
          <button className="border p-5 text-sky-500 hover:bg-sky-500 hover:text-white hover:border-2">
            Malidives
          </button>
          <button className="border p-5 text-sky-500 hover:bg-sky-500 hover:text-white hover:border-2">
            Samudram
          </button>
          <button className="border p-5 text-sky-500 hover:bg-sky-500 hover:text-white hover:border-2">
            Cordelia
          </button>
          <button className="border p-5 text-sky-500 hover:bg-sky-500 hover:text-white hover:border-2">
            Agatti
          </button>
          <button className="border p-5 text-sky-500 hover:bg-sky-500 hover:text-white hover:border-2">
            More
          </button>
        </div>
        <div className="flex flex-row flex-wrap">
          {packagesData.map((data) => (
            <div class="flex justify-center m-2">
              <div class="rounded-lg shadow-lg bg-white max-w-sm">
                <a
                  href="#!"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  <img class="rounded-t-lg" src={data.img} alt="" />
                </a>
                <div class="p-6">
                  <h5 class="text-gray-900 text-xl font-medium mb-2">
                    {data.name}
                  </h5>
                  <p class="text-gray-700 text-base mb-4">{data.desc}</p>
                  <button
                    type="button"
                    class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* reviews sectioon */}
      <div className="flex flex-col m-4">
        <div className="self-center text-xl">What our customers say about us?</div>
      <div>
          <div class="rounded-t-8xl rounded-b-5xl mb-2 overflow-hidden shadow-lg">
            <div class="bg-white bg-opacity-40 px-4 pt-3 pb-3 md:px-16 md:pb-1">
              <div class="flex flex-wrap items-center">
          <img class="mr-6" src="uinel-assets/images/ecommerce-reviews/user.png" alt="" />
          <h4 class="font-heading w-full text-xl font-medium md:w-auto">Faustina H. Fawn</h4>
          <div class="mx-8 h-2 w-full bg-transparent md:h-8 md:w-px md:bg-gray-200"></div>
          <span class="font-heading mr-4 text-xl font-medium">5.0</span>
          <div class="inline-flex">
            <a class="mr-1 inline-block" href="_#">
              <svg width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z" fill="#FFCB00"></path>
              </svg>
            </a>
            <a class="mr-1 inline-block" href="_#">
              <svg width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z" fill="#FFCB00"></path>
              </svg>
            </a>
            <a class="mr-1 inline-block" href="_#">
              <svg width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z" fill="#FFCB00"></path>
              </svg>
            </a>
            <a class="mr-1 inline-block" href="_#">
              <svg width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z" fill="#FFCB00"></path>
              </svg>
            </a>
            <a class="inline-block text-gray-200" href="_#">
              <svg width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z" fill="#FFCB00"></path>
              </svg>
            </a>
          </div>
              </div>
            </div>
            <div class="overflow-hidden bg-white px-4 pt-8 pb-12 md:px-16">
              <div class="flex flex-wrap">
          <div class="mb-6 w-full md:mb-0 md:w-2/3">
            <p class="text-darkBlueGray-400 mb-8 max-w-2xl leading-loose">I haretra neque non mi aliquam, finibus hart bibendum molestie. Vestibulum suscipit sagittis dignissim mauris.</p>
            <div class="-mb-2">
              <div class="mb-2 inline-flex w-full md:mr-2 md:w-auto">
                <div class="flex h-12 items-center rounded-full border-2 border-green-500 bg-green-100 pl-2 pr-6">
                  <div class="mr-2 flex h-8 w-8 items-center justify-center rounded-full bg-white text-green-500">
                    <svg width="11" height="11" viewbox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.016 6.366H6.38V10.092H4.472V6.366H0.836V4.638H4.472V0.911999H6.38V4.638H10.016V6.366Z" fill="currentColor"></path>
                    </svg>
                  </div>
                  <span class="font-heading font-medium text-green-500">battery life</span>
                </div>
              </div>
              <div class="mb-2 inline-flex w-full md:mr-2 md:w-auto">
                <div class="flex h-12 items-center rounded-full border-2 border-green-500 bg-green-100 pl-2 pr-6">
                  <div class="mr-2 flex h-8 w-8 items-center justify-center rounded-full bg-white text-green-500">
                    <svg width="11" height="11" viewbox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.016 6.366H6.38V10.092H4.472V6.366H0.836V4.638H4.472V0.911999H6.38V4.638H10.016V6.366Z" fill="currentColor"></path>
                    </svg>
                  </div>
                  <span class="font-heading font-medium text-green-500">functionality</span>
                </div>
              </div>
              <div class="mb-2 inline-flex w-full md:w-auto">
                <div class="flex h-12 items-center rounded-full border-2 border-green-500 bg-green-100 pl-2 pr-6">
                  <div class="mr-2 flex h-8 w-8 items-center justify-center rounded-full bg-white text-green-500">
                    <svg width="11" height="11" viewbox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.016 6.366H6.38V10.092H4.472V6.366H0.836V4.638H4.472V0.911999H6.38V4.638H10.016V6.366Z" fill="currentColor"></path>
                    </svg>
                  </div>
                  <span class="font-heading font-medium text-green-500">ease of use</span>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full text-right md:w-1/3">
            <p class="mb-8 text-sm text-gray-300">Added 2 months ago</p>
          </div>
              </div>
            </div>
          </div>
          <div class="rounded-t-8xl rounded-b-5xl mb-2 overflow-hidden shadow-lg">
            <div class="bg-white bg-opacity-40 px-4 pt-3 pb-3 md:px-16 md:pb-1">
              <div class="flex flex-wrap items-center">
          <img class="mr-6" src="uinel-assets/images/ecommerce-reviews/user.png" alt="" />
          <h4 class="font-heading w-full text-xl font-medium md:w-auto">Faustina H. Fawn</h4>
          <div class="mx-8 h-2 w-full bg-transparent md:h-8 md:w-px md:bg-gray-200"></div>
          <span class="font-heading mr-4 text-xl font-medium">5.0</span>
          <div class="inline-flex">
            <a class="mr-1 inline-block" href="_#">
              <svg width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z" fill="#FFCB00"></path>
              </svg>
            </a>
            <a class="mr-1 inline-block" href="_#">
              <svg width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z" fill="#FFCB00"></path>
              </svg>
            </a>
            <a class="mr-1 inline-block" href="_#">
              <svg width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z" fill="#FFCB00"></path>
              </svg>
            </a>
            <a class="mr-1 inline-block" href="_#">
              <svg width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z" fill="#FFCB00"></path>
              </svg>
            </a>
            <a class="inline-block text-gray-200" href="_#">
              <svg width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z" fill="#FFCB00"></path>
              </svg>
            </a>
          </div>
              </div>
            </div>
            <div class="overflow-hidden bg-white px-4 pt-8 pb-12 md:px-16">
              <div class="flex flex-wrap">
          <div class="mb-6 w-full md:mb-0 md:w-2/3">
            <p class="text-darkBlueGray-400 mb-8 max-w-2xl leading-loose">I haretra neque non mi aliquam, finibus hart bibendum molestie. Vestibulum suscipit sagittis dignissim mauris.</p>
            <div class="-mb-2">
              <div class="mb-2 inline-flex w-full md:mr-2 md:w-auto">
                <div class="flex h-12 items-center rounded-full border-2 border-green-500 bg-green-100 pl-2 pr-6">
                  <div class="mr-2 flex h-8 w-8 items-center justify-center rounded-full bg-white text-green-500">
                    <svg width="11" height="11" viewbox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.016 6.366H6.38V10.092H4.472V6.366H0.836V4.638H4.472V0.911999H6.38V4.638H10.016V6.366Z" fill="currentColor"></path>
                    </svg>
                  </div>
                  <span class="font-heading font-medium text-green-500">battery life</span>
                </div>
              </div>
              <div class="mb-2 inline-flex w-full md:mr-2 md:w-auto">
                <div class="flex h-12 items-center rounded-full border-2 border-green-500 bg-green-100 pl-2 pr-6">
                  <div class="mr-2 flex h-8 w-8 items-center justify-center rounded-full bg-white text-green-500">
                    <svg width="11" height="11" viewbox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.016 6.366H6.38V10.092H4.472V6.366H0.836V4.638H4.472V0.911999H6.38V4.638H10.016V6.366Z" fill="currentColor"></path>
                    </svg>
                  </div>
                  <span class="font-heading font-medium text-green-500">functionality</span>
                </div>
              </div>
              <div class="mb-2 inline-flex w-full md:w-auto">
                <div class="flex h-12 items-center rounded-full border-2 border-green-500 bg-green-100 pl-2 pr-6">
                  <div class="mr-2 flex h-8 w-8 items-center justify-center rounded-full bg-white text-green-500">
                    <svg width="11" height="11" viewbox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.016 6.366H6.38V10.092H4.472V6.366H0.836V4.638H4.472V0.911999H6.38V4.638H10.016V6.366Z" fill="currentColor"></path>
                    </svg>
                  </div>
                  <span class="font-heading font-medium text-green-500">ease of use</span>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full text-right md:w-1/3">
            <p class="mb-8 text-sm text-gray-300">Added 2 months ago</p>
          </div>
              </div>
            </div>
          </div>
          <div class="rounded-t-8xl rounded-b-5xl mb-2 overflow-hidden shadow-lg">
            <div class="bg-white bg-opacity-40 px-4 pt-3 pb-3 md:px-16 md:pb-1">
              <div class="flex flex-wrap items-center">
          <img class="mr-6" src="uinel-assets/images/ecommerce-reviews/user.png" alt="" />
          <h4 class="font-heading w-full text-xl font-medium md:w-auto">Faustina H. Fawn</h4>
          <div class="mx-8 h-2 w-full bg-transparent md:h-8 md:w-px md:bg-gray-200"></div>
          <span class="font-heading mr-4 text-xl font-medium">5.0</span>
          <div class="inline-flex">
            <a class="mr-1 inline-block" href="_#">
              <svg width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z" fill="#FFCB00"></path>
              </svg>
            </a>
            <a class="mr-1 inline-block" href="_#">
              <svg width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z" fill="#FFCB00"></path>
              </svg>
            </a>
            <a class="mr-1 inline-block" href="_#">
              <svg width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z" fill="#FFCB00"></path>
              </svg>
            </a>
            <a class="mr-1 inline-block" href="_#">
              <svg width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z" fill="#FFCB00"></path>
              </svg>
            </a>
            <a class="inline-block text-gray-200" href="_#">
              <svg width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z" fill="#FFCB00"></path>
              </svg>
            </a>
          </div>
              </div>
            </div>
            <div class="overflow-hidden bg-white px-4 pt-8 pb-12 md:px-16">
              <div class="flex flex-wrap">
          <div class="mb-6 w-full md:mb-0 md:w-2/3">
            <p class="text-darkBlueGray-400 mb-8 max-w-2xl leading-loose">I haretra neque non mi aliquam, finibus hart bibendum molestie. Vestibulum suscipit sagittis dignissim mauris.</p>
            <div class="-mb-2">
              <div class="mb-2 inline-flex w-full md:mr-2 md:w-auto">
                <div class="flex h-12 items-center rounded-full border-2 border-green-500 bg-green-100 pl-2 pr-6">
                  <div class="mr-2 flex h-8 w-8 items-center justify-center rounded-full bg-white text-green-500">
                    <svg width="11" height="11" viewbox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.016 6.366H6.38V10.092H4.472V6.366H0.836V4.638H4.472V0.911999H6.38V4.638H10.016V6.366Z" fill="currentColor"></path>
                    </svg>
                  </div>
                  <span class="font-heading font-medium text-green-500">battery life</span>
                </div>
              </div>
              <div class="mb-2 inline-flex w-full md:mr-2 md:w-auto">
                <div class="flex h-12 items-center rounded-full border-2 border-green-500 bg-green-100 pl-2 pr-6">
                  <div class="mr-2 flex h-8 w-8 items-center justify-center rounded-full bg-white text-green-500">
                    <svg width="11" height="11" viewbox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.016 6.366H6.38V10.092H4.472V6.366H0.836V4.638H4.472V0.911999H6.38V4.638H10.016V6.366Z" fill="currentColor"></path>
                    </svg>
                  </div>
                  <span class="font-heading font-medium text-green-500">functionality</span>
                </div>
              </div>
              <div class="mb-2 inline-flex w-full md:w-auto">
                <div class="flex h-12 items-center rounded-full border-2 border-green-500 bg-green-100 pl-2 pr-6">
                  <div class="mr-2 flex h-8 w-8 items-center justify-center rounded-full bg-white text-green-500">
                    <svg width="11" height="11" viewbox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.016 6.366H6.38V10.092H4.472V6.366H0.836V4.638H4.472V0.911999H6.38V4.638H10.016V6.366Z" fill="currentColor"></path>
                    </svg>
                  </div>
                  <span class="font-heading font-medium text-green-500">ease of use</span>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full text-right md:w-1/3">
            <p class="mb-8 text-sm text-gray-300">Added 2 months ago</p>
          </div>
              </div>
            </div>
          </div>
      </div>

      </div>
      {/* CTA Section */}
      <div class="bg-gray-50 m-4">
  <div class="mx-auto max-w-7xl py-12 px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
    <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
      <span class="block">Ready to dive in?</span>
      <span class="block text-indigo-600">Start your free trial today.</span>
    </h2>
    <div class="mt-8 flex lg:mt-0 lg:flex-shrink-0">
      <div class="inline-flex rounded-md shadow">
        <a href="_#" class="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700">Contact Us</a>
      </div>      
    </div>
  </div>
</div>

      {/* footer sectioon */}
      <Footer />

    </div>
  );
}
