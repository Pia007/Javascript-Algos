// Set the rome url
const url = 'pdf/Rome.pdf';
// Set the pdf page number
let pdfDoc = null,
    // Set the  start page number
    pageNum = 1,
    // Set default state of page rendering
    pageIsRendering = false,
    // Set the page rendering if the doc has more than one page
    pageNumIsPending = null,
    // set zoom
    zoom = 1;
// Set the size
const scale = zoom,
    // get the rome canvas to the html canvas
    canvas = document.querySelector('#rome-pdf-render'),
    // get the content of the rome page
    ctx = canvas.getContext('2d');

// Render the page
const renderPage = num => {
    //set rendering state to true
    pageIsRendering = true;

    // get the page
    pdfDoc.getPage(num).then(page => {
        // console.log(page);

        // Set the canvas height and width
        const viewport = page.getViewport({ scale });
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        const renderCtx = {
            canvasContext: ctx,
            viewport
        }
        // Render the page contents in the canvas
        page.render(renderCtx).promise.then(() => {
            //page is done rendering
            pageIsRendering = false;

            // if another page has been queued
            if(pageNumIsPending !== null) {
                // render the page and show the number
                renderPage(pageNumIsPending);
                pageNumIsPending = null;
            }
        });

        // Output the current page
        document.querySelector('#page-num').textContent = num;
    });

}

// check for pages rendering
const queueRenderPage = num => {
    if(pageIsRendering) {
        pageNumIsPending = num;
    } else {
        renderPage(num);
    }
}

//show the previous page
const showPrevPage = () => {
    if(pageNum <= 1) {
        return;
    }
    pageNum--;
    queueRenderPage(pageNum);
}
//show the next page
const showNextPage = () => {
    // is it greater than the total pages
    if(pageNum >= pdfDoc.numPages) {
        return;
    }
    pageNum++;
    queueRenderPage(pageNum);
}

const zoomIn = () => {  
    if(pdfDoc == null) {
        zoom += 0.1;
        // renderPage(pageNum);
    }
}
const zoomOut = () => {
    if(pdfDoc == null){
        zoom-= 0.1;
    }   
    
}

// Get the Document
pdfjsLib.getDocument(url).promise.then(pdfDoc_ => {
    pdfDoc = pdfDoc_;
    
    // check the pdf
    console.log(pdfDoc);
    // Display the total number of pages    
    document.getElementById('page-count').textContent = pdfDoc.numPages;
    // Call render page function
    renderPage(pageNum);
})
    .catch(err => {
        // display error
        const div = document.createElement('div');
        div.className = 'error';
        div.appendChild(document.createTextNode(err.message));
        document.querySelector('.rome-pdf-content').insertBefore(div, canvas);
        // remove topbar
        document.querySelector('.topbar').style.display = 'none';
    });

// Button event listeners
document.querySelector('#prev-page').addEventListener('click', showPrevPage);
document.querySelector('#next-page').addEventListener('click', showNextPage);
document.querySelector('#zoom-in').addEventListener('click', zoomIn);
document.querySelector('#zoom-out').addEventListener('click', zoomOut); 
