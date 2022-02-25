import ProfileForm from "../../components/ProfileForm/ProfileForm";


export default function Profile() {
  return (
    <>
    <div className="
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
      ">
    <h1 className="m-3">Create your profile</h1>
    <ProfileForm />
    </div>
    </>
  )
}
