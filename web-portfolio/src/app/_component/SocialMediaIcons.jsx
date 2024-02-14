import Image from "next/image"
const SocialMediaIcons = () => {
    return(
        <div className="flex justify-center md:justify-start my-10 gap-7 bg-green px-5 py-3 rounded-lg w-fit">
            <a
            className="hover:opacity-50 transition duration-500"
            href = "https://www.linkedin.com/in/kellyphan03/"
            target="_blank"
            rel="noreferrer"
            >
                <Image alt="linkedin-link" src={require("../../../public/assets/linkedin.png")}/>
            </a>
            <a
            className="hover:opacity-50 transition duration-500"
            href = "https://github.com/kellyhp"
            target="_blank"
            rel="noreferrer"
            >
                <Image alt="github-link" src={require("../../../public/assets/github.png")}/>
            </a>
            <a
            className="hover:opacity-50 transition duration-500"
            href = "https://www.instagram.com/kelly_saucy/"
            target="_blank"
            rel="noreferrer"
            >
                <Image alt="instagram-link" src={require("../../../public/assets/instagram.png")}/>
            </a>
        </div>
    )

}
export default SocialMediaIcons