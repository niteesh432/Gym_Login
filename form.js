function Form() {
    const [formData, setFormData] = React.useState({
        ApplicantName: '',
        ContactNumber: '',
        email: '',
        date: '',
        timeSlot: ''
    })    
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.name==="ApplicantName"? e.target.value.toUpperCase() : e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
    
        // Optionally save the form data to localStorage
        localStorage.setItem('formData', JSON.stringify(formData));
    
        console.log("Form submitted data:", formData);
    
        // Redirect to main.html
        window.location.href = 'main.html';
    };
    
    return (
        <div>
            <div className="_form">
            <form className="form" onSubmit={handleSubmit}>
                <div className="container img-container gap-2">
                    <img src="https://cdn.gitam.edu/images/logo/gitam-logo-circle.png" className="img-fluid"/>
                    <h1>Slot Booking Form</h1>
                </div>
                <div class="mt-3 mb-3">
                    <label for="ApplicantName" class="form-label">Applicant Name:</label>
                    <input type="text" class="form-control" id="ApplicantName" placeholder="Your Full Name" name="ApplicantName" value={formData.ApplicantName} onChange={handleChange} />
                </div>
                <div class="mb-3">
                    <label for="ContactNumber" class="form-label">Contact Number:</label>
                    <input type="tel" class="form-control" id="ApplicantName" placeholder="Contact Number" name="ContactNumber" value={formData.ContactNumber} onChange={handleChange}/>
                </div>
                <div class="mb-3">
                    <label for="emailID" class="form-label">Gitam Email ID:</label>
                    <input type="email" class="form-control" id="emailID" placeholder="Gitam Email ID" name="email" value={formData.email} onChange={handleChange}/>
                </div>
                <div class="mb-3">
                    <label for="BookingDate" class="form-label">Booking Date:</label>
                    <input type="date" class="form-control" id="emailID" placeholder="Gitam Email ID" name="date" value={formData.date} onChange={(e) => {
                        const rawDate = new Date(e.target.value); 
                        const options = { day: "2-digit", month: "short", year: "numeric" }; 
                        const formattedDate = rawDate.toLocaleDateString("en-GB", options).replace(/ /g, "-"); 
                        setFormData({ ...formData, date: formattedDate }); 
                    }}/>
                </div>
                <div>
                    <label htmlFor="time-slot">Time Slot:</label>
                    <select 
                        id="time-slot" 
                        className="form-select" 
                        name="timeSlot" 
                        value={formData.timeSlot} 
                        onChange={handleChange}
                    >
                        <option value="" disabled>Select a time slot</option>
                        <option value="06:00 AM to 07:00 AM">06:00 AM to 07:00 AM</option>
                        <option value="07:00 AM to 08:00 AM">07:00 AM to 08:00 AM</option>
                        <option value="03:00 PM to 04:00 PM">03:00 PM to 04:00 PM</option>
                        <option value="04:00 PM to 05:00 PM">04:00 PM to 05:00 PM</option>
                        <option value="05:00 PM to 06:00 PM">05:00 PM to 06:00 PM</option>
                        <option value="06:00 PM to 07:00 PM">06:00 PM to 07:00 PM</option>
                        <option value="07:00 PM to 08:00 PM">07:00 PM to 08:00 PM</option>
                    </select>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form >
            </div>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Form />
    </React.StrictMode>
)