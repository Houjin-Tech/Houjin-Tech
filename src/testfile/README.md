---
title: 技术文章
---

# Hello VuePress

## 同一台电脑如何配置多个 Github 的SSH Key

### 1. 清除操作

```sh
git config --global --unset user.name
git config --global --unset user.email
```

### 2. 验证是否清除成功

```sh
git config --global user.name
git config --global user.email
```

### 3. 生成新的密钥
```sh
ssh-keygen -t rsa -C "zhj0125@gmail.com"
```

::: tip

Enter file in which to save the key (/c/Users/ZHJ/.ssh/id_rsa): `id_rsa_Houjin-Tech`

命令行提示上述文字时，输入新名字，这样产生的key就会以这个名字命名。

:::

### 4. 移动密钥文件

将生成的密钥文件移动到 .ssh 文件夹内

```sh
ZHJ@ZHJ-PC MINGW64 ~/.ssh
$ mv ~/Desktop/id_rsa_Houjin-Tech* .

ZHJ@ZHJ-PC MINGW64 ~/.ssh
$ ls -al
total 47
drwxr-xr-x 1 ZHJ 197609    0 Mar  4 22:43 .
drwxr-xr-x 1 ZHJ 197609    0 Mar  4 22:40 ..
-rw-r--r-- 1 ZHJ 197609  261 Mar  4 22:40 config
-rw-r--r-- 1 ZHJ 197609 2610 Nov 20  2022 id_rsa
-rw-r--r-- 1 ZHJ 197609  576 Nov 20  2022 id_rsa.pub
-rw-r--r-- 1 ZHJ 197609 2602 Mar  4 22:33 id_rsa_Houjin-Tech
-rw-r--r-- 1 ZHJ 197609  571 Mar  4 22:33 id_rsa_Houjin-Tech.pub
-rw-r--r-- 1 ZHJ 197609 1747 Jan  2 23:32 known_hosts
-rw-r--r-- 1 ZHJ 197609 1579 Aug  7  2023 known_hosts.old
```

### 5. 修改config文件

在.ssh文件夹下，创建一个名字为 `config` 的文件，没有后缀名。配置文件的格式：

```sh
ZHJ@ZHJ-PC MINGW64 ~/.ssh
$ cat config
Host 192.168.112.131
  HostName 192.168.112.131
  Port 22
  User zhj

# 20240304 Add Houjin-Tech Account
Host ZHJ0125
HostName github.com
User git
IdentityFile ~/.ssh/id_rsa

Host Houjin-Tech
HostName github.com
User git
IdentityFile ~/.ssh/id_rsa_Houjin-Tech

```

### 6. 上传 SSH Key

进入新账户的GitHub账号设置页面，在SSH设置中添加新的SSH keys。

添加完成后，验证是否可以链接成功。

```sh
ZHJ@ZHJ-PC MINGW64 ~/.ssh
$ ssh -T git@ZHJ0125
Hi ZHJ0125! You ve successfully authenticated, but GitHub does not provide shell access.

ZHJ@ZHJ-PC MINGW64 ~/.ssh
$ ssh -T git@Houjin-Tech
Hi Houjin-Tech! You've successfully authenticated, but GitHub does not provide shell access.
```
::: tip 解释：

* Host                    //网站别名
* HostName                //托管网站域名
* User                    //托管网站上的用户名
* IdentityFile ~/.ssh/    //使用的密钥文件

:::

### 7. 注意事项

经过上述配置以后，原来克隆的地址是：`git@github.com:ensky/ensky.git`

我们需要改为：`git@Houjin-Tech:ensky/ensky.git`

也就是我们使用Host后的名字替换掉`github.com`，这样就可以正常使用各个地址的Key了。

克隆：`git clone git@Houjin-Tech:ensky/ensky.git`

::: note 原理分析

> 1. ssh 客户端是通过类似 git@github.com:githubUserName/repName.git ** 的地址来识别使用本地的哪个私钥的，地址中的 User 是@前面的git， Host 是@后面的github.com。
> 2. 如果所有账号的 User 和 Host 都为 git 和 github.com，那么就只能使用一个私钥。所以要对User 和 Host 进行配置，让每个账号使用自己的 Host，每个 Host 的域名做 CNAME 解析到 github.com，如上面配置中的Host second.github.com。
> 3. 配置了别名之后，新的地址就是git@second.github.com:githubUserName/repName.git**（在添加远程仓库时使用）。

:::

### 8. 提交上传

首次使用SSH上传时，记得重新配置账户信息：

```sh
# 不建议使用全局配置 --global
git config user.email "zhj0125@gmail.com"
git config user.name "Houjin-Tech"
```

转载并修改后发布，原链接：[https://ensky.tech/one-pc-double-ssh-key/](https://ensky.tech/one-pc-double-ssh-key/)
