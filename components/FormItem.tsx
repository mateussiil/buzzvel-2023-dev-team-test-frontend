import React from 'react';
import Input from './Input';
import Label from './Label';

interface InternalProps {
  label?: React.ReactNode;
  id: any;
  children: React.ReactNode;
}



const FormItem = ({ children, id, label }: InternalProps) => {
  return (
    <div className="flex mb-2">
      <Label id={id || label}>{label}</Label>
      {children}
    </div>
  )
}

export default FormItem;