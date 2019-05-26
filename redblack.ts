class Word {
  private word: string;
  private definition1: string;
  private definition2: string;
  private definition3: string;

  constructor(word: string, definition1: string, definition2: string, definition3: string) {
    this.word = word;
    this.definition1 = definition1;
    this.definition2 = definition2;
    this.definition3 = definition3;
  }

  public getDefinition1(): string {
    return this.definition1;
  }

  public getDefinition2(): string {
    return this.definition1;
  }

  public getDefinition3(): string {
    return this.definition1;
  }

  public setDefinition2(definition2: string): void {
    this.definition2 = definition2;
  }

  public setDefinition3(definition3: string): void {
    this.definition3 = definition3;
  }
}


//For Queue issues
class Nodo<Type>{
  public value: Type;
  public next: Nodo<Type>;
  constructor(value: Type, next: any) {
    this.value = value;
    this.next = next;
  }
}

class Queue<Type>{
  private n: number;
  private first: Nodo<Type> | null;
  private last: Nodo<Type> | null;

  constructor() {
    this.first = null;
    this.last = null;
  }

  public isEmpty(): boolean {
    return this.first === null;
  }

  public size(): number {
    return this.n;
  }

  public push(item: Type): void {
    let beforeLast: Nodo<Type> = this.last;
    this.last = new Nodo<Type>(item, null);

    if (this.isEmpty) {
      this.first = this.last;
    } else {
      beforeLast.next = this.last;
    }
    this.n++;

  }

  public pop(): null | Type {
    if (this.isEmpty) {
      console.log("Without elements wuwuwuwuwuw");
    }
    let item: Type = this.first.value;
    this.first = this.first.next;
    this.n--;
    if (this.isEmpty) {
      this.last = null;
    }
    return item;
  }
}

//For RedBlack Tree issues
class Nodot {
  public key: string;
  public val: Word;
  public left: Nodot;
  public right: Nodot;
  public color: boolean;
  public n: number;

  constructor(key: string, val: Word, color: boolean, n: number) {
    this.key = key;
    this.val = val;
    this.color = color;
    this.n = n;
  }

}

class RedBlack {
  private static RED: boolean = true;
  private static BLACK: boolean = false;

  private root: Nodot;

  private isRed(x: Nodot): boolean {
    if (x === null) {
      return false;
    }
    return (x.color === RedBlack.RED);
  }

  private sizeTree(x: Nodot): number {
    if (x === null) {
      return 0;
    }
    return x.n;
  }

  public isEmptyT(): boolean {
    return (this.root === null);
  }

  private obtainVal(x: Nodot, key: String): Word {
    while (x != null) {
      let cmp: number = key.localeCompare(x.key);
      if (cmp < 0) {
        x = x.left;

      } else if (cmp > 0) {
        x = x.right;

      } else {
        return x.val;
      }
    }
  }

  public obtainValue(key: string): Word {
    return this.obtainVal(this.root, key);
  }

  public contain(key: string): boolean {
    return this.obtainValue(key) != null;
  }

  private insert2(h:Nodot,key:string,val: Word):Nodot{
    if (h === null) {
        return new Nodot(key,val,RedBlack.RED,1);
    }

    let cmp = key.localeCompare(h.key);
    if(cmp<0){
      h.left = this.insert2(h.left,key,val);
    }else if(cmp >0){
      h.right = this.insert2(h.right, key, val);
    }else{
      h.val = val;
    }

    if(this.isRed(h.right) && !this.isRed(h.left)){
      h = this.swapLeft(h);
    }

    if(this.isRed(h.left) && this.isRed(h.left.left)){
      h = this.swapRight(h);
    }

    if(this.isRed(h.left) && this.isRed(h.right)){
      this.changeColor(h);
    }

    h.n = this.sizeTree(h.left) + this.sizeTree(h.right)+1;
    return h;
  }

  public insert(key:string, val:Word): void {
    this.root = this.insert2(this.root,key,val);
    this.root.color = RedBlack.BLACK;
  }

  private swapRight(h:Nodot):Nodot{
    let x:Nodot = h.left;
    h.left = x.right;
    x.right = h;
    x.color = h.color;
    h.color = RedBlack.RED;
    return x;
  }

  private swapLeft(h:Nodot):Nodot{
    let x:Nodot = h.right;
    h.right = x.left;
    x.left = h;
    x.color = h.color;
    h.color = RedBlack.RED;
    return x;
  }

  private changeColor(h: Nodot):void{
    h.color = !h.color;
    h.left.color = !h.left.color;
    h.right.color = !h.right.color;
  }
}
