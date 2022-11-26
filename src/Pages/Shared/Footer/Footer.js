import React from 'react';

const Footer = () => {
    return (
        <footer className="footer p-10 bg-zinc-900 text-white text-base-content">
            <div>
                <h3 className='text-3xl font-bold'>Mobile Garage</h3>
                <p>Mobile Garage Ltd.<br />Copyright © 2022 - All right reserved</p>
            </div>
            <div>
                <span className="footer-title">Services</span>
                <a href='/' className="link link-hover">Branding</a>
                <a href='/' className="link link-hover">Design</a>
                <a href='/' className="link link-hover">Marketing</a>
                <a href='/' className="link link-hover">Advertisement</a>
            </div>
            <div>
                <span className="footer-title">Company</span>
                <a href='/' className="link link-hover">About us</a>
                <a href='/' className="link link-hover">Contact</a>
                <a href='/' className="link link-hover">Jobs</a>
                <a href='/' className="link link-hover">Press kit</a>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <a href='/' className="link link-hover">Terms of use</a>
                <a href='/' className="link link-hover">Privacy policy</a>
                <a href='/' className="link link-hover">Cookie policy</a>
            </div>
        </footer>
    );
};

export default Footer;