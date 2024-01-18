interface IElectronAPI {
  ignoreMouse: () => Promise<void>
  unIgnoreMouse: () => Promise<void>
  hello: () => Promise<void>
}

declare global {
  interface Window {
    electronAPI: IElectronAPI
  }
}
