var Word = /** @class */ (function() {
  function Word(word, definition1, definition2, definition3) {
    this.word = word;
    this.definition1 = definition1;
    this.definition2 = definition2;
    this.definition3 = definition3;
  }
  Word.prototype.getDefinition1 = function() {
    return this.definition1;
  };
  Word.prototype.getDefinition2 = function() {
    return this.definition1;
  };
  Word.prototype.getDefinition3 = function() {
    return this.definition1;
  };
  Word.prototype.setDefinition2 = function(definition2) {
    this.definition2 = definition2;
  };
  Word.prototype.setDefinition3 = function(definition3) {
    this.definition3 = definition3;
  };
  return Word;
}());
//For Queue issues
var Nodo = /** @class */ (function() {
  function Nodo(value, next) {
    this.value = value;
    this.next = next;
  }
  return Nodo;
}());
var Queue = /** @class */ (function() {
  function Queue() {
    this.first = null;
    this.last = null;
  }
  Queue.prototype.isEmpty = function() {
    return this.first === null;
  };
  Queue.prototype.size = function() {
    return this.n;
  };
  Queue.prototype.push = function(item) {
    var beforeLast = this.last;
    this.last = new Nodo(item, null);
    if (this.isEmpty) {
      this.first = this.last;
    } else {
      beforeLast.next = this.last;
    }
    this.n++;
  };
  Queue.prototype.pop = function() {
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
var Nodot = /** @class */ (function() {
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
var RedBlack = /** @class */ (function() {
  function RedBlack() {
    this.root = null;
  }
  RedBlack.prototype.isRed = function(x) {
    if (x === null) {
      return false;
    }
    return (x.color === RedBlack.RED);
  };
  RedBlack.prototype.sizeTree = function(x) {
    if (x === null) {
      return 0;
    }
    return x.n;
  };
  RedBlack.prototype.isEmptyT = function() {
    return (this.root === null);
  };
  RedBlack.prototype.obtainVal = function(x, key) {
    while (x != null) {
      var cmp = key.localeCompare(x.key);
      if (cmp < 0) {
        x = x.left;
      } else if (cmp > 0) {
        x = x.right;
      } else {
        return x.val;
      }
    }
  };
  RedBlack.prototype.obtainValue = function(key) {
    return this.obtainVal(this.root, key);
  };
  RedBlack.prototype.contain = function(key) {
    return this.obtainValue(key) != null;
  };
  RedBlack.prototype.insert2 = function(h, key, val) {
    if (h === null) {
      return new Nodot(key, val, RedBlack.RED, 1);
    }
    var cmp = key.localeCompare(h.key);
    if (cmp < 0) {
      h.left = this.insert2(h.left, key, val);
    } else if (cmp > 0) {
      h.right = this.insert2(h.right, key, val);
    } else {
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
  RedBlack.prototype.insert = function(key, val) {
    this.root = this.insert2(this.root, key, val);
    this.root.color = RedBlack.BLACK;
  };
  RedBlack.prototype.swapRight = function(h) {
    var x = h.left;
    h.left = x.right;
    x.right = h;
    x.color = h.color;
    h.color = RedBlack.RED;
    return x;
  };
  RedBlack.prototype.swapLeft = function(h) {
    var x = h.right;
    h.right = x.left;
    x.left = h;
    x.color = h.color;
    h.color = RedBlack.RED;
    return x;
  };
  RedBlack.prototype.changeColor = function(h) {
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
redblackTree.insert("diccionario", new Word("diccionario", "Repertorio en forma de libro o en soporte electróncio en el que se recogen, según un orden determinado, las palabras o expresiones de una o más lenguas,o de una materia concreta, acompañadas de su definición, equivalencia o explicación."," Catálogo de noticias o datos de un mismo género, ordenado alfabéticamente.","Obra de consulta en que se recoge y se define o traduce, generalmente en orden alfabético, un conjunto de palabras de una o más lenguas o de una materia determinada."));
redblackTree.insert("estructura", new Word("estructura", "Disposición o modo de estar relacionadas las distintas partes de un conjunto", "Distribución y orden de las partes importantes de un edificio.", "istribución y orden con que está compuesta una obra de ingenio, como un poema, una historia, etc."));
redblackTree.insert("dato", new Word("dato", "Información sobre algo concreto que permite su conocimiento exacto o sirve para deducir las consecuencias derivadas de un hecho.", "Documento, testimonio, fundamento.", "Información dispuesta de manera adecuada para su tratamiento por una computadora."));
redblackTree.insert("árbol", new Word("árbol", "Planta perenne, de tronco leñoso y elevado, que se ramifica a cierta altura del suelo.", "Pieza de hierro en la parte superior del husillo de la prensa de imprimir."", null));
redblackTree.insert("cultura", new Word("cultura", "Conjunto de conocimientos que permite a alguien desarrollar su juicio crítico.", "Conjunto de modos de vida y costumbres, conocimientos y grado de desarrollo artístico, científico, industrial, en una época, grupo social, etc.", null));
redblackTree.insert("amor", new Word("amor", "Sentimiento intenso del ser humano que, partiendo de su propia insuficiencia, necesita y busca el encuentro y unión con otro ser.", "Sentimiento de afecto, inclinación y entrega a alguien o algo.", null));
redblackTree.insert("paradigma", new Word("paradigma", "Ejemplo o ejemplar.", "Relación de elementos que comparten un mismo contexto fonológico, morfológico o sintáctico en función de sus propiedades lingüísticas.", null));
redblackTree.insert("manzana", new Word("manzana", "Fruto del manzano", "Relación de elementos que comparten un mismo contexto fonológico, morfológico o sintáctico en función de sus propiedades lingüísticas.", null));
redblackTree.insert("casa", new Word("casa", "Edificio para habitar.", "Edificio de una o pocas plantas destinado a vivienda unifamiliar, en oposición a piso.", null));
redblackTree.insert("sonido", new Word("sonido", "Sensación producida en el órgano del oído por el movimiento vibratorio de los cuerpos, transmitido por un medio elástico, como el aire.", "Significación y valor literal que tienen en sí las palabras.", "Noticia, fama."));
redblackTree.insert("procastinar", new Word("procastinar", "Diferir, aplazar.", null, null));
redblackTree.insert("democracia", new Word("democracia", "Forma de gobierno en la que el poder político es ejercido por los ciudadanos.", null, null));
redblackTree.insert("conciencia", new Word("conciencia", "Conocimiento del bien y del mal que permite a la persona enjuiciar moralmente la realidad y los actos, especialmente los propios.", "Sentido moral o ético propios de una persona.", "Conocimiento espontáneo y más o menos vago de una realidad."));
redblackTree.insert("sistema", new Word("sistema", "Conjunto de reglas o principios sobre una materia racionalmente enlazados entre sí.", "Conjunto de cosas que relacionadas entre sí ordenadamente contribuyen a determinado objeto.", null));
redblackTree.insert("software", new Word("software", "Conjunto de cosas que relacionadas entre sí ordenadamente contribuyen a determinado objeto.", null, null));

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
      document.getElementById("d2").className = "mb-5 d-none";

    } else {
      document.getElementById("d2").className = "mb-5 d-block";
    }
    if (defi3 === undefined || defi2 === null) {
      document.getElementById("d3").className = "mb-5 d-none";
    } else {
      document.getElementById("d3").className = "mb-5 d-block";
    }

    document.getElementById("word").innerHTML = word;
    document.getElementById("def1").innerHTML = defi1;
    document.getElementById("def2").innerHTML = defi2;
    document.getElementById("def3").innerHTML = defi3;
  }

}
