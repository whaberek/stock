type ParamsProps = {
  [key: string]: string | number
}

const getQueryString = (params?: ParamsProps) => {
  const keyValuePairs = [];

  if (params) {
    for (const key in params) {
      keyValuePairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(params[key]));
    }
  }

  // TODO: Get api_key value from environment)
  keyValuePairs.push('api_key=x-9zx3efH4saJ6ivbVaQ')

  return keyValuePairs.join('&');
};

export const fetchCall = async (api: string, params?: ParamsProps) => {
  const queryString = getQueryString(params);

  const response = await fetch(`https://data.nasdaq.com/api/v3/datatables${api}?${queryString}`);

  return response.json();
};
