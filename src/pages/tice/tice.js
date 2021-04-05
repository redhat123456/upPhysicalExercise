// pages/tice/tice.js
Page({

  /**
   * 页面的初始数据
   */
  data: 
  {value1:'11',
   value2:'20',
   BMI:'0.00',
   zongfeng:'0',
   shengao:'0',
   tizhong:'0',
   x1:'0',
   x2:'0',
   x3:'0',
   x4:'0',
   x5:'0',
   x6:'0',
   x7:'0',
   x8:'0',
   x9:'0',
   x11:'',
   x12:'',
   x13:'',
   x14:'',
   x15:'',
   x16:'',
   x17:'',
   x18:'',
   x19:'',
   x20:'',
   x21:'',
    items: [
      {value: '10', name: '女'},
      {value: '11', name: '男', checked: 'true'},
     
    ],
    items1: [
      {value: '20', name: '大一'},
      {value: '20', name: '大二', checked: 'true'},
      {value: '21', name: '大三'},
      {value: '21', name: '大四'},
     
    ]
  },
  radioChange1(e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)

    const items = this.data.items
    for (let i = 0, len = items.length; i < len; ++i) {
      items[i].checked = items[i].value === e.detail.value
    }

    this.setData({
      items
    })
    this.setData({
      value1:e.detail.value
    })
  },
  radioChange2(e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)

    const items = this.data.items
    for (let i = 0, len = items.length; i < len; ++i) {
      items[i].checked = items[i].value === e.detail.value
    }

    this.setData({
      items
    })
    this.setData({
      value2:e.detail.value
    })
  },

  shengaoInput:function(e){
    // e 事件对象
    // e.detail 获取触发标签的详情
    // value 获取输入组件的值
    var value = e.detail.value;
    var shengao = this.data.shengao;
    console.log(value);
    if (value != '') {
      this.setData({disabled:false,btnstate:'primary',shengao:value});
    } else {
      this.setData({disabled:true,btnstate:'default'});
    }
    

  },
  tizhongInput:function(e){
    // e 事件对象
    // e.detail 获取触发标签的详情
    // value 获取输入组件的值
    var value = e.detail.value
    var value1 =this.data.value1
    var chengji = 0
    var chengji2 = 0
    var BMI = this.data.BMI
    console.log(value);

    var x1=this.data.x1
    var x2=this.data.x2
    var x3=this.data.x3
    var x4=this.data.x4
    var x5=this.data.x5
    var x6=this.data.x6
    var x7=this.data.x7
    var x8=this.data.x8
    var x9=this.data.x9

    this.setData({tizhong:value});
    
    this.setData({
      BMI: value/(this.data.shengao*this.data.shengao*0.0001)
    })
    //男   BMI
    if(BMI>17.9&&BMI<=23.9&&value1==11)
    chengji=100
    if(BMI<=17.9&&value1==11)
    chengji=80
    if(BMI>24.0&&BMI<27.9&&value1==11)
    chengji=80
    if(BMI>=28.0&&value1==11)
    chengji=60
    //女   BMI
    if(BMI>17.2&&BMI<=23.9&&value1==10)
    chengji=100
    if(BMI<=17.1&&value1==10)
    chengji=80
    if(BMI>24.0&&BMI<27.9&&value1==10)
    chengji=80
    if(BMI>=28.0&&value1==10)
    chengji=60

    console.log(chengji)
    this.setData({
      x9:chengji
    })
    if(value1==11)
    chengji2=x9*0.15+x1*0.15+x2*0.2+x3*0.1+x4*0.1+x5*0.1+x6*0.2
    else if(value1==10)
    chengji2=x9*0.15+x1*0.15+x2*0.2+x3*0.1+x4*0.1+x7*0.2+x8*0.1

    console.log(chengji2)
    this.setData({
      zongfeng:chengji2
    })
  },
  vitalcapacityInput:function(e){
    // e 事件对象
    // e.detail 获取触发标签的详情
    // value 获取输入组件的值
    var value1=this.data.value1
    var value2=this.data.value2
    var chengji = 0
    var chengji2 = 0
    var value = e.detail.value

    var x1=this.data.x1
    var x2=this.data.x2
    var x3=this.data.x3
    var x4=this.data.x4
    var x5=this.data.x5
    var x6=this.data.x6
    var x7=this.data.x7
    var x8=this.data.x8
    var x9=this.data.x9

    console.log(value);

    //男   大一大二  肺活量
    if (value>=5040&&value1==11&&value2==20) {
      chengji=100;
    }
    if (value>=4920&&value<5040&&value1==11&&value2==20) {
      chengji=95;
    }
    if (value>=4800&&value<4920&&value1==11&&value2==20) {
      chengji=90;
    }
    if (value>=4550&&value<4800&&value1==11&&value2==20) {
      chengji=85;
    }
    if (value>=4300&&value<4550&&value1==11&&value2==20) {
      chengji=80;
    }
    if (value>=4180&&value<4300&&value1==11&&value2==20) {
      chengji=78;
    }
    if (value>=4060&&value<4180&&value1==11&&value2==20) {
      chengji=76;
    }
    if (value>=3940&&value<4060&&value1==11&&value2==20) {
      chengji=74;
    }
    if (value>=3820&&value<3940&&value1==11&&value2==20) {
      chengji=72;
    }
    if (value>=3700&&value<3820&&value1==11&&value2==20) {
      chengji=70;
    }
    if (value>=3580&&value<3700&&value1==11&&value2==20) {
      chengji=68;
    }
    if (value>=3460&&value<3580&&value1==11&&value2==20) {
      chengji=66;
    }
    if (value>=3340&&value<3460&&value1==11&&value2==20) {
      chengji=64;
    }
    if (value>=3220&&value<3340&&value1==11&&value2==20) {
      chengji=62;
    }
    if (value>=3100&&value<3220&&value1==11&&value2==20) {
      chengji=60;
    }
    if (value>=2940&&value<3100&&value1==11&&value2==20) {
      chengji=50;
    }
    if (value>=2780&&value<2940&&value1==11&&value2==20) {
      chengji=40;
    }
    if (value>=2620&&value<2780&&value1==11&&value2==20) {
      chengji=30;
    }
    if (value>=2400&&value<2620&&value1==11&&value2==20) {
      chengji=20;
    }
    if (value>=2300&&value<2400&&value1==11&&value2==20) {
      chengji=10;
    }


    //男   大三大四   肺活量
    if (value>=5140&&value1==11&&value2==21) {
      chengji=100;
    }
    if (value>=5020&&value<5140&&value1==11&&value2==21) {
      chengji=95;
    }
    if (value>=4900&&value<5020&&value1==11&&value2==21) {
      chengji=90;
    }
    if (value>=4650&&value<4900&&value1==11&&value2==21) {
      chengji=85;
    }
    if (value>=4400&&value<4650&&value1==11&&value2==21) {
      chengji=80;
    }
    if (value>=4280&&value<4400&&value1==11&&value2==21) {
      chengji=78;
    }
    if (value>=4160&&value<4280&&value1==11&&value2==21) {
      chengji=76;
    }
    if (value>=4040&&value<4160&&value1==11&&value2==21) {
      chengji=74;
    }
    if (value>=3920&&value<4040&&value1==11&&value2==21) {
      chengji=72;
    }
    if (value>=3800&&value<3920&&value1==11&&value2==21) {
      chengji=70;
    }
    if (value>=3680&&value<3800&&value1==11&&value2==21) {
      chengji=68;
    }
    if (value>=3560&&value<3680&&value1==11&&value2==21) {
      chengji=66;
    }
    if (value>=3440&&value<3560&&value1==11&&value2==21) {
      chengji=64;
    }
    if (value>=3320&&value<3440&&value1==11&&value2==21) {
      chengji=62;
    }
    if (value>=3200&&value<3320&&value1==11&&value2==21) {
      chengji=60;
    }
    if (value>=3030&&value<3200&&value1==11&&value2==21) {
      chengji=50;
    }
    if (value>=2860&&value<3030&&value1==11&&value2==21) {
      chengji=40;
    }
    if (value>=2690&&value<2860&&value1==11&&value2==21) {
      chengji=30;
    }
    if (value>=2520&&value<2690&&value1==11&&value2==21) {
      chengji=20;
    }
    if (value>=2350&&value<2520&&value1==11&&value2==21) {
      chengji=10;
    }

        //女  大一大二  肺活量
        if (value>=3400&&value1==10&&value2==20) {
          chengji=100;
        }
        if (value>=3350&&value<3400&&value1==10&&value2==20) {
          chengji=95;
        }
        if (value>=3300&&value<3350&&value1==10&&value2==20) {
          chengji=90;
        }
        if (value>=3150&&value<3300&&value1==10&&value2==20) {
          chengji=85;
        }
        if (value>=3000&&value<3150&&value1==10&&value2==20) {
          chengji=80;
        }
        if (value>=2900&&value<3000&&value1==10&&value2==20) {
          chengji=78;
        }
        if (value>=2800&&value<2900&&value1==10&&value2==20) {
          chengji=76;
        }
        if (value>=2700&&value<2800&&value1==10&&value2==20) {
          chengji=74;
        }
        if (value>=2600&&value<2700&&value1==10&&value2==20) {
          chengji=72;
        }
        if (value>=2500&&value<2600&&value1==10&&value2==20) {
          chengji=70;
        }
        if (value>=2400&&value<2500&&value1==10&&value2==20) {
          chengji=68;
        }
        if (value>=2300&&value<2400&&value1==10&&value2==20) {
          chengji=66;
        }
        if (value>=2200&&value<2300&&value1==10&&value2==20) {
          chengji=64;
        }
        if (value>=2100&&value<2200&&value1==10&&value2==20) {
          chengji=62;
        }
        if (value>=2000&&value<2100&&value1==10&&value2==20) {
          chengji=60;
        }
        if (value>=1960&&value<2000&&value1==10&&value2==20) {
          chengji=50;
        }
        if (value>=1920&&value<1960&&value1==10&&value2==20) {
          chengji=40;
        }
        if (value>=1880&&value<1920&&value1==10&&value2==20) {
          chengji=30;
        }
        if (value>=1840&&value<1880&&value1==10&&value2==20) {
          chengji=20;
        }
        if (value>=1800&&value<1840&&value1==10&&value2==20) {
          chengji=10;
        }
    
        //女  大三大四  仰卧起坐
        if (value>=3450&&value1==10&&value2==21) {
          chengji=100;
        }
        if (value>=3400&&value<3450&&value1==10&&value2==21) {
          chengji=95;
        }
        if (value>=3350&&value<3400&&value1==10&&value2==21) {
          chengji=90;
        }
        if (value>=3200&&value<3350&&value1==10&&value2==21) {
          chengji=85;
        }
        if (value>=3050&&value<3200&&value1==10&&value2==21) {
          chengji=80;
        }
        if (value>=2950&&value<3050&&value1==10&&value2==21) {
          chengji=78;
        }
        if (value>=2850&&value<2950&&value1==10&&value2==21) {
          chengji=76;
        }
        if (value>=2750&&value<2850&&value1==10&&value2==21) {
          chengji=74;
        }
        if (value>=2650&&value<2750&&value1==10&&value2==21) {
          chengji=72;
        }
        if (value>=2550&&value<2650&&value1==10&&value2==21) {
          chengji=70;
        }
        if (value>=2450&&value<2550&&value1==10&&value2==21) {
          chengji=68;
        }
        if (value>=2350&&value<2450&&value1==10&&value2==21) {
          chengji=66;
        }
        if (value>=2250&&value<2350&&value1==10&&value2==21) {
          chengji=64;
        }
        if (value>=2150&&value<2250&&value1==10&&value2==21) {
          chengji=62;
        }
        if (value>=2050&&value<2150&&value1==10&&value2==21) {
          chengji=60;
        }
        if (value>=2010&&value<2050&&value1==10&&value2==21) {
          chengji=50;
        }
        if (value>=1970&&value<2010&&value1==10&&value2==21) {
          chengji=40;
        }
        if (value>=1930&&value<1970&&value1==10&&value2==21) {
          chengji=30
        }
        if (value>=1890&&value<1930&&value1==10&&value2==21) {
          chengji=20;
        }
        if (value>=1850&&value<1890&&value1==10&&value2==21) {
          chengji=10;
        }

   console.log(chengji)

    this.setData({
     x1:chengji
    })


    if(value1==11)
    chengji2=x9*0.15+x1 * 0.15+x2*0.2+x3*0.1+x4*0.1+x5*0.1+x6*0.2
    else if(value1==10)
    chengji2=x9*0.15+x1*0.15+x2*0.2+x3*0.1+x4*0.1+x7*0.2+x8*0.1

    console.log(chengji2)

    this.setData({
      zongfeng:chengji2
    })
  },
  zuoweiInput:function(e){
    // e 事件对象
    // e.detail 获取触发标签的详情
    // value 获取输入组件的值
    var value = e.detail.value
    var value1 = this.data.value1
    var value2 = this.data.value2
    var chengji = 0
    var chengji2 = 0
    
    var x1=this.data.x1
    var x2=this.data.x2
    var x3=this.data.x3
    var x4=this.data.x4
    var x5=this.data.x5
    var x6=this.data.x6
    var x7=this.data.x7
    var x8=this.data.x8
    var x9=this.data.x9
    
    console.log(value);


   
    //男 大一大二  坐位体前屈
    if (value>=24.9&&value1==11&&value2==20) {
      chengji=100;
    }
    if (value>=23.1&&value<24.9&&value1==11&&value2==20) {
      chengji=95;
    }
    if (value>=21.3&&value<23.1&&value1==11&&value2==20) {
      chengji=90;
    }
    if (value>=19.5&&value<21.3&&value1==11&&value2==20) {
      chengji=85;
    }
    if (value>=17.7&&value<19.5&&value1==11&&value2==20) {
      chengji=80;
    }
    if (value>=16.3&&value<17.7&&value1==11&&value2==20) {
      chengji=78;
    }
    if (value>=14.9&&value<16.3&&value1==11&&value2==20) {
      chengji=76;
    }
    if (value>=13.5&&value<14.9&&value1==11&&value2==20) {
      chengji=74;
    }
    if (value>=12.1&&value<13.5&&value1==11&&value2==20) {
      chengji=72;
    }
    if (value>=10.7&&value<12.1&&value1==11&&value2==20) {
      chengji=70;
    }
    if (value>=9.3&&value<10.7&&value1==11&&value2==20) {
      chengji=68;
    }
    if (value>=7.9&&value<9.3&&value1==11&&value2==20) {
      chengji=66;
    }
    if (value>=6.5&&value<7.9&&value1==11&&value2==20) {
      chengji=64;
    }
    if (value>=5.1&&value<6.5&&value1==11&&value2==20) {
      chengji=62;
    }
    if (value>=3.7&&value<5.1&&value1==11&&value2==20) {
      chengji=60;
    }
    if (value>=2.7&&value<3.7&&value1==11&&value2==20) {
      chengji=50;
    }
    if (value>=1.7&&value<2.7&&value1==11&&value2==20) {
      chengji=40;
    }
    if (value>=0.7&&value<1.7&&value1==11&&value2==20) {
      chengji=30;
    }
    if (value>=-0.3&&value<0.7&&value1==11&&value2==20) {
      chengji=20;
    }
    if (value>=-1.3&&value<-0.3&&value1==11&&value2==20) {
      chengji=10;
    }


    // 男  大三大四  坐位体前屈
    if (value>=25.1&&value1==11&&value2==20) {
      chengji=100;
    }
    if (value>=23.3&&value<25.1&&value1==11&&value2==21) {
      chengji=95;
    }
    if (value>=21.5&&value<23.3&&value1==11&&value2==21) {
      chengji=90;
    }
    if (value>=19.9&&value<21.5&&value1==11&&value2==21) {
      chengji=85;
    }
    if (value>=18.2&&value<19.9&&value1==11&&value2==21) {
      chengji=80;
    }
    if (value>=16.8&&value<18.2&&value1==11&&value2==21) {
      chengji=78;
    }
    if (value>=15.4&&value<16.8&&value1==11&&value2==21) {
      chengji=76;
    }
    if (value>=14&&value<15.4&&value1==11&&value2==21  ) {
      chengji=74;
    }
    if (value>=12.6&&value<14&&value1==11&&value2==21) {
      chengji=72;
    }
    if (value>=11.2&&value<12.6&&value1==11&&value2==21) {
      chengji=70;
    }
    if (value>=9.8&&value<11.2&&value1==11&&value2==21) {
      chengji=68;
    }
    if (value>=8.4&&value<9.8&&value1==11&&value2==21) {
      chengji=66;
    }
    if (value>=7&&value<8.4&&value1==11&&value2==21) {
      chengji=64;
    }
    if (value>=5.6&&value<7&&value1==11&&value2==21) {
      chengji=62;
    }
    if (value>=4.2&&value<5.6&&value1==11&&value2==21) {
      chengji=60;
    }
    if (value>=3.2&&value<4.2&&value1==11&&value2==21) {
      chengji=50;
    }
    if (value>=2.2&&value<3.2&&value1==11&&value2==21) {
      chengji=40;
    }
    if (value>=1.2&&value<2.2&&value1==11&&value2==21) {
      chengji=30;
    }
    if (value>=0.2&&value<1.2&&value1==11&&value2==21) {
      chengji=20;
    }
    if (value>=-0.8&&value<0.2&&value1==11&&value2==21) {
      chengji=10;
    }


    //女 大一大二  坐位体前屈
    if (value>=25.9&&value1==10&&value2==20) {
      chengji=100;
    }
    if (value>=24.0&&value<25.9&&value1==10&&value2==20) {
      chengji=95;
    }
    if (value>=22.2&&value<24.0&&value1==10&&value2==20) {
      chengji=90;
    }
    if (value>=20.0&&value<22.2&&value1==10&&value2==20) {
      chengji=85;
    }
    if (value>=19.0&&value<20.0&&value1==10&&value2==20) {
      chengji=80;
    }
    if (value>=17.7&&value<19.0&&value1==10&&value2==20) {
      chengji=78;
    }
    if (value>=16.4&&value<17.7&&value1==10&&value2==20) {
      chengji=76;
    }
    if (value>=15.1&&value<16.4&&value1==10&&value2==20) {
      chengji=74;
    }
    if (value>=13.8&&value<15.1&&value1==10&&value2==20) {
      chengji=72;
    }
    if (value>=12.5&&value<13.8&&value1==10&&value2==20) {
      chengji=70;
    }
    if (value>=11.2&&value<12.5&&value1==10&&value2==20) {
      chengji=68;
    }
    if (value>=9.9&&value<11.2&&value1==10&&value2==20) {
      chengji=66;
    }
    if (value>=8.6&&value<9.9&&value1==10&&value2==20) {
      chengji=64;
    }
    if (value>=7.3&&value<8.6&&value1==10&&value2==20) {
      chengji=62;
    }
    if (value>=6.0&&value<7.3&&value1==10&&value2==20) {
      chengji=60;
    }
    if (value>=5.2&&value<6.0&&value1==10&&value2==20) {
      chengji=50;
    }
    if (value>=4.4&&value<5.2&&value1==10&&value2==20) {
      chengji=40;
    }
    if (value>=3.6&&value<4.4&&value1==10&&value2==20) {
      chengji=30;
    }
    if (value>=2.8&&value<3.6&&value1==10&&value2==20) {
      chengji=20;
    }
    if (value>=2&&value<2.8&&value1==10&&value2==20) {
      chengji=10;
    }


    // 女  大三大四  坐位体前屈
    if (value>=26.3&&value1==10&&value2==20) {
      chengji=100;
    }
    if (value>=24.4&&value<26.3&&value1==10&&value2==21) {
      chengji=95;
    }
    if (value>=22.4&&value<24.4&&value1==10&&value2==21) {
      chengji=90;
    }
    if (value>=21.0&&value<22.4&&value1==10&&value2==21) {
      chengji=85;
    }
    if (value>=19.5&&value<21.0&&value1==10&&value2==21) {
      chengji=80;
    }
    if (value>=18.2&&value<19.5&&value1==10&&value2==21) {
      chengji=78;
    }
    if (value>=16.9&&value<18.2&&value1==10&&value2==21) {
      chengji=76;
    }
    if (value>=15.6&&value<16.9&&value1==10&&value2==21  ) {
      chengji=74;
    }
    if (value>=14.3&&value<15.6&&value1==10&&value2==21) {
      chengji=72;
    }
    if (value>=13.0&&value<14.3&&value1==10&&value2==21) {
      chengji=70;
    }
    if (value>=11.7&&value<13.0&&value1==10&&value2==21) {
      chengji=68;
    }
    if (value>=10.4&&value<11.7&&value1==10&&value2==21) {
      chengji=66;
    }
    if (value>=9.1&&value<10.4&&value1==10&&value2==21) {
      chengji=64;
    }
    if (value>=7.8&&value<9.1&&value1==10&&value2==21) {
      chengji=62;
    }
    if (value>=6.5&&value<7.8&&value1==10&&value2==21) {
      chengji=60;
    }
    if (value>=5.7&&value<6.5&&value1==10&&value2==21) {
      chengji=50;
    }
    if (value>=4.9&&value<5.7&&value1==10&&value2==21) {
      chengji=40;
    }
    if (value>=4.1&&value<4.9&&value1==10&&value2==21) {
      chengji=30;
    }
    if (value>=3.3&&value<4.1&&value1==10&&value2==21) {
      chengji=20;
    }
    if (value>=2.5&&value<3.3&&value1==10&&value2==21) {
      chengji=10;
    }
    console.log(chengji)

    this.setData({
      x3:chengji
    })
    if(value1==11)
    chengji2=x9*0.15+x1*0.15+x2*0.2+x3*0.1+x4*0.1+x5*0.1+x6*0.2
    else if(value1==10)
    chengji2=x9*0.15+x1*0.15+x2*0.2+x3*0.1+x4*0.1+x7*0.2+x8*0.1

    console.log(chengji2)
    this.setData({
      zongfeng:chengji2
    })
  },
  tiaoyuanInput:function(e){
    // e 事件对象
    // e.detail 获取触发标签的详情
    // value 获取输入组件的值
    var value = e.detail.value
    var value1=this.data.value1
    var value2=this.data.value2
    var chengji = 0
    var chengji2 = 0    

    var x1=this.data.x1
    var x2=this.data.x2
    var x3=this.data.x3
    var x4=this.data.x4
    var x5=this.data.x5
    var x6=this.data.x6
    var x7=this.data.x7
    var x8=this.data.x8
    var x9=this.data.x9

    console.log(value);
    //  男  大一大二  跳远
    if (value>=273&&value1==11&&value2==21) {
      chengji=100;
    }
    if (value>=268&&value<273&&value1==11&&value2==20) {
      chengji=95;
    }
    if (value>=263&&value<268&&value1==11&&value2==20) {
      chengji=90;
    }
    if (value>=256&&value<263&&value1==11&&value2==20) {
      chengji=85;
    }
    if (value>=248&&value<256&&value1==11&&value2==20) {
      chengji=80;
    }
    if (value>=244&&value<248&&value1==11&&value2==20) {
      chengji=78;
    }
    if (value>=240&&value<244&&value1==11&&value2==20) {
      chengji=76;
    }
    if (value>=236&&value<240&&value1==11&&value2==20) {
      chengji=74;
    }
    if (value>=232&&value<236&&value1==11&&value2==20) {
      chengji=72;
    }
    if (value>=228&&value<232&&value1==11&&value2==20) {
      chengji=70;
    }
    if (value>=224&&value<228&&value1==11&&value2==20) {
      chengji=68;
    }
    if (value>=220&&value<224&&value1==11&&value2==20) {
      chengji=66;
    }
    if (value>=216&&value<220&&value1==11&&value2==20) {
      chengji=64;
    }
    if (value>=212&&value<216&&value1==11&&value2==20) {
      chengji=62;
    }
    if (value>=208&&value<212&&value1==11&&value2==20) {
      chengji=60;
    }
    if (value>=203&&value<208&&value1==11&&value2==20) {
      chengji=50;
    }
    if (value>=198&&value<203&&value1==11&&value2==20) {
      chengji=40;
    }
    if (value>=193&&value<198&&value1==11&&value2==20) {
      chengji=30;
    }
    if (value>=188&&value<193&&value1==11&&value2==20) {
      chengji=20;
    }
    if (value>=183&&value<188&&value1==11&&value2==20) {
      chengji=10;
    }


    // 男  大三大四  跳远
    if (value>=275&&value1==11&&value2==20) {
      chengji=100;
    }
    if (value>=270&&value<275&&value1==11&&value2==21) {
      chengji=95;
    }
    if (value>=265&&value<270&&value1==11&&value2==21) {
      chengji=90;
    }
    if (value>=258&&value<265&&value1==11&&value2==21) {
      chengji=85;
    }
    if (value>=250&&value<258&&value1==11&&value2==21) {
      chengji=80;
    }
    if (value>=246&&value<250&&value1==11&&value2==21) {
      chengji=78;
    }
    if (value>=242&&value<246&&value1==11&&value2==21) {
      chengji=76;
    }
    if (value>=238&&value<242&&value1==11&&value2==21) {
      chengji=74;
    }
    if (value>=234&&value<238&&value1==11&&value2==21) {
      chengji=72;
    }
    if (value>=230&&value<234&&value1==11&&value2==21) {
      chengji=70;
    }
    if (value>=226&&value<230&&value1==11&&value2==21) {
      chengji=68;
    }
    if (value>=222&&value<226&&value1==11&&value2==21) {
      chengji=66;
    }
    if (value>=218&&value<222&&value1==11&&value2==21) {
      chengji=64;
    }
    if (value>=214&&value<218&&value1==11&&value2==21) {
      chengji=62;
    }
    if (value>=210&&value<214&&value1==11&&value2==21) {
      chengji=60;
    }
    if (value>=205&&value<210&&value1==11&&value2==21) {
      chengji=50;
    }
    if (value>=200&&value<205&&value1==11&&value2==21) {
      chengji=40;
    }
    if (value>=195&&value<200&&value1==11&&value2==21) {
      chengji=30;
    }
    if (value>=190&&value<195&&value1==11&&value2==21) {
      chengji=20;
    }
    if (value>=185&&value<190&&value1==11&&value2==21) {
      chengji=10;
    }



    //  女  大一大二  跳远
    if (value>=207&&value1==10&&value2==20) {
      chengji=100;
    }
    if (value>=201&&value<207&&value1==10&&value2==20) {
      chengji=95;
    }
    if (value>=195&&value<201&&value1==10&&value2==20) {
      chengji=90;
    }
    if (value>=188&&value<195&&value1==10&&value2==20) {
      chengji=85;
    }
    if (value>=181&&value<188&&value1==10&&value2==20) {
      chengji=80;
    }
    if (value>=178&&value<181&&value1==10&&value2==20) {
      chengji=78;
    }
    if (value>=175&&value<178&&value1==10&&value2==20) {
      chengji=76;
    }
    if (value>=172&&value<175&&value1==10&&value2==20) {
      chengji=74;
    }
    if (value>=169&&value<172&&value1==10&&value2==20) {
      chengji=72;
    }
    if (value>=166&&value<169&&value1==10&&value2==20) {
      chengji=70;
    }
    if (value>=163&&value<166&&value1==10&&value2==20) {
      chengji=68;
    }
    if (value>=160&&value<163&&value1==10&&value2==20) {
      chengji=66;
    }
    if (value>=157&&value<160&&value1==10&&value2==20) {
      chengji=64;
    }
    if (value>=154&&value<157&&value1==10&&value2==20) {
      chengji=62;
    }
    if (value>=151&&value<154&&value1==10&&value2==20) {
      chengji=60;
    }
    if (value>=146&&value<151&&value1==10&&value2==20) {
      chengji=50;
    }
    if (value>=141&&value<146&&value1==10&&value2==20) {
      chengji=40;
    }
    if (value>=136&&value<141&&value1==10&&value2==20) {
      chengji=30;
    }
    if (value>=131&&value<136&&value1==10&&value2==20) {
      chengji=20;
    }
    if (value>=126&&value<131&&value1==10&&value2==20) {
      chengji=10;
    }


    // 女  大三大四  跳远
    if (value>=208&&value1==10&&value2==21) {
      chengji=100;
    }
    if (value>=202&&value<208&&value1==10&&value2==21) {
      chengji=95;
    }
    if (value>=196&&value<202&&value1==10&&value2==21) {
      chengji=90;
    }
    if (value>=189&&value<196&&value1==10&&value2==21) {
      chengji=85;
    }
    if (value>=182&&value<189&&value1==10&&value2==21) {
      chengji=80;
    }
    if (value>=179&&value<182&&value1==10&&value2==21) {
      chengji=78;
    }
    if (value>=176&&value<179&&value1==10&&value2==21) {
      chengji=76;
    }
    if (value>=173&&value<176&&value1==10&&value2==21) {
      chengji=74;
    }
    if (value>=170&&value<173&&value1==10&&value2==21) {
      chengji=72;
    }
    if (value>=167&&value<170&&value1==10&&value2==21) {
      chengji=70;
    }
    if (value>=164&&value<167&&value1==10&&value2==21) {
      chengji=68;
    }
    if (value>=161&&value<164&&value1==10&&value2==21) {
      chengji=66;
    }
    if (value>=158&&value<161&&value1==10&&value2==21) {
      chengji=64;
    }
    if (value>=155&&value<158&&value1==10&&value2==21) {
      chengji=62;
    }
    if (value>=152&&value<155&&value1==10&&value2==21) {
      chengji=60;
    }
    if (value>=147&&value<152&&value1==10&&value2==21) {
      chengji=50;
    }
    if (value>=142&&value<147&&value1==10&&value2==21) {
      chengji=40;
    }
    if (value>=137&&value<142&&value1==10&&value2==21) {
      chengji=30;
    }
    if (value>=132&&value<137&&value1==10&&value2==21) {
      chengji=20;
    }
    if (value>=127&&value<132&&value1==10&&value2==21) {
      chengji=10;
    }
   console.log(chengji)

   this.setData({
     x4:chengji
   })


   if(value1==11)
   chengji2=x9*0.15+x1*0.15+x2*0.2+x3*0.1+x4*0.1+x5*0.1+x6*0.2
   else if(value1==10)
   chengji2=x9*0.15+x1*0.15+x2*0.2+x3*0.1+x4*0.1+x7*0.2+x8*0.1

   console.log(chengji2)
   this.setData({
     zongfeng:chengji2
   })


  },

  50:function(e){


    var value = e.detail.value
    var value1=this.data.value1
    var value2=this.data.value2
    var chengji = 0
    var chengji2 = 0   


    var x1=this.data.x1
    var x2=this.data.x2
    var x3=this.data.x3
    var x4=this.data.x4
    var x5=this.data.x5
    var x6=this.data.x6
    var x7=this.data.x7
    var x8=this.data.x8
    var x9=this.data.x9

    console.log(value);
    //男  大一大二  50米跑
    if (value<=6.7&&value1==11&&value2==20) {
      chengji=100;
    }
    if (value<=6.8&&value>6.7&&value1==11&&value2==20) {
      chengji=95;
    }
    if (value<=6.9&&value>6.8&&value1==11&&value2==20) {
      chengji=90;
    }
    if (value<=7.0&&value>6.9&&value1==11&&value2==20) {
      chengji=85;
    }
    if (value<=7.1&&value>7.0&&value1==11&&value2==20) {
      chengji=80;
    }
    if (value<=7.3&&value>7.1&&value1==11&&value2==20) {
      chengji=78;
    }
    if (value<=7.5&&value>7.3&&value1==11&&value2==20) {
      chengji=76;
    }
    if (value<=7.7&&value>7.5&&value1==11&&value2==20) {
      chengji=74;
    }
    if (value<=7.9&&value>7.7&&value1==11&&value2==20) {
      chengji=72;
    }
    if (value<=8.1&&value>7.9&&value1==11&&value2==20) {
      chengji=70;
    }
    if (value<=8.3&&value>8.1&&value1==11&&value2==20) {
      chengji=68;
    }
    if (value<=8.5&&value>8.3&&value1==11&&value2==20) {
      chengji=66;
    }
    if (value<=8.7&&value>8.5&&value1==11&&value2==20) {
      chengji=64;
    }
    if (value<=8.9&&value>8.7&&value1==11&&value2==20) {
      chengji=62;
    }
    if (value<=9.1&&value>8.9&&value1==11&&value2==20) {
      chengji=60;
    }
    if (value<=9.3&&value>9.1&&value1==11&&value2==20) {
      chengji=50;
    }
    if (value<=9.5&&value>9.3&&value1==11&&value2==20) {
      chengji=40;
    }
    if (value<=9.7&&value>9.5&&value1==11&&value2==20) {
      chengji=30;
    }
    if (value<=9.9&&value>9.7&&value1==11&&value2==20) {
      chengji=20;
    }
    if (value<=10.1&&value>9.9&&value1==11&&value2==20) {
      chengji=10;
    }

    //男  大三大四  50米跑
    if (value<=6.6&&value1==10&&value2==21) {
      chengji=100;
    }
    if (value<=6.7&&value>6.6&&value1==11&&value2==21) {
      chengji=95;
    }
    if (value<=6.8&&value>6.7&&value1==11&&value2==21) {
      chengji=90;
    }
    if (value<=6.9&&value>6.8&&value1==11&&value2==21) {
      chengji=85;
    }
    if (value<=7.0&&value>6.9&&value1==11&&value2==21) {
      chengji=80;
    }
    if (value<=7.2&&value>7.0&&value1==11&&value2==21) {
      chengji=78;
    }
    if (value<=7.4&&value>7.2&&value1==11&&value2==21) {
      chengji=76;
    }
    if (value<=7.6&&value>7.4&&value1==11&&value2==21) {
      chengji=74;
    }
    if (value<=7.8&&value>7.6&&value1==11&&value2==21) {
      chengji=72;
    }
    if (value<=8.0&&value>7.8&&value1==11&&value2==21) {
      chengji=70;
    }
    if (value<=8.2&&value>8.0&&value1==11&&value2==21) {
      chengji=68;
    }
    if (value<=8.4&&value>8.2&&value1==11&&value2==21) {
      chengji=66;
    }
    if (value<=8.6&&value>8.4&&value1==11&&value2==21) {
      chengji=64;
    }
    if (value<=8.8&&value>8.6&&value1==11&&value2==21) {
      chengji=62;
    }
    if (value<=9.0&&value>8.8&&value1==11&&value2==21) {
      chengji=60;
    }
    if (value<=9.2&&value>9.0&&value1==11&&value2==21) {
      chengji=50;
    }
    if (value<=9.4&&value>9.2&&value1==11&&value2==21) {
      chengji=40;
    }
    if (value<=9.6&&value>9.4&&value1==11&&value2==21) {
      chengji=30;
    }
    if (value<=9.8&&value>9.6&&value1==11&&value2==21) {
      chengji=20;
    }
    if (value<=10.0&&value>9.8&&value1==11&&value2==21) {
      chengji=10;
    }



    //女  大一大二  50米跑
    if (value<=7.5&&value1==10&&value2==20) {
      chengji=100;
    }
    if (value<=7.6&&value>7.5&&value1==10&&value2==20) {
      chengji=95;
    }
    if (value<=7.7&&value>7.6&&value1==10&&value2==20) {
      chengji=90;
    }
    if (value<=8.0&&value>7.7&&value1==10&&value2==20) {
      chengji=85;
    }
    if (value<=8.3&&value>8.0&&value1==10&&value2==20) {
      chengji=80;
    }
    if (value<=8.5&&value>8.3&&value1==10&&value2==20) {
      chengji=78;
    }
    if (value<=8.7&&value>8.5&&value1==10&&value2==20) {
      chengji=76;
    }
    if (value<=8.9&&value>8.7&&value1==10&&value2==20) {
      chengji=74;
    }
    if (value<=9.1&&value>8.9&&value1==10&&value2==20) {
      chengji=72;
    }
    if (value<=9.3&&value>9.1&&value1==10&&value2==20) {
      chengji=70;
    }
    if (value<=9.5&&value>9.3&&value1==10&&value2==20) {
      chengji=68;
    }
    if (value<=9.7&&value>9.5&&value1==10&&value2==20) {
      chengji=66;
    }
    if (value<=9.9&&value>9.7&&value1==10&&value2==20) {
      chengji=64;
    }
    if (value<=10.1&&value>9.9&&value1==10&&value2==20) {
      chengji=62;
    }
    if (value<=10.3&&value>10.1&&value1==10&&value2==20) {
      chengji=60;
    }
    if (value<=10.5&&value>10.3&&value1==10&&value2==20) {
      chengji=50;
    }
    if (value<=10.7&&value>10.5&&value1==10&&value2==20) {
      chengji=40;
    }
    if (value<=10.9&&value>10.7&&value1==10&&value2==20) {
      chengji=30;
    }
    if (value<=11.1&&value>10.9&&value1==10&&value2==20) {
      chengji=20;
    }
    if (value<=11.3&&value>11.1&&value1==10&&value2==20) {
      chengji=10;
    }

    //女  大三大四  50米跑
    if (value<=7.4&&value1==10&&value2==21) {
      chengji=100;
    }
    if (value<=7.5&&value>7.4&&value1==10&&value2==21) {
      chengji=95;
    }
    if (value<=7.6&&value>7.5&&value1==10&&value2==21) {
      chengji=90;
    }
    if (value<=7.9&&value>7.6&&value1==10&&value2==21) {
      chengji=85;
    }
    if (value<=8.2&&value>7.9&&value1==10&&value2==21) {
      chengji=80;
    }
    if (value<=8.4&&value>8.2&&value1==10&&value2==21) {
      chengji=78;
    }
    if (value<=8.6&&value>8.4&&value1==10&&value2==21) {
      chengji=76;
    }
    if (value<=8.8&&value>8.6&&value1==10&&value2==21) {
      chengji=74;
    }
    if (value<=9.0&&value>8.8&&value1==10&&value2==21) {
      chengji=72;
    }
    if (value<=9.2&&value>9.0&&value1==10&&value2==21) {
      chengji=70;
    }
    if (value<=9.4&&value>9.2&&value1==10&&value2==21) {
      chengji=68;
    }
    if (value<=9.6&&value>9.4&&value1==10&&value2==21) {
      chengji=66;
    }
    if (value<=9.8&&value>9.6&&value1==10&&value2==21) {
      chengji=64;
    }
    if (value<=10.0&&value>9.8&&value1==10&&value2==21) {
      chengji=62;
    }
    if (value<=10.2&&value>10.0&&value1==10&&value2==21) {
      chengji=60;
    }
    if (value<=10.4&&value>10.2&&value1==10&&value2==21) {
      chengji=50;
    }
    if (value<=10.6&&value>10.4&&value1==10&&value2==21) {
      chengji=40
    }
    if (value<=10.8&&value>10.6&&value1==10&&value2==21) {
      chengji=30;
    }
    if (value<=11.0&&value>10.8&&value1==10&&value2==21) {
      chengji=20;
    }
    if (value<=11.2&&value>11.0&&value1==10&&value2==21) {
      chengji=10;
    }
   console.log(chengji)
   this.setData({
     x2:chengji
   })

   if(value1==11)
   chengji2=x9*0.15+x1*0.15+x2*0.2+x3*0.1+x4*0.1+x5*0.1+x6*0.2
   else if(value1==10)
   chengji2=x9*0.15+x1*0.15+x2*0.2+x3*0.1+x4*0.1+x7*0.2+x8*0.1

   console.log(chengji2)
   this.setData({
     zongfeng:chengji2
   })

  },
  1000:function(e){
    // e 事件对象
    // e.detail 获取触发标签的详情
    // value 获取输入组件的值
    var value = e.detail.value
    var value1=this.data.value1
    var value2=this.data.value2
    var chengji = 0;    
    var chengji2 = 0;


    var x1=this.data.x1
    var x2=this.data.x2
    var x3=this.data.x3
    var x4=this.data.x4
    var x5=this.data.x5
    var x6=this.data.x6
    var x7=this.data.x7
    var x8=this.data.x8
    var x9=this.data.x9

    console.log(value);


    //男 800米 加分  大一大二
    if (value<=157&&value1==10&&value2==20) {
      chengji=110;
    }
    if (value<=161&&value>157&&value1==10&&value2==20) {
      chengji=109;
    }
    if (value<=165&&value>161&&value1==10&&value2==20) {
      chengji=108;
    }
    if (value<=169&&value>165&&value1==10&&value2==20) {
      chengji=107;
    }
    if (value<=173&&value>169&&value1==10&&value2==20) {
      chengji=106;
    }
    if (value<=177&&value>173&&value1==10&&value2==20) {
      chengji=105;
    }
    if (value<=181&&value>177&&value1==10&&value2==20) {
      chengji=104;
    }
    if (value<=185&&value>181&&value1==10&&value2==20) {
      chengji=103;
    }
    if (value<=189&&value>185&&value1==10&&value2==20) {
      chengji=102;
    }
    if (value<=193&&value>189&&value1==10&&value2==20) {
      chengji=101;
    }

    // 男  800  大三大四   加分

    if (value<=155&&value1==10&&value2==20) {
      chengji=110;
    }
    if (value<=159&&value>155&&value1==10&&value2==21) {
      chengji=109;
    }
    if (value<=163&&value>159&&value1==10&&value2==21) {
      chengji=108;
    }
    if (value<=167&&value>163&&value1==10&&value2==21) {
      chengji=107;
    }
    if (value<=171&&value>167&&value1==10&&value2==21) {
      chengji=106;
    }
    if (value<=175&&value>171&&value1==10&&value2==21) {
      chengji=105;
    }
    if (value<=179&&value>175&&value1==10&&value2==21) {
      chengji=104;
    }
    if (value<=183&&value>179&&value1==10&&value2==21) {
      chengji=103;
    }
    if (value<=187&&value>183&&value1==10&&value2==21) {
      chengji=102;
    }
    if (value<=191&&value>187&&value1==10&&value2==21) {
      chengji=101;
    }




    //男  大一大二  1000米跑
    if (value<=197&&value>193&&value1==11&&value2==20) {
      chengji=100;
    }
    if (value<=202&&value>197&&value1==11&&value2==20) {
      chengji=95;
    }
    if (value<=207&&value>202&&value1==11&&value2==20) {
      chengji=90;
    }
    if (value<=214&&value>207&&value1==11&&value2==20) {
      chengji=85;
    }
    if (value<=222&&value>214&&value1==11&&value2==20) {
      chengji=80;
    }
    if (value<=227&&value>222&&value1==11&&value2==20) {
      chengji=78;
    }
    if (value<=232&&value>227&&value1==11&&value2==20) {
      chengji=76;
    }
    if (value<=237&&value>232&&value1==11&&value2==20) {
      chengji=74;
    }
    if (value<=242&&value>237&&value1==11&&value2==20) {
      chengji=72;
    }
    if (value<=247&&value>242&&value1==11&&value2==20) {
      chengji=70;
    }
    if (value<=252&&value>247&&value1==11&&value2==20) {
      chengji=68;
    }
    if (value<=257&&value>252&&value1==11&&value2==20) {
      chengji=66;
    }
    if (value<=262&&value>257&&value1==11&&value2==20) {
      chengji=64;
    }
    if (value<=267&&value>262&&value1==11&&value2==20) {
      chengji=62;
    }
    if (value<=272&&value>267&&value1==11&&value2==20) {
      chengji=60;
    }
    if (value<=292&&value>272&&value1==11&&value2==20) {
      chengji=50;
    }
    if (value<=312&&value>292&&value1==11&&value2==20) {
      chengji=40;
    }
    if (value<=332&&value>312&&value1==11&&value2==20) {
      chengji=30;
    }
    if (value<=352&&value>332&&value1==11&&value2==20) {
      chengji=20;
    }
    if (value<=372&&value>352&&value1==11&&value2==20) {
      chengji=10;
    }

    //男  大三大四  1000米跑
    if (value<=195&&value>191&&value1==11&&value2==21) {
      chengji=100;
    }
    if (value<=200&&value>195&&value1==11&&value2==21) {
      chengji=95;
    }
    if (value<=205&&value>200&&value1==11&&value2==21) {
      chengji=90;
    }
    if (value<=212&&value>205&&value1==11&&value2==21) {
      chengji=85;
    }
    if (value<=220&&value>212&&value1==11&&value2==21) {
      chengji=80;
    }
    if (value<=225&&value>220&&value1==11&&value2==21) {
      chengji=78;
    }
    if (value<=230&&value>225&&value1==11&&value2==21) {
      chengji=76;
    }
    if (value<=235&&value>230&&value1==11&&value2==21) {
      chengji=74;
    }
    if (value<=240&&value>235&&value1==11&&value2==21) {
      chengji=72;
    }
    if (value<=245&&value>240&&value1==11&&value2==21) {
      chengji=70;
    }
    if (value<=250&&value>245&&value1==11&&value2==21) {
      chengji=68;
    }
    if (value<=255&&value>250&&value1==11&&value2==21) {
      chengji=66;
    }
    if (value<=260&&value>255&&value1==11&&value2==21) {
      chengji=64;
    }
    if (value<=265&&value>260&&value1==11&&value2==21) {
      chengji=62;
    }
    if (value<=270&&value>265&&value1==11&&value2==21) {
      chengji=60;
    }
    if (value<=290&&value>270&&value1==11&&value2==21) {
      chengji=50;
    }
    if (value<=310&&value>290&&value1==11&&value2==21) {
      chengji=40;
    }
    if (value<=330&&value>310&&value1==11&&value2==21) {
      chengji=30;
    }
    if (value<=350&&value>330&&value1==11&&value2==21) {
      chengji=20;
    }
    if (value<=370&&value>350&&value1==11&&value2==21) {
      chengji=10;
    }
   console.log(chengji)

   

    this.setData({
      x6:chengji2

    })

    if(value1==11)
    chengji2=x9*0.15+x1*0.15+x2*0.2+x3*0.1+x4*0.1+x5*0.1+x6*0.2
    else if(value1==10)
    chengji2=x9*0.15+x1*0.15+x2*0.2+x3*0.1+x4*0.1+x7*0.2+x8*0.1

    console.log(chengji2)
    this.setData({
      zongfeng:chengji2
    })

  },
  800:function(e){
    // e 事件对象
    // e.detail 获取触发标签的详情
    // value 获取输入组件的值
    var value = e.detail.value
    var value1=this.data.value1
    var value2=this.data.value2
    var chengji = 0;    
    var chengji2 = 0;


    var x1=this.data.x1
    var x2=this.data.x2
    var x3=this.data.x3
    var x4=this.data.x4
    var x5=this.data.x5
    var x6=this.data.x6
    var x7=this.data.x7
    var x8=this.data.x8
    var x9=this.data.x9

    
    console.log(value);

    //女 800米 加分  大一大二
    if (value<=148&&value1==10&&value2==20) {
      chengji=110;
    }
    if (value<=153&&value>148&&value1==10&&value2==20) {
      chengji=109;
    }
    if (value<=158&&value>153&&value1==10&&value2==20) {
      chengji=108;
    }
    if (value<=163&&value>158&&value1==10&&value2==20) {
      chengji=107;
    }
    if (value<=168&&value>163&&value1==10&&value2==20) {
      chengji=106;
    }
    if (value<=173&&value>168&&value1==10&&value2==20) {
      chengji=105;
    }
    if (value<=178&&value>173&&value1==10&&value2==20) {
      chengji=104;
    }
    if (value<=183&&value>178&&value1==10&&value2==20) {
      chengji=103;
    }
    if (value<=188&&value>183&&value1==10&&value2==20) {
      chengji=102;
    }
    if (value<=193&&value>188&&value1==10&&value2==20) {
      chengji=101;
    }

    // 女  800  大三大四   加分

    if (value<=146&&value1==10&&value2==20) {
      chengji=110;
    }
    if (value<=151&&value>146&&value1==10&&value2==21) {
      chengji=109;
    }
    if (value<=156&&value>151&&value1==10&&value2==21) {
      chengji=108;
    }
    if (value<=161&&value>156&&value1==10&&value2==21) {
      chengji=107;
    }
    if (value<=166&&value>161&&value1==10&&value2==21) {
      chengji=106;
    }
    if (value<=171&&value>166&&value1==10&&value2==21) {
      chengji=105;
    }
    if (value<=176&&value>171&&value1==10&&value2==21) {
      chengji=104;
    }
    if (value<=181&&value>176&&value1==10&&value2==21) {
      chengji=103;
    }
    if (value<=186&&value>181&&value1==10&&value2==21) {
      chengji=102;
    }
    if (value<=191&&value>186&&value1==10&&value2==21) {
      chengji=101;
    }


    //女  大一大二  800米跑
    if (value<=198&&value>193&&value1==10&&value2==20) {
      chengji=100;
    }
    if (value<=204&&value>198&&value1==10&&value2==20) {
      chengji=95;
    }
    if (value<=210&&value>204&&value1==10&&value2==20) {
      chengji=90;
    }
    if (value<=217&&value>210&&value1==10&&value2==20) {
      chengji=85;
    }
    if (value<=224&&value>217&&value1==10&&value2==20) {
      chengji=80;
    }
    if (value<=229&&value>224&&value1==10&&value2==20) {
      chengji=78;
    }
    if (value<=234&&value>229&&value1==10&&value2==20) {
      chengji=76;
    }
    if (value<=239&&value>234&&value1==10&&value2==20) {
      chengji=74;
    }
    if (value<=244&&value>239&&value1==10&&value2==20) {
      chengji=72;
    }
    if (value<=249&&value>244&&value1==10&&value2==20) {
      chengji=70;
    }
    if (value<=254&&value>249&&value1==10&&value2==20) {
      chengji=68;
    }
    if (value<=259&&value>254&&value1==10&&value2==20) {
      chengji=66;
    }
    if (value<=264&&value>259&&value1==10&&value2==20) {
      chengji=64;
    }
    if (value<=269&&value>264&&value1==10&&value2==20) {
      chengji=62;
    }
    if (value<=274&&value>269&&value1==10&&value2==20) {
      chengji=60;
    }
    if (value<=284&&value>274&&value1==10&&value2==20) {
      chengji=50;
    }
    if (value<=294&&value>284&&value1==10&&value2==20) {
      chengji=40;
    }
    if (value<=304&&value>294&&value1==10&&value2==20) {
      chengji=30;
    }
    if (value<=314&&value>304&&value1==10&&value2==20) {
      chengji=20;
    }
    if (value<=324&&value>314&&value1==10&&value2==20) {
      chengji=10;
    }

    //女  大三大四  800米跑
    if (value<=196&&value>191&&value1==10&&value2==21) {
      chengji=100;
    }
    if (value<=202&&value>196&&value1==10&&value2==21) {
      chengji=95;
    }
    if (value<=208&&value>202&&value1==10&&value2==21) {
      chengji=90;
    }
    if (value<=215&&value>208&&value1==10&&value2==21) {
      chengji=85;
    }
    if (value<=222&&value>215&&value1==10&&value2==21) {
      chengji=80;
    }
    if (value<=227&&value>222&&value1==10&&value2==21) {
      chengji=78;
    }
    if (value<=232&&value>227&&value1==10&&value2==21) {
      chengji=76;
    }
    if (value<=237&&value>232&&value1==10&&value2==21) {
      chengji=74;
    }
    if (value<=242&&value>237&&value1==10&&value2==21) {
      chengji=72;
    }
    if (value<=247&&value>242&&value1==10&&value2==21) {
      chengji=70;
    }
    if (value<=252&&value>247&&value1==10&&value2==21) {
      chengji=68;
    }
    if (value<=257&&value>252&&value1==10&&value2==21) {
      chengji=66;
    }
    if (value<=262&&value>257&&value1==10&&value2==21) {
      chengji=64;
    }
    if (value<=267&&value>262&&value1==10&&value2==21) {
      chengji=62;
    }
    if (value<=272&&value>267&&value1==10&&value2==21) {
      chengji=60;
    }
    if (value<=282&&value>272&&value1==10&&value2==21) {
      chengji=50;
    }
    if (value<=292&&value>282&&value1==10&&value2==21) {
      chengji=40;
    }
    if (value<=302&&value>292&&value1==10&&value2==21) {
      chengji=30
    }
    if (value<=312&&value>302&&value1==10&&value2==21) {
      chengji=20;
    }
    if (value<=322&&value>312&&value1==10&&value2==21) {
      chengji=10;
    }
   console.log(chengji)
 
    this.setData({
      x7:chengji
    })

    if(value1==11)
    chengji2=x9*0.15+x1*0.15+x2*0.2+x3*0.1+x4*0.1+x5*0.1+x6*0.2
    else if(value1==10)
    chengji2=x9*0.15+x1*0.15+x2*0.2+x3*0.1+x4*0.1+x7*0.2+x8*0.1

    console.log(chengji2)
    this.setData({
      zongfeng:chengji2
    })
  },
  yinti:function(e){
    // e 事件对象
    // e.detail 获取触发标签的详情
    // value 获取输入组件的值
    var value = e.detail.value
    var value1=this.data.value1
    var value2=this.data.value2
    var chengji = 0;    
    var chengji2 = 0;


    var x1=this.data.x1
    var x2=this.data.x2
    var x3=this.data.x3
    var x4=this.data.x4
    var x5=this.data.x5
    var x6=this.data.x6
    var x7=this.data.x7
    var x8=this.data.x8
    var x9=this.data.x9

    console.log(value);

    //大一大二  加分
    if(value>=29&&value2==20)
    chengji=110;
    if(value=28&&value2==20)
    chengji=109;
    if(value=27&&value2==20)
    chengji=108;
    if(value=26&&value2==20)
    chengji=107;
    if(value=25&&value2==20)
    chengji=106;
    if(value=24&&value2==20)
    chengji=105;
    if(value=23&&value2==20)
    chengji=104;
    if(value=22&&value2==20)
    chengji=103;
    if(value=21&&value2==20)
    chengji=102;
    if(value=20&&value2==20)
    chengji=101;


    //大一大二  加分
    if(value>=30&&value2==21)
    chengji=110;
    if(value=29&&value2==21)
    chengji=109;
    if(value=28&&value2==21)
    chengji=108;
    if(value=27&&value2==21)
    chengji=107;
    if(value=26&&value2==21)
    chengji=106;
    if(value=25&&value2==21)
    chengji=105;
    if(value=24&&value2==21)
    chengji=104;
    if(value=23&&value2==21)
    chengji=103;
    if(value=22&&value2==21)
    chengji=102;
    if(value=21&&value2==21)
    chengji=101;



    //男  大一大二  引体向上
    if (value>=19&&value1==11&&value2==20) {
      chengji=100;
    }
    if (value>=18&&value<19&&value1==11&&value2==20) {
      chengji=95;
    }
    if (value>=17&&value<18&&value1==11&&value2==20) {
      chengji=90;
    }
    if (value>=16&&value<17&&value1==11&&value2==20) {
      chengji=85;
    }
    if (value>=15&&value<16&&value1==11&&value2==20) {
      chengji=80;
    }
    
    if (value>=14&&value<15&&value1==11&&value2==20) {
      chengji=76;
    }
  
    if (value>=13&&value<14&&value1==11&&value2==20) {
      chengji=72;
    }
    
    if (value>=12&&value<13&&value1==11&&value2==20) {
      chengji=68;
    }
    
    if (value>=11&&value<12&&value1==11&&value2==20) {
      chengji=64;
    }
    
    if (value>=10&&value<11&&value1==11&&value2==20) {
      chengji=60;
    }
    if (value>=9&&value<10&&value1==11&&value2==20) {
      chengji=50;
    }
    if (value>=8&&value<9&&value1==11&&value2==20) {
      chengji=40;
    }
    if (value>=7&&value<8&&value1==11&&value2==20) {
      chengji=30;
    }
    if (value>=6&&value<7&&value1==11&&value2==20) {
      chengji=20;
    }
    if (value>=5&&value<6&&value1==11&&value2==20) {
      chengji=10;
    }

    // 男  大三大四  引体向上
    if (value>=20&&value1==11&&value2==20) {
      chengji=100;
    }
    if (value>=19&&value<20&&value1==11&&value2==21) {
      chengji=95;
    }
    if (value>=18&&value<19&&value1==11&&value2==21) {
      chengji=90;
    }
    if (value>=17&&value<18&&value1==11&&value2==21) {
      chengji=85;
    }
    if (value>=16&&value<17&&value1==11&&value2==21) {
      chengji=80;
    }
    
    if (value>=15&&value<16&&value1==11&&value2==21) {
      chengji=76;
    }
    
    if (value>=14&&value<15&&value1==11&&value2==21) {
      chengji=72;
    }
    
    if (value>=13&&value<14&&value1==11&&value2==21) {
      chengji=68;
    }
    
    if (value>=12&&value<13&&value1==11&&value2==21) {
      chengji=64;
    }
    
    if (value>=11&&value<12&&value1==11&&value2==21) {
      chengji=60;
    }
    if (value>=10&&value<11&&value1==11&&value2==21) {
      chengji=50;
    }
    if (value>=9&&value<10&&value1==11&&value2==21) {
      chengji=40;
    }
    if (value>=8&&value<9&&value1==11&&value2==21) {
      chengji=30;
    }
    if (value>=7&&value<8&&value1==11&&value2==21) {
      chengji=20;
    }
    if (value>=6&&value<7&&value1==11&&value2==21) {
      chengji=10;
    }

   console.log(chengji)
   
    this.setData({
      x5:chengji

    })
   

    if(value1==11)
    chengji2=x9*0.15+x1*0.15+x2*0.2+x3*0.1+x4*0.1+x5*0.1+x6*0.2
    else if(value1==10)
    chengji2=x9*0.15+x1*0.15+x2*0.2+x3*0.1+x4*0.1+x7*0.2+x8*0.1

    console.log(chengji2)
    this.setData({
      zongfeng:chengji2
    })   

  },
  qizuo:function(e){
    // e 事件对象
    // e.detail 获取触发标签的详情
    // value 获取输入组件的值
    var value = e.detail.value
    var value1=this.data.value1
    var value2=this.data.value2
    var chengji = 0;    
    var chengji2 = 0;


    var x1=this.data.x1
    var x2=this.data.x2
    var x3=this.data.x3
    var x4=this.data.x4
    var x5=this.data.x5
    var x6=this.data.x6
    var x7=this.data.x7
    var x8=this.data.x8
    var x9=this.data.x9

    console.log(value);

    //大一大二  加分
    if(value>=69&&value2==20)
    chengji=110;
    if(value=68&&value2==20)
    chengji=109;
    if(value=67&&value2==20)
    chengji=108;
    if(value=66&&value2==20)
    chengji=107;
    if(value=65&&value2==20)
    chengji=106;
    if(value=64&&value2==20)
    chengji=105;
    if(value=63&&value2==20)
    chengji=104;
    if(value=62&&value2==20)
    chengji=103;
    if(value=61&&value2==20)
    chengji=102;
    if(value=60&&value2==20)
    chengji=101;


    //大一大二  加分
    if(value>=70&&value2==21)
    chengji=110;
    if(value=69&&value2==21)
    chengji=109;
    if(value=68&&value2==21)
    chengji=108;
    if(value=67&&value2==21)
    chengji=107;
    if(value=66&&value2==21)
    chengji=106;
    if(value=65&&value2==21)
    chengji=105;
    if(value=64&&value2==21)
    chengji=104;
    if(value=63&&value2==21)
    chengji=103;
    if(value=62&&value2==21)
    chengji=102;
    if(value=61&&value2==21)
    chengji=101;


    //女  大一大二  仰卧起坐
    if (value>=56&&value1==10&&value2==20) {
      chengji=100;
    }
    if (value>=54&&value<56&&value1==10&&value2==20) {
      chengji=95;
    }
    if (value>=52&&value<54&&value1==10&&value2==20) {
      chengji=90;
    }
    if (value>=49&&value<52&&value1==10&&value2==20) {
      chengji=85;
    }
    if (value>=46&&value<49&&value1==10&&value2==20) {
      chengji=80;
    }
    if (value>=44&&value<46&&value1==10&&value2==20) {
      chengji=78;
    }
    if (value>=42&&value<44&&value1==10&&value2==20) {
      chengji=76;
    }
    if (value>=40&&value<42&&value1==10&&value2==20) {
      chengji=74;
    }
    if (value>=38&&value<40&&value1==10&&value2==20) {
      chengji=72;
    }
    if (value>=36&&value<38&&value1==10&&value2==20) {
      chengji=70;
    }
    if (value>=34&&value<36&&value1==10&&value2==20) {
      chengji=68;
    }
    if (value>=32&&value<34&&value1==10&&value2==20) {
      chengji=66;
    }
    if (value>=30&&value<32&&value1==10&&value2==20) {
      chengji=64;
    }
    if (value>=28&&value<30&&value1==10&&value2==20) {
      chengji=62;
    }
    if (value>=26&&value<28&&value1==10&&value2==20) {
      chengji=60;
    }
    if (value>=24&&value<26&&value1==10&&value2==20) {
      chengji=50;
    }
    if (value>=22&&value<24&&value1==10&&value2==20) {
      chengji=40;
    }
    if (value>=20&&value<22&&value1==10&&value2==20) {
      chengji=30;
    }
    if (value>=18&&value<20&&value1==10&&value2==20) {
      chengji=20;
    }
    if (value>=16&&value<18&&value1==10&&value2==20) {
      chengji=10;
    }

    //女  大三大四  仰卧起坐
    if (value>=57&&value1==10&&value2==21) {
      chengji=100;
    }
    if (value>=55&&value<57&&value1==10&&value2==21) {
      chengji=95;
    }
    if (value>=53&&value<55&&value1==10&&value2==21) {
      chengji=90;
    }
    if (value>=50&&value<53&&value1==10&&value2==21) {
      chengji=85;
    }
    if (value>=47&&value<50&&value1==10&&value2==21) {
      chengji=80;
    }
    if (value>=45&&value<47&&value1==10&&value2==21) {
      chengji=78;
    }
    if (value>=43&&value<45&&value1==10&&value2==21) {
      chengji=76;
    }
    if (value>=41&&value<43&&value1==10&&value2==21) {
      chengji=74;
    }
    if (value>=39&&value<41&&value1==10&&value2==21) {
      chengji=72;
    }
    if (value>=37&&value<39&&value1==10&&value2==21) {
      chengji=70;
    }
    if (value>=35&&value<37&&value1==10&&value2==21) {
      chengji=68;
    }
    if (value>=33&&value<35&&value1==10&&value2==21) {
      chengji=66;
    }
    if (value>=31&&value<33&&value1==10&&value2==21) {
      chengji=64;
    }
    if (value>=29&&value<31&&value1==10&&value2==21) {
      chengji=62;
    }
    if (value>=27&&value<29&&value1==10&&value2==21) {
      chengji=60;
    }
    if (value>=25&&value<227&&value1==10&&value2==21) {
      chengji=50;
    }
    if (value>=23&&value<25&&value1==10&&value2==21) {
      chengji=40;
    }
    if (value>=21&&value<23&&value1==10&&value2==21) {
      chengji=30
    }
    if (value>=19&&value<21&&value1==10&&value2==21) {
      chengji=20;
    }
    if (value>=17&&value<19&&value1==10&&value2==21) {
      chengji=10;
    }
   console.log(chengji)
    this.setData({
      x8:chengji
    })
   

    if(value1==11)
    chengji2=x9*0.15+x1*0.15+x2*0.2+x3*0.1+x4*0.1+x5*0.1+x6*0.2
    else if(value1==10)
    chengji2=x9*0.15+x1*0.15+x2*0.2+x3*0.1+x4*0.1+x7*0.2+x8*0.1

    console.log(chengji2)
    this.setData({
      zongfeng:chengji2
    })

  },
  
  kong:function(e){

    this.setData({
      x1:0,x2:0,x3:0,x4:0,x5:0,x6:0,x7:0,x8:0,x9:0,
      zongfeng:0,shengao:0,tizhong:0,BMI:0,
      x11:'',
      x12:'',
      x13:'',
      x14:'',
      x15:'',
      x16:'',
      x17:'',
      x18:'',
      x19:'',
      x20:'',
      x21:'',

    })
  },
  fanghui:function(e){
    wx.switchTab({
      url: '/pages/dynamic/dynamic',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {



  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})