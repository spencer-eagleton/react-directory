import { Link } from "react-router-dom"
import AuthForm from "../../components/AuthForm/AuthForm"

export default function Auth({ isSigningUp = false }) {
  return (
      <div
      className="
    bg-gray-100
      text-3xl
      text-center
      rounded
    text-slate-600
      font-bold
      p-10
      w-1/2
      mx-auto
      m-10
      "
      >
        <h2 className="mb-10">{isSigningUp ? 'Sign Up' : 'Sign In'} </h2>
        <AuthForm label={isSigningUp ? 'Sign Up' : 'Sign In'}  />
        {isSigningUp ? (<Link className="text-xl text-rose-400 underline" to="/signin">I already have an account!</Link>) : (<Link className="text-xl text-rose-400 underline" to="/signup">I need to create an account!</Link>)}
      </div>
  )
}
