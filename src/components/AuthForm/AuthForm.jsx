import { useForm } from "../../hooks/useForm"

export default function AuthForm() {
    const { formState, handleFormChange, formError, setFormError } = useForm({ email: '', password: '' })
  return (
    <div>
        <form className="flex flex-col">
            <input className="m-5" type="email" placeholder="email" name="email" value={formState.email} onChange={handleFormChange} />
            <input className="m-5" type="password" placeholder="password" name="password" value={formState.password} onChange={handleFormChange} />
            <button className="m-5 border-2 border-lime-600 rounded bg-amber-200" >Go!</button>
        </form>
    </div>
  )
}
