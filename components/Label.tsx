import React from 'react';

interface InternalProps extends React.HTMLProps<HTMLLabelElement> { }

const Label = ({ children, id, label, ...props }: InternalProps) => {
  return (
    <label 
      className="w-40 text-sm border border-2 rounded-l px-4 py-2 bg-gray-300 whitespace-nowrap"
      htmlFor={id || label}
      id={id}
      {...props}
      >
      {children}
    </label>
  )
}

export default Label;