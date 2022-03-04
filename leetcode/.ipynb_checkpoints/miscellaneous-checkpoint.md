1. css 属性 overflow 属性定义溢出元素内容区的内容会如何处理。如果值为 scroll，不论是否需要，用户代理都会提供一种滚动机制。(False)

参数是 scroll 时候，必会出现滚动条。
参数是 auto 时候，子元素内容大于父元素时出现滚动条。
参数是 visible 时候，溢出的内容出现在父元素之外。
参数是 hidden 时候，溢出隐藏。

https://www.w3schools.com/css/css_overflow.asp

2. 新窗口打开网页，用到以下哪个值（\_self）。

在 html 中通过`<a>`标签打开一个链接，通过 `<a>` 标签的 target 属性规定在何处打开链接文档。如果在标签`<a>`中写入 target 属性，则浏览器会根据 target 的属性值去打开与其命名或名称相符的 框架`<frame>`或者窗口.在 target 中还存在四个保留的属性值如下

\_blank 在新窗口中打开被链接文档。
\_self 默认。在相同的框架中打开被链接文档。
\_parent 在父框架集中打开被链接文档。
\_top 在整个窗口中打开被链接文档。
framename 在指定的框架中打开被链接文档。

这些 target 的所有 4 个值都以下划线开始。任何其他用一个下划线作为开头的窗口或者目标都会被浏览器忽略，
因此，不要将下划线作为文档中定义的任何框架 name 或 id 的第一个字符。

3. 下面有关 jquery 事件的响应，描述错误的是？(
   onfocus 元素失去焦点
   )

正确:

onclick 鼠标点击某个对象
onload 是某个页面的 css js html 文档结构和图像被完全加载
onmousedown 某个鼠标按键被按下

4. flash 和 js 通过什么类如何交互? (
   ExternalInterface
   )

Flash 提供了 ExternalInterface 接口与 JavaScript 通信，ExternalInterface 有两个方法，call 和 addCallback，call 的作用是让 Flash 调用 js 里的方法，addCallback 是用来注册 flash 函数让 js 调用。

5. 下面有关 html5 标签说法错误的有？(
   `<canvas>` 比如来自一个外部的新闻提供者的一篇新的文章，或者来自 blog 的文本，或者是来自论坛的文本。亦或是来自其他外部源内容
   )

这里考察 HTML 标签的使用：
`<audio>` 标签定义声音，比如音乐或其他音频流。 A 正确。
`<canvas>` 标签定义图形，比如图表和其他图像。`<canvas>` 标签只是图形容器，您必须使用脚本来绘制图形。 B 错误，`<article>`标签定义外部的内容。比如来自一个外部的新闻提供者的一篇新的文章，或者来自 blog 的文本，或者是来自论坛的文本。亦或是来自其他外部源内容。

`<menu>` 标签定义命令的列表或菜单。`<menu>` 标签用于上下文菜单、工具栏以及用于列出表单控件和命令。 C 正确
command 元素表示用户能够调用的命令。`<command>`标签可以定义命令按钮，比如单选按钮、复选框或按钮。只有当 command 元素位于 menu 元素内时，该元素才是可见的。否则不会显示这个元素，但是可以用它规定键盘快捷键。 D 正确。

6. 下述有关 css 属性 position 的属性值的描述，说法错误的是？

正确答案: B 你的答案: B (正确)
static：没有定位，元素出现在正常的流中
fixed：生成绝对定位的元素，相对于父元素进行定位
relative：生成相对定位的元素，相对于元素本身正常位置进行定位。
absolute：生成绝对定位的元素，相对于 static 定位以外的第一个祖先元素进行定位。

CSS 中 Position 属性有四个可选值，它们分别是：static、absolute、fixed、relative。

position:static 　无定位
该属性值是所有元素定位的默认情况，在一般情况下，我们不需要特别的去声明它，但有时候遇到继承的情况，我们不愿意见到元素所继承的属性影响本身，从而可以用 position:static 取消继承，即还原元素定位的默认值。

position:absolute 　绝对定位
使用 position:absolute，能够很准确的将元素移动到你想要的位置，

position:fixed 　相对于窗口的固定定位
这个定位属性值是什么意思呢？元素的定位方式同 absolute 类似，但它的包含块是视区本身。在屏幕媒体如 WEB 浏览器中，元素在文档滚动时不会在浏览器视察中移动。例如，它允许框架样式布局。在页式媒体如打印输出中，一个固定元素会出现于第一页的相同位置。这一点可用于生成流动标题或脚注。我们也见过相似的效果，但大都数效果不是通过 CSS 来实现了，而是应用了 JS 脚本。
请特别注意，IE6 不支持 CSS 中的 position:fixed 属性。真的非常遗憾，要不然我们就可以试试这种酷酷的效果了。

position:relative 　相对定位
所谓相对定位到底是什么意思呢，是基于哪里的相对呢？我们需要明确一个概念，相对定位是相对于元素默认的位置的定位。既然是相对的，我们就需要设置不同的值来声明定位在哪里，top、bottom、left、right 四个数值配合，来明确元素的位置。

7. 下面有关浏览器中使用 js 跨域获取数据的描述，说法错误的是？

正确答案: A 你的答案: A (正确)
域名、端口相同，协议不同，属于相同的域
js 可以使用 jsonp 进行跨域
通过修改 document.domain 来跨子域
使用 window.name 来进行跨域

1CORS
CORS（Corss-Origin Resource Sharing,跨资源共享），基本思想是使用自定义的 HTTP 头部让浏览器与服务器进行沟通，从而决定请求或响应的成功或失败。即给请求附加一个额外的 Origin 头部，其中包含请求页面的源信息（协议、域名和端口），以便服务器根据这个头部决定是否给予响应。
2.document.domain
将页面的 document.domain 设置为相同的值，页面间可以互相访问对方的 JavaScript 对象。
注意：
不能将值设置为 URL 中不包含的域；
松散的域名不能再设置为紧绷的域名。 3.图像 Ping
var img=new Image();
img.onload=img.onerror=function(){
... ...
}
img.src="url?name=value";
请求数据通过查询字符串的形式发送，响应可以是任意内容，通常是像素图或 204 响应。
图像 Ping 最常用于跟踪用户点击页面或动态广告曝光次数。
缺点：
只能发送 GET 请求；
无法访问服务器的响应文本，只能用于浏览器与服务器间的单向通信。
4.Jsonp
var script=document.createElement("script");
script.src="url?callback=handleResponse";
document.body.insertBefore(script,document.body.firstChild);
JSONP 由两部分组成：回调函数和数据
回调函数是接收到响应时应该在页面中调用的函数，其名字一般在请求中指定。
数据是传入回调函数中的 JSON 数据。
优点：
能够直接访问响应文本，可用于浏览器与服务器间的双向通信。
缺点：
JSONP 从其他域中加载代码执行，其他域可能不安全；
难以确定 JSONP 请求是否失败。
5.Comet
Comet 可实现服务器向浏览器推送数据。
Comet 是实现方式：长轮询和流
短轮询即浏览器定时向服务器发送请求，看有没有数据更新。
长轮询即浏览器向服务器发送一个请求，然后服务器一直保持连接打开，直到有数据可发送。发送完数据后，浏览器关闭连接，随即又向服务器发起一个新请求。其优点是所有浏览器都支持，使用 XHR 对象和 setTimeout()即可实现。
流即浏览器向服务器发送一个请求，而服务器保持连接打开，然后周期性地向浏览器发送数据，页面的整个生命周期内只使用一个 HTTP 连接。
6.WebSocket
WebSocket 可在一个单独的持久连接上提供全双工、双向通信。
WebSocket 使用自定义协议，未加密的连接时 ws://；加密的链接是 wss://。
var webSocket=new WebSocket("ws://");
webSocket.send(message);
webSocket.onmessage=function(event){
var data=event.data;
... ....
}
注意：
必须给 WebSocket 构造函数传入绝对 URL；
WebSocket 可以打开任何站点的连接，是否会与某个域中的页面通信，完全取决于服务器；
WebSocket 只能发送纯文本数据，对于复杂的数据结构，在发送之前必须进行序列化 JSON.stringify(message))。
优点：
在客户端和服务器之间发送非常少的数据，减少字节开销。
