pdfjsLib.GlobalWorkerOptions.workerSrc =
  "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.6.347/pdf.worker.min.js";
const url = "./docs/pdf.pdf";
let pdfDoc = null,
  pageIsRendering = false,
  pageNum = 1,
  pageIsPending = null;
const scale = 1;
const canvas = document.querySelector("#pdf-render");
const ctx = canvas.getContext("2d");

const renderPage = (num) => {
  pageIsRendering = true;
  pdfDoc.getPage(num).then((page) => {
    const viewport = page.getViewport({ scale });
    canvas.height = viewport.height;
    canvas.width = viewport.width;
    const renderCtx = {
      canvasContext: ctx,
      viewport,
    };
    page.render(renderCtx).promise.then(() => {
      pageIsRendering = false;
      if (pageIsPending !== null) {
        renderPage(pageIsPending);
        pageIsPending = null;
      }
    });
    document.querySelector("#page-num").textContent = num;
  });
};

const queueRenderPage = (num) => {
  if (pageIsRendering) {
    pageIsPending = num;
  } else {
    renderPage(num);
  }
};

const showPrevPage = () => {
  if (!pdfDoc) return;
  if (pageNum <= 1) {
    return;
  }
  pageNum--;
  queueRenderPage(pageNum);
};

const showNextPage = () => {
  if (!pdfDoc) return;
  if (pageNum >= pdfDoc.numPages) {
    return;
  }
  pageNum++;
  queueRenderPage(pageNum);
};
pdfjsLib.getDocument(url).promise.then((pdfDoc_) => {
  pdfDoc = pdfDoc_;
  document.querySelector("#page-count").textContent = pdfDoc.numPages;
  renderPage(pageNum);
});
document.querySelector("#prev-page").addEventListener("click", showPrevPage);
document.querySelector("#next-page").addEventListener("click", showNextPage);
