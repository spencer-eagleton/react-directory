
export default function ProfileForm() {
  return (
    <>
       
        <form className="flex flex-col">
            
            <input className="m-3" type="text" name="name" value="name" placeholder="name" />
            <input className="m-3" type="text" name="email" value="email" placeholder="email" />
            <input className="m-3" type="date" name="birthday" value="birthday" placeholder="email" />
            <textarea className="m-3" type="text" name="bio" value="bio" placeholder="bio" />
            <button className="m-5 border-2 border-lime-600 rounded bg-amber-200" type="submit">create</button>
        </form>
    </>
  )
}
