import React from 'react';

export default function ThankYou(){
    return(
        <>
             <section class="thankyouPage full-height">
        <div class="thankyou-wrapper">
            <div class="p-5 text-center">
                <div class="success-icon"><i class="fas fa-check-circle"></i></div>
                <div class="heading-text my-3">Thank You for your purchase.</div>
                <div class="transaction-id mb-4">Transaction/Order ID #1234567890</div>
                <div class="compliment-text mb-4">Thanks for Being Awesome, We hope you enjoy your purchase.</div>
                <div>If you have and questions or concerns regarding this, do not hesitate to contact us at <a href="mailto:testuser@yopmail.com">testuser@yopmail.com</a></div>
            </div>
        </div>
    </section>
        </>
    )
}