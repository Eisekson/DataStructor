var Stack = (function () {
    function Stack() {
        this.value = [];
        this.length = 0;
    }
    Stack.prototype.push = function (value) {
        this.value.push(value);
        this.length++;
        console.log('push ' + value);
    };

    Stack.prototype.pop = function () {
        if (this.empty()) {
            console.log('pop null');
            return null;
        } else {
            console.log('pop ' + this.top());
            this.length--;
            return this.value.pop();
        }
    };

    Stack.prototype.size = function () {
        console.log('size ' + this.length);
        return this.length;
    };

    Stack.prototype.empty = function () {
        if (this.length == 0) {
            console.log('empty');
            return true;
        }
        console.log('not empty');
        return false;
    };

    Stack.prototype.top = function () {
        if (this.empty()) {
            return null;
        } else {
            console.log('top ' + this.value[this.value.length - 1]);
            return this.value[this.value.length - 1];
        }
    };
    return Stack;
})();

var st = new Stack();

st.push(1);
st.pop();
st.pop();
st.push(1);
st.push(2);
st.size();
st.top();
