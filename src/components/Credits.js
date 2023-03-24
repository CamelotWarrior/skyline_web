import React from 'react';

export default function Credits(props) {


    /*Content Creator and Backstage Crew members can be added/modified at content-credit.js */

    /*If twitter in content-credit.js is not equal to none*/
    let twitterLink = null;
    if (props.twitter !== "none") {
        twitterLink = <a href={props.twitter} target="_blank" className="credit-links" rel="noreferrer">
                            <img src={require("../images/socials/twitter_test.png")} className="credit-icon"  alt="Twitter"/>
                    </a>
    }

    /*If twitch in content-credit.js is not equal to none*/
    let twitchLink = null;
    if (props.twitch !== "none") {
        twitchLink = <a href={props.twitch} target="_blank" className="credit-links" rel="noreferrer">
        <img src={require("../images/socials/twitch_test.png")} className="credit-icon"  alt="Twitch"/>
</a>
    }

    /*If website in content-credit.js is not equal to none*/
    let websiteLink = null;
    if (props.website !== "none") {
        websiteLink = <a href={props.website} target="_blank" className="credit-links" rel="noreferrer">
        <img src={require("../images/socials/website_test.png")} className="credit-icon" alt="Website"/>
</a>
    }

    /*If youtube in content-credit.js is not equal to none*/
    let youtubeLink = null;
    if (props.youtube !== "none") {
        youtubeLink = <a href={props.youtube} target="_blank" className="credit-links" rel="noreferrer">
        <img src={require("../images/socials/youtube_test.png")} className="credit-icon" alt="YouTube"/>
</a>
    }
    


    return (
        <div className="credit">
            <img src={props.image} className="credit-image" alt={props.name}/>
            <span className="credit-name">{props.name}</span>
            <span className="credit-icons">
                {twitchLink}
                {youtubeLink}
                {twitterLink}
                {websiteLink}
            </span>
        </div> 
    )
}