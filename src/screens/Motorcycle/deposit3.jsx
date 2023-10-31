import React, { useState } from 'react'
import { Link,useParams } from "react-router-dom";
export default function Deposit3() {
const {id}=useParams()
    return (
        <>
            <div class="appHeader bg-danger text-light">
                <div class="left">
                    <Link to={'/home'} class="headerButton goBack">
                        <ion-icon name="chevron-back-outline"></ion-icon>
                    </Link>
                </div>
                <div class="pageTitle">
                    ລະບົບຮັບຝາກລົດ  {id}
                </div>
                <div class="right">
                    <a href="#" class="headerButton toggle-searchbox">
                        <ion-icon name="search-outline"></ion-icon>
                    </a>
                </div>
            </div>
            <div class="extraHeader p-0">
                <ul class="nav nav-tabs lined " role="tablist">
                    <li class="nav-item ">
                        <Link to={'/dps'} class="nav-link  fs-16px" >
                            ຝາກຊົ່ວຄາວ
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link to={'/dps2'} class="nav-link fs-16px" >
                            ຝາກໝົດມື້
                        </Link>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active fs-16px" >
                        ຝາກໄລຍະຍາວ
                        </a>
                    </li>
                </ul>
            </div>


            <div id="appCapsule" class="extra-header-active">
                <div class="header-large-title text-center">
                    <h2 className='mt-3'> <span className='text-danger'>*</span> <u>ປິ້ຝາກລົບຈັກ  (ບໍ່ກຳນົດ)</u>  <span className='text-danger'>*</span> </h2>
                </div>
                <div class="section mt-2 mb-5">
                    <form>
                        <div className="row">
                            <div className="col-12">
                                <div class="form-group boxed">
                                    <label class="form-label text-center fs-18px" for="name5">ແຂວງ</label>
                                    <select class="form-control form-control-lg text-center border-primary" id="name5" placeholder="Enter your name" autocomplete="off" >
                                        <option value="">ກຳແພງນະຄອນ</option>
                                        <option value="">ຫຼວງພະບາງ</option>
                                        <option value="">ວຽງຈັນ</option>
                                        <option value="">ບໍລິຄຳໄຊ</option>
                                    </select>

                                </div>
                            </div>
                            <div className="col-6">
                                <div class="form-group boxed">
                                    <div class="input-wrapper">
                                        <input type="text" class="form-control verify-input border-primary" autoFocus maxlength={2} placeholder="ກກ" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div class="form-group boxed">
                                    <div class="input-wrapper">
                                        <input type="tel" class="form-control verify-input border-primary" autoFocus maxlength={4} placeholder="9999" pattern="[0-9]*" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>

            </div>
            <div class="appBottomMenu">
                <button type="submit" class="btn btn-danger btn-block btn-lg"><ion-icon name="print-outline"></ion-icon> ພີມບິນ</button>
            </div>
        </>
    )
}
