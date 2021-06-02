---
layout: 1900730132的想法
title: 学习一下JavaScript
date: 2021-04-11 12:09:49
tags: -JavaScript
---

# JavaScript是何物?

我们都知道JavaScript是作为前端三件套的组成部分，却很少有人说得清楚他是来干什么的，他为什么在前端三件套中的地位如此之重要?又是为什么它可以将前端领域带进一个新的时代?

我们又来谈谈为什么要深入学习技术，前几天我看到某位大佬写的文章👍👍(链接放到最下面)，他用一个故事来说明了底层了解以及深入学习对于一个程序员的重要性，无论你是前端也好，后端也好，又或者是其他方向的程序员，下面的故事绝对会让你刷新三观🧠:

故事开始>>

曾经团队邀请过 Nodejs 领域一个非常著名的大神来分享，这里便不说是谁了。当知道是他后，简直是粉丝的心情。但是课讲得确实一般，也许是第一次讲，准备不是很充足吧，以至于我都觉得我能讲得比他好，但是有两次，让我觉得这是真正的大神。一次就是，当有同事问到今年有什么流行的前端框架吗？这些框架有怎样的适用场景？该如何抉择？我以为大神一定会回答当时正火的 React、以及小鲜肉 Vue 之类，然后老生常谈的比较一番，但是他回答道：“I dont't care！因为这些并不重要，真正重要的是底层，当你了解了底层，你就能很轻松的明白这些框架的原理，当你明白了原理，这些框架又有什么意思呢？”

看完这个故事是不是感觉感受到了什么不一样的东西?😀其实我也感受到了，前端框架再大再高，也基于底层逻辑的肩膀上呀！！😁，那么其实我们就可以感受得到为什么我们来到大学学的计算机课是C语言、C++语言、计算机基础之类的课，但是总感觉没什么用，python、java这些语言不好用还是怎么样?为什么大学不教一些对同学日后找工作实用的东西呢?又或者是学校墨守成规不懂得革新除旧?也许我们"**道行**"还很浅，不禁让人想到陆游的“**纸上得来终觉浅、绝知此事要躬行**”，到真正用到的时候才发现自己不过是因为学得太浅太浅才导致觉得大学教的东西没用，其实深入进去才真正发现什么才叫学识短浅，突然让我想到一个事情:

开始回忆>>

那时候我刚刚学会hexo+GitHub搭建个人博客，就拿着我的blog跟老师炫耀😀，认为很厉害，老师一开始也感觉很惊奇，但是过了一会就问道:"这些东西都是你自己写出来的?"，我楞了一会,紧接着他又问:"那你来讲一下你的博客是基于什么语言实现的?",当时把我问懵了😅，我只懂markdown写文章，根本没看过hexo的文档，也没有细究里面的东西，确实，我们学得还是太浅太浅，其实只要你熟练运用这些东西，你想把你的blog做得多花里胡哨就多花里胡哨，你想怎么样就怎么样，我不过是班门弄斧，关公面前耍大刀，其实老师都是懂的，他们学得很透很彻底，他们也许已经看不懂那些层出不穷的框架，语言或者是插件之类的，可互联网时代差的是花里胡哨的东西吗?一个网页无论用什么写出来?它的表现力就是这样的，就是一个网页。

## 进入正题

题外话讲完了，让我们来进入今天的正题吧😁

>>正题开始

不妨先来了解一波目录😘

* [🥝原型到原型链](#2)
* [🥥词法作用域和动态作用域](#3)
* [🍇执行上下文栈](#4)
* [🍈变量对象](#5)
* [🍉作用域链](#6)
* [🍊从ECMAScript规划解读this](#7)
* [🍋执行上下文](#8)
* [🍍闭包](#9)
* [🥭参数按值传递](#10)
* [🍎call和apply的模拟实现](#11)
* [🍏bind的模拟实现](#12)
* [🍐new的模拟实现](#13)
* [🍑类数组对象与arguments](#14)
* [🥑创建对象的多种方式以及优缺点](#15)
* [🍓继承的多种方式以及优缺点](#16)
* [🍑浮点数的精度](#17)
* [🍒头疼的类型转换](#18)
* [🍆鸣谢](#19)

这些内容我是根据前端带师冯羽所写的进行自己的分析和补充~~，为什么要补充?第一：为了更好的学习JavaScript(这也是我第三次学这个东西了)，第二是我觉得既然大家在大学中都学过C++，那么何不用C++的方法来描述这样一门语言呢?😊JavaScript是脚本语言，C++是面向对象的语言，可以试着用C++去领会JavaScript的意思。

这些内容的出处：https://github.com/mqyqingfeng/Blog 😘😘

## <span id="2">原型到原型链 ##2</span>

大家都知道在C++里面对象的基础是一个类，int是一个类，double也是一个类，这些定义对象的属性的东西都叫类，那么JavaScript也是如此，那么让我们从类开始说起。


### 构造函数创建对象

大家都学习过C++的创建类的方法以及类内构造函数的方法：

    ##include<bits/stdc++.h>
        using namespace std;
        class box{//定义类
            public:
                box(int a1,int b1):a(a1),b(b1){};//构造函数
                int a;
                int b;
        };
        int main(){
            box* er ;
            er = new box(1,2);
            cout<<er->a<<er->b<<endl;
            return 0;
        } 
你觉得JavaScript也是这样?笔者也犯了这个大错误，JavaScript中的构造函数并非如此，你可以将构造函数看成C++中的类，这就要扯到C++和JavaScript这两者在定义类上的本质区别了，我们可以参考这篇<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Classes">文章</a>的😂，上面提到了类语法有两种:一种是类表达式和类声明。而我们的C++就是后者(类声明)，
而JavaScript是前者。所以接下来的功夫我会用C++强行解释，不能放弃!!!😄


现在我们来看一下原博客的

    function Person() {

    }
    var person = new Person();
    person.name = 'Kevin';
    console.log(person.name) // Kevin

可见JavaScript较C++而言更加的灵活，可以直接在定义域外直接定义一个新的类属性。🎈


在这个例子中，Person 就是一个构造函数，我们使用 new 创建了一个实例对象 person。

很简单吧，接下来进入正题：

 ### prototype  中文：原型的，最初的

每个函数都有一个 prototype 属性，就是我们经常在各种例子中看到的那个 prototype ，比如：



原话>>

    function Person() {

    }
    // 虽然写在注释里，但是你要注意：
    // prototype是函数才会有的属性
    Person.prototype.name = 'Kevin';
    var person1 = new Person();
    var person2 = new Person();
    console.log(person1.name) // Kevin
    console.log(person2.name) // Kevin

原话>>

那这个函数的 prototype 属性到底指向的是什么呢？是这个函数的原型吗？

其实，函数的 prototype 属性指向了一个对象，这个对象正是调用该构造函数而创建的实例的原型，也就是这个例子中的 person1 和 person2 的原型。

那什么是原型呢？你可以这样理解：每一个JavaScript对象(null除外)在创建的时候就会与之关联另一个对象，这个对象就是我们所说的原型，每一个对象都会从原型"继承"属性。

让我们用一张图表示构造函数和实例原型之间的关系：

![prototype1.png](https://7.dusays.com/2021/04/24/7db3baf0e721d.png)

原话>>


在这张图中我们用 Object.prototype 表示实例原型。

那么我们该怎么表示实例与实例原型，也就是 person 和 Person.prototype 之间的关系呢，这时候我们就要讲到第二个属性：

按照原作者的观点：

因为C++里面的是类声明和函数声明有本质区别。就如同作者说的可以理解为一种继承关系，可这种相当于每个对象的原型。然后继承下来，然后公有继承。

在这张图中我们用 Object.prototype 表示实例原型。

那么我们该怎么表示实例与实例原型，也就是 person 和 Person.prototype 之间的关系呢，这时候我们就要讲到第二个属性：

### __proto__ 中文：原始的

原话>>

这是每一个JavaScript对象(除了 null )都具有的一个属性，叫__proto__，这个属性会指向该对象的原型。

为了证明这一点,我们可以在火狐或者谷歌中输入：

    function Person() {

    }
    var person = new Person();
    console.log(person.__proto__ === Person.prototype); // true

![prototype2.png](https://7.dusays.com/2021/04/24/d2e0b247c3ed2.png)

这张图意思是在JavaScript里面类产生的对象是可以通过__proto__来指向他的原型类，也就是上面提到的那个初始类。

### constructor  中文：构造函数

原话>>

指向实例倒是没有，因为一个构造函数可以生成多个实例，但是原型指向构造函数倒是有的，这就要讲到第三个属性：constructor，每个原型都有一个 constructor 属性指向关联的构造函数。

为了验证这一点，我们可以尝试：

    function Person() {

    }
    console.log(Person === Person.prototype.constructor); // true

我们可以明显到他的意思我们会发现上面这行代码和前面的代码唯一的不同就体现在

    person.__proto__ === Person.prototype

将他们两一对比我们发现左边少了个__proto__，右边多了个constructor，在结合constructor的中文意思：“构造函数”，已经很明显了😀。

![prototype3.png](https://7.dusays.com/2021/04/24/08a2e3d65cdab.png)

综上我们已经得出：

    function Person() {

    }

    var person = new Person();

    console.log(person.__proto__ == Person.prototype) // true
    console.log(Person.prototype.constructor == Person) // true
    // 顺便学习一个ES5的方法,可以获得对象的原型
    console.log(Object.getPrototypeOf(person) === Person.prototype) // true

不做解释🌈

原话>>

了解了构造函数、实例原型、和实例之间的关系，接下来我们讲讲实例和原型的关系：


### 实例与原型

原话>>

当读取实例的属性时，如果找不到，就会查找与对象关联的原型中的属性，如果还查不到，就去找原型的原型，一直找到最顶层为止。

举个例子：

    function Person() {

    }

    Person.prototype.name = 'Kevin';

    var person = new Person();

    person.name = 'Daisy';
    console.log(person.name) // Daisy

    delete person.name;
    console.log(person.name) // Kevin


到这里就又与C++有差别了，可惜C++中无法删除一个对象的数据成员，所以非常可惜，无法使用C++来演示一遍。不过还是可以直观的感受到JavaScript的原型的是与C++中的基类有本质区别的。

原话>>

在这个例子中，我们给实例对象 person 添加了 name 属性，当我们打印 person.name 的时候，结果自然为 Daisy。

但是当我们删除了 person 的 name 属性时，读取 person.name，从 person 对象中找不到 name 属性就会从 person 的原型也就是 person.__proto__ ，也就是 Person.prototype中查找，幸运的是我们找到了 name 属性，结果为 Kevin。

但是万一还没有找到呢？原型的原型又是什么呢？

接下来讲得更加深入了，在后面内容更加精彩了😀，扯到了原型得原型就好像俄罗斯套娃套中套。

### 原型的原型

原话>>

在前面，我们已经讲了原型也是一个对象，既然是对象，我们就可以用最原始的方式创建它，那就是：

    var obj = new Object();
    obj.name = 'Kevin'
    console.log(obj.name) // Kevin

可能大家有点晕圈了,Object()是个构造函数，但是我们没定义这个构造函数，为什么它还会出现?说到底还是他的性质决定的，依我看Object().prototype是一个相当于所有类的基类吧，首先你创造一个类，他会有个原型你可以理解为有个类继承了你的类，然后又有个类继承了你的类的基类，他和你的类的基类不同的地方是，你类的基类是在你类被定义的时候产生的，因为Object()这个构造函数已经存在了，所以他的基类也就已经存在了，然后基类的基类通过_proto_都可以指向这Object()的基类。


原话>>

其实原型对象就是通过 Object 构造函数生成的，结合之前所讲，实例的 __proto__ 指向构造函数的 prototype ，所以我们再更新下关系图：

![prototype4.png](https://7.dusays.com/2021/04/24/4ae9c2824e53a.png)


### 原型链

原话>>

那 Object.prototype 的原型呢？

null，我们可以打印：

    console.log(Object.prototype.__proto__ === null) // true

然而 null 究竟代表了什么呢？

引用阮一峰老师的 《undefined与null的区别》 就是：

    null 表示“没有对象”，即该处不应该有值。

所以 Object.prototype.__proto__ 的值为 null 跟 Object.prototype 没有原型，其实表达了一个意思。

所以查找属性的时候查到 Object.prototype 就可以停止查找了。

最后一张关系图也可以更新为：

![prototype5.png](https://7.dusays.com/2021/04/24/34a2fa6ca9d05.png)

顺便还要说一下，图中由相互关联的原型组成的链状结构就是原型链，也就是蓝色的这条线。

### 补充

最后，补充三点大家可能不会注意的地方：

#### constructor
首先是 constructor 属性，我们看个例子：

    function Person() {

    }
    var person = new Person();
    console.log(person.constructor === Person); // true

当获取 person.constructor 时，其实 person 中并没有 constructor 属性,当不能读取到constructor 属性时，会从 person 的原型也就是 Person.prototype 中读取，正好原型中有该属性，所以：

    person.constructor === Person.prototype.constructor

####  \_\_proto__

其次是 \_\_proto__ ，绝大部分浏览器都支持这个非标准的方法访问原型，然而它并不存在于 Person.prototype 中，实际上，它是来自于 Object.prototype ，与其说是一个属性，不如说是一个 getter/setter，当使用 obj.\_\_proto__ 时，可以理解成返回了 Object.getPrototypeOf(obj)。

#### 真的是继承吗？

最后是关于继承，前面我们讲到“每一个对象都会从原型‘继承’属性”，实际上，继承是一个十分具有迷惑性的说法，引用《你不知道的JavaScript》中的话，就是：

继承意味着复制操作，然而 JavaScript 默认并不会复制对象的属性，相反，JavaScript 只是在两个对象之间创建一个关联，这样，一个对象就可以通过委托访问另一个对象的属性和函数，所以与其叫继承，委托的说法反而更准确些。


## <span id="3">JavaScript深入之词法作用域和动态作用域 \#3</span>

到第二章了，好快呀，不过前面的文章给我的感受还是很强烈的，从来没有这样子去思考前端的东西，所以还是需要静下心来好好地去学一遍JavaScript，并按自己的话来解释，看能不能解释得清楚，解释不清再看看情况，才能真正熟练运用JavaScript。

### 作用域

原话>>

作用域是指程序源代码中定义变量的区域。

作用域规定了如何查找变量，也就是确定当前执行代码对变量的访问权限。

JavaScript 采用词法作用域(lexical scoping)，也就是静态作用域。

### 静态作用域与动态作用域

原话>>

因为 JavaScript 采用的是词法作用域，函数的作用域在函数定义的时候就决定了。



而与词法作用域相对的是动态作用域，函数的作用域是在函数调用的时候才决定的。

这两句话后面要考，这两句话为什么JavaScript的函数调用是如此的


让我们认真看个例子就能明白之间的区别：

    var value = 1;

    function foo() {
        console.log(value);
    }

    function bar() {
        var value = 2;
        foo();
    }

    bar();

    // 结果是 ???

感觉像是这样：(用C++强行解释一波😁😁😁)

    ##include<bits/stdc++.h>
    using namespace std;
    int a=1;//定义一个全局的变量a
    int display();
    int foo(){
        int a=2;//这里也定义一个局部的变量a	
        cout<<a<<endl;//这边输出一下a
        display();
        return 1;
    }
    int display(){
        cout<<a<<endl;//这边也输出一下a
    }
    int main(){
        foo();
        return 0;
    } 
    结果:1
        2

看来C++在执行display的时候还真的是调用啊!!!😂😂

那我们试试这样

    ##include<bits/stdc++.h>
    using namespace std;
    int a=1;
    int display(int a);
    int foo(){
        int a=2;
        display(a);
        cout<<a<<endl;
        return 1;
    }
    int display(int a){
        cout<<a<<endl;
    }
    int main(){
        foo();
        return 0;
    } 
    结果：2
         2

这里就发现了在C++中变量局部函数里面没有就到全局变量中取。所以C++也是静态作用域，在函数被定义的时候，函数的作用域就已经确定好了

原话>>

假设JavaScript采用静态作用域，让我们分析下执行过程：

执行 foo 函数，先从 foo 函数内部查找是否有局部变量 value，如果没有，就根据书写的位置，查找上面一层的代码，也就是 value 等于 1，所以结果会打印 1。

假设JavaScript采用动态作用域，让我们分析下执行过程：

执行 foo 函数，依然是从 foo 函数内部查找是否有局部变量 value。如果没有，就从调用函数的作用域，也就是 bar 函数内部查找 value 变量，所以结果会打印 2。

前面我们已经说了，JavaScript采用的是静态作用域，所以这个例子的结果是 1。

看来在静动态作用域这个问题上JavaScript和C++还是保持高度的一致。🌈🌈🌈

### 动态作用域

原话>>

也许你会好奇什么语言是动态作用域？

bash 就是动态作用域，不信的话，把下面的脚本存成例如 scope.bash，然后进入相应的目录，用命令行执行 bash ./scope.bash，看看打印的值是多少。

学到了学到了，看来还真有语言使用动态作用域，应该是bash的功能决定了它是这样的属性吧。

    value=1
    function foo () {
        echo $value;
    }
    function bar () {
        local value=2;
        foo;
    }
    bar

这个文件也可以在<a href='https://github.com/mqyqingfeng/Blog/blob/master/demos/scope/scope.bash'> Github 博客仓库</a>中找到。

### 思考题

原话>>

最后，让我们看一个《JavaScript权威指南》中的例子：

    var scope = "global scope";
    function checkscope(){
        var scope = "local scope";
        function f(){
            return scope;
        }
        return f();
    }
    checkscope();//local 

-------

    var scope = "global scope";
    function checkscope(){
    var scope = "local scope";
    function f(){
        return scope;
    }
    return f;
    }
    checkscope()();//local

在这里我确实猜错了，我的想法是这样的首先调用checkscope()，
然后发回一个f，就有了f(),于是就全局变量，但是f()毕竟还是在checkscope()里面的，所以还是逃脱不了干系的，哈哈哈!!!


猜猜两段代码各自的执行结果是多少？

这里直接告诉大家结果，两段代码都会打印：local scope。

原因也很简单，因为JavaScript采用的是词法作用域，函数的作用域基于**函数创建**的位置。

而引用《JavaScript权威指南》的回答就是：

JavaScript 函数的执行用到了作用域链，这个作用域链是在函数定义的时候创建的。嵌套的函数 f() 定义在这个作用域链里，其中的变量 scope 一定是局部变量，不管何时何地执行函数 f()，这种绑定在执行 f() 时依然有效。

但是在这里真正想让大家思考的是：

虽然两段代码执行的结果一样，但是两段代码究竟有哪些不同呢？

如果要回答这个问题，就要牵涉到很多的内容，词法作用域只是其中的一小部分，让我们期待下一篇文章————《JavaScript深入之执行上下文栈》。

## <span id="4">JavaScript深入之执行上下文栈\##4</span>

### 顺序执行？

原话>>

如果要问到 JavaScript 代码执行顺序的话，想必写过 JavaScript 的开发者都会有个直观的印象，那就是顺序执行，毕竟：

    var foo = function () {

        console.log('foo1');

    }

    foo();  // foo1

    var foo = function () {

        console.log('foo2');

    }

    foo(); // foo2

然而去看这段代码：

    function foo() {

        console.log('foo1');

    }

    foo();  // foo2

    function foo() {

        console.log('foo2');

    }

    foo(); // foo2

打印的结果却是两个 foo2。

刷过面试题的都知道这是因为 JavaScript 引擎并非一行一行地分析和执行程序，而是一段一段地分析执行。当执行一段代码的时候，会进行一个“准备工作”，比如第一个例子中的变量提升，和第二个例子中的函数提升。

但是本文真正想让大家思考的是：这个“一段一段”中的“段”究竟是怎么划分的呢？

到底JavaScript引擎遇到一段怎样的代码时才会做“准备工作”呢？

&nbsp;&nbsp;在这点上C++和JavaScript还是有本质的区别的，C++可能会是第一种结果，可JavaScript却是第二种结果，相当于C++在直接看到了最后，然后前面同名的函数全部使用最后一种函数，这一点确实和C++差别很大。

### 可执行代码

原话>>

这就要说到 JavaScript 的可执行代码(executable code)的类型有哪些了？

其实很简单，就三种，全局代码、函数代码、eval代码。

举个例子，当执行到一个函数的时候，就会进行准备工作，这里的“准备工作”，让我们用个更专业一点的说法，就叫做"执行上下文(execution context)"。

### 执行上下文栈

原话>>

接下来问题来了，我们写的函数多了去了，如何管理创建的那么多执行上下文呢？

所以 JavaScript 引擎创建了执行上下文栈（Execution context stack，ECS）来管理执行上下文

为了模拟执行上下文栈的行为，让我们定义执行上下文栈是一个数组：

    ECStack = [];

试想当 JavaScript 开始要解释执行代码的时候，最先遇到的就是全局代码，所以初始化的时候首先就会向执行上下文栈压入一个全局执行上下文，我们用 globalContext 表示它，并且只有当整个应用程序结束的时候，ECStack 才会被清空，所以程序结束之前， ECStack 最底部永远有个 globalContext：

    ECStack = [
        globalContext
    ];

现在 JavaScript 遇到下面的这段代码了：

    function fun3() {
        console.log('fun3')
    }

    function fun2() {
        fun3();
    }

    function fun1() {
        fun2();
    }

    fun1();

当执行一个函数的时候，就会创建一个执行上下文，并且压入执行上下文栈，当函数执行完毕的时候，就会将函数的执行上下文从栈中弹出。知道了这样的工作原理，让我们来看看如何处理上面这段代码：

// 伪代码

// fun1()
ECStack.push(<fun1> functionContext);

// fun1中竟然调用了fun2，还要创建fun2的执行上下文
ECStack.push(<fun2> functionContext);

// 擦，fun2还调用了fun3！
ECStack.push(<fun3> functionContext);

// fun3执行完毕
ECStack.pop();

// fun2执行完毕
ECStack.pop();

// fun1执行完毕
ECStack.pop();

// javascript接着执行下面的代码，但是ECStack底层永远有个globalContext

#### 解答思考题

好啦，现在我们已经了解了执行上下文栈是如何处理执行上下文的，所以让我们看看上篇文章 **《JavaScript深入之词法作用域和动态作用域》** 最后的问题：

    var scope = "global scope";
    function checkscope(){
        var scope = "local scope";
        function f(){
            return scope;
        }
        return f();
    }
    checkscope();

----

    var scope = "global scope";
    function checkscope(){
        var scope = "local scope";
        function f(){
            return scope;
        }
        return f;
    }
    checkscope()();

两段代码执行的结果一样，但是两段代码究竟有哪些不同呢？

答案就是执行上下文栈的变化不一样。

让我们模拟第一段代码：

    ECStack.push(<checkscope> functionContext);
    ECStack.push(<f> functionContext);
    ECStack.pop();
    ECStack.pop();

让我们模拟第二段代码：


    ECStack.push(<checkscope> functionContext);
    ECStack.pop();
    ECStack.push(<f> functionContext);
    ECStack.pop();


是不是有些不同呢？

当然了，这样概括的回答执行上下文栈的变化不同，是不是依然有一种意犹未尽的感觉呢，为了更详细讲解两个函数执行上的区别，我们需要探究一下执行上下文到底包含了哪些内容，所以欢迎阅读下一篇《JavaScript深入之变量对象》。

着实让我感觉到震惊，JavaScript在这个领域就要用上栈了，我是没想到，不过也恰恰解释了上面的问题，在JavaScript中姑且先认为他有个函数栈，先将函数放进去，然后在(让我组织语言。)

 ## <span id="5">JavaScript深入之变量对象 \##5</span>

### 前言

在上篇《JavaScript深入之执行上下文栈》中讲到，当 JavaScript 代码执行一段可执行代码(executable code)时，会创建对应的执行上下文(execution context)。

对于每个执行上下文，都有三个重要属性：

* 变量对象(Variable object，VO)
* 作用域链(Scope chain)
* this

今天重点讲讲创建变量对象的过程。

### 变量对象

变量对象是与执行上下文相关的数据作用域，存储了在上下文中定义的变量和函数声明。

因为不同执行上下文下的变量对象稍有不同，所以我们来聊聊全局上下文下的变量对象和函数上下文下的变量对象。

### 全局上下文

我们先了解一个概念，叫全局对象。在 <a href='https://www.w3school.com.cn/jsref/jsref_obj_global.asp'>W3School</a> 中也有介绍：

    全局对象是预定义的对象，作为 JavaScript 的全局函数和全局属性的占位符。通过使用全局对象，可以访问所有其他所有预定义的对象、函数和属性。

---

    在顶层 JavaScript 代码中，可以用关键字 this 引用全局对象。因为全局对象是作用域链的头，这意味着所有非限定性的变量和函数名都会作为该对象的属性来查询。

---

    例如，当JavaScript 代码引用 parseInt() 函数时，它引用的是全局对象的 parseInt 属性。全局对象是作用域链的头，还意味着在顶层 JavaScript 代码中声明的所有变量都将成为全局对象的属性。

如果看的不是很懂的话，容我再来介绍下全局对象:

1.可以通过 this 引用，在客户端 JavaScript 中，全局对象就是 Window 对象。

    console.log(this);


2.全局对象是由 Object 构造函数实例化的一个对象。

    console.log(this instanceof Object);

3.预定义了一堆，嗯，一大堆函数和属性。

    // 都能生效
    console.log(Math.random());
    console.log(this.Math.random());

大致意思是对象在被定义的时候所出现的相当于对象的一个属性。🌈

4.作为全局变量的宿主。

    var a = 1;
    console.log(this.a);

5.客户端 JavaScript 中，全局对象有 window 属性指向自身。

    var a = 1;
    console.log(window.a);

    this.window.b = 2;
    console.log(this.b);


花了一个大篇幅介绍全局对象，其实就想说：

全局上下文中的变量对象就是全局对象呐！


### 函数上下文


在函数上下文中，我们用活动对象(activation object, AO)来表示变量对象。

活动对象和变量对象其实是一个东西，只是变量对象是规范上的或者说是引擎实现上的，不可在 JavaScript 环境中访问，只有到当进入一个执行上下文中，这个执行上下文的变量对象才会被激活，所以才叫 activation object 呐，而只有被激活的变量对象，也就是活动对象上的各种属性才能被访问。

活动对象是在进入函数上下文时刻被创建的，它通过函数的 arguments 属性初始化。arguments 属性值是 Arguments 对象。

### 执行过程

执行上下文的代码会分成两个阶段进行处理：分析和执行，我们也可以叫做：

1、进入执行上下文
2、代码执行

### 进入执行上下文

当进入执行上下文时，这时候还没有执行代码，

变量对象会包括：

1、函数的所有形参 (如果是函数上下文)

* 由名称和对应值组成的一个变量对象的属性被创建
* 没有实参，属性值设为 undefined
2、函数声明

* 由名称和对应值（函数对象
(function-object)）组成一个变量对象的属性被创建

* 如果变量对象已经存在相同名称的属性，则完全替换这个属性

3、变量声明

* 由名称和对应值（undefined）组成一个变量对象的属性被创建；
* 如果变量名称跟已经声明的形式参数或函数相同，则变量声明不会干扰已经存在的这类属性

举个例子：

    function foo(a) {
    var b = 2;
    function c() {}
    var d = function() {};

    b = 3;

    }

    foo(1);

在进入执行上下文后，这时候的 AO 是：

    AO = {
        arguments: {
            0: 1,
            length: 1
        },
        a: 1,
        b: undefined,
        c: reference to function c(){},
        d: undefined
    }

### 代码执行

在代码执行阶段，会顺序执行代码，根据代码，修改变量对象的值

还是上面的例子，当代码执行完后，这时候的 AO 是：

    AO = {
        arguments: {
            0: 1,
            length: 1
        },
        a: 1,
        b: 3,
        c: reference to function c(){},
        d: reference to FunctionExpression "d"
    }

到这里变量对象的创建过程就介绍完了，让我们简洁的总结我们上述所说：

1、全局上下文的变量对象初始化是全局对象

2、函数上下文的变量对象初始化只包括 Arguments 对象

3、在进入执行上下文时会给变量对象添加形参、函数声明、变量声明等初始的属性值

4、在代码执行阶段，会再次修改变量对象的属性值

### 思考题

最后让我们看几个例子：

1.第一题

    function foo() {
        console.log(a);
        a = 1;
    }

    foo(); // ???

    function bar() {
        a = 1;
        console.log(a);
    }
    bar(); // ???

第一段会报错：Uncaught ReferenceError: a is not defined。

第二段会打印：1。

这是因为函数中的 "a" 并没有通过 var 关键字声明，所有不会被存放在 AO 中。

第一段执行 console 的时候， AO 的值是：

    AO = {
        arguments: {
            length: 0
        }
    }

没有 a 的值，然后就会到全局去找，全局也没有，所以会报错。

当第二段执行 console 的时候，全局对象已经被赋予了 a 属性，这时候就可以从全局找到 a 的值，所以会打印 1。

2.第二题

    console.log(foo);

    function foo(){
        console.log("foo");
    }

    var foo = 1;


会打印函数，而不是 undefined 。

这是因为在进入执行上下文时，首先会处理函数声明，其次会处理变量声明，如果变量名称跟已经声明的形式参数或函数相同，则变量声明不会干扰已经存在的这类属性。



## <span id="6">JavaScript深入之作用域链 \##6</span>

### 前言

在《JavaScript深入之执行上下文栈》中讲到，当JavaScript代码执行一段可执行代码(executable code)时，会创建对应的执行上下文(execution context)。

对于每个执行上下文，都有三个重要属性：

* 变量对象(Variable object，VO)
* 作用域链(Scope chain)
* this

今天重点讲讲作用域链。

### 作用域链

在《JavaScript深入之变量对象》中讲到，当查找变量的时候，会先从当前上下文的变量对象中查找，如果没有找到，就会从父级(词法层面上的父级)执行上下文的变量对象中查找，一直找到全局上下文的变量对象，也就是全局对象。这样由多个执行上下文的变量对象构成的链表就叫做作用域链。

下面，让我们以一个函数的创建和激活两个时期来讲解作用域链是如何创建和变化的。

### 函数创建

在《JavaScript深入之词法作用域和动态作用域》中讲到，函数的作用域在函数定义的时候就决定了。

这是因为函数有一个内部属性 [[scope]]，当函数创建的时候，就会保存所有父变量对象到其中，你可以理解 [[scope]] 就是所有父变量对象的层级链，但是注意：[[scope]] 并不代表完整的作用域链！

举个例子：

 
    function foo() {
        function bar() {
            ...
        }
    }

函数创建时，各自的[[scope]]为：

    foo.[[scope]] = [
    globalContext.VO
    ];

    bar.[[scope]] = [
        fooContext.AO,
        globalContext.VO
    ];


### 函数激活

当函数激活时，进入函数上下文，创建 VO/AO 后，就会将活动对象添加到作用链的前端。

这时候执行上下文的作用域链，我们命名为 Scope：

    Scope = [AO].concat([[Scope]]);

至此，作用域链创建完毕。

### 捋一捋

以下面的例子为例，结合着之前讲的变量对象和执行上下文栈，我们来总结一下函数执行上下文中作用域链和变量对象的创建过程：

    var scope = "global scope";
    function checkscope(){
        var scope2 = 'local scope';
        return scope2;
    }
    checkscope();

执行过程如下：

1.checkscope 函数被创建，保存作用域链到 内部属性[[scope]]

    checkscope.[[scope]] = [
        globalContext.VO
    ];

2.执行 checkscope 函数，创建 checkscope 函数执行上下文，checkscope 函数执行上下文被压入执行上下文栈


    ECStack = [
        checkscopeContext,
        globalContext
    ];

3.checkscope 函数并不立刻执行，开始做准备工作，第一步：复制函数[[scope]]属性创建作用域链

    checkscopeContext = {
        Scope: checkscope.[[scope]],
    }

4.第二步：用 arguments 创建活动对象，随后初始化活动对象，加入形参、函数声明、变量声明

    checkscopeContext = {
        AO: {
            arguments: {
                length: 0
            },
            scope2: undefined
        }，
        Scope: checkscope.[[scope]],
    }

5.第三步：将活动对象压入 checkscope 作用域链顶端

    checkscopeContext = {
        AO: {
            arguments: {
                length: 0
            },
            scope2: undefined
        },
        Scope: [AO, [[Scope]]]
    }

6.准备工作做完，开始执行函数，随着函数的执行，修改 AO 的属性值

    checkscopeContext = {
        AO: {
            arguments: {
                length: 0
            },
            scope2: 'local scope'
        },
        Scope: [AO, [[Scope]]]
    }

7.查找到 scope2 的值，返回后函数执行完毕，函数上下文从执行上下文栈中弹出

    ECStack = [
        globalContext
    ];


## <span id="7">JavaScript深入之从ECMAScript规范解读this \##7</span>

### 前言

在《JavaScript深入之执行上下文栈》中讲到，当JavaScript代码执行一段可执行代码(executable code)时，会创建对应的执行上下文(execution context)。

对于每个执行上下文，都有三个重要属性

* 变量对象(Variable object，VO)
* 作用域链(Scope chain)
* this

今天重点讲讲 this，然而不好讲。

……

因为我们要从 ECMASciript5 规范开始讲起。

先奉上 ECMAScript 5.1 规范地址：

英文版：http://es5.github.io/##x15.1

中文版：http://yanhaijing.com/es5/##115

让我们开始了解规范吧！


### Types

首先是第 8 章 Types：

Types are further subclassified into ECMAScript language types and specification types.

An ECMAScript language type corresponds to values that are directly manipulated by an ECMAScript programmer using the ECMAScript language. The ECMAScript language types are Undefined, Null, Boolean, String, Number, and Object.

A specification type corresponds to meta-values that are used within algorithms to describe the semantics of ECMAScript language constructs and ECMAScript language types. The specification types are Reference, List, Completion, Property Descriptor, Property Identifier, Lexical Environment, and Environment Record.

我们简单的翻译一下：

ECMAScript 的类型分为语言类型和规范类型。

ECMAScript 语言类型是开发者直接使用 ECMAScript 可以操作的。其实就是我们常说的Undefined, Null, Boolean, String, Number, 和 Object。

而规范类型相当于 meta-values，是用来用算法描述 ECMAScript 语言结构和 ECMAScript 语言类型的。规范类型包括：Reference, List, Completion, Property Descriptor, Property Identifier, Lexical Environment, 和 Environment Record。

没懂？没关系，我们只要知道在 ECMAScript 规范中还有一种只存在于规范中的类型，它们的作用是用来描述语言底层行为逻辑。

今天我们要讲的重点是便是其中的 Reference 类型。它与 this 的指向有着密切的关联。

### Reference

那什么又是 Reference ？

让我们看 8.7 章 The Reference Specification Type：

    The Reference type is used to explain the behaviour of such operators as delete, typeof, and the assignment operators.

所以 Reference 类型就是用来解释诸如 delete、typeof 以及赋值等操作行为的。

抄袭尤雨溪大大的话，就是：

这里的 Reference 是一个 Specification Type，也就是 “只存在于规范里的抽象类型”。它们是为了更好地描述语言的底层行为逻辑才存在的，但并不存在于实际的 js 代码中。

再看接下来的这段具体介绍 Reference 的内容：

    A Reference is a resolved name binding.

    A Reference consists of three components, the base value, the referenced name and the Boolean valued strict reference flag.

    The base value is either undefined, an Object, a Boolean, a String, a Number, or an environment record (10.2.1).

    A base value of undefined indicates that the reference could not be resolved to a binding. The referenced name is a String.

这段讲述了 Reference 的构成，由三个组成部分，分别是：

* base value
* referenced name
* strict reference

可是这些到底是什么呢？

我们简单的理解的话：

base value 就是属性所在的对象或者就是 EnvironmentRecord，它的值只可能是 undefined, an Object, a Boolean, a String, a Number, or an environment record 其中的一种。

referenced name 就是属性的名称。

举个例子：

    var foo = 1;

    // 对应的Reference是：
    var fooReference = {
        base: EnvironmentRecord,
        name: 'foo',
        strict: false
    };

再举个例子：

    var foo = {
        bar: function () {
            return this;
        }
    };
    
    foo.bar(); // foo

    // bar对应的Reference是：
    var BarReference = {
        base: foo,
        propertyName: 'bar',
        strict: false
    };

而且规范中还提供了获取 Reference 组成部分的方法，比如 GetBase 和 IsPropertyReference。

这两个方法很简单，简单看一看：

1.GetBase

    GetBase(V). Returns the base value component of the reference V.

返回 reference 的 base value。

2.IsPropertyReference

    IsPropertyReference(V). Returns true if either the base value is an object or HasPrimitiveBase(V) is true; otherwise returns false.

简单的理解：如果 base value 是一个对象，就返回true。

GetValue
除此之外，紧接着在 8.7.1 章规范中就讲了一个用于从 Reference 类型获取对应值的方法： GetValue。

简单模拟 GetValue 的使用：

    var foo = 1;

    var fooReference = {
        base: EnvironmentRecord,
        name: 'foo',
        strict: false
    };

    GetValue(fooReference) // 1;

GetValue 返回对象属性真正的值，但是要注意：

**调用 GetValue，返回的将是具体的值，而不再是一个 Reference**

这个很重要，这个很重要，这个很重要。

### 如何确定this的值

关于 Reference 讲了那么多，为什么要讲 Reference 呢？到底 Reference 跟本文的主题 this 有哪些关联呢？如果你能耐心看完之前的内容，以下开始进入高能阶段：

看规范 11.2.3 Function Calls：

这里讲了当函数调用的时候，如何确定 this 的取值。

只看第一步、第六步、第七步：

1.Let ref be the result of evaluating MemberExpression.

6.If Type(ref) is Reference, then

    a.If IsPropertyReference(ref) is true, then
    
      i.Let thisValue be GetBase(ref).

    b.Else, the base of ref is an Environment Record

      i.Let thisValue be the result of calling the ImplicitThisValue concrete method of GetBase(ref).

7.Else, Type(ref) is not Reference.

    a. Let thisValue be undefined.

让我们描述一下：

1.计算 MemberExpression 的结果赋值给 ref

2.判断 ref 是不是一个 Reference 类型

    2.1 如果 ref 是 Reference，并且 IsPropertyReference(ref) 是 true, 那么 this 的值为 GetBase(ref)

    2.2 如果 ref 是 Reference，并且 base value 值是 Environment Record, 那么this的值为 ImplicitThisValue(ref)

    2.3 如果 ref 不是 Reference，那么 this 的值为 undefined
### 具体分析

让我们一步一步看：

&nbsp;&nbsp;1.计算 MemberExpression 的结果赋值给 ref
什么是 MemberExpression？看规范 11.2 Left-Hand-Side Expressions：

MemberExpression :

* PrimaryExpression // 原始表达式 可以参见《JavaScript权威指南第四章》

* FunctionExpression // 函数定义表达式

* MemberExpression [ Expression ] // 属性访问表达式

* MemberExpression . IdentifierName // 属性访问表达式

* new MemberExpression Arguments // 对象创建表达式

举个例子：

    function foo() {
        console.log(this)
    }

    foo(); // MemberExpression 是 foo

    function foo() {
        return function() {
            console.log(this)
        }
    }

    foo()(); // MemberExpression 是 foo()

    var foo = {
        bar: function () {
            return this;
        }
    }

    foo.bar(); // MemberExpression 是 foo.bar

所以简单理解 MemberExpression 其实就是()左边的部分。

2.判断 ref 是不是一个 Reference 类型。

关键就在于看规范是如何处理各种 MemberExpression，返回的结果是不是一个Reference类型。

举最后一个例子：

    var value = 1;

    var foo = {
    value: 2,
    bar: function () {
        return this.value;
    }
    }

    //示例1
    console.log(foo.bar());
    //示例2
    console.log((foo.bar)());
    //示例3
    console.log((foo.bar = foo.bar)());
    //示例4
    console.log((false || foo.bar)());
    //示例5
    console.log((foo.bar, foo.bar)());

foo.bar()

在示例 1 中，MemberExpression 计算的结果是 foo.bar，那么 foo.bar 是不是一个 Reference 呢？

查看规范 11.2.1 Property Accessors，这里展示了一个计算的过程，什么都不管了，就看最后一步：

    Return a value of type Reference whose base value is baseValue and whose referenced name is 
    propertyNameString, and whose strict mode flag is strict.

我们得知该表达式返回了一个 Reference 类型！

根据之前的内容，我们知道该值为：

    var Reference = {
    base: foo,
    name: 'bar',
    strict: false
    };

接下来按照 2.1 的判断流程走：

    2.1 如果 ref 是 Reference，并且 IsPropertyReference(ref) 是 true, 那么 this 的值为 GetBase(ref)

该值是 Reference 类型，那么 IsPropertyReference(ref) 的结果是多少呢？

前面我们已经铺垫了 IsPropertyReference 方法，如果 base value 是一个对象，结果返回 true。

base value 为 foo，是一个对象，所以 IsPropertyReference(ref) 结果为 true。

这个时候我们就可以确定 this 的值了：

    this = GetBase(ref)，

GetBase 也已经铺垫了，获得 base value 值，这个例子中就是foo，所以 this 的值就是 foo ，示例1的结果就是 2！

唉呀妈呀，为了证明 this 指向foo，真是累死我了！但是知道了原理，剩下的就更快了。

### (foo.bar)()
看示例2：

    console.log((foo.bar)());

foo.bar 被 () 包住，查看规范 11.1.6 The Grouping Operator

直接看结果部分：

    Return the result of evaluating Expression. This may be of type Reference.

    NOTE This algorithm does not apply GetValue to the result of evaluating Expression.

实际上 () 并没有对 MemberExpression 进行计算，所以其实跟示例 1 的结果是一样的。

(foo.bar = foo.bar)()
看示例3，有赋值操作符，查看规范 11.13.1 Simple Assignment ( = ):

计算的第三步：

    3.Let rval be GetValue(rref).

因为使用了 GetValue，所以返回的值不是 Reference 类型，

按照之前讲的判断逻辑：

    2.3 如果 ref 不是Reference，那么 this 的值为 undefined

this 为 undefined，非严格模式下，this 的值为 undefined 的时候，其值会被隐式转换为全局对象。

(false || foo.bar)()
看示例4，逻辑与算法，查看规范 11.11 Binary Logical Operators：

计算第二步：

    2.Let lval be GetValue(lref).

因为使用了 GetValue，所以返回的不是 Reference 类型，this 为 undefined

(foo.bar, foo.bar)()
看示例5，逗号操作符，查看规范11.14 Comma Operator ( , )

计算第二步：

    2.Call GetValue(lref).

因为使用了 GetValue，所以返回的不是 Reference 类型，this 为 undefined

### 揭晓结果

所以最后一个例子的结果是：

    var value = 1;

    var foo = {
    value: 2,
    bar: function () {
        return this.value;
    }
    }

    //示例1
    console.log(foo.bar()); // 2
    //示例2
    console.log((foo.bar)()); // 2
    //示例3
    console.log((foo.bar = foo.bar)()); // 1
    //示例4
    console.log((false || foo.bar)()); // 1
    //示例5
    console.log((foo.bar, foo.bar)()); // 1

注意：以上是在非严格模式下的结果，严格模式下因为 this 返回 undefined，所以示例 3 会报错。

### 补充

最最后，忘记了一个最最普通的情况：

    function foo() {
        console.log(this)
    }

    foo(); 

MemberExpression 是 foo，解析标识符，查看规范 10.3.1 Identifier Resolution，会返回一个 Reference 类型的值：


    var fooReference = {
        base: EnvironmentRecord,
        name: 'foo',
        strict: false
    };

接下来进行判断：

    2.1 如果 ref 是 Reference，并且 IsPropertyReference(ref) 是 true, 那么 this 的值为 GetBase(ref)

因为 base value 是 EnvironmentRecord，并不是一个 Object 类型，还记得前面讲过的 base value 的取值可能吗？ 只可能是 undefined, an Object, a Boolean, a String, a Number, 和 an environment record 中的一种。

IsPropertyReference(ref) 的结果为 false，进入下个判断：

    2.2 如果 ref 是 Reference，并且 base value 值是 Environment Record, 那么this的值为 ImplicitThisValue(ref)

base value 正是 Environment Record，所以会调用 ImplicitThisValue(ref)

查看规范 10.2.1.1.6，ImplicitThisValue 方法的介绍：该函数始终返回 undefined。

所以最后 this 的值就是 undefined。

多说一句
尽管我们可以简单的理解 this 为调用函数的对象，如果是这样的话，如何解释下面这个例子呢？

    var value = 1;

    var foo = {
    value: 2,
    bar: function () {
        return this.value;
    }
    }
    console.log((false || foo.bar)()); // 1

此外，又如何确定调用函数的对象是谁呢？在写文章之初，我就面临着这些问题，最后还是放弃从多个情形下给大家讲解 this 指向的思路，而是追根溯源的从 ECMASciript 规范讲解 this 的指向，尽管从这个角度写起来和读起来都比较吃力，但是一旦多读几遍，明白原理，绝对会给你一个全新的视角看待 this 。而你也就能明白，尽管 foo() 和 (foo.bar = foo.bar)() 最后结果都指向了 undefined，但是两者从规范的角度上却有着本质的区别。

此篇讲解执行上下文的 this，即便不是很理解此篇的内容，依然不影响大家了解执行上下文这个主题下其他的内容。所以，依然可以安心的看下一篇文章。

因为实在太高级了,笔者实在不知如何描述,也不知道该说什么,所以就该文章的结尾部分捞两句,不敢在大佬面前瞎BB😂😂😂😂

## <span id="8">JavaScript深入之执行上下文 \##8</span>

### 前言

在《JavaScript深入之执行上下文栈》中讲到，当 JavaScript 代码执行一段可执行代码(executable code)时，会创建对应的执行上下文(execution context)。

对于每个执行上下文，都有三个重要属性：

* 变量对象(Variable object，VO)
* 作用域链(Scope chain)
* this

然后分别在《JavaScript深入之变量对象》、《JavaScript深入之作用域链》、《JavaScript深入之从ECMAScript规范解读this》中讲解了这三个属性。

阅读本文前，如果对以上的概念不是很清楚，希望先阅读这些文章。

因为，这一篇，我们会结合着所有内容，讲讲执行上下文的具体处理过程。

### 思考题

在《JavaScript深入之词法作用域和动态作用域》中，提出这样一道思考题：

    var scope = "global scope";
    function checkscope(){
        var scope = "local scope";
        function f(){
            return scope;
        }
        return f();
    }
    checkscope();

---

    var scope = "global scope";
    function checkscope(){
        var scope = "local scope";
        function f(){
            return scope;
        }
        return f;
    }
    checkscope()();


两段代码都会打印'local scope'。虽然两段代码执行的结果一样，但是两段代码究竟有哪些不同呢？

紧接着就在下一篇《JavaScript深入之执行上下文栈》中，讲到了两者的区别在于执行上下文栈的变化不一样，然而，如果是这样笼统的回答，依然显得不够详细，本篇就会详细的解析执行上下文栈和执行上下文的具体变化过程。

### 具体执行分析

我们分析第一段代码：

    var scope = "global scope";
    function checkscope(){
        var scope = "local scope";
        function f(){
            return scope;
        }
        return f();
    }
    checkscope();

执行过程如下：

1.执行全局代码，创建全局执行上下文，全局上下文被压入执行上下文栈

       ECStack = [
            globalContext
        ];

2.全局上下文初始化

    globalContext = {
        VO: [global],
        Scope: [globalContext.VO],
        this: globalContext.VO
    }
2.初始化的同时，checkscope 函数被创建，保存作用域链到函数的内部属性[[scope]]

    checkscope.[[scope]] = [
      globalContext.VO
    ];
3.执行 checkscope 函数，创建 checkscope 函数执行上下文，checkscope 函数执行上下文被压入执行上下文栈

    ECStack = [
        checkscopeContext,
        globalContext
    ];

4.checkscope 函数执行上下文初始化：

1.复制函数 [[scope]] 属性创建作用域链，

2.用 arguments 创建活动对象，

3.初始化活动对象，即加入形参、函数声明、变量声明，

4.将活动对象压入 checkscope 作用域链顶端。

同时 f 函数被创建，保存作用域链到 f 函数的内部属性[[scope]]

    checkscopeContext = {
            AO: {
                arguments: {
                    length: 0
                },
                scope: undefined,
                f: reference to function f(){}
            },
            Scope: [AO, globalContext.VO],
            this: undefined
        }

5.执行 f 函数，创建 f 函数执行上下文，f 函数执行上下文被压入执行上下文栈

    ECStack = [
        fContext,
        checkscopeContext,
        globalContext
    ];

6.f 函数执行上下文初始化, 以下跟第 4 步相同：

1.复制函数 [[scope]] 属性创建作用域链

2.用 arguments 创建活动对象

3.初始化活动对象，即加入形参、函数声明、变量声明

4.将活动对象压入 f 作用域链顶端

    fContext = {
        AO: {
            arguments: {
                length: 0
            }
        },
        Scope: [AO, checkscopeContext.AO, globalContext.VO],
        this: undefined
    }

7.f 函数执行，沿着作用域链查找 scope 值，返回 scope 值

8.f 函数执行完毕，f 函数上下文从执行上下文栈中弹出


    ECStack = [
        checkscopeContext,
        globalContext
    ];

9.checkscope 函数执行完毕，checkscope 执行上下文从执行上下文栈中弹出

    ECStack = [
        globalContext
    ];

第二段代码就留给大家去尝试模拟它的执行过程。

    var scope = "global scope";
    function checkscope(){
        var scope = "local scope";
        function f(){
            return scope;
        }
        return f;
    }
    checkscope()();

不过，在下一篇《JavaScript深入之闭包》中也会提及这段代码的执行过程。


## <span id="9">JavaScript深入之闭包 \##9</span>

### 前言

在《JavaScript深入之执行上下文栈》中讲到，当 JavaScript 代码执行一段可执行代码(executable code)时，会创建对应的执行上下文(execution context)。

对于每个执行上下文，都有三个重要属性：

* 变量对象(Variable object，VO)
* 作用域链(Scope chain)
* this

然后分别在[《JavaScript深入之变量对象》](#)、[《JavaScript深入之作用域链》](#)、[《JavaScript深入之从ECMAScript规范解读this》](#)中讲解了这三个属性。

阅读本文前，如果对以上的概念不是很清楚，希望先阅读这些文章。

因为，这一篇，我们会结合着所有内容，讲讲执行上下文的具体处理过程。