const GHIBLIAPI = 'https://ghibliapi.herokuapp.com/'

const request = async (method, url, body) => {
  let fetchParams = {
    method,
    headers: {
      'content-type': 'application/json'
    }
  }

  if (body) fetchParams = { ...fetchParams, body: JSON.stringify(body)}

  try {
    const response = await window
      .fetch(url, fetchParams)
      .then(response => {
        return response.json().then( json => json)
      })
    
    return response
  } catch (error) {
    console.error(error)
  }
} 

const Get = (route, params = {}) => request('GET', route, null)

class Films {
  static list() {
    return Get(GHIBLIAPI + 'films')
  }
}

export default {
  Films
}
