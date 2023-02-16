import {creditsAll} from '../data/content-credit';

export function getCredits() {
    const creditsList = creditsAll;
    return creditsList;
}

export function filterCredits(creditType) {
    let filteredCredits = getCredits().filter((type) => type.role === creditType);
    return filteredCredits;
}