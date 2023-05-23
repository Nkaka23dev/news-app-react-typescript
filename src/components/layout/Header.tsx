import {
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaInstagram,
  FaPinterestP,
  FaYoutube
} from "react-icons/fa"
import { FiMenu } from "react-icons/fi"

export default function Header() {
  return (
    <section className="bg-black px-5 py-2 font-press-start">
      <div className="max-w-6xl mx-auto flex justify-between items-center ">
        <div className="flex items-center gap-10 text-white md:hidden">
          <button className="bg-red-600 font-bold px-5 text-white uppercase text-xs py-1">Breaking</button>
          <p className="text-gray-200 text-xs">Whereas disregard and contempt for human rights have resulted</p>
        </div>
        <div className="hidden md:block">
          <FiMenu className="text-white text-xl" />
        </div>
        <div className="flex items-center gap-2">
          <FaFacebookF className="text-white" />
          <FaTwitter className="text-white" />
          <FaGooglePlusG className="text-white" />
          <FaInstagram className="text-white" />
          <FaPinterestP className="text-white" />
          <FaYoutube className="text-white" />
        </div>
      </div>
    </section>
  )
}
