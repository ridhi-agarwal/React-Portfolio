import { useState } from 'react'

function NavBar() {
  const [count, setCount] = useState(0)

  return (
      <div class="flex justify-between items-center px-6 py-2 mx-auto mt-4 max-w-5xl rounded-full backdrop-blur-md bg-white/30 shadow-md border border-white/40">
  <div class="text-lg font-semibold">
    Logo
  </div>
  <div class="flex space-x-6 text-base font-medium">
    <a href="#" class="hover:text-gray-700">Home</a>
    <a href="#" class="hover:text-gray-700">About</a>
    <a href="#" class="hover:text-gray-700">Services</a>
    <a href="#" class="hover:text-gray-700">Contact</a>
  </div>
</div>

  )
}

export default NavBar
