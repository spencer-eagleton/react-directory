import ProfileForm from "../../components/ProfileForm/ProfileForm";

import { useUser } from "../../context/UserContext";
import { createProfile } from "../../services/profiles";

export default function Profile() {
    const { setUser } = useUser();

    const handleProfile = async (name, birthday, bio) => {
        try {
            const response = await createProfile({ name, email, bio , birthday})
            console.log(response);
            
        } catch (error) {
            throw error;
        }
    }

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
    <ProfileForm handleProfile={handleProfile} />
    </div>
    </>
  )
}
