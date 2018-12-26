var glob = require('glob');
var path = require('path');
var fs = require('fs');


let pagePath = path.join(__dirname, './src/pages');
var files = glob.sync(`${pagePath}/**/*.wpy`);
let compsObj = {

};
files.forEach(file => {
    let str = fs.readFileSync(file, "utf8");
    let obj = getComponent(str);
    compsObj = Object.assign({}, compsObj, obj);
});
console.log(compsObj);
getPath(compsObj);
compsObj = Object.assign(compsObj, {
    'wux-countdown': 'wux-cuntdown',
    'wux-countup': 'wux-countup'
})
let str = '';
for (let comp in compsObj) {
    let srcDir = path.join(__dirname, `./wux/${comp.substr(4)}`)
    let tarDir = path.join(__dirname, `./src/wux/${comp.substr(4)}`)
    str += `xcopy /y  ${srcDir} ${tarDir} \n`;
}
console.log(str);
fs.writeFileSync('./comp.bat', str);

function getPath(compsObj) {
    Object.keys(compsObj).forEach(comp => {
        let compPath = path.join(__dirname, `./wux/${comp.substr(4)}/index.json`)
        let obj = require(compPath)
        if (obj.usingComponents) {
            Object.keys(obj.usingComponents).forEach(element => {
                if (!compsObj[element]) {
                    compsObj[element] = element;
                    getPath(compsObj);
                }
            });
        }
    });
}

function getComponent(str) {
    let obj = {};
    let reg = /usingComponents: \{([\w\W]*?)}/g;
    let arr = reg.exec(str)
    if (arr && arr.length) {
        let reg2 = /'wux-(.*?)'/g
        let arr2 = arr[1].match(reg2);
        console.log(arr2);
        if (!arr2 || !arr2.length) {
            return {};
        }
        arr2.forEach(s => {
            let reg3 = /'wux-(.*?)'/g
            let com = reg3.exec(s)[1];
            obj[`wux-${com}`] = `wux-${com}`;
        });
    }
    return obj

}


function copyFolder(srcDir, tarDir, cb) {
    fs.readdir(srcDir, function (err, files) {
        var count = 0
        var checkEnd = function () {
            ++count == files.length && cb && cb()
        }

        if (err) {
            checkEnd()
            return
        }

        files.forEach(function (file) {
            var srcPath = path.join(srcDir, file)
            var tarPath = path.join(tarDir, file)

            fs.stat(srcPath, function (err, stats) {
                if (stats.isDirectory()) {
                    console.log('mkdir', tarPath)
                    fs.mkdir(tarPath, function (err) {
                        if (err) {
                            console.log(err)
                            return
                        }

                        copyFolder(srcPath, tarPath, checkEnd)
                    })
                } else {
                    copyFile(srcPath, tarPath, checkEnd)
                }
            })
        })

        //为空时直接回调
        files.length === 0 && cb && cb()
    })
}

function copyFile(srcPath, tarPath, cb) {
    var rs = fs.createReadStream(srcPath)
    rs.on('error', function (err) {
        if (err) {
            console.log('read error', srcPath)
        }
        cb && cb(err)
    })

    var ws = fs.createWriteStream(tarPath)
    ws.on('error', function (err) {
        if (err) {
            console.log('write error', tarPath)
        }
        cb && cb(err)
    })
    ws.on('close', function (ex) {
        cb && cb(ex)
    })

    rs.pipe(ws)
}