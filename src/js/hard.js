class GildedRose {
  constructor (sellIn, quality, name) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }

  tick () {
    if (this.name === "Conjured Mana Cake"){
      this.conjured();
    } else if (this.name === "Aged Brie"){
      this.agedBrie();
    } else if (this.name === "Sulfuras, Hand of Ragnaros"){
      this.sulfuras();
    } else if (this.name === "Backstage passes to a TAFKAL80ETC concert"){
      this.backstage();
    } else if (this.name === "normal"){
      this.normal();
    }


}

  conjured () {
    this.sellIn--;
    if (this.sellIn > 0){
      this.quality = this.quality - 2;
    } 

    else (this.sellIn < 0){
      this.quality = 0;
    }
  }

    agedBrie () {
      this.sellIn--;
      if (this.sellIn > 0){
        this.quality = this.quality + 1;

      } else if ( this.sellIn < 0){
        this.quality = this.quality + 2;
      }

    }
    // sulfuras() {


    // }


  }


export { GildedRose };
