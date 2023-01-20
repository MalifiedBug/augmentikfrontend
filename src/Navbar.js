import { useNavigate } from "react-router-dom"

export default function Navbar(){
    const navigate = useNavigate()
    return(
        <nav class="bg-gray-100">
        <div class="max-w-6xl mx-auto px-4">
          <div class="flex justify-between">
            <div class="flex space-x-4">
              <div>
                <button
                onClick={()=>navigate('/')}
                  class="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900"
                >
                  <img
                    alt=""
                    src="https://www.golakshadweep.com/assets/images/gol-logo.png"
                    className="h-8 w-16"
                  ></img>
                </button>
              </div>

              <div class="hidden md:flex items-center space-x-1">
                <button
                onClick={()=>navigate('/page2')}
                  class="py-5 px-3 text-gray-700 hover:text-gray-900"
                >
                  Page2
                </button>
                <button
                onClick={()=>navigate('/page3')}
                  class="py-5 px-3 text-gray-700 hover:text-gray-900"
                >
                  Page 3
                </button>
              </div>
            </div>

            <div class="hidden md:flex items-center space-x-1">
              <a href="_#" class="py-5 px-3">
                Login
              </a>
              <a
                href="_#"
                class="py-2 px-3 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded transition duration-300"
              >
                Signup
              </a>
            </div>

            <div class="md:hidden flex items-center">
              <button class="mobile-menu-button">
                <svg
                  class="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div class="mobile-menu hidden md:hidden">
          <button onClick={()=>navigate('/page2')} href="_#" class="block py-2 px-4 text-sm hover:bg-gray-200">
            Page 2
          </button>
          <button onClick={()=>navigate("/page3")} href="_#" class="block py-2 px-4 text-sm hover:bg-gray-200">
            Page 3
          </button>
        </div>
      </nav>
    )
}