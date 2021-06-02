---
layout: 1900730132的想法
title: markdown精讲
date: 2021-03-08 22:18:44
tags: -blog 
    - markdown
    - 体系知识
---
## 一些话 
Hello~ 我是不干人事的Tanger，首先欢迎你阅读我的文章😀，也很期待各位大佬的指正，如果对这篇文章感兴趣的话，不妨收藏一下⭐本页面，如果有什么想对作者说的话可以通过两种方式联系作者：

* 简单粗暴法：直接在下方的评论区留言🎈(这种方式可能作者回复较慢)

* 花里胡哨法：打开邮箱，发送你的留言至作者的邮箱(1907065810@qq.com)我会在第一时间回复你✨

## 关于

这篇文章并无什么用😂，主要是我老不记得Markdown语法老是上网找，诶，这可能就是菜吧，所以我打算自己写一篇Markdown语法总结出来就很nice😀

### 目录
* 😁 Markdown精讲之文章头部
* 😀 Markdown精讲之标题
* 😂 Markdown精讲之段落
* 🤣 Markdown精讲之区块引用
* 😃 Markdown精讲之代码区块
* 😄 Markdown精讲之强调
* 😅 Markdown精讲之列表
* 😆 Markdown精讲之分割线
* 😋 Markdown精讲之链接
* 😎 Markdown精讲之图片
* 🙂 Markdown精讲之反斜杆\
* 🤔 Markdown精讲之符号'`'
* 😘 最后的最后：鸣谢



## <span id="1"> Markdown精讲之文章头部 \#1 </span>
一篇好的Markdown文章最好将头部的打得清楚一点，在我们创造一篇新的文章时会是这样的，如下所示>>

    ---
    layout: Tanger的思源地
    title: new article
    date: 2021-05-15 13:13:29
    tags:
    ---

上面所显示的就是一篇文章在初始化的时候，下面让我们来解读一下，为什么会出现这些信息，其实这些信息是根据用户已经给定的一些信息，例如：

由于笔者使用的是hexo来写博客的，我在hexo的根目录中配置了以下信息：

    # Writing
    new_post_name: :title.md # File name of new posts
    default_layout: Tanger的思源地
    titlecase: false # Transform title into titlecase
    external_link:
    enable: true # Open external links in new tab
    field: site # Apply to the whole site
    exclude: ''
    filename_case: 0
    render_drafts: false
    post_asset_folder: ture
    relative_link: false
    future: true
    highlight:
    enable: true
    line_number: true
    auto_detect: false
    tab_replace: ''
    wrap: true
    hljs: true

所以我在写每篇文章的时候都，在layout那一行都会默认是"Tanger的思源地"😁

而为什么title为什么会出现“new article”是因为笔者在初始化的时候在根目录下输入

    hexo new "new article"

所以在title就出现“new article”

下面就是Markdown文件的完整的头部，可以对照下表加入自己想加入的东西😘😘

    ---
    layout: 作者名
    title: 文章标题
    date: 文章日期 #例如2020/01/01
    author: 作者名称
    cover: #true or false
    top: #true or false
    toc: #标签 true or false
    img: /medias/featureimages/1.jpg #文章封面图片
    coverImg: /medias/featureimages/0.jpg
    mathjax: #true or false
    summary: #这是自定义的摘要内容
    categories: 博客
    tags:
    - 标签一
    - 标签二
    ---

        （在<!--more-->上面的文字、图片都是可以实现预览的）
         <!--more-->


         内容（省略一万字）



（具体的要看主题文档说明）

## <span id="2"> Markdown精讲之标题 \#2</span>

要创建标题，请在单词或短语前面添加井号 (#) 。# 的数量代表了**标题的级别**。例如，添加三个 # 表示创建一个三级标题 (\<h3>) (例如：### My Header)。😘

|Markdown语法 | HTML|  <view align="center">预览效果</view>
---|:--:|---:
|# 一级标题 | \<h1>一级标题 \</h1> | <view align="center"> <h1>一级标题</h1> </view>
|# 二级标题 | \<h2>二级标题 \</h2> |  <view align="center"> <h2>二级标题</h2> </view>
|# 三级标题 | \<h3>三级标题 \</h3> |  <view align="center"> <h3>三级标题</h3> </view>
|# 四级标题 | \<h4>四级标题 \</h4> |  <view align="center"> <h4>四级标题</h4> </view>
|# 五级标题 | \<h5>五级标题 \</h5> |  <view align="center"> <h5>五级标题</h5> </view>


### 补充：
#### 一些不常用的写法
例如：
    一级标题
    =========
    二级标题
    ---------

<h1>一级标题</h1>

<h2>二级标题</h2>

一些废话>>

要合理使用文章的标题，比如最好别老是使用一级标题最好别老是使用一级标题最好别老是使用一级标题，重要的话说三次，因为一级标题在页面自定义生成的目录中，可能会导致目录紊乱，在文章里面就使用二级标题+三级标题就已经完完全全够用了，所以最好别用三级标题😁。


## <span id="1">Markdown精讲之段落 \#3</span>

这节内容非常短，只需要学会一个操作就行了，要想创造出段落的效果，只需在回车空格就行了

例如：

Markdown:

我是一个段落

我是一个段落

Html:

\<p>我是一个段落\</p>\<p>我是一个段落\</p>

他们的实际效果一致。

段落这节到此结束🆗，欢迎学习下一章

## Markdown精讲之区块引用 \#4

这一章将学习如何去使用区块引用，和代码区块(请关注下一章)不同的是，区块引用并不常用，但也并非不用，一些人还会喜欢将自己认为重要的东西引用起来。

例如：

    > 前端学习
    >> 前端三大件
    >>>Html
    >>>JavaScript
    >>>CSS

> 前端学习
>> 前端三大件
>>>Html
>>>JavaScript
>>>CSS

值得注意的是：引用并非像你的标题那样如此的好用，引用的这些特性决定了它并不能像标题一样如此突出，只能在正文中显得稍微显眼一点。

区块引用就先告一段落，欢迎进入下一章的学习。

## Markdown精讲之代码区块 \#5

 本章将为各位同学介绍的是代码区块，与上面的区块引用虽然看上去很相近，实则大相径庭，代码区块常常被使用在作者想将代码表现在自己的文章例如：

直接打：

#include<bits/stdc++.h>

using namespace std;

int main(){

cout<<"Hello World!"<<endl;

return 0;

}

我认为这样会很不美观而且出现的方式也很突兀，无论是在页面整体结构上，还是从美观的角度上分析都不会让人觉得这是一篇好文章。

使用代码引用：

    #include<bits/stdc++.h>
    using namespace std;
    int main(){
        cout<<"Hello World!"<<endl;
        return 0;
    }

这样就显得好看许多了!!!

欢迎学习下一节《Markdowm精讲之强调》

## Markdown精讲之强调 \#6

本节将学习强调，强调有三种，一、是加粗 二、是斜体 三、是删除线 使用起来非常简单，下面将演示一下

例如：

|Markdown语法 | HTML|  <view align="center">预览效果</view>
---|:--:|---:
|\_\_加粗\_\_ | \<B>加粗 \</B> |  <B>加粗</B> 
|\*\*加粗\*\* | \<B>加粗 \</B> |  <view align="center"> <B>加粗</B> </view>
|\_斜体\_ | \<i>斜体 \</i> |  <view align="center"> <i>斜体</i> </view>
|*斜体* | \<i>斜体\</i> |  <view align="center"> <i>斜体</i> </view>
|~~删除线~~ | \<s>删除线 \</s> |  <view align="center"> <s>删除线</s> </view>



## Markdown精讲之列表 \#7

本节学习的是Markdown中的列表，在Markdown中可以用*、+、-来标记列表，记住标记这些符号后面必须这些都可以使用，同样也非常的简单

例如：

\* 第一点
\* 第二点
\* 第三点

效果

* 第一点
* 第二点
* 第三点

下一节将介绍分割线

## Markdown精讲之分割线 \#8

本届学习的是

## Markdown精讲之链接 \#9
## Markdown精讲之图片 \#10
## Markdown精讲之反斜杆\  \#11
## Markdown精讲之符号'`' \#12
## 最后的最后：鸣谢 \#13
