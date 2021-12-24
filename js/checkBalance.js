
// TOSHO token , last revision december 2021

let symbol =" TOSHO";
let addressTosho = "0x2414349097185575fe0644c661Eacc1E188F9Bf3";
let abiJson = [{ "constant": true, "inputs": [{ "name": "who", "type": "address" }], "name": "balanceOf", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }];

web3 = new Web3(new Web3.providers.HttpProvider("https://bsc-dataseed.binance.org/"));

const dataAddressTosho = new web3.eth.Contract(abiJson, addressTosho);

async function checkTosho() {
    var addressCheck = document.getElementById("addressCheck").value
    if (!web3.utils.isAddress(addressCheck)) {
        alert('Invalid address, please check the address');
        return;
    }
    const balanceTosho = dataAddressTosho.methods.balanceOf(addressCheck).call();
    balanceTosho.then(val => document.getElementById("balanceSupplyCheck").innerText = new Intl.NumberFormat("en-EN").format((val / (1000000000)).toFixed(0)) + symbol);
}
var checkToshoButton = document.getElementById("checkToshoButton")
checkToshoButton.addEventListener("click", checkTosho);



