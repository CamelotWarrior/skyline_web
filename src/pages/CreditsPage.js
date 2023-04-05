import React, {useState,useEffect} from 'react';
import { getCredits, filterCredits } from '../components/services/service-credits';
import { creditButtons } from '../components/data/content-credit';
import Credits from '../components/Credits';
import '../styles/credit.css';

function CreditsPage() {

//Code to set Credits being rendered
const [filteredCredits, setFilteredCredits] = useState("");
useEffect(() => {
    setFilteredCredits(getCredits());
}, []);

//Code to handle Credit Change
function handleCredits(e) {
    let typeCredit = e.target.value;
    typeCredit !== ""
    ? setFilteredCredits(filterCredits(typeCredit))
    : setFilteredCredits(getCredits());
}

return (
<>    
        <div id="credits" className="credit-wrapper">
            <h1 className="credits-page-header">CREDITS</h1>
            <div className="credits-menu">
            {creditButtons && creditButtons.map((type, index) => (
                <div className="credit-buttons-wrapper">
                <button key={index} value={type.value} onClick={handleCredits} className="credit-buttons">
                    {type.name}
                </button>
                </div>
            ))}
            </div>
            <section className="credits-list">
                {filteredCredits && filteredCredits.map(credit => {
                return (
                    <Credits
                    key={credit.id}
                    {...credit}/>
                )
                })}
            </section>
        </div>
</>
)

}

export default CreditsPage;