//let web3 =new Web3('ws://localhost:8546')
const web3 =new Web3(Web3.givenProvider);
console.log("web3",web3);


let ljxaccount =[];
web3.eth.getAccounts().then(function(res){
	ljxaccount = res
	console.log(res)
		$("#niu").append(`
		<h3>${res} </h3>
		`)
	})
const abi=[
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "winner",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "AuctionEndedEvt",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "starter",
				"type": "address"
			}
		],
		"name": "AuctionStartEvt",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "bidder",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "BidEvt",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "bidder",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "HighBidEvt",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "setAuctionEnd",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_timeLimit",
				"type": "uint256"
			}
		],
		"name": "setAuctionStart",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"stateMutability": "payable",
		"type": "receive"
	},
	{
		"inputs": [],
		"name": "auctionLimit",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "auctionStart",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "beneficiary",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "endFlg",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "highestBid",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "highestBidder",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "startFlg",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "ver",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]
var myContract = new web3.eth.Contract(abi, '0xBBb732ba6b3190dB52b43b1E24594510C43aa40c');
console.log("myContract:",myContract);


$("#s4").click(function(){
	myContract.methods.setAuctionStart($("#_timeLimit").val()).call().then(function(){
		alert("拍卖时长设置成功")
	})
})
$("#liu").click(function(){
	myContract.methods.setAuctionStart($("#vlue").val()).call().then(function(){
		alert("出价成功")
	})
})
myContract.methods.beneficiary().call().then(
	function(receipt){
document.getElementById("liu").innerHTML = receipt
console.log(beneficiary.innerHTML)
	}
)

$("#timeout").click(function(){
	myContract.methods.setAuctionEnd().call().then(function(){
		alert("拍卖结束,请前往最后买家付款")
	})
})

let ljxaccounts= [];
web3.eth.getAccounts().then(function(accounts){
    ljxaccounts=accounts
    console.log(ljxaccounts[0])
});
const sendEthButton=document.querySelector('.sendEthButton');
sendEthButton.addEventListener('click', () => {
    web3.eth.sendTransaction({
        from:ljxaccounts[0],
        to:'0x026cD9A2821d80b1474d3A62C86A6F3FE8C2e6D7',
        value:'2000000000000000000'
    }).then(function(receipt){
console.log("完成")
    }); 
})