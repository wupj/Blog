# svg矢量图path路径标签坐标点英文字母含义

## 移动类：

> M = moveto：将画笔移动到指定坐标。

## 直线类：

> L = lineto：画直线到指定坐标。
>
> H = horizontal lineto：画水平直线到指定坐标。
>
> V = vertical lineto：画垂直直线到指定坐标。

## 曲线类：

> C = curveto：画三次贝塞尔曲线经两个指定控制点到达终点坐标。
>
> S = shorthand/smooth curveto：与前一条贝塞尔曲线相连，控制点为前一条二次贝塞尔曲线控制点的对称点，只需输入第二个控制点和终点，即可绘制一个三次贝塞尔曲线。
>
> Q = quadratic Bezier curveto：画二次贝塞尔曲线经一个指定控制点到达终点坐标。
>
> T = Shorthand/smooth quadratic Bezier curveto：与前一条二次贝塞尔曲线相连，控制点为前一条二次贝塞尔曲线控制点的对称点，只需输入终点，即可绘制一个二次贝塞尔曲线。

## 弧线类：

> A = elliptical arc：画椭圆曲线到指定坐标。

## 闭合类：

> Z = closepath：绘制一条直线链接终点和起点，用来封闭图形。