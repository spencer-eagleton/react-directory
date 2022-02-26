import { useEffect, useState } from "react"
import { getProfile } from "../../services/profiles";

export default function CurrentProfile() {
  const [ profile, setProfile ] = useState({});
 useEffect(() => {
   const fetchData = async () => {
      const data = await getProfile()
   }
 })
  return (
    <div>Current Profile</div>
  )
}
