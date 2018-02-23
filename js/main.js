/*购物车，兼容ie9placeholder*/
function addPlaceholder(ele, holderColor, realColor) {
  // var isSupport = 'placeholder' in document.createElement('input');
  // if(isSupport) return false;
  var value = ele.val();
  var holder = ele.attr('placeholder');
  if(!value) ele.val(holder);
  if(ele.val() == holder) ele.css('color', holderColor);
  ele.on('focus', function() {
    if(this.value == holder){
      this.value = '';
      ele.css('color', realColor);
    }else{
      return false;
    }
  })
  ele.on('blur', function() {
    if (this.value) return false;
    this.value = holder;
    ele.css('color', holderColor);
  })
}
//为IE9添加placeholder支持
/*购物车*/
(function() {
  var isSupport = 'placeholder' in document.createElement('input');
  if(isSupport) return false;
  $("[type = 'text']").each(function(index, element) {
   addPlaceholder($(this), '#767676', '#000')
  });
 })();

 /*注册页面*/
(function() {
  var isSupport = 'placeholder' in document.createElement('input');
  if(isSupport) return false;
  $(".sign-up-area #name").addPlaceholder($(this), '#767676', '#000')
 })();
