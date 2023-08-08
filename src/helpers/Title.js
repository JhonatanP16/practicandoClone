import axios from "axios";

export const titleConvert = (title) => {
    return title.replace(/\s+/g, '-');
}

export const dowloadFile = async(e,urlToDownload) => {
    e.preventDefault();
    const corsProxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const finalUrl = corsProxyUrl + urlToDownload;
    return new Promise(async (resolve, reject) => {
        try { 
          const response = await axios.get(finalUrl, { responseType: 'blob' });
          if (response) {
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', `poster_${new Date().getTime()}.jpg`);
            document.body.appendChild(link);
            link.click();
    
            return resolve('Download successful.');
          } else {
            return reject('Failed to download');
          }
        } catch (e) {
          return reject(`Failed to download: ${e}`);
        }
      });
}