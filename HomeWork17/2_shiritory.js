let arr = ["word", "dowry", "yodel", "leader", "righteous", "serpent"];
class Shiritori {
  constructor(word) {
    this.word = word;
    this.words = [];
    this.over = false;
  }
  word() {
    return this.words;
  }
  restart() {
    this.words = [];
    this.over = false;
    return "game restarted";
  }

  play(word) {
    if (this.words.length === 0) {
      this.words.push(word);
      return this.words;
    }
    let lastWord = this.words[this.words.length - 1];
    let lastchar = lastWord[lastWord.length - 1];
    if (lastchar === word[0] && !this.words.includes(word)) {
      this.words.push(word);
      return this.words;
    }
    if (this.words.includes(word)) {
      this.over = true;
      return `invalid! - ${word} has already been said,`;
    }
    this.over = true;
    return `invalid! - beach should start with ${lastchar}`;
  }
  gameOver() {
    return this.over;
  }
}
let as = new Shiritori();
console.log(as.play("asdf"));
console.log(as.play("fags"));
console.log(as.play("asdf"));
console.log(as.gameOver());
