import { ResultFromApi } from "@/model/common"

export const getErrors = <T>(errors: Pick<ResultFromApi<unknown>, "errors">): string[] => {
  return Object.entries(errors).flatMap(([_, value]) => value)
}