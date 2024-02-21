import React from 'react'

const Input = ({ type, title, form, setForm }) => {
  
  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
  }

  const formatTitle = (title) => {
    // Replace underscores with spaces
    const formattedTitle = title.replace(/_/g, ' ');

    return formattedTitle.charAt(0).toUpperCase() + formattedTitle.slice(1);
  };
  

  return (
    <div className='flex flex-col gap-2 mt-[1rem]'>
      <label className='text-sm capitalize'>{formatTitle(title)}</label>
      <input
      className='text-center border-b border-black outline-none'
      type={type} 
      name={title}
      onChange={handleChange}
      />
    </div>
  )
}

export default Input