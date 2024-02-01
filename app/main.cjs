const { BrowserWindow, app } = require("electron");
const { MainWindow } = require("./windows/main.cjs");

app.whenReady().then(() => {
  MainWindow.create();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) MainWindow.create();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
