export interface Result<T> {
  success?: T;
  error?: string[];
}

export interface ResultFromApi<T> {
  message?: string
  errors?: { [key: string]: string[]} 
  data?: T[]
}