import React from 'react';

const Errors = ({ errors }: { errors: string[] }) => {
  return (
    <>
    {
      errors.map(error => <p className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">{error}</p> || 'Something is wrong.') 
    }
    </>
  )
}

export default Errors;