export default class LoadJsonFile {
  constructor(url) {
    this.jsonObject = 'test';
    this.url = url;
    this.readJsonFile.bind(this);
  }

  update(){
    console.log('updateComonent...', this.url);
    this.readJsonFile('GET', this.url);
    this.loadExternalJsonFile(this.url, this.parseJson);
  }

  readJsonFile(method, url) {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onload = function () {
            if (this.status >= 200 && this.status < 300) {
                resolve(xhr.response);
            } else {
                reject({
                status: this.status,
                statusText: xhr.statusText
                });
            }
        };
        xhr.onerror = function () {
            reject({
                status: this.status,
                statusText: xhr.statusText
            });
        };
        xhr.send();
    });
  }

  loadExternalJsonFile(file, cb) {
    let compData = '';
    var tmp = file.split('.');
    if(tmp[tmp.length - 1] != "json") {
        return;
  }

  this.readJsonFile('GET', file, cb)
      .then(function (jsonData) {
          cb(jsonData);
      })
      .catch(function (err) {
      console.error('Error: There was an error retrieving the file!', err.statusText);
    });
  }

  parseJson(data) {
    console.log(data);
  }

}