const path = require('path');

module.exports = {
  packagerConfig: {
    asar: true,
    //排除的文件，不打包进 asar
    extraResource:[
      './src/assets/libs/start.sh',
      './src/assets/libs/server-0.0.1-SNAPSHOT.jar',
    ],
    //按正则表达式忽略的文件
    ignore:[]
  },
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {},
    },
    {
      name: '@electron-forge/maker-zip',
      platforms: ['darwin'],
    },
    {
      name: '@electron-forge/maker-deb',
      config: {},
    },
    {
      name: '@electron-forge/maker-rpm',
      config: {},
    },
  ],
  plugins: [
    {
      name: '@electron-forge/plugin-auto-unpack-natives',
      config: {},
    },
  ],
};
