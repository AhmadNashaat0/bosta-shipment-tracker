import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

export const generatePDF = async (elementToPrintId: string) => {
  let element = document.getElementById(elementToPrintId);
  if (!element) return;

  const canvas = await html2canvas(element, {
    scale: 2,
    useCORS: true,
    logging: true,
    scrollY: -window.scrollY,
  });

  const data = canvas.toDataURL("image/png");
  const pdf = new jsPDF();

  const imgProperties = pdf.getImageProperties(data);
  const pdfWidth = pdf.internal.pageSize.getWidth();
  const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;

  // Check if content needs multiple pages
  if (pdfHeight > pdf.internal.pageSize.getHeight()) {
    let heightLeft = pdfHeight;
    let position = 0;
    let page = 1;

    while (heightLeft >= 0) {
      if (page > 1) {
        pdf.addPage();
      }

      pdf.addImage(data, "PNG", 0, position, pdfWidth, pdfHeight);
      heightLeft -= pdf.internal.pageSize.getHeight();
      position -= pdf.internal.pageSize.getHeight();
      page++;
    }
  } else {
    pdf.addImage(data, "PNG", 0, 0, pdfWidth, pdfHeight);
  }

  pdf.save("print.pdf");
};
