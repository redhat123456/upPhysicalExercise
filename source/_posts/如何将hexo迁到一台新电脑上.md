---
layout: 1900730132的想法
title: 如何将hexo迁到一台新电脑上
date: 2020-08-25 17:05:59
tags:
categories:
- hexo
---
网上的其他教程都很复杂繁琐

现在介绍一种方便的方法

#### 1.首先在新电脑配好node，git等，就是安装

#### 2.然后用压缩包把原电脑关于hexo的那些文件全部转移到新电脑上，也就是hexo那个文件夹压缩然后转移

#### 3.解压以后在hexo文件夹右键选择命令git bush

<!--more-->


网上的其他教程都很复杂繁琐

现在介绍一种方便的方法

#### 1.首先在新电脑配好node，git等，就是安装

#### 2.然后用压缩包把原电脑关于hexo的那些文件全部转移到新电脑上，也就是hexo那个文件夹压缩然后转移

#### 3.解压以后在hexo文件夹右键选择命令git bush

然后输入

    npm install

然后再把这两个文件夹删除掉
![](https://img-blog.csdnimg.cn/20200726163100411.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3JlZGd1ZXN0NQ==,size_16,color_FFFFFF,t_70
 "")

#### 4.配置密匙（很重要）
 
 先在hexo文件夹右键选择git bush

 **输入以下命令：**

      $ ssh-keygen -t rsa -C "your email@example.com" 
      //引号里面填写你的邮箱地址，比如我的是1907065810@qq.com

 **之后会出现：**

    Generating public/private rsa key pair.  
    Enter file in which to save the key (/c/Users/you/.ssh/id_rsa):  
    //到这里可以直接回车将密钥按默认文件进行存储
**然后出现：**

    Enter passphrase (empty for no passphrase):  
    //这里是要你输入密码，其实不需要输什么密码，直接回车就行 
    Enter same passphrase again:

**接下来会显示：**

    Your identification has been saved in /c/Users/you/.ssh/id_rsa.  
    Your public key has been saved in /c/Users/you/.ssh/id_rsa.pub.  
    The key fingerprint is:  
    这里是各种字母数字组成的字符串，结尾是你的邮箱  
    The key's randomart image is:  
    这里也是各种字母数字符号组成的字符串

**运行以下命令：**

    $ clip < ~/.ssh/id_rsa.pub

密匙就会粘贴到你的剪切板上了，**ctrl+v**就会出现你的密匙了

**然后我们打开在浏览器输入**github.com

然后找到setting

**点击**Deploy key

网页会显示：
![](https://review.pddpic.com/review3/review/2020-08-25/0674180f-105b-42f0-8c0c-513ee4695d71.jpeg "")

**接着我们输入密匙的名称(自定义)，然后在key一栏中ctrl+v**

**然后就会显示**

![](https://review.pddpic.com/review3/review/2020-08-25/3d12b7b4-e564-4f7a-a757-b3eb87c8761d.jpeg "")


按 **add key**就行了

屏幕会显示

![](https://review.pddpic.com/review3/review/2020-08-25/7b35c920-038e-4481-860b-a033cd076138.jpeg "")



大功告成！！！

--------------------------

#### 更新：

我发现一个小bug,当我们用原来电脑的文档上传，原来文件夹的东西会直接上传上去，不会更新而是覆盖，具体的原理我也不懂，大概是每次上传都是都是一次更新

