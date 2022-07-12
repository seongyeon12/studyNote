let text = "";

for (let i = 0; i < 10; i++) {
  if (i === 3) break;
  text = text + i;
}

console.log(text);

let text_2 = "";

for (let i = 0; i < 10; i++) {
  if (i === 3) continue;
  text_2 = text_2 + i;
}

console.log(text_2);

