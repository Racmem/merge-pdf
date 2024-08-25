import PDFMerger from 'pdf-merger-js';
const merger = new PDFMerger();

const execute = async (pdfFiles, outPutFileName) => {
  for (const pdfFile of pdfFiles) {
    await merger.add(pdfFile);
  }

  let mergedFileName = `${outPutFileName}.pdf`;
  await merger.setMetadata({
    producer: 'pdf-merger-js based script',
    title: outPutFileName
  })

  await merger.save(`public/${mergedFileName}`);

  return mergedFileName;
}

export default execute;