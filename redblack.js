var Word = /** @class */ (function () {
    function Word(word, definition1, definition2, definition3) {
        this.word = word;
        this.definition1 = definition1;
        this.definition2 = definition2;
        this.definition3 = definition3;
    }
    Word.prototype.getDefinition1 = function () {
        return this.definition1;
    };
    Word.prototype.getDefinition2 = function () {
        return this.definition1;
    };
    Word.prototype.getDefinition3 = function () {
        return this.definition1;
    };
    Word.prototype.setDefinition2 = function (definition2) {
        this.definition2 = definition2;
    };
    Word.prototype.setDefinition3 = function (definition3) {
        this.definition3 = definition3;
    };
    return Word;
}());
//For Queue issues
var Nodo = /** @class */ (function () {
    function Nodo(value, next) {
        this.value = value;
        this.next = next;
    }
    return Nodo;
}());
var Queue = /** @class */ (function () {
    function Queue() {
        this.first = null;
        this.last = null;
    }
    Queue.prototype.isEmpty = function () {
        return this.first === null;
    };
    Queue.prototype.size = function () {
        return this.n;
    };
    Queue.prototype.push = function (item) {
        var beforeLast = this.last;
        this.last = new Nodo(item, null);
        if (this.isEmpty) {
            this.first = this.last;
        }
        else {
            beforeLast.next = this.last;
        }
        this.n++;
    };
    Queue.prototype.pop = function () {
        if (this.isEmpty) {
            console.log("Without elements wuwuwuwuwuw");
        }
        var item = this.first.value;
        this.first = this.first.next;
        this.n--;
        if (this.isEmpty) {
            this.last = null;
        }
        return item;
    };
    return Queue;
}());
//For RedBlack Tree issues
var Nodot = /** @class */ (function () {
    function Nodot(key, val, color, n) {
        this.left = null;
        this.right = null;
        this.key = key;
        this.val = val;
        this.color = color;
        this.n = n;
    }
    return Nodot;
}());
var RedBlack = /** @class */ (function () {
    function RedBlack() {
        this.root = null;
    }
    RedBlack.prototype.isRed = function (x) {
        if (x === null) {
            return false;
        }
        return (x.color === RedBlack.RED);
    };
    RedBlack.prototype.sizeTree = function (x) {
        if (x === null) {
            return 0;
        }
        return x.n;
    };
    RedBlack.prototype.isEmptyT = function () {
        return (this.root === null);
    };
    RedBlack.prototype.obtainVal = function (x, key) {
        while (x != null) {
            var cmp = key.localeCompare(x.key);
            if (cmp < 0) {
                x = x.left;
            }
            else if (cmp > 0) {
                x = x.right;
            }
            else {
                return x.val;
            }
        }
    };
    RedBlack.prototype.obtainValue = function (key) {
        return this.obtainVal(this.root, key);
    };
    RedBlack.prototype.contain = function (key) {
        return this.obtainValue(key) != null;
    };
    RedBlack.prototype.insert2 = function (h, key, val) {
        if (h === null) {
            return new Nodot(key, val, RedBlack.RED, 1);
        }
        var cmp = key.localeCompare(h.key);
        if (cmp < 0) {
            h.left = this.insert2(h.left, key, val);
        }
        else if (cmp > 0) {
            h.right = this.insert2(h.right, key, val);
        }
        else {
            h.val = val;
        }
        if (this.isRed(h.right) && !this.isRed(h.left)) {
            h = this.swapLeft(h);
        }
        if (this.isRed(h.left) && this.isRed(h.left.left)) {
            h = this.swapRight(h);
        }
        if (this.isRed(h.left) && this.isRed(h.right)) {
            this.changeColor(h);
        }
        h.n = this.sizeTree(h.left) + this.sizeTree(h.right) + 1;
        return h;
    };
    RedBlack.prototype.insert = function (key, val) {
        this.root = this.insert2(this.root, key, val);
        this.root.color = RedBlack.BLACK;
    };
    RedBlack.prototype.swapRight = function (h) {
        var x = h.left;
        h.left = x.right;
        x.right = h;
        x.color = h.color;
        h.color = RedBlack.RED;
        return x;
    };
    RedBlack.prototype.swapLeft = function (h) {
        var x = h.right;
        h.right = x.left;
        x.left = h;
        x.color = h.color;
        h.color = RedBlack.RED;
        return x;
    };
    RedBlack.prototype.changeColor = function (h) {
        h.color = !h.color;
        h.left.color = !h.left.color;
        h.right.color = !h.right.color;
    };
    RedBlack.RED = true;
    RedBlack.BLACK = false;
    return RedBlack;
}());
//JavaScript code

//inserting keys into the three
let redblackTree = new RedBlack();
console.log(redblackTree);
redblackTree.insert("diccionario", new Word("diccionario", "Reper", null, null));
console.log("asda");
redblackTree.insert("auto", new Word("auto", "defi de auto22", "defi 3333", "defi4444"));

redblackTree.insert("carro", new Word("carro", "defi de carro22", "defi carrr3333", "deficarrr4444"));


//Get text
function getText() {
    let txt_word = document.getElementById("text_Word").value;
    console.log(txt_word);
    showResults(txt_word);
}

//Where everything happens
function showResults(txt) {
    let word;
    let defi1;
    let defi2;
    let defi3;

    if (!redblackTree.contain(txt)) {
        document.getElementById("word").innerHTML = "No se encontraron resultados.";
        document.getElementById("visible").className += " d-none";
    } else {
        let nodex = redblackTree.obtainValue(txt);
        
        word = nodex.word;
        defi1 = nodex.definition1;
        defi2 = nodex.definition2;
        defi3 = nodex.definition3;

        if (defi2 === undefined || defi2 === null) {
            console.log(document.getElementById("d2"));
            document.getElementById("d2").className = "mb-5 d-none";
            
        }
        else{
            document.getElementById("d2").className = "mb-5 d-block";
        }
        if (defi3 === undefined || defi2 === null) {
            console.log(document.getElementById("d3"));
            document.getElementById("d3").className = "mb-5 d-none";
        }else{
            document.getElementById("d3").className = "mb-5 d-block";
        }

        document.getElementById("word").innerHTML = word;
        document.getElementById("def1").innerHTML = defi1;
        document.getElementById("def2").innerHTML = defi2;
        document.getElementById("def3").innerHTML = defi3;
    }

}