import React, { useState, useEffect } from 'react';
import "./Nav.css";

export default function Nav() {

    const [show, setShow] = useState(false);

    // 빈 배열일 때는 컴포넌트가 마운트 될 때만 실행됨
    useEffect(() => {
        window.addEventListener("scroll",() => {
            console.log(window.scrollY);
            if(window.scrollY > 50){
                setShow(true);
            }else{
                setShow(false);
            }
        });

        return () => {
            window.removeEventListener("scroll", () => {});
        };
    }, []);

    return (
    <nav className={`nav ${show && 'nav__black'}`}>
        <img
            alt='Netflix logo'
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/220px-Netflix_2015_logo.svg.png'
            className='nav__logo'
            onClick={() => window.location.reload()}
        />
        <img
            alt='User logged'
            src='https://via.placeholder.com/150'
            className='nav__avatar'
        />
    </nav>
    )
}
