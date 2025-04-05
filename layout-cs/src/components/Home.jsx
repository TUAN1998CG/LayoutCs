import {Button, Card, Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useNavigate} from "react-router-dom";


export default function Home(){
    const navigate = useNavigate();
    const hanldleSingin = ()=>{
        navigate("/singin");
    }
    const handleLogin = () => {
        navigate('/login')
    }
    return (
        <>
            <div className='header'>
                <div className='d-flex justify-content-evenly'>
                    <h2>Booking.com</h2>
                    <div>
                        <button onClick={hanldleSingin}>Đăng ký</button>
                        <button onClick={handleLogin}>Đăng nhập</button>
                    </div>
                </div>
            </div>
            <div className="booking-form">
                <form className='d-flex justify-content-center'>
                    <div className="form-group">
                        <label htmlFor="check-in">Ngày nhận phòng:</label>
                        <input
                            type="date"
                            id="check-in"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="check-out">Ngày trả phòng:</label>
                        <input
                            type="date"
                            id="check-out"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="guests">Số khách:</label>
                        <select
                            id="guests"
                            required
                        >
                            <option value="1">1 khách</option>
                            <option value="2">2 khách</option>
                            <option value="3">3 khách</option>
                            <option value="4">4 khách</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="room-type">Loại phòng:</label>
                        <select
                            id="room-type"

                            required
                        >
                            <option value="single">Phòng đơn</option>
                            <option value="double">Phòng đôi</option>
                            <option value="suite">Phòng suite</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <button type="submit">Tìm kiếm</button>
                    </div>
                </form>
            </div>
            <div className='nav-bar d-flex justify-content-center'>
                <Navbar expand="lg">
                    <Container>
                        <Navbar.Brand href="#home">Trang Đặt Phòng</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#home">Trang Chủ</Nav.Link>
                                <Nav.Link href="#features">Khách Sạn</Nav.Link>
                                <Nav.Link href="#pricing">Giới Thiệu</Nav.Link>
                                <NavDropdown title="Dịch Vụ" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Spa</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Bể Bơi</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Đặt Phòng</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link href="#contact">Liên Hệ</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
            <div className='d-flex justify-content-evenly'>

                <div>
                    <div className="sidebar">
                        <h5 className="sidebar-title">Chọn lọc theo nhu cầu</h5>
                        <div className='check-box'>
                            <p><input type="checkbox" name="" id=""/>Dịch vụ</p>
                            <p><input type="checkbox" name="" id=""/>Dịch vụ</p>
                            <p><input type="checkbox" name="" id=""/>Dịch vụ</p>
                        </div>
                        <div className='check-box'>
                            <p><input type="checkbox" name="" id=""/>Dịch vụ</p>
                            <p><input type="checkbox" name="" id=""/>Dịch vụ</p>
                            <p><input type="checkbox" name="" id=""/>Dịch vụ</p>
                            <p><input type="checkbox" name="" id=""/>Dịch vụ</p>
                            <p><input type="checkbox" name="" id=""/>Dịch vụ</p>
                            <p><input type="checkbox" name="" id=""/>Dịch vụ</p>
                        </div>
                        <div className='check-box'>
                            <p><input type="checkbox" name="" id=""/>Dịch vụ</p>
                            <p><input type="checkbox" name="" id=""/>Dịch vụ</p>
                            <p><input type="checkbox" name="" id=""/>Dịch vụ</p>
                            <p><input type="checkbox" name="" id=""/>Dịch vụ</p>
                            <p><input type="checkbox" name="" id=""/>Dịch vụ</p>
                            <p><input type="checkbox" name="" id=""/>Dịch vụ</p>
                            <p><input type="checkbox" name="" id=""/>Dịch vụ</p>
                            <p><input type="checkbox" name="" id=""/>Dịch vụ</p>
                            <p><input type="checkbox" name="" id=""/>Dịch vụ</p>
                            <p><input type="checkbox" name="" id=""/>Dịch vụ</p>
                            <p><input type="checkbox" name="" id=""/>Dịch vụ</p>
                            <p><input type="checkbox" name="" id=""/>Dịch vụ</p>
                        </div>
                    </div>
                </div>
                <div className=' d-flex flex-wrap gap-2'>
                    <Card style={{width: '18rem'}}>
                        <Card.Img variant="top" src="holder.js/100px180"/>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card> <Card style={{width: '18rem'}}>
                    <Card.Img variant="top" src="holder.js/100px180"/>
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
                    <Card style={{width: '18rem'}}>
                        <Card.Img variant="top" src="holder.js/100px180"/>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{width: '18rem'}}>
                        <Card.Img variant="top" src="holder.js/100px180"/>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{width: '18rem'}}>
                        <Card.Img variant="top" src="holder.js/100px180"/>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{width: '18rem'}}>
                        <Card.Img variant="top" src="holder.js/100px180"/>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{width: '18rem'}}>
                        <Card.Img variant="top" src="holder.js/100px180"/>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{width: '18rem'}}>
                        <Card.Img variant="top" src="holder.js/100px180"/>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{width: '18rem'}}>
                        <Card.Img variant="top" src="holder.js/100px180"/>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{width: '18rem'}}>
                        <Card.Img variant="top" src="holder.js/100px180"/>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{width: '18rem'}}>
                        <Card.Img variant="top" src="holder.js/100px180"/>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{width: '18rem'}}>
                        <Card.Img variant="top" src="holder.js/100px180"/>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>

        </>
    )
}