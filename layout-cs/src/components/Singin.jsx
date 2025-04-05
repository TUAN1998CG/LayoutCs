import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css'
import styles from '../css layout/Singin.module.css'
import {Link} from "react-router-dom";

export default function Singin() {
    return (
        <div className={styles.formLogin }  >
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
                    className="btn btn-primary btn-block mb-4">Đăng ký
            </button>
            <div className="text-center d-flex justify-content-center">
                <button type="button"
                        className="btn btn-link btn-floating mx-1">
                    <i className="fa fa-facebook-f"></i>
                </button>

                <button type="button"
                        className="btn btn-link btn-floating mx-1">
                    <i className="fa fa-google"></i>
                </button>

                <button type="button"
                        className="btn btn-link btn-floating mx-1">
                    <i className="fa fa-twitter"></i>
                </button>

                <button type="button"
                        className="btn btn-link btn-floating mx-1">
                    <i className="fa fa-github"></i>
                </button>
            </div>
            <Link to='/login'>Trở về</Link>
        </form>
        </div>
    )
}