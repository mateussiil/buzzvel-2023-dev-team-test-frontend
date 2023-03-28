import { Result, ResultFromApi } from "@/model/common";
import { UserPayload, UserSaved } from "@/model/user";
import { environment } from "@/utils/environment";
import { getErrors } from "../getErrors";

export const createUser = async (payload: UserPayload): Promise<Result<any>> => {
  const url = environment.api.URLBase + '/users'

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(payload)
  });

  const user = await res.json() as ResultFromApi<UserSaved>;

  if (user.errors) {
    return { error: getErrors(user.errors) }
  }

  if (!user.data) {
    return { error: ['Something is wrong!'] }
  }

  return { success: user.data }
}
