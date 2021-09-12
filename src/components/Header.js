import React from 'react';
import './css/header.scss';
import Clock from 'react-live-clock';
import 'moment-timezone';
import moment from 'moment';
import 'moment/locale/en-gb';

function Header() {

    return (
        <div>
            <div className='header-container'>
                <header className='header'>
                    <div className="clock-container">
                        {moment().format('MMMM Do YYYY')}
                        <Clock className="clock" format={'HH:mm:ss'} ticking={true} timezone={'PL'} />
                    </div>
                </header>
            </div>
        </div>
    )
}

export default Header;