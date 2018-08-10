if (!Function.prototype.bind) {

    Function.prototype.bind = function(oThis) {

        // 如果调用bind方法的不是上下文不是一个函数，则抛出异常
        if (typeof this !== 'function') {
            
            // closest thing possible to the ECMAScript 5
            // internal IsCallable function
            throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');
        }

        // 返回除去第一个参数的数组aArgs
        var aArgs   = Array.prototype.slice.call(arguments, 1),

            // 调用bind方法的上下文
            fToBind = this,
            fNOP    = function() {},
            fBound  = function() {

                // 如果 bind 得到的函数用作构造函数（带 new 关键字使用）, 则 bind 不生效
                // this instanceof fNOP ? this : oThis || this
                // 判断返回的新函数是否当成构造函数来使用
                // 若当成构造函数来使用，则返回原函数（绑定前）的this上下文，即bind不生效
                // 若当成普通函数来使用，则返回欲绑定的作用域（bind方法传入的第一个参数）
                return fToBind.apply(this instanceof fNOP ? this : oThis || this,
                                    // 每次都要用slice方法把arguments转化为数组
                                    aArgs.concat(Array.prototype.slice.call(arguments)));
            };

        // 返回的新函数（绑定后）继承原函数（绑定前），原型继承
        fNOP.prototype = this.prototype;
        fBound.prototype = new fNOP();

        return fBound;
    };
}