// main.js
// 控制应用生命周期和创建原生浏览器窗口的模组
const { app, BrowserWindow, globalShortcut } = require("electron")
// const isDev = require("electron-is-dev")
const path = require("path")

function createWindow() {
    // 创建浏览器窗口 todo 更新多窗口的形式, 并处理git

    const win1 = new BrowserWindow({
        width: 80,
        height: 20,
        x: 920,
        y: 994,
        useContentSize: true,
        alwaysOnTop: true,
        title: "桌面2",
        frame: false,
        webPreferences: {
            preload: path.join(__dirname, "preload.js"),
        },
    })

    const win2 = new BrowserWindow({
        width: 80,
        height: 20,
        x: 920,
        y: 994,
        useContentSize: true,
        alwaysOnTop: true,
        title: "桌面2",
        frame: false,
        webPreferences: {
            preload: path.join(__dirname, "preload2.js"),
        },
    })

    const win3 = new BrowserWindow({
        width: 80,
        height: 20,
        x: 920,
        y: 994,
        useContentSize: true,
        alwaysOnTop: true,
        title: "桌面2",
        frame: false,
        webPreferences: {
            preload: path.join(__dirname, "preload3.js"),
        },
    })
    let isDev = false
    if (isDev) {
        win1.loadURL("http://localhost:3000")
        win2.loadURL("http://localhost:3000")
        win3.loadURL("http://localhost:3000")
        // openDevTools
        // mainWindow.webContents.openDevTools()
    } else {
        // win1.loadFile(
        //     // vue 3's build result
        //     `file://${path.join(__dirname, "../dist/index.html")}`
        // )
        // win2.loadFile(`file://${path.join(__dirname, "../dist/index.html")}`)
        // win3.loadFile(`file://${path.join(__dirname, "../dist/index.html")}`)
        win1.loadFile("./dist/index.html")
        win2.loadFile("./dist/index.html")
        win3.loadFile("./dist/index.html")
    }
    
}

// 这段程序将会在 Electron 结束初始化
// 和创建浏览器窗口的时候调用
// 部分 API 在 ready 事件触发后才能使用。
app.whenReady().then(() => {
    createWindow()

    app.on("activate", function () {
        // 通常在 macOS 上，当点击 dock 中的应用程序图标时，如果没有其他
        // 打开的窗口，那么程序会重新创建一个窗口。
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })

    // https://www.electronjs.org/docs/latest/api/accelerator
    const ret = globalShortcut.register("Ctrl+Super+Up", () => {
        console.log("CommandOrControl+X is pressed")
    })

    if (!ret) {
        console.log("registration failed")
    }

    // 检查快捷键是否注册成功 Ctrl+Super+Left
    console.log(globalShortcut.isRegistered("Ctrl+Super+Up"))
})

// 除了 macOS 外，当所有窗口都被关闭的时候退出程序。 因此，通常对程序和它们在
// 任务栏上的图标来说，应当保持活跃状态，直到用户使用 Cmd + Q 退出。
app.on("window-all-closed", function () {
    if (process.platform !== "darwin") app.quit()
})

// 在这个文件中，你可以包含应用程序剩余的所有部分的代码，
// 也可以拆分成几个文件，然后用 require 导入。
