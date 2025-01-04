const { exec } = require("child_process");
const fs = require("fs");
const path = require("path");

// 设置项目目录和仓库信息
const projectDir = path.join(__dirname, "webpack_starter");
const repoUrl = "https://github.com/garylivip/webpack_starter.git";
const branch = "main";

// 克隆或更新仓库
function cloneOrUpdateRepo() {
  if (fs.existsSync(projectDir)) {
    console.log(
      "Repository already exists, pulling latest changes from the main branch..."
    );
    exec(
      `cd ${projectDir} && git checkout ${branch} && git pull origin ${branch}`,
      (error, stdout, stderr) => {
        if (error) {
          console.error(`Error pulling repository: ${error}`);
          return;
        }
        console.log(stdout);
        console.log("Repository updated successfully.");
        installDependencies();
      }
    );
  } else {
    console.log("Cloning the repository...");
    exec(
      `git clone ${repoUrl} ${projectDir} && cd ${projectDir} && git checkout ${branch}`,
      (error, stdout, stderr) => {
        if (error) {
          console.error(`Error cloning repository: ${error}`);
          return;
        }
        console.log(stdout);
        console.log("Repository cloned successfully.");
        installDependencies();
      }
    );
  }
}

// 安装依赖
function installDependencies() {
  const packageJsonPath = path.join(projectDir, "package.json");

  // 读取 package.json 文件
  fs.readFile(packageJsonPath, "utf8", (err, data) => {
    if (err) {
      console.error(`Error reading package.json: ${err}`);
      return;
    }

    const packageJson = JSON.parse(data);
    const dependencies = { ...packageJson.dependencies, ...packageJson.devDependencies };

    // 安装每个依赖包
    Object.keys(dependencies).forEach((pkg) => {
      console.log(`Installing ${pkg}...`);
      const npmInstall = exec(`cd ${projectDir} && npm install ${pkg}`, (error, stdout, stderr) => {
        if (error) {
          console.error(`Error installing ${pkg}: ${error}`);
          return;
        }
        console.log(stdout);
        console.log(`${pkg} installed successfully.`);
      });

      // 输出安装进度信息
      npmInstall.stdout.on("data", (data) => {
        process.stdout.write(data);
      });

      npmInstall.stderr.on("data", (data) => {
        process.stderr.write(data);
      });
    });

    console.log("All dependencies installed successfully.");
    buildProject();
  });
}

// 构建项目
function buildProject() {
  console.log("Building the project...");
  exec(`cd ${projectDir} && npm run build`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error building project: ${error}`);
      return;
    }
    console.log(stdout);
    console.log("Project built successfully.");
    startDevServer();
  });
}

// 启动开发服务器
function startDevServer() {
  console.log("Starting the development server...");
  exec(`cd ${projectDir} && npm run dev`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error starting development server: ${error}`);
      return;
    }
    console.log(stdout);
    console.log("Development server started successfully.");
  });
}

// 开始执行
cloneOrUpdateRepo();
