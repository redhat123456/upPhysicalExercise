---
layout: 1900730132的想法
title: ACM之递归
date: 2020-07-12 13:09:10
tags:
categories: 
- ACM
---
## 百度百科---递归
程序调用自身的编程技巧称为递归（ recursion）。递归做为一种算法在程序设计语言中广泛应用。 一个过程或函数在其定义或说明中有直接或间接调用自身的一种方法，它通常把一个大型复杂的问题层层转化为一个与原问题相似的规模较小的问题来求解，递归策略只需少量的程序就可描述出解题过程所需要的多次重复计算，大大地减少了程序的代码量。递归的能力在于用有限的语句来定义对象的无限集合。一般来说，递归需要有边界条件、递归前进段和递归返回段。当边界条件不满足时，递归前进；当边界条件满足时，递归返回。

<!--more-->

## 百度百科---递归
程序调用自身的编程技巧称为递归（ recursion）。递归做为一种算法在程序设计语言中广泛应用。 一个过程或函数在其定义或说明中有直接或间接调用自身的一种方法，它通常把一个大型复杂的问题层层转化为一个与原问题相似的规模较小的问题来求解，递归策略只需少量的程序就可描述出解题过程所需要的多次重复计算，大大地减少了程序的代码量。递归的能力在于用有限的语句来定义对象的无限集合。一般来说，递归需要有边界条件、递归前进段和递归返回段。当边界条件不满足时，递归前进；当边界条件满足时，递归返回。

## 递归定义
递归，就是在运行的过程中调用自己。
构成递归需具备的条件：
函数嵌套调用过程示例
函数嵌套调用过程示例
1. 子问题须与原始问题为同样的事，且更为简单；
2. 不能无限制地调用本身，须有个出口，化简为非递归状况处理。
在数学和计算机科学中，递归指由一种（或多种）简单的基本情况定义的一类对象或方法，并规定其他所有情况都能被还原为其基本情况。
例如，下列为某人祖先的递归定义：
某人的双亲是他的祖先（基本情况）。某人祖先的双亲同样是某人的祖先（递归步骤）。斐波纳契数列（Fibonacci Sequence），又称黄金分割数列，指的是这样一个数列：1、1、2、3、5、8、13、21..... I [1] 
斐波纳契数列是典型的递归案例：
递归关系就是实体自己和自己建立关系。
Fib(0) = 1 [基本情况] Fib(1) = 1 [基本情况] 对所有n > 1的整数：Fib(n) = (Fib(n-1) + Fib(n-2)) [递归定义] 尽管有许多数学函数均可以递归表示，但在实际应用中，递归定义的高开销往往会让人望而却步。例如：
阶乘（1) = 1 [基本情况] 对所有n > 1的整数：阶乘（n) = (n * 阶乘（n-1)) [递归定义] 一种便于理解的心理模型，是认为递归定义对对象的定义是按照“先前定义的”同类对象来定义的。例如：你怎样才能移动100个箱子？答案：你首先移动一个箱子，并记下它移动到的位置，然后再去解决较小的问题：你怎样才能移动99个箱子？最终，你的问题将变为怎样移动一个箱子，而这时你已经知道该怎么做的。
如此的定义在数学中十分常见。例如，集合论对自然数的正式定义是：1是一个自然数，每个自然数都有一个后继，这一个后继也是自然数。
德罗斯特效应
德罗斯特效应
德罗斯特效应是递归的一种视觉形式。图中女性手持的物体中有一幅她本人手持同一物体的小图片，进而小图片中还有更小的一幅她手持同一物体的图片，依此类推。
又例如，我们在两面相对的镜子之间放一根正在燃烧的蜡烛，我们会从其中一面镜子里看到一根蜡烛，蜡烛后面又有一面镜子，镜子里面又有一根蜡烛……这也是递归的表现。

## 递归应用
依我看递归最经典的应用恐怕是斐波纳契数列，一个数等于前面两个数相加
例：求第n个斐波拉基数；
一般的算法：

    #include<stdio.h>
    int main(){
        int p1=1,p2=1,n,j=0;
        scanf("%d",&n);
        if(n>=3){
                printf("\n%d个斐波拉基数列：\n",n);
        for(int i=0;i<(n+1)/2;i++){
        printf("%d ",p1);
        j++;
        if(j!=n)
        printf("%d ",p2);
        p1=p1+p2;
        p2=p2+p1;
        j++;
        }
        }
        else{
            printf("输入的数字不够大");
        }
运用递归思想：

    #include<stdio.h>
    #include<iostream>
    using namespace std;
    int f(int n);
    int main(){
        int n,sum;
    cout <<"请输入一个数字"<<'\n';
        cin>> n;                        //输入一个整数n
    sum=f(n);                         //函数调用
        cout<<sum<<'\n';
    return 0;
    }
    int f(int n)
    {
        if(n<=1)
            return n;
        else   
        return f(n-1)+f(n-2);//递归调用
    }

### 栈和递归

    #include<stdio.h>
    #include<iostream>
    using namespace std;
    int f(int m){
        if(m==1) return 1;
        else {
            cout<<m<<endl;
            return f(m-1);
        }
    } 
    int main(){
        int n;
        int f(int m);
        cout<<"请输入一个大于1的数："<<endl;
        cin>>n;
        cout<<f(n)<<endl;
        return 0;
    }
### 经典题目：
#### 1.一个人赶着鸭子去每个村庄卖，每经过一个村子卖去所赶鸭子的一半又一只。这样他经过了七个村子后还剩两只鸭子，问他出发时共赶多少只鸭子？经过每个村子卖出多少只鸭子
##### 题目分析:
递归终止的条件是当达到第7个村庄时递归停止，设经过的村庄数为n则有剩余的鸭子为总数为每次剩余的鸭子数位sum = sum-(sum/2+1)
算法构造：当 n=7 时 sum = 2;当 0<n<7 时 sum =2*m+2;

##### 源代码：
    #include <iostream.h>
    class Questionone{
    public: 
        int answer(int n, int sum){
            if(n>0){
                sum = 2*sum+2;	
                if(n-1>0){	
                    cout<<"第"<<n-1<<"个村庄"<<"卖出"<<2*sum+2-sum<<endl;
                }
                n--;
                return answer(n,sum);
            
            }else{
                return sum;
            }
        }		
    };
    void main(){
        int SUM = 2;
        int  N =  7;
        Questionone question;
        cout<<"总数："<<question.answer(N,SUM)<<endl;	
    }

#### 2.角谷定理
输入一个自然数，若为偶数，则把它除以2，若为奇数，则把它乘以3加1。经过如此有限次运算后，总可以得到自然数值1。求经过多少次可得到自然数1。
算法分析：
递归的终止条件是最后值为1；设输入的值为n先进项判断，若 n = 1则输出n;
若n不为1；则对他进行偶数判断，若为偶数除2，若为奇数则乘3加1；然后在进行偶数判断，直到n = 1为止；
算法构造
n=1 时 输出n；n!=1时 偶数判断 偶数 n = n/2;若是奇数 n = 3*n+1
##### 源代码：

    #include<iostream.h>
    class questiontwo{
        public:
            int answer(int sum){
                if(sum == 1){
                    cout<<" "<<sum;
                    return sum;
                }else{
                    if((sum%2) == 1){
                        sum = 3*sum+1;
                        cout<<" "<<sum;
                        return answer(sum);
                    }else{
                        sum = sum/2;
                        cout<<" "<<sum;
                        return answer(sum);
                    }
                }			
            }
    };
    void main(){
        int c ;
        cout<<"请输入一个数"<<endl;
        cin>>c;
        questiontwo question2;
        question2.answer(c);
    }

#### 3.电话号码
    电话号码对应的字符组合：在电话或者手机上，一个数字对应着字母ABC，7对
    应着PQRS。那么数字串27所对应的字符可能组合就有3*4种（如AP,BR等）。现
    在输入一个3到11位长的电话号码，请打印出这个电话号码对应的字符的所有可
    能组合和组合数。
##### 题目分析：
    根据题意可知：2对应的是ABC  3对应的是DEF 4对应的是GHI 5对应的JKL
    6对应的是MNO 7对应的是PQRS 8对应的是TUV 9对应的是WXYZ
##### 源代码：
    public class questionthree {
        /**
        * 
        * @param number  	电话号码
        * @param answer	辅助数组
        * @param index  电话位数中对应的第几位循环
        * @param n  电话位数
        */
        public static void Answer(int []number, int []answer,int 
        index,int n){
            char[][] word ={{},{},{'A','B','c'},{'D','E','F'},{'G',
            'H','I'},{'J','K','L'},{'M','N','O'},{'P','Q','R','s'},
            {'T','U','V'},{'W','X','Y','Z'}};
            int []sum = {0,0,3,3,3,3,3,4,3,4};
            if(index == n){
                for(int i = 0; i<n; i++){
                    System.out.print(word[number[i]][answer[i]]);
                }
                System.out.println(";");
                return ;
            }
            for(answer[index] = 0; answer[index] < sum [number[index]]; answer[index]++){
                Answer(number,answer,index+1,n);
            }
        }
        public static void main(String[] args){
            int[] number = {2,3,4,5,6,7,8,9};
            int[] answer = new int[number.length];
            Answer(number, answer, 0, number.length);
            
        }
    }

#### 4.柿子分配：
日本著名数学游戏专家中村义作教授提出这样一个问题：父亲将2520个桔子分给六个儿子。分完 后父亲说：“老大将分给你的桔子的1/8给老二；老二拿到后连同原先的桔子分1/7给老三；老三拿到后连同原先的桔子分1/6给老四；老四拿到后连同原先的桔子分1/5给老五；老五拿到后连同原先的桔子分1/4给老六；老六拿到后连同原先的桔子分1/3给老大”。结果大家手中的桔子正好一 样多。问六兄弟原来手中各有多少桔子？

##### 题目分析：
    解决此问题主要使用递归运算。由题目可以看出原来手中的加上得到的满足关系
    式：StartNum = 420 * (n -2)/(n - 1) 分给下一个人的橘子数：
    GiveNum = AfterGetNum / n;  下一个人的橘子数：nextStartNum = 420*
    (n-1)/(n-2) - GiveNum;  下一个人加上之前得到的橘子的总数：
    afterGetNum = nextStartNum + GiveNum;  以此使用递归算法可以算出各
    个孩子原来手中的橘子数。

##### 源代码：

    public class questionfour {
        /**
        * 
        * @param n  表示第几个儿子
        * @param befor  表示为分配之前就的桔子数
        * @param After	表示分配之后的桔子数
        * @param m		分配的比例
        * @return
        */
        public int answer(int n,int befornum, int afternum,int m ){
            if(n>6){
                return 0;
            }else{
                System.out.println("老"+n+"原有的桔子数"+befornum);
                //分给下一个人的桔子数
                int givenum = afternum/m;
                //下一个人的桔子数
                int nextBeforenum = 420*(m-1)/(m-2)-givenum;
                //下一人加上之前的桔子数的总数
                int afterGetnum = nextBeforenum+givenum;
                return answer(n+1,nextBeforenum,afterGetnum,m-1);
            }
        }
        public static void main(String[] args){
            questionfour question4 = new questionfour();
            question4.answer(1, 240, 240, 8);
        }

来源：https://blog.csdn.net/qq_36102598/article/details/72055160