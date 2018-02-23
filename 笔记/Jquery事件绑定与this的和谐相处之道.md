# Jquery事件绑定与this的和谐相处之道


## 1. 给DOM元素添加onclick之类的属性
**首先不建议直接在HTML文档直接加入onclick属性，因不利于行为表现分离。**

```
	$("selector").attr("onclick", "changePhoto(this)");
	function changePhoto(that) {
		var orginSrc = $(that);
		//dosomething with this obj.
	}
```

**注意其中的`this`与`that`。**`changePhoto(this)`这里的`this`是把当前对象传递给函数。`function changePhoto(that){...}`这里的`that`可以换成其他变量，比如`啊`，但是不能用`this`来替代，切记。

## 2. 给DOM元素添加事件回调函数

```
	$("selector").click(function() {
		var orginSrc = $(this);
		//dosomething with this obj.
	})
```

代码中通过`$(this)`来取得当前DOM对象，Jquery的官方教程中这种方式出现最多，好理解，没什么可说的。

## 3. 给DOM元素添加事件监听函数

**推荐使用这种方法，结构清晰，逻辑明了**


```
	$("selector").on("click", changePhoto);
	function changePhoto() {
		var orginSrc = $(this);
		//dosomething with this obj.
	}
```
注意`$("selector").on("click", changePhoto)`中的回调函数是写的**变量名称**，千万不要画蛇添足，加了`()`。

**提出疑问**：方法三如何给函数传入参数？
