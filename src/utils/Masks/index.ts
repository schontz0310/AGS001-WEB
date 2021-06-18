/* eslint-disable no-useless-escape */
export function mascaraCnpj(valor: string) {
  return valor.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g,"\$1.\$2.\$3\/\$4\-\$5");
}
