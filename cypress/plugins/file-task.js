const fs = require('fs');
const path = require('path');
 
/**
* Procura a arquivo por nome parcial na pasta download
* aguarda até ser exibido ou o timeout seja atingido.
*/

const findDownloadedFile = ({ folder, partialName, timeout }) => {
  const filePath = path.join(folder);
  const startTime = Date.now();
 
  const checkFile = (resolve, reject) => {
    fs.readdir(filePath, (err, files) => {
      if (err) return reject(err);
 
      const foundFile = files.find(file => file.includes(partialName));
 
      if (foundFile) {
        return resolve(path.join(filePath, foundFile));
      }
 
      if (Date.now() - startTime >= timeout) {
        return resolve(null); //Se o timeout for atingido retornar null
      }
 
      setTimeout(() => checkFile(resolve, reject), 500); // Tenta novamente
    });
  };
 
  return new Promise(checkFile); // Retorna e esperar que o arquivo apareça
};
 
module.exports = {
  findDownloadedFile,
};