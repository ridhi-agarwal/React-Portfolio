import { useState } from 'react'
import logo from '../assets/logo.svg'

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
      <div class="flex justify-between items-center px-6 py-2 mx-auto mt-4 max-w-7xl rounded-full backdrop-blur-md bg-white/10 shadow-md border border-white/20 text-white">
  <div class="text-lg font-semibold">
    <img src={logo} alt="Ridhi Agarwal" class="h-14" />
  </div>
  {/* Hamburger icon for mobile */}
      <button
        class="md:hidden text-2xl"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        &#9776;
      </button>
  {menuOpen && (
        <div class="absolute top-14 right-6 w-48 bg-white/20 text-white rounded-md shadow-lg z-20 flex flex-col md:hidden">
          <a href="#Hero" class="block px-4 py-2 hover:underline">Home</a>
          <a href="#about" class="block px-4 py-2 hover:underline">About</a>
          <a href="#services" class="block px-4 py-2 hover:underline">Services</a>
          <a href="#contact" class="block px-4 py-2 hover:underline">Contact</a>
        </div>
      )}
  {!menuOpen && (
    <div class={`space-x-6 text-base font-medium text hidden md:flex`}>
    <a href="#" class="hover:underline">Home</a>
    <a href="#" class="hover:underline">About</a>
    <a href="#" class="hover:underline">Services</a>
    <a href="#" class="hover:underline">Contact</a>
  </div>)}

</div>

  )
  
}

export default NavBar
