const { BrowserWindow } = require("electron");

class MainWindow {
  /** @type {BrowserWindow|undefined} */
  browserWindow;

  getBrowserWindow() {
    if (!this.browserWindow)
      this.browserWindow = new BrowserWindow(MainWindow.browserWindowOptions);
    return this.browserWindow;
  }

  loadFile() {
    this.getBrowserWindow().loadFile(MainWindow.filePath);
  }

  /** @type {import('electron').BrowserWindowConstructorOptions} */
  static browserWindowOptions = {
    width: 800,
    height: 600,
  };

  static filePath = "app/windows/main.html";

  static create() {
    const win = new MainWindow();
    win.loadFile();
  }
}

module.exports = { MainWindow };
