import React from 'react';
import NavBar from '../components/NavBar';

function Settings() {
    return (
        <>
            <NavBar /> 

            <main className="mainSettings mb-5">
                <h1 className="mt-5 fw-normal text-white">Account</h1>
                <hr />
                <div className="row">
                    <div className="col-3">
                        <h5 className="titleSett">MemberShip & Billing</h5>
                        <button className="text-black">Cancel Membership</button>
                    </div>
                    <div className="col-9">
                        <div className="d-flex align-content-center justify-content-between">
                            <p className="mb-1 text-white">student@strive.school</p>
                            <p className="text-primary mb-0">Change account email</p>
                        </div>
                        <div className="d-flex align-content-center justify-content-between">
                            <p className="mb-1 text-white">Password: ********</p>
                            <p className="text-primary mb-0">Change password</p>
                        </div>
                        <div className="d-flex align-content-center justify-content-between">
                            <p className="mb-1 text-white">Phone: 321 044 1279</p>
                            <p className="text-primary mb-1">Change phone number</p>
                        </div>
                        <hr className="my-2" />
                        <div className="d-flex align-content-center justify-content-between">
                            <div className="d-flex">
                                <i className="bi bi-paypal text-white"></i>
                                <p className="mb-1 text-white">PayPal</p>
                                <p className="ms-2 mb-1 text-white">admin@strive.school</p>
                            </div>
                            <p className="text-primary mb-1">Update payment info</p>
                        </div>
                        <div className="d-flex align-content-center justify-content-between">
                            <p className="ms-auto text-primary mb-1">Billing details</p>
                        </div>
                        <hr className="my-2" />
                        <div className="d-flex align-content-center justify-content-between">
                            <p className="ms-auto text-primary mb-1">Redeem gift card or promo code</p>
                        </div>
                        <div className="d-flex align-content-center justify-content-between">
                            <p className="ms-auto text-primary mb-1">Where to buy gift cards</p>
                        </div>
                    </div>
                    <hr className="my-2" />
                </div>
                <div className="row">
                    <div className="col-3">
                        <h5 className="titleSett">Plan Details</h5>
                    </div>
                    <div className="col-9">
                        <div className="d-flex align-content-center justify-content-between">
                            <p className="mb-1 text-white">Premium<span className="text-white border border-1 border-white ms-1 px-2">Ultra HD</span></p>
                            <p className="text-primary mb-0">Change Plan</p>
                        </div>
                    </div>
                </div>
                <hr className="my-2" />
                <div className="row">
                    <div className="col-3">
                        <h5 className="titleSett">Settings</h5>
                    </div>
                    <div className="col-9">
                        <div className="d-flex align-content-center justify-content-between">
                            <p className="mb-1 text-primary">Parental controls</p>
                        </div>
                        <div className="d-flex align-content-center justify-content-between">
                            <p className="mb-1 text-primary">Test participation</p>
                        </div>
                        <div className="d-flex align-content-center justify-content-between">
                            <p className="mb-1 text-primary">Manage download devices</p>
                        </div>
                        <div className="d-flex align-content-center justify-content-between">
                            <p className="mb-1 text-primary">Activate a device</p>
                        </div>
                        <div className="d-flex align-content-center justify-content-between">
                            <p className="mb-1 text-primary">Recent device streaming activity</p>
                        </div>
                        <div className="d-flex align-content-center justify-content-between">
                            <p className="mb-1 text-primary">Sign out of all devices</p>
                        </div>
                    </div>
                </div>
                <hr className="my-2" />
                <div className="row">
                    <div className="col-3">
                        <h5 className="titleSett">My Profile</h5>
                    </div>
                    <div className="col-9">
                        <div className="d-flex align-content-center justify-content-between">
                            <p className="mb-1 text-white">Strive Student</p>
                            <p className="text-primary mb-0">Manage profiles</p>
                        </div>
                        <div className="d-flex align-content-center justify-content-between">
                            <p className="ms-auto text-primary mb-1">Add profile email</p>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <p className="text-primary mb-0">Language</p>
                                <p className="text-primary mb-0">Playback settings</p>
                                <p className="text-primary mb-0">Subtitle appearance</p>
                            </div>
                            <div className="col-6">
                                <p className="text-primary mb-0">Viewing activity</p>  
                                <p className="text-primary mb-0">Ratings</p> 
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Settings;
