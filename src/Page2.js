
import Navbar from "./Navbar"
import Footer from "./Footer"

export default function Page2(){
    return(
        <div>
            <Navbar />
            <section class="h-screen">
  <div class="h-full px-6 text-gray-800">
    <div class="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between xl:justify-center">
      <div class="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:ml-20 xl:w-5/12">
        <form className="">
          <div class="mb-6">
            <input type="text" class="form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-4 py-2 text-xl font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none" id="exampleFormControlInput2" placeholder="Email" />
          </div>

          <div class="mb-6">
            <input type="password" class="form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-4 py-2 text-xl font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none" id="exampleFormControlInput2" placeholder="Booking Id" />
          </div>          

          <div class="text-center lg:text-left">
            <button type="button" class="inline-block rounded bg-blue-600 px-7 py-3 text-sm font-medium uppercase leading-snug text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg">Find</button>
            
          </div>
        </form>
      </div>
      <div class="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
        <img alt="" src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" class="w-full" alt="Sample image" />
      </div>
    </div>
  </div>
</section>

            <Footer />
        </div>
    )
}