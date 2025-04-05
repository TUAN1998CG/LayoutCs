import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css'
import styles from '../css layout/Singin.module.css'
import {Link} from "react-router-dom";




export default function Login() {
    return (
<div className={styles.formLogin}>
        <form >
            <div  className="form-outline mb-4">
                <input type="email" id="form2Example1" className="form-control"/>
                <label className="form-label" htmlFor="form2Example1">Email address</label>
            </div>
            <div  className="form-outline mb-4">
                <input type="password" id="form2Example2" className="form-control"/>
                <label className="form-label" htmlFor="form2Example2">Password</label>
            </div>
            <button type="button"
                    className="btn btn-primary btn-block mb-4">Sign in
            </button>
            <div className="text-center  ">
                <p>Chưa có tài khoản? <Link to='/singin'>Đăng ký</Link></p>
                <p>hoặc đăng nhập qua:</p>
                <div className='d-flex  justify-content-center button-social '>
                <button type="button"
                        className="btn btn-link btn-floating mx-1">
                    <i className="fa fa-facebook"></i>
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
                <Link to='/'>Trở về</Link>
            </div>
        </form>
</div>

)
}