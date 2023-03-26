import React from 'react';

export default function Apply() {
    return(
        <div className = 'apply-wrapper'>
        <div className="form-wrapper">
            <div className="form-head">
            <span className="form-header">JOIN OUR TEAM!</span>
            <p className="form-text">Interested in helping tell a narrative live on Twitch/YouTube? Well, look no further! Join our backstage team today!</p>
            </div>
            <div className="form">
            <iframe className="form-embed" src= "https://docs.google.com/forms/d/e/1FAIpQLScHLLHhKYFtaHPV_4VJbXmDuysJCkAhe13aEnHKpGGOjaLm8A/viewform?embedded=true" loading="eager" width="740" height="850" frameborder="0" marginheight="0" marginwidth="0" title="Skyline Application">Loading…</iframe>
            </div>
        </div>
        </div>
    )
}