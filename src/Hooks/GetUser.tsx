import { useContext } from "react"
import { UserContext, userContextType } from "../Context/UserContext"

export const GetUser = () => {
  return useContext<userContextType>(UserContext)
}
