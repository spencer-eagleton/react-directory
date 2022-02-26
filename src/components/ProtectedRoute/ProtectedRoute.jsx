import { Redirect, Route } from "react-router-dom";
import { useUser } from "../../context/UserContext";
export default function ProtectedRoute({ children, ...rest }) {
    const { user } = useUser()
  return (
    <Route {...rest} render={({ location }) => user.email ? ( children ) : (<Redirect to={{ pathname: '/signin', state: { from: location }}} />)} />
  )
}
