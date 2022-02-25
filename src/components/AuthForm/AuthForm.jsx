import { useState } from "react"
import { useForm } from "../../hooks/useForm"

export default function AuthForm({ handleAuth }) {
    const { formState, handleFormChange, formError, setFormError } = useForm({ email: '', password: '' })
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { email, password } = formState;

        try {
            setFormError('');
            if (!email || password.length < 8)
            throw new Error('Please enter a valid e-mail and a password with minimum of eight characters');
            setLoading(true);
            await handleAuth(email, password)
        } catch (error) {
            setFormError(error.message)
        } finally {
            setLoading(false);
        }

    }

  return (
    <div>
        <form onSubmit={handleSubmit} className="flex flex-col">
            {formError && <p className="text-sm text-lime-600">{formError}</p>}
            <input className="m-5" type="email" placeholder="email" name="email" value={formState.email} onChange={handleFormChange} />
            <input className="m-5" type="password" placeholder="password" name="password" value={formState.password} onChange={handleFormChange} />
            <button className="m-5 border-2 border-lime-600 rounded bg-amber-200" type="submit">Go!</button>
        </form>
    </div>
  )
}
