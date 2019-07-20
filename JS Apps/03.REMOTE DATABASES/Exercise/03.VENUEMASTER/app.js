let baseUrl = "https://baas.kinvey.com/";
let base64Auth = btoa("guest:pass");

const inputElement = document.getElementById('venueDate');
const venuesDivElement = document.getElementById('venue-info');
const listVenuesBtn = document.getElementById('getVenues');

listVenuesBtn.addEventListener('click', listVenues);

function listVenues() {
    let date = inputElement.value;
    let url = baseUrl + `rpc/kid_BJ_Ke8hZg/custom/calendar?query=${date}`;
    let workingOnId = '';

    fetch(url, {
        method: 'POST',
        headers: {
            "Authorization": "Basic " + base64Auth,
        }
    })
        .then(handler)
        .then(data => {
            data.forEach(id => getVenuesInfo(id))
        });

    venuesDivElement.addEventListener('click', ev => {
        let currentButton = ev.target;
        if (currentButton.value === "More info") {
            let buttonParentDiv = currentButton.parentNode.parentNode;
            buttonParentDiv.getElementsByClassName('venue-details')[0].style.display = "block";
            workingOnId = buttonParentDiv.getAttribute('id');
            let selectElement = buttonParentDiv.getElementsByClassName('quantity')[0];
            let ticketsCount = selectElement.options[selectElement.selectedIndex].value;
            let purchaseBtn = buttonParentDiv.getElementsByClassName('purchase')[0];
            purchaseBtn.addEventListener('click', () => {
                venuesDivElement.innerHTML = makePurchase(buttonParentDiv, ticketsCount);

                document.querySelector('input[value="Confirm"]').addEventListener('click', () => {
                    let postUrl = baseUrl + `rpc/kid_BJ_Ke8hZg/custom/purchase?venue=${workingOnId}&qty=${ticketsCount}`;

                    fetch(postUrl, {
                        method: 'POST',
                        headers: {
                            "Authorization": "Basic " + base64Auth,
                            "Content-type": "application/json"
                        }
                    })
                        .then(handler)
                        .then(data => {
                            console.log(data);
                            venuesDivElement.innerHTML = `
                            <p>You may print this page as your ticket.</p>
                            ${data.html}
                            `;
                        })
                })
            });
        }
    });
}

function getVenuesInfo(id) {
    let getUrl = baseUrl + `appdata/kid_BJ_Ke8hZg/venues/${id}`;

    fetch(getUrl, {
        method: 'GET',
        headers: {
            "Authorization": "Basic " + base64Auth,
        }
    })
        .then(handler)
        .then(venue => {
            let divToAppend = document.createElement('div');
            divToAppend.innerHTML = generateDivToAppend(venue);
            venuesDivElement.appendChild(divToAppend);
        });
}

function makePurchase(parentDiv, ticketsCount) {
    let name = parentDiv.getElementsByClassName('venue-name')[0].textContent;
    let price = parentDiv.getElementsByClassName('venue-price')[0].textContent;

    let confirmationDivText = `
    <span class="head">Confirm purchase</span>
    <div class="purchase-info">
        <span>${name}</span>
        <span>${ticketsCount} x ${price}</span>
        <span>Total: ${+ticketsCount * +price} lv</span>
        <input type="button" value="Confirm">
    </div>`;

    return confirmationDivText;
}

function generateDivToAppend(venue) {
    let innerText = `<div class="venue" id="${venue._id}">
                <span class="venue-name"><input class="info" type="button" value="More info">${venue.name}</span>
                <div class="venue-details" style="display: none;">
                    <table>
                        <tr>
                            <th>Ticket Price</th>
                            <th>Quantity</th>
                            <th></th>
                        </tr>
                        <tr>
                            <td class="venue-price">${venue.price} lv</td>
                            <td><select class="quantity">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select></td>
                            <td><input class="purchase" type="button" value="Purchase"></td>
                        </tr>
                    </table>
                    <span class="head">Venue description:</span>
                    <p class="description">${venue.description}</p>
                    <p class="description">Starting time: ${venue.startingHour}</p>
                </div>
            </div>`;

    return innerText;
}

function handler(response) {
    if (response.status >= 400) {
        throw new Error(`Something went wrong. Error: ${response.statusText}`)
    }

    return response.json();
}