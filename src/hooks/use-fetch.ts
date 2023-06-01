'use client'

import { UserProps } from "@/app/users/list/page";
import { useEffect, useState } from "react";


export function useFetch(url: string) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<UserProps[]>([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(url);
      const responseData: UserProps[] = await response.json();

      setLoading(false)
      setData(responseData)
    })()
  }, [url]);

  return [loading, data]
}
