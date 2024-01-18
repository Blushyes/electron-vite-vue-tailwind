const {contextBridge, ipcRenderer} = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  ignoreMouse: () => ipcRenderer.send('set-ignore-mouse-events', true, {forward: true}),
  unIgnoreMouse: () => ipcRenderer.send('set-ignore-mouse-events', false)
})
