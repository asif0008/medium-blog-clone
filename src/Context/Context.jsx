import { onAuthStateChanged } from 'firebase/auth';
import React, { createContext, useContext, useEffect, useState } from 'react'
import { auth } from '../firebase/firebase';

const BlogContext = createContext();

const Context = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(false);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setCurrentUser(user)
            } else {
                setCurrentUser(null)
            }
        })

        return () => unsubscribe();
    }, [currentUser]);

  return (
    <div>
      <BlogContext.Provider value={{ currentUser, setCurrentUser }}>
        {children}
      </BlogContext.Provider>
    </div>
  )
}

export default Context

export const Blog = () => useContext(BlogContext);
