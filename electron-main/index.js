import { app, BrowserWindow, ipcMain } from 'electron'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

app.whenReady().then(async () => {
  const win = new BrowserWindow({
    width: 300,
    height: 220,
    resizable: false,
    alwaysOnTop: true,
    frame: false,
    transparent: true,
    backgroundColor: '#00000000',
    webPreferences: {
      // 关闭进程隔离
      // contextIsolation: false,
      devTools: false,
      nodeIntegration: true,
      webSecurity: false,
      // 两种方式都可以
      // preload: join(app.getAppPath(), 'electron-main', 'preload.ts')
      preload: join(__dirname, 'preload.ts')
    }
  })

  win.once('ready-to-show', () => {
    win.show()
  })

  await win.loadURL('http://localhost:5173')
})

ipcMain.on('set-ignore-mouse-events', (event, ...args) => {
  BrowserWindow.fromWebContents(event.sender).setIgnoreMouseEvents(...args)
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})
