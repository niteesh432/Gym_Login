function Login() {
    return (
        <div class="login">
            <form className="login-form">
                <div className="container img-container gap-2">
                    <img src="https://cdn.gitam.edu/images/logo/gitam-logo-circle.png" className="img-fluid"/>
                    <h1>Gym Login</h1>
                </div>
                <div class="mb-3 pt-3">
                    <label htmlFor="emailInput" class="form-label">Email address:</label>
                    <input type="email" class="form-control" id="emailInput" placeholder="User Id" />
                </div>
                <div class="mb-3">
                    <label for="passwordInput" class="form-label">Password:</label>
                    <input type="password" class="form-control" id="passwordInput" placeholder="Password" />
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