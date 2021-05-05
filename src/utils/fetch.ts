interface IFetchProps {
  method: "GET" | "POST" | "PUT" | "DELETE"
  service: string
  body: any
  token: string
}

export const fetchUtil = async ({
  method,
  service,
  body,
  token,
}: IFetchProps) => {
  const fetchOptions = {
    method,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }
  method !== "GET" && !!body && Object.assign(fetchOptions, { body: body })
  const response = await fetch(
    `http://jemmyperez.pythonanywhere.com/${service}`,
    fetchOptions
  )
    .then(r => r.json())
    .catch(err => console.log(err))

  return {
    statusCode: response.code,
    data: response.data,
    errors: response.errors,
    message: response.message,
  }
}
