import 'bootstrap/dist/css/bootstrap.min.css';


export default function Login() {
    return (

        <form>
            <div data-mdb-input-init className="form-outline mb-4">
                <input type="email" id="form2Example1" className="form-control"/>
                <label className="form-label" htmlFor="form2Example1">Email address</label>
            </div>
            <div data-mdb-input-init className="form-outline mb-4">
                <input type="password" id="form2Example2" className="form-control"/>
                <label className="form-label" htmlFor="form2Example2">Password</label>
            </div>
            <button type="button"
                    className="btn btn-primary btn-block mb-4">Sign in
            </button>
            <div className="text-center">
                <p>Not a member? <a href="#!">Register</a></p>
                <p>or sign up with:</p>
                <button type="button"
                        className="btn btn-link btn-floating mx-1">
                    <i className="fab fa-facebook-f"></i>
                </button>

                <button type="button"
                        className="btn btn-link btn-floating mx-1">
                    <i className="fab fa-google"></i>
                </button>

                <button type="button"
                        className="btn btn-link btn-floating mx-1">
                    <i className="fab fa-twitter"></i>
                </button>

                <button type="button"
                        className="btn btn-link btn-floating mx-1">
                    <i className="fab fa-github"></i>
                </button>
            </div>
        </form>

)
}