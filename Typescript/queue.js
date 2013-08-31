var Queue = (function () {
    function Queue() {
        this.qu = [];
        this.length = 0;
    }
    /**是否為空*/
    Queue.prototype.empty = function () {
        if (this.length == 0) {
            console.log("is empty.");
            return true;
        } else {
            console.log("is not empty.");
            return false;
        }
    };

    /**回傳佇列的大小*/
    Queue.prototype.size = function () {
        console.log("Queue size is " + this.length);
        return this.length;
    };

    /**回傳佇列第一個數字*/
    Queue.prototype.front = function () {
        console.log("front is " + this.qu[0]);
        return this.qu[0];
    };

    /**回傳佇列最後一個數字*/
    Queue.prototype.back = function () {
        console.log(this.qu[this.qu.length - 1]);
        return this.qu[this.qu.length - 1];
    };

    /**放入data*/
    Queue.prototype.push = function (data) {
        this.showQue();
        this.qu.push(data);
    };

    /***/
    Queue.prototype.pop = function () {
        if (this.empty()) {
            return null;
        } else {
            this.showQue();
            this.length--;
            return this.qu.shift();
        }
    };
    Queue.prototype.showQue = function () {
        var str = 'Queue is ';
        for (var i = 0; i < this.qu.length; i++) {
            str += this.qu[i] + ' ';
        }
        console.log(str);
    };
    return Queue;
})();

var qu = new Queue();

qu.push(1);
qu.push(2);
qu.push(4);
qu.back();
qu.front();
qu.size();
