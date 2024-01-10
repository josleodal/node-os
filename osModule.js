
const os = require('os');

function getSystemInfo() {
  const systemInfo = {
    Nombre: os.type(),
    Tipo: os.platform(),
    Versión: os.release(),
    Arquitectura: os.arch(),
    CPUs: os.cpus().length,
    MemoriaTotal: `${(os.totalmem() / (1024 * 1024)).toFixed(2)} MB`,
    MemoriaLibre: `${(os.freemem() / (1024 * 1024)).toFixed(2)} MB`,
  };

  return systemInfo;
}

module.exports = { getSystemInfo };

