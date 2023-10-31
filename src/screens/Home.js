import React from 'react'
import Footer from '../layout/Footer'
import { Link } from "react-router-dom";
export default function HomePage() {
    
    return (
        <>
            <div class="appHeader bg-danger text-light">
                <div class="pageTitle fs-20px">
                    ລະບົບຮັບຝາກລົດ
                </div>
            </div>
            <div id="appCapsule">
                <div className='section mt-2 mb-3'>
                    <div class="row">
                        <div class="col-6 mb-2">
                            <Link to={'/dps'}>
                            <div class="card">
                                <img src="assets/img/icon/001.png" class="card-img-top" alt="image" />
                                <div class="card-body text-center py-0">
                                    <h5 class="card-title fs-18px">ຮັບຝາກລົດຈັກ</h5>
                                </div>
                            </div>
                            </Link>
                        </div>
                        <div class="col-6 mb-2">
                            <Link to={'/dps'}>
                            <div class="card">
                                <img src="assets/img/icon/c01.png" class="card-img-top" alt="image" />
                                <div class="card-body py-0 p-0 text-center">
                                    <h6 class="card-title fs-18px">ແຈ້ງເຂົ້າ</h6>
                                </div>
                            </div>
                            </Link>
                        </div>
                        <div class="col-6">
                            <Link to={'/dps'}>
                            <div class="card">
                                <img src="assets/img/icon/002.png" class="card-img-top" alt="image" />
                                <div class="card-body text-center py-0">
                                    <h5 class="card-title fs-18px">ຮັບຝາກລົດຈັກ</h5>
                                </div>
                            </div>
                            </Link>
                        </div>
                        <div class="col-6">
                            <Link to={'/dps'}>
                            <div class="card">
                                <img src="assets/img/icon/c02.png" class="card-img-top" alt="image" />
                                <div class="card-body py-0 text-center">
                                    <h6 class="card-title fs-18px">ແຈ້ງອອກ</h6>
                                </div>
                            </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

