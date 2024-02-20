import React, { createContext, useContext, useState } from 'react'

const BlogContext = createContext();

const Context = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(true);
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
