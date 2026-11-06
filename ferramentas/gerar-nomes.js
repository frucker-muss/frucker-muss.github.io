/* Extrai os nomes das pessoas de familia/arvore.html para assets/data/nomes.json,
   que alimenta a sugestão de digitação do painel de identificação do acervo.
   Rodar de novo sempre que a árvore ganhar nomes:  node ferramentas/gerar-nomes.js  */
var fs = require("fs");
var path = require("path");
var raiz = path.join(__dirname, "..");
var html = fs.readFileSync(path.join(raiz, "familia", "arvore.html"), "utf8");

var nomes = [];
var re = /nome:\s*(['"])([\s\S]*?)\1/g;
var m;
while ((m = re.exec(html)) !== null) {
  var n = m[2].replace(/\\'/g, "'").replace(/\s+/g, " ").trim();
  if (n && nomes.indexOf(n) < 0) nomes.push(n);
}
nomes.sort(function (a, b) { return a.localeCompare(b, "pt-BR"); });

var destino = path.join(raiz, "assets", "data", "nomes.json");
fs.writeFileSync(destino, JSON.stringify(nomes, null, 0) + "\n", "utf8");
console.log(nomes.length + " nomes escritos em assets/data/nomes.json");
