import { Result } from "@/model/common";
import { UserPayload } from "@/model/user";
import { environment } from "@/utils/environment"

export const getUser = async (name : string) => {
  const url = environment.api.URLBase + '/users/' + name

  const res = await fetch(url)
    .then(res => res.json());

  return res.data || null
}