

const os = require('os');

function getNetworkInfo() {
  const networkInterfaces = os.networkInterfaces();

  Object.entries(networkInterfaces).forEach(([interfaceName, interfaces]) => {
    console.log(`Interfaz ${interfaceName}:`);

    interfaces.forEach((iface) => {
      console.log(`  Familia: ${iface.family} Dirección: ${iface.address} Interno: ${iface.internal}`);
    });
  });
}

module.exports = { getNetworkInfo };



