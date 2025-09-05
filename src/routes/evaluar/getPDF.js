export async function markdown2df(aiResult) {
    const url = "https://markdown2pdf-jimenezc9356-5ygntx1e.leapcell.dev/markdown2pdf"
    const url2 = "http://localhost:8080/markdown2pdf"

    const markdownData = {
        markdownInput: aiResult
    };
    const data = new URLSearchParams(markdownData)

    const res = await fetch(url2, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: data.toString()
    });

    const pdfURL = await res.text();

    return pdfURL;
}