import {
    FaFacebookF,
    FaTwitter,
    FaGooglePlusG,
    FaInstagram,
    FaPinterestP,
    FaYoutube
} from "react-icons/fa"

export default function SocialMedia() {
    return (
        <section>
            <div className="grid pb-4">
                <h1 className="text-xl mx-auto uppercase font-medium text-gray-600">Follow Us</h1>
                <div className="h-[3px] w-10 bg-red-500 mx-auto"></div>
            </div>
            <div className="grid grid-cols-2 gap-4 pb-16 pt-6 text-xs">
                <div className="py-3 bg-blue-600 flex gap-2 text-white px-2 items-center">
                    <FaFacebookF className="text-white text-lg" />
                    <h1>Fans</h1>
                </div>
                <div className="py-3 bg-red-600 flex gap-2 text-white px-2 items-center">
                    <FaPinterestP className="text-white text-lg" />
                    <h1>14.3k</h1>
                    <h1>Fans</h1>
                </div>
                <div className="py-3 bg-sky-400 hover:bg-sky-500 cursor-pointer flex gap-2 text-white px-2 items-center">
                    <FaTwitter className="text-white text-lg" />
                    <h1>Followers</h1>
                </div>
                <div className="py-3 bg-orange-600 flex gap-2 text-white px-2 items-center">
                    <FaInstagram className="text-white text-lg" />
                    <h1>22.3k</h1>
                    <h1>Followers</h1>
                </div>
            </div>
        </section>
    )
}
