import { ResultFromApi } from "@/model/common"

export const getErrors = <T>(errors: ResultFromApi<unknown>["errors"]): string[] => {
  if(!errors) return [];
  
  return Object.values(errors).flat();
}