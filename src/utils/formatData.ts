export default function formatarData(data: any) {
  const dataObj = new Date(data);
  const dia = String(dataObj.getDate()).padStart(2, "0");
  const mes = String(dataObj.getMonth() + 1).padStart(2, "0");
  const ano = dataObj.getFullYear();
  return `${dia}/${mes}/${ano}`;
}

const dataOriginal = "2023-10-01T00:00:00.000Z";
const dataFormatada = formatarData(dataOriginal);
console.log(dataFormatada); // Saída: "01/10/2023"
