# audio-server
オーディオファイル(mp3)のURL を返すだけのAPIサーバ

Google Home で任意のオーディオファイルを流すために作成。

参考) https://github.com/volpe28v/google-home-podcast

### インストール、起動
```
$ npm install
$ PORT=8070 node app
```

### 準備
public 配下に任意の mp3 ファイルを配置

### オーディオファイルの取得URL
```
http://localhost:8070/mp3_file_name.mp3
```
