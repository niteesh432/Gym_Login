function Main() {
    const formData = JSON.parse(localStorage.getItem('formData'));
    /* console.log("Retrieved form data:", formData); */
    function printpage() {

        document.getElementById("print-btn").style.display = 'none';
        var fileName = '20241226399838' + ".pdf";
        html2canvas(document.getElementById('print-pdf'), {
            onrendered: function(canvas) {
                var data = canvas.toDataURL();
                var docDefinition = {
                    content: [{
                        image: data,
                        width: 500,
                    }]
                };
                pdfMake.createPdf(docDefinition).download(fileName);
            }
        });
    }
    function formatReferenceNumber() {
        const today = new Date()
        const year = today.getFullYear()
        const month = today.getMonth() + 1
        const date = today.getDate()
        const randomNumber = Math.floor((Math.random()*1000000)+1)
        console.log(randomNumber)
        const formattedReferenceNumber = `${year}${month}${date}${randomNumber}`
        console.log(formattedReferenceNumber)
        return formattedReferenceNumber
    }
    return (
        <div id="print-table">
            <div
                className="card1"
                style={{ width: "600px", margin: "0 auto" }}
                id="print-pdf"
            >
                <div className="logo text-center">
                    <img
                        src="https://cdn.gitam.edu/images/logo/gitam-new-logo.png"
                        className="gitam-logo-1"
                        height="50"
                        alt="Gitam New Logo"
                    />
                    <h3 className="head">Reservation Information</h3>
                </div>
                <table
                    className="m17 jb jb1 table table-bordered"
                    style={{ width: "100%" }}
                >
                    <tbody>
                        <tr>
                            <th>Stadium</th>
                            <td>Fitness Centre (Uni Sex)</td>
                        </tr>
                        <tr>
                            <th>Playground</th>
                            <td>UniSex Fitness Centre</td>
                        </tr>
                        <tr>
                            <th>Court</th>
                            <td>court 1</td>
                        </tr>
                        <tr>
                            <th>Applicant Name</th>
                            <td>
                                <img src="" alt="User" className="user-img" />
                                {formData.ApplicantName}
                            </td>
                        </tr>
                        <tr>
                            <th>Applicant Department</th>
                            <td>CSE</td>
                        </tr>
                        <tr>
                            <th>Applicant Campus</th>
                            <td>GST, Bengaluru</td>
                        </tr>
                        <tr>
                            <th>Applicant Mobile</th>
                            <td>{formData.ContactNumber}</td>
                        </tr>
                        <tr>
                            <th>Applicant Email</th>
                            <td>{formData.email}</td>
                        </tr>
                        <tr>
                            <th>Booking Date</th>
                            <td>{formData.date}</td>
                        </tr>
                        <tr>
                            <th>Booking Slot</th>
                            <td>{formData.timeSlot}</td>
                        </tr>
                        <tr>
                            <th>Registration Fee</th>
                            <td>FREE</td>
                        </tr>
                        <tr>
                            <th>Reference Number</th>
                            <td>{formatReferenceNumber()}</td>
                        </tr>
                        <tr>
                            <th>Status</th>
                            <td>
                                <b>Approved</b>
                            </td>
                        </tr>
                        <tr>
                            <th>Remarks</th>
                            <td>
                                <b>Approved</b>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div style={{ textAlign: "center" }} id="print-btn">
                <button className="btn btn-primary" onClick={printpage} type="button">
                    Download
                </button>
            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Main />
    </React.StrictMode>
);
