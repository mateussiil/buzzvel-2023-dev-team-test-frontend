import React from 'react';

interface InternalProps extends React.HTMLProps<HTMLInputElement> {}

const Input = ({ type, ...props }: InternalProps) => {
  return (
    <input
      className="border border-2 rounded-r px-4 py-2 flex-1 "
      {...props}
    />
  )
}

export default Input;