import { Link } from "react-router-dom"

export default function Welcome() {
  return (
    <div 
    className="
    bg-gray-100
      text-center
      rounded
    text-slate-600
      font-bold
      p-10
      w-1/2
      mx-auto
      mt-10
      "
    >
        <h1 className="text-3xl m-10">
            Welcome to the employee directory!
        </h1>
        <p className="m-10">
            Create an account, confirm your email, then create your profile!
        </p>
        <Link className="m-5 border-2 border-lime-600 rounded bg-lime-600 text-lime-50"
            to="/signup">Let's Go!
        </Link>
    </div>
  )
}
