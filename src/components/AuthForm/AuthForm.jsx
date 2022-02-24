export default function AuthForm() {
  return (
    <div>
        <form className="flex flex-col">
            <input className="m-5" type="email" placeholder="email" name="email" />
            <input className="m-5" type="password" placeholder="password" name="password"  />
            <button className="m-5 border-2 border-lime-600 rounded bg-amber-200" >SignUp/SignIn</button>
        </form>
    </div>
  )
}
