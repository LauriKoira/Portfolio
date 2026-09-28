// Syntymäpäivä. HUOM: JavaScriptissä kuukaudet alkavat nollasta,
// eli 0 = tammikuu, 4 = toukokuu, 11 = joulukuu.
const syntymapaiva = new Date(2005, 4, 15); // 15.5.2005

function laskeIka(syntyma) {
  const tanaan = new Date();
  let ika = tanaan.getFullYear() - syntyma.getFullYear();

  // Jos tämän vuoden syntymäpäivä ei ole vielä tullut, vähennetään yksi
  const kuukausiEro = tanaan.getMonth() - syntyma.getMonth();
  if (kuukausiEro < 0 || (kuukausiEro === 0 && tanaan.getDate() < syntyma.getDate())) {
    ika--;
  }

  return ika;
}

// Kirjoitetaan ikä sivulle
document.getElementById("ika").textContent = laskeIka(syntymapaiva);

// Bonus: vuosiluku alatunnisteeseen päivittyy myös automaattisesti
document.getElementById("vuosi").textContent = new Date().getFullYear();