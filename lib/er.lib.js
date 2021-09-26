import axios from "axios";


export const request = ( destination, payload = null, options = null ) => new Promise( ( rslv, rjct ) => {
  let headers = {};

  if ( options ) {
    if ( options.auth === true ) {
      headers = {
        ...headers,
        Authorization: `Bearer ${getCookie(`access-token`)}` || `` // for most of requests
      };
    }
    if ( `headers` in options && options.headers instanceof Object ) {
      headers = { ...headers, ...options.headers }
    }
  }

  console.log( `start loading` );
  axios({
    method: destination.method,
    url: destination.url,
    headers,
    data: payload || {}
  })
  .then( rslv )
  .catch( rjct )
  .finally( () => console.log( `end loading` ) )

});

export const getCookie = name => {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');

  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];

    while (c.charAt(0) == ' ') {
      c = c.substring(1, c.length);
    }

    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }

  return null;
}

export const removeCookie = name => {
  document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}


export const setCookie = (name, value, days) => {
  let expires = "";

  if (days) {
    let date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }

  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

export const isMobile = () => {
  if ( document ) {
    return document.documentElement.offsetWidth <= 500;
  }
  return false;
}

export function parseDate(str, seperator = `-`) {
  const [dateparts, timeparts] = str.split(" ");
  const [year, month, day] = dateparts.split(seperator);
  const [hours = 0, minutes = 0, seconds = 0] = timeparts?.split(":") ?? [];
  // Treats the string as UTC, but you can remove the `Date.UTC` part and use
  // `new Date` directly to treat the string as local time
  return new Date(Date.UTC(+year, +month - 1, +day, +hours, +minutes, +seconds));
}
