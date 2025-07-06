import { jsPDF } from "jspdf";

export default async function generatePDF({ industry, goal, problem, cost, price_and_timeline, image_url }) {
  const doc = new jsPDF();
  doc.setFont("Helvetica", "normal");
  doc.setFontSize(12);
  doc.text("WieSie – Produkvoorstel", 20, 20);
  doc.text(`Industrie: ${industry}`, 20, 30);
  doc.text(`Doel: ${goal}`, 20, 38);
  doc.text(`Probleem: ${problem}`, 20, 46);
  doc.text(`Maak-koste: ${cost}`, 20, 54);
  doc.text(`Verkoopprys & Tyd: ${price_and_timeline}`, 20, 62);

  const img = new Image();
  img.src = image_url;
  await new Promise(resolve => img.onload = resolve);
  doc.addImage(img, "JPEG", 20, 75, 160, 90);

  const pdfBlob = doc.output("blob");
  return { pdf_url: URL.createObjectURL(pdfBlob) };
}
