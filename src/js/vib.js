const vibes = [
  "...you are awesome!",
  "...have a wonderful day!",
  "...you've got this!",
  "...and so this is puppy 🐶",
];

var vibe = vibes[Math.floor(Math.random() * Math.floor(vibes.length))];

document.querySelector(".vibe").append(vibe);
