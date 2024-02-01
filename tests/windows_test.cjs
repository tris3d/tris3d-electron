const { strict: assert } = require("node:assert");
const { describe, test } = require("node:test");
const fs = require("node:fs/promises");
const { MainWindow } = require("../app/windows/main.cjs");

/**
 * @param {string} filePath
 */
const windowFileExists = async (filePath) => {
  try {
    await fs.stat(filePath);
    assert.ok(true);
  } catch {
    assert.ok(false, `File not found: ${filePath}`);
  }
};

describe("MainWindow", () => {
  test("filePath", () => windowFileExists(MainWindow.filePath));
});
