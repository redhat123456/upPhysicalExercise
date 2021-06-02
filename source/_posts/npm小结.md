---
layout: 1900730132的想法
title: npm小结
date: 2021-03-25 21:48:33
tags: -npm
---


## 关于

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这篇文章送给我自己😄，就是太菜了，npm都一知半懂的，所以npm的总结有点必要，下面就来总结一下

## npm是什么
NPM的全称是Node Package Manager，是随同NodeJS一起安装的包管理和分发工具，它很方便让JavaScript开发者下载、安装、上传以及管理已经安装的包。

## npm install 安装模块

    npm install [<name><version>][-g]/[--save][-dev]

* 安装npm
  
  例：
  
        $ npm install
    

 也可直接 npm i

* 安装其他的模块

格式为：

         $ npm install \<Module Name\>

  例如安装hexo模块

  例：
  
         $ npm install hexo

  安装好后自然放在工程目录下的node_modules 目录中，因此无需路径

 * 全局安装与本地安装

npm 的包安装分为本地安装（local）、全局安装（global）两种，从敲的命令行来看，差别只是有没有-g而已，比如

    npm install express          # 本地安装
    npm install express -g   # 全局安装


    若出现一下错误：

        npm err! Error: connect ECONNREFUSED 127.0.0.1:8087 

    解决办法为：

        $ npm config set proxy null

   




## npm  更新

     
 * npm自身的更新Window系统下使用该指令：
  
          $ npm install -g npm 

  *使用淘宝镜像的命令*

          $ npm install -g cnpm --registry=https://registry.npm.taobao.org



## npm 查看安装信息

* 你可以使用以下命令来查看所有全局安装的模块：

          $ npm list -g

## npm卸载模块

* 我们可以使用



  
