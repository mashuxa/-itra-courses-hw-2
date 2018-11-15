export default function (url) {
  return new Promise((resolve, reject) => {
    let request = new XMLHttpRequest();
    request.open('GET', url);
    request.responseType = 'json';
    request.send();
    request.onload = () => {
      resolve(request.response);
    }
  });
}


