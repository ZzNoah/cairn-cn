roll = (d) => {
  return Math.floor(Math.random()*d)+1;
};
const armor = generate_text("armor");
const helmet = generate_text("helmet");
const tool = generate_text("tool");
const gear = generate_text("gear");
const trinket = generate_text("trinket");
const weapons = generate_text("weapons");
const bonus = generate_text("bonus");

let allItems = [];
allItems.push(armor, helmet, weapons, gear, tool, trinket, bonus);
let total = 2;
for (let i = 0; i < allItems.length; i++) {
  let item = allItems[i];
  if (item.includes("笨重") || item.includes("及")) {
    total += 2;
  } else if (total > 10){
    total = 10;
  } else if (!item.includes("无上身防具") && (!item.includes("或") && (!item.includes("叠放")))) {
    total++;
  }
}

let armorTotal = 0;
let armorValue = [];
armorValue.push(armor, helmet);
armorValue.forEach((item) => {
  if (item.includes("1")) {
    armorTotal++;
  } if (armorTotal > 3){
      armorTotal = 3;
  } else if (item.includes("2")) {
    armorTotal += 2;
  } else if (item.includes("3")) {
    armorTotal += 3;
  }
});

console.log(total);
$("#character").html(generate_text("character"));
$("#age").html(roll(20) + roll(20) + 10);
$("#hp").html(roll(6));
["str", "dex", "wil"].forEach((item, i) => {
$("#" + item).html(roll(6) + roll(6) + roll(6));});
$("#armor").html(armor);
$("#helmet").html(helmet);
$("#weapons").html(weapons);
$("#tool").html(tool);
$("#gear").html(gear);
$("#trinket").html(trinket);
$("#bonus").html(bonus);
$("#armorTotal").html(armorTotal);
$("#total").html(total);
$("#gold").html(roll(6) + roll(6) + roll(6));
