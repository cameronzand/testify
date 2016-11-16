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

export { GildedRose };
