import { useUser } from "../../context/UserContext";
import { useForm } from "../../hooks/useForm";
import { useState } from "react";
import { useHistory } from "react-router-dom";
export default function ProfileForm() {
    const { formState, handleFormChange, formError, setFormError } = useForm({ name: '', bio: '', birthday: '' })
    const { user } = useUser();
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, email, bio, birthday } = formState;
        try {
            setFormError('');
            if (!name || !bio || !birthday) {
                throw new Error('Please fill out all fields to proceed!')
            }
            setLoading(true);
            await createProfile({ name, email, bio, birthday })
            history.replace('/profile/view')
        } catch (error) {
            setFormError(error.message)
        } finally {
            setLoading(false);
        }

    }


  return (
    <>
       
        <form onSubmit={handleSubmit} className="flex flex-col">
            {loading && <h1>Loading...</h1>}
            <input className="m-3" type="text" name="name" value={formState.name} placeholder="name" onChange={handleFormChange}/>
            <input className="m-3" type="text" name="email" value={user.email} placeholder="email" readOnly />
            <input className="m-3" type="date" name="birthday" value={formState.birthday} placeholder="email" onChange={handleFormChange}/>
            <textarea className="m-3" type="text" name="bio" value={formState.bio} placeholder="bio" onChange={handleFormChange} />
            <button className="m-5 border-2 border-lime-600 rounded bg-amber-200" type="submit">create</button>
        </form>
    </>
  )
}
