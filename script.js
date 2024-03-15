// let date_inp = document.getElementById('date');

// const date = new Date()

// date_inp = `{date.getDate}/{date.getMounth + 1}/{date.getFullYear}`;

window.onload = function () {
    var billInfo = JSON.parse(localStorage.getItem('billInfo'));
    if (billInfo) {
        document.getElementById('billDate').value = billInfo.billDate;
        document.getElementById('billNumber').value = billInfo.billNumber;
    }
    var clientInfo = JSON.parse(localStorage.getItem('clientInfo'));
    if (clientInfo) {
        document.getElementById('name').value = clientInfo.name;
        document.getElementById('phone').value = clientInfo.phone;
        document.getElementById('email').value = clientInfo.email;
        document.getElementById('address').value = clientInfo.address;
    }
    var itemInfo = JSON.parse(localStorage.getItem('itemInfo'));
    if (clientInfo) {
        document.getElementById('desc').value = itemInfo.desc;
        document.getElementById('quantity').value = itemInfo.quantity;
        document.getElementById('price').value = itemInfo.price;
    }
    var gstInfo = JSON.parse(localStorage.getItem('gstInfo'));
    if (clientInfo) {
        document.getElementById('gst').value = gstInfo.gst;

        let totalPrice = document.getElementById('totalPrice'),
            gst = document.getElementById('gstPer'),
            gstAmt = document.getElementById('gstAmt'),
            netAmount = document.getElementById('netAmount');
            
        let totalPriceCal = itemInfo.quantity * itemInfo.price;
        totalPrice.innerText = totalPriceCal;

        gst.innerText = gstInfo.gst;

        let gstAmount = (totalPriceCal * gstInfo.gst) / 100;
        gstAmt.innerText = gstAmount;

        let totalgstAmount = totalPriceCal + gstAmount;
        netAmount.innerText = totalgstAmount;
    }


};

// Function to save form data to local storage
function saveClientData() {
    var billInfo = {
        billDate: document.getElementById('billDate').value,
        billNumber: document.getElementById('billNumber').value
    };
    localStorage.setItem('billInfo', JSON.stringify(billInfo));

    var clientInfo = {
        name: document.getElementById('name').value,
        phone: document.getElementById('phone').value,
        email: document.getElementById('email').value,
        address: document.getElementById('address').value
    };
    localStorage.setItem('clientInfo', JSON.stringify(clientInfo));

    var itemInfo = {
        desc: document.getElementById('desc').value,
        quantity: document.getElementById('quantity').value,
        price: document.getElementById('price').value
    };
    localStorage.setItem('itemInfo', JSON.stringify(itemInfo));

    var gstInfo = {
        gst: document.getElementById('gst').value
    };
    localStorage.setItem('gstInfo', JSON.stringify(gstInfo));
}

// Listen for form submit event
document.getElementById('billInfo').addEventListener('submit', function (event) {
    event.preventDefault();
    saveClientData();
    window.location.href = "print.html";
});


function refreshForm() {
    localStorage.clear();
}