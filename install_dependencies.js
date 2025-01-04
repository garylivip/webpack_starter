const { exec } = require("child_process");
const os = require("os");

// 检查 Node.js 是否已安装
function checkNode() {
  exec("node -v", (error, stdout, stderr) => {
    if (error) {
      console.error("Node.js is not installed. Installing Node.js...");
      installNode();
    } else {
      console.log(`Node.js version: ${stdout.trim()}`);
      checkGit();
    }
  });
}

// 安装 Node.js
function installNode() {
  if (os.platform() === "win32") {
    exec(
      'powershell -Command "iwr https://nodejs.org/dist/latest/node-v16.x-x64.msi -OutFile nodejs.msi; Start-Process nodejs.msi -Wait -ArgumentList "/quiet /norestart""',
      (error, stdout, stderr) => {
        if (error) {
          console.error("Failed to install Node.js:", error);
        } else {
          console.log("Node.js installed successfully.");
          checkGit();
        }
      }
    );
  } else {
    exec(
      "curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash - && sudo apt-get install -y nodejs",
      (error, stdout, stderr) => {
        if (error) {
          console.error("Failed to install Node.js:", error);
        } else {
          console.log("Node.js installed successfully.");
          checkGit();
        }
      }
    );
  }
}

// 检查 Git 是否已安装
function checkGit() {
  exec("git --version", (error, stdout, stderr) => {
    if (error) {
      console.error("Git is not installed. Installing Git...");
      installGit();
    } else {
      console.log(`Git version: ${stdout.trim()}`);
      checkNpm();
    }
  });
}

// 安装 Git
function installGit() {
  if (os.platform() === "win32") {
    exec(
      'powershell -Command "iwr https://github.com/git-for-windows/git/releases/download/v2.35.1.windows.2/Git-2.35.1.2-64-bit.exe -OutFile git-installer.exe; Start-Process git-installer.exe -Wait -ArgumentList "/SILENT /NORESTART""',
      (error, stdout, stderr) => {
        if (error) {
          console.error("Failed to install Git:", error);
        } else {
          console.log("Git installed successfully.");
          checkNpm();
        }
      }
    );
  } else {
    exec("sudo apt-get install -y git", (error, stdout, stderr) => {
      if (error) {
        console.error("Failed to install Git:", error);
      } else {
        console.log("Git installed successfully.");
        checkNpm();
      }
    });
  }
}

// 检查 npm 是否已安装
function checkNpm() {
  exec("npm -v", (error, stdout, stderr) => {
    if (error) {
      console.error(
        "npm is not installed. npm is included with Node.js, so this should not happen."
      );
    } else {
      console.log(`npm version: ${stdout.trim()}`);
      console.log("All dependencies are installed and ready to use.");
    }
  });
}

// 开始检查
checkNode();
