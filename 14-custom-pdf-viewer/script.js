const url = "./docs/pdf.pdf";
let pdfDoc = null,
  pageIsRendering = false,
  pageNum = 1,
  PageIsPending = null;
const scale = 1,
  canvas = document.querySelector("#pdf-render");
ctx = canvas.getContext("2d");

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
      if (PageIsPending !== null) {
        renderPage(PageIsPending);
        PageIsPending = null;
      }
    });
    document.querySelector("#page-num").textContent = num;
  });
};

const queueRenderPage = (num) => {
  if (pageIsRendering) {
    PageIsPending = num;
  } else {
    renderPage(num);
  }
};

const showPrevPage = () => {
  if (pageNum <= 1) {
    return;
  }
  pageNum--;
  queueRenderPage(pageNum);
};

const showNextPage = () => {
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
