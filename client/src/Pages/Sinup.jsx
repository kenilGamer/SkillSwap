import { FcGoogle } from "react-icons/fc";
import { VscGithubInverted } from "react-icons/vsc";
import { FaDiscord } from "react-icons/fa";
const Sinup = () => {
    return (
     <>
     <div className="w-screen box h-screen flex">
        <div className="w-6/12 h-full  flex items-center justify-center">
            <img className="p-3 max-xl:w-36" src="/public/14EED69F-62D1-46EB-B34A-EA48F2E25922-removebg-preview.png" width={200} alt="" />
            <div className="p-5">
                <h1 className="text-5xl font-bold  font-serif text-blue-950">SKILLSWAP</h1>
                <p>Connect with Developers and the world around them on SkillSwap.</p>
            </div>
        </div>
        <div className="w-6/12 min-h-full  flex items-center justify-center max-xl: h-min max-xl:overflow-hidden flex-col px-14"> 
            <div className="box w-full min-h-full  flex items-center shadow-xl shadow-blue-200 rounded-xl flex-col">
            <h1 className="text-7xl py-5 px-10 text-blue-400 title font-bold">Login</h1>

                <form action="/login" className="flex flex-col gap-7 w-6/12" method="post">
                    <input className="w-full rounded-md px-2" type="text" name="fullname" placeholder="fullname" />
                    <input className="w-full rounded-md px-2" type="email" name="email" placeholder="Email" />
                    <input className="w-full rounded-md px-2" type="text" name="username" placeholder="username" />
                    <input className="w-full rounded-md px-2" type="password" name="password" id="" placeholder="password" />
                     <a href="#" className="text-blue-300">Forgot Password ?</a>
                     <div className="flex items-center justify-center mb-9">
                         <input className="px-3 w-56 py-3 bg-sky-400 rounded-full text-white text-2xl text-center " type="submit" value="Login" />
                     </div>
                </form>
                <div className="flex items-center gap-6 w-52  px-7">
                    <span><VscGithubInverted className="text-4xl"/></span>
                    <span><FaDiscord className="text-4xl text-blue-600"/></span>
                    <span><FcGoogle className="text-4xl" /></span>
                </div>
            </div>
        </div>
     </div>
     </>
    )
  }
  
  export default Sinup;