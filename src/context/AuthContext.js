import { createContext, useContext, useEffect, useState } from "react"
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth"

import { auth } from "tt/utils/fire"

const AuthContext = createContext({})

export const useAuth = () => useContext(AuthContext)

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      //       console.log("User changed", user.email)
      if (user) {
        setUser({
          uid: user.uid,
          email: user.email,
        })
      } else {
        setUser(null)
      }
      setLoading(false)
    })
  }, [])

  const signup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }
  const logout = async () => {
    setUser(null)
    await signOut(auth)
  }

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
