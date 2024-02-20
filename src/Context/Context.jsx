import { onAuthStateChanged } from 'firebase/auth';
import React, { createContext, useContext, useEffect, useState } from 'react'
import { auth } from '../firebase/firebase';
import Loader from '../components/Loader/Loader';

const BlogContext = createContext();

const Context = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(false);
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setCurrentUser(user)
            } else {
                setCurrentUser(null)
            }
            setLoader(false)
        })

        return () => unsubscribe();
    }, [currentUser]);

  return (
    <div>
      <BlogContext.Provider value={{ currentUser, setCurrentUser }}>
        { loader ? <Loader /> : children }
      </BlogContext.Provider>
    </div>
  )
}

export default Context

export const Blog = () => useContext(BlogContext);
