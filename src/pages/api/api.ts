const DORR_API_URL: string = process.env.DORR_API_URL || '';
const DORR_API_TOKEN = process.env.DORR_API_TOKEN;

export async function fetchAPI(url: string, method: string, payload: any = {}) {
  const headers: any = { 'Content-Type': 'application/json' }

  headers['Content-Type'] = 'application/json';
  if (process.env.DORR_API_TOKEN) {
      headers['x-auth-token'] = DORR_API_TOKEN;
  }
  const fetchUrl = DORR_API_URL + url;

  console.log(`fetchUrl=${fetchUrl}`);
  console.log(`token=${DORR_API_TOKEN}`);

  const res: Response = await fetch(fetchUrl, {
    method: method.toUpperCase(),
    headers,
    body: payload,
  })

  console.log(`res.status=${res.status}, res.statusText=${res.statusText}`);
  if (res.ok) {
    const json = await res.json()
    return json;
  } else {    
    throw new Error('Failed to fetch API: ' + res.status + ' ' + res.statusText);
  }
}