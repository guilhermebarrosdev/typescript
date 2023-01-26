// Corrigir erros de sintaxe da função abaixo
// function normalizarTexto(texto) {
//   return texto.trims().toLowercase();
// }

function normalizarTexto(texto: string) {
  return texto.trim().toLowerCase();
}

console.log(normalizarTexto(' TYPEsCrIpT')); // 'typescript'
