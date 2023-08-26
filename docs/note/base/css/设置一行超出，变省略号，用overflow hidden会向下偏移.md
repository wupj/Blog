# 设置一行超出，变省略号，用overflow hidden会向下偏移

设置之后后面的两个`span`会向下偏移一定距离

实际上就是`inline-block`元素的默认`baseline`和其下外边沿的距离。

常用的解决方法是为上述`inline-block`元素添加`vertical-align: bottom`