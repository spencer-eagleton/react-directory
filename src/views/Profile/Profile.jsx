import CurrentProfile from "../../components/CurrentProfile/CurrentProfile";
import ProfileForm from "../../components/ProfileForm/ProfileForm";

import { useUser } from "../../context/UserContext";
import { createProfile, getProfile } from "../../services/profiles";

export default function Profile( {currentUser = false} ) {
   
//  const { currentUser } = useUser();

    // const handleProfile = async (name, email, bio, birthday) => {
    //     try {
    //         if (currentUser) {
    //             const data = await getProfile();
    //             console.log(data);
    //         } else {
                
    //             await createProfile({ name, email, bio, birthday})
    //         }
            
    //     } catch (error) {
    //         throw error;
    //     }
    // }

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
    {currentUser ? (
        <CurrentProfile />
    ) : (

        <><h1 className="m-3">Create your profile</h1><ProfileForm 
        // handleProfile={handleProfile}
         /></>
    )

}
    </div>
    </>
  )
}
