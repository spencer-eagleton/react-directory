import AuthForm from "../../components/AuthForm/AuthForm"

export default function Auth() {
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
        <h2 className="m-10">SignUp/SignIn</h2>
        <AuthForm />
      </div>
  )
}
