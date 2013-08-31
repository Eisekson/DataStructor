var Stack = (function () {
    function Stack() {
        this.st = [];
        this.length = 0;
    }
    Stack.prototype.push = function (data) {
        this.st.push(data);
        this.length++;
    };

    Stack.prototype.pop = function () {
        if (!this.empty()) {
            this.length--;
            return this.st.pop();
        }
    };

    Stack.prototype.empty = function () {
        if (this.length == 0) {
            return true;
        } else {
            return false;
        }
    };

    Stack.prototype.size = function () {
        return this.length;
    };

    Stack.prototype.showAll = function () {
        var str = 'stack   ';
        for (var i = 0; i < this.st.length; i++) {
            str += this.st[i] + ',';
        }
        console.log(str);
    };
    Stack.prototype.top = function () {
        if (this.empty()) {
            return null;
        }
        return this.st[this.length - 1];
    };
    return Stack;
})();

var st = new Stack();
console.log('hllo.');
st.push(5);
st.push(6);
st.pop();
st.pop();
st.pop();
st.push(4);
st.push(2);
console.log(st.top());
