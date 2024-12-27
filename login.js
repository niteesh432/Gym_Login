
function Login() {
    const [email, setemail] = React.useState("")
    const [password, setPassword] = React.useState("")
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(email, password);
        window.data.forEach((element , index) => {
            console.log(index);
            console.log(element.userName , email);
            console.log(element.password , password);

        });
        const user = window.data.find(user => user.userName === email && user.password === password)
        if (user) {
            localStorage.setItem('user', JSON.stringify(user))
            window.location.href = 'form.html'
        } else {
            alert("Invalid credentials!")
        }
    }
    return (
        <div class="login">
            <form onSubmit={handleSubmit} className="login-form">
                <div className="container img-container gap-2">
                    <img src="https://cdn.gitam.edu/images/logo/gitam-logo-circle.png" className="img-fluid"/>
                    <h1>Gym Login</h1>
                </div>
                <div class="mb-3 pt-3">
                    <label htmlFor="emailInput" class="form-label">Email address:</label>
                    <input type="email"  value={email} onChange={(e)=>{setemail(e.target.value)}} class="form-control" id="emailInput" placeholder="User Id" />
                </div>
                <div class="mb-3">
                    <label for="passwordInput" class="form-label">Password:</label>
                    <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} class="form-control" id="passwordInput" placeholder="Password" />
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>

        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Login />
    </React.StrictMode>
)