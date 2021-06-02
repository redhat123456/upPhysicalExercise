---
layout: 1900730132的想法
title: 竞赛中C++常用函数（打ACM和CCSP的同学快看）
date: 2020-12-08 22:02:27
tags:
---
### C与C++的区别
   虽然同为C大家族的成员，但是C++和C用起来确实是有较大的差别，例如C++中有许多的函数可以调用，而C的大多数函数需要自己定义，在C++中我们可以尽情的使用函数库，下面就给大家总结竞赛常用的C++函数，希望可以帮助到初学者

### 基本函数篇

#### sort(a,a+n)
&nbsp;&nbsp;sort()是C++中对指定区间内所有元素(对，你没看错，就是所有元素即使是字符元素也行)进行排序的函数(默认为升序)。

区间表达就使用**地址**来进行的，例如给定一个数组a[n]，我们想要对他排序就

    sort(a,a+n);//给个区间就行了

像这样就行了，如果你想要倒序也很简单，直接调用函数

    #include<bits/stdc++.h>
    using namespace std;
    bool cmp(int a,int b){
        return a>b;
    }//自定义函数
    int main(){
        int a[n]={...};
        sort(a,a+n,cmp);//第三个参数自己定义，实现从大到小
        return 0;
    }

如果是字符串的排序
    
    #include<bits/stdc++.h>
    using namespace std;
    int main(){
       
    }