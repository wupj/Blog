# nvm安装与使用

## - 下载地址：
https://github.com/coreybutler/nvm-windows/releases

#### nvm下载慢
- 找到nvm安装路径
- 修改settings.txt

```txt
node_mirror: https://npm.taobao.org/mirrors/node/
npm_mirror: https://npm.taobao.org/mirrors/npm/
```

- 查看本地安装的所有版本

```shell
nvm list [available]
```

- 安装，命令中的版本号可自定义

```shell
nvm install 11.13.0
```

- 安装当前最新的稳定版

```shell
nvm install stable
```

- 使用特定版本

```shell
nvm use 11.13.0
```

- 卸载

```shell
nvm uninstall 11.13.0
```
