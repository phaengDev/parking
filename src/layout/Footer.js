import React from 'react'
import { Link } from "react-router-dom";
export default function Footer() {
    return (
        <div class="appBottomMenu">
        <Link to={'history'} class="item ">
            <div class="col">
                <ion-icon name="calendar-outline" role="img" class="md hydrated"></ion-icon>
                <strong className='fs-12px'>ເບິ່ງປະຫວັດ</strong>
            </div>
        </Link>
        <Link to={'/home'} class="item">
            <div class="col">
                <div class="action-button large">
                <ion-icon name="home-outline" role="img" class="md hydrated"></ion-icon>
                </div>
            </div>
        </Link>
        <Link to={'/'} class="item">
            <div class="col">
                <ion-icon name="people-outline" role="img" class="md hydrated"></ion-icon>
                <strong>Profile</strong>
            </div>
        </Link>
    </div>
    )
}
