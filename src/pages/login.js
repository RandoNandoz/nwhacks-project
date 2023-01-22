import './login.css'

export default function login() {
    return (
        <div class="wrapper">
            <div class="container">
                <div class="Create-account">
                    <div class="info">
                        <label>Username:</label>
                        <input type="text" id="username" name="username"></input>
                    </div>
                    <div class="info">
                        <label>Password:</label>
                        <input type="text" id="password" name="password"></input>
                    </div>
                    <div class="info">
                        <label>Phone number:</label>
                        <input type="text" id="phone-number" name="phone-number"></input>
                    </div>
                </div>
                <div class="Login">
                    <div class="info">
                        <label>Username:</label>
                        <input type="text" id="username" name="username"></input>
                    </div>
                    <div class="info">
                        <label>Password:</label>
                        <input type="text" id="password" name="password"></input>
                    </div>
                </div>
            </div>
            <footer className="footer">
                <p className="text-footer">
                    Copyright ©-All rights are reserved
                </p>
            </footer>
        </div>
    )
}