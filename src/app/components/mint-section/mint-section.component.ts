import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import WalletConnect from '@walletconnect/client';
import QRCodeModal from '@walletconnect/qrcode-modal'
import { NFTconstants } from 'src/app/constants/NFTconstants';
import Swal from 'sweetalert2';
import Web3 from 'web3'
declare const window: any
const chainAddress = '0x1'
const rpcurl = NFTconstants.rpcurl
const remoteweb3 = new Web3(rpcurl)
const NFTAddress = NFTconstants.address
const amountMultiply = 50000000000000000

const TokenAbis = NFTconstants.tokenABI

@Component({
  template: `
    <div
      class="modal-content"
      style="border: 3px solid #d5bd84;background: #d5bd84"
    >
      <div
        class="modal-header"
        style="background: #191724; border-bottom: none"
      >
        <h4
          class="modal-title"
          style="color: #d5bd84; font-family: 'Bentto-PersonalUse' "
        >
          Connect Wallet
        </h4>
        <button
          type="button"
          class="close"
          aria-label="Close"
          (click)="activeModal.dismiss('Cross click')"
          style="background: transparent; font-size:37px; border: none; color: #d5bd84"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body" style="margin-left: auto; margin-right: auto">
        <button
          (click)="activeModal.close('metamask')"
          style="border-radius: 15px; margin-bottom: 10px; border: 3px solid #191724;"
        >
          <img
            src="../../assets/img/metamask.png"
            width="150"
            height="150"
          />
        </button>
        <p>
          <button
            (click)="activeModal.close('walletconnect')"
            style="border-radius: 15px; margin-bottom: 10px; border:3px solid #191724;"
          >
            <img
              src="../../assets/img/walletconnect.png"
              width="150"
              height="150"
            />
          </button>
        </p>
      </div>
      <div
        class="modal-footer"
        style="background: #191724; font-family: 'Bentto-PersonalUse'; border-top: none;"
      >
        <button
          type="button"
          class="btn btn-outline-dark"
          (click)="activeModal.close('Close click')"
          style="background:#d5bd84 ;font-family: 'Bentto-PersonalUse'"
        >
          Close
        </button>
      </div>
    </div>
  `,
})
export class WalletOptionModal {
  constructor(
    private modalService: NgbModal,
    public activeModal: NgbActiveModal,
  ) {}

  connectWalletConnect() {
    this.activeModal.close('Close click')
  }
}

@Component({
  selector: 'app-mint-section',
  templateUrl: './mint-section.component.html',
  styleUrls: ['./mint-section.component.scss']
})
export class MintSectionComponent implements OnInit {
  public inputValue: number = 1
  public walletAddress = ''
  public isConnected = false
  public isNetworkError = false
  public totalMinted: any = 0
  public connector: any
  public isWallectConnect = false
  public max = NFTconstants.maxValue
  public min = NFTconstants.minValue
  public mintPrice = NFTconstants.gasFee
  public totalPrice = NFTconstants.gasFee
  waffles = new remoteweb3.eth.Contract(
    [
      {
        inputs: [],
        name: 'totalSupply',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'numberOfTokens',
            type: 'uint256',
          },
        ],
        name: 'mintWaffles',
        outputs: [],
        stateMutability: 'payable',
        type: 'function',
      },
    ],
    NFTAddress,
  ).methods
  

  constructor(
    private modalService: NgbModal,
    public activeModal: NgbActiveModal,
  ) { }

  ngOnInit(): void { 
  }

  loadContract() {
    return new window.web3.eth.Contract(TokenAbis, NFTAddress)
  }

  async fetchTotalTokenMinted() {
    this.waffles
      .totalSupply()
      .call()
      .then((response: any) => {
        this.totalMinted = response
      })
  }

  async open() {
    this.modalService
      .open(WalletOptionModal, {
        size: 'sm',
      })
      .result.then(async (result: any) => {
        if (result === 'metamask') {
          this.isWallectConnect = false
          await this.connectToMetamask()
        }
        if (result == 'walletconnect') {
          this.isWallectConnect = true
          this.connectWalletConnect()
        }
      })
  }

  async connectWalletConnect() {
    this.connector = new WalletConnect({
      bridge: 'https://bridge.walletconnect.org', // Required
      qrcodeModal: QRCodeModal,
    })
    if (!this.connector.connected) {
      // create new session
      this.connector.createSession()
    }

    this.connector.on('connect', (error: any, payload: any) => {
      if (error) {
        throw error
      }
      this.isConnected = true
    })
  }

  async mintAToken() {
    if (this.isWallectConnect) {
      await this.mintFromWalletConnect()
    } else {
      this.checkWalletConnected()
      await this.mint()
      await this.fetchTotalTokenMinted()
    }
  }

  async mint() {
    this.checkWalletConnected();
    const contract = await this.loadContract()
    const methods = await contract.methods
    await methods
      .mintWaffles(Number(this.inputValue))
      .send({
        from: window.web3.currentProvider.selectedAddress,
        value: Number(this.inputValue) * amountMultiply,
      })
      .on('transactionHash', (response: any) => {
        const link = `https://etherscan.io/tx/${response}`;
        Swal.fire({
          background: '#111b35',
          showCloseButton: true,
          allowOutsideClick: false,
          allowEscapeKey: false,
          showCancelButton: true,
          showConfirmButton: false,
          cancelButtonColor: '#ffd74b',
          iconColor: '#ffd74b',

          title:
            '<strong style="color: #ffd74b; font-family: Abel-Regular; font-size: 25px !important">' +
            'Transaction Submitted' +
            '</strong>' +
            '<br>',
          html:
            '<button type="button" class="btn mt-2" style="background: #ffd74b;">' +
            '<span style="color: #191724; font-family: Abel-Regular; font-weight: 600; font-size: 20px"> <a href="' +
            link +
            '" target="_blank" style="text-decoration: none; color: rgb(25, 23, 36);">View On Explorer</a> </span>' +
            '</button>',
          iconHtml: '<i class="fa fa-long-arrow-up" aria-hidden="true"></i>',
          cancelButtonText:
            '<span style="color: rgb(25, 23, 36); font-family: Abel-Regular; font-weight: 600; font-size: 20px; margin-left: 200px; margin-right: 200px">Close</span>',
        })
      })
      .on('error', (response: any) => {
        Swal.fire({
          background: '#111b35',
          showCloseButton: true,
          allowOutsideClick: false,
          allowEscapeKey: false,
          showCancelButton: true,
          showConfirmButton: false,
          cancelButtonColor: '#ffd74b',
          iconColor: '#ffd74b',
          title:
            '<strong style="color: #ffd74b; font-family: Abel-Regular; font-size: 20px !important">' +
            'Transaction Rejected' +
            '</strong>' +
            '<br>',
          iconHtml: '<i class="fa fa-times" aria-hidden="true"></i>',
          cancelButtonText:
            '<span style="color: rgb(25, 23, 36); font-family: Abel-Regular; font-weight: 600; font-size: 20px; margin-left: 200px; margin-right: 200px">Close</span>',
        })
      })
  }

  plus() {
    if (this.inputValue + 1 > this.max) {
      this.inputValue = this.max
      this.totalPrice = this.mintPrice * this.inputValue
      return
    }
    console.log(this.inputValue);
    this.inputValue++
    this.totalPrice = this.mintPrice * this.inputValue
  }

  onValueChange(val:any) {

    this.inputValue = val
    if (this.inputValue > this.max) {
      this.inputValue = this.max
    }
    
    if(this.inputValue < this.min){
      this.inputValue = this.min     
    }
    this.totalPrice = this.mintPrice * this.inputValue
  }

  minus() {
    if (this.inputValue - 1 < this.min) {
      this.inputValue = this.min
      return
    }
    this.inputValue--
    this.totalPrice = this.mintPrice * this.inputValue
  }

  async connectToMetamask(){
    if (window.ethereum) {
      await window.ethereum.request({ method: 'eth_requestAccounts' }).then(
        (response: any) => {         
          this.getChainId(response)
        },
        (error: any) => {
          this.isConnected = false
        },
      )
    } else {
      return
    }
  }

  async mintFromWalletConnect() {
    const methods = await this.waffles
    const data = await methods
      .mintWaffles(Number(this.inputValue))
      .encodeABI() 
    const tx = {
      from: this.connector._accounts[0], // Required
      to: NFTAddress,
      data,
      value: Number(this.inputValue) * amountMultiply + '',
    }

    this.connector
      .sendTransaction(tx)
      .then((result: any) => {
        Swal.fire({
          background: '#ffd74b',
          showCloseButton: true,
          allowOutsideClick: false,
          allowEscapeKey: false,
          showCancelButton: true,
          showConfirmButton: false,
          cancelButtonColor: '#d5bd84',
          iconColor: '#d5bd84',

          title:
            '<strong style="color: #d5bd84; font-family: Abel-Regular; font-size: 25px !important">' +
            'Transaction Submitted' +
            '</strong>' +
            '<br>',
          html:
            '<button type="button" class="btn mt-2" style="background: #D5BD84;">' +
            '<span style="color: #191724; font-family: Abel-Regular; font-weight: 600; font-size: 20px"> <a href="#" target="_blank" style="text-decoration: none; color: rgb(25, 23, 36);">View On Explorer</a> </span>' +
            '</button>',
          iconHtml: '<i class="fa fa-long-arrow-up" aria-hidden="true"></i>',
          cancelButtonText:
            '<span style="color: rgb(25, 23, 36); font-family: Abel-Regular; font-weight: 600; font-size: 20px; margin-left: 200px; margin-right: 200px">Close</span>',
        })
      })
      .catch((error: any) => {
        // Error returned when rejected
        Swal.fire({
          background: '#ffd74b',
          showCloseButton: true,
          allowOutsideClick: false,
          allowEscapeKey: false,
          showCancelButton: true,
          showConfirmButton: false,
          cancelButtonColor: '#d5bd84',
          iconColor: '#d5bd84',
          title:
            '<strong style="color: #d5bd84; font-family: Abel-Regular; font-size: 20px !important">' +
            'Transaction Rejected' +
            '</strong>' +
            '<br>',
          iconHtml: '<i class="fa fa-times" aria-hidden="true"></i>',
          cancelButtonText:
            '<span style="color: rgb(25, 23, 36); font-family: Abel-Regular; font-weight: 600; font-size: 20px; margin-left: 200px; margin-right: 200px">Close</span>',
        })
      })
  }

  async getChainId(userAddresses: any) {
    window.ethereum.request({ method: 'eth_chainId' }).then((response: any) => {     
      if (response === chainAddress) {
        this.setWalletAddress()
        this.isNetworkError = false
        this.isConnected = userAddresses.length == 0 ? false : true
      } else if (userAddresses.length > 0) {
        this.isConnected = userAddresses.length == 0 ? false : true
        this.isNetworkError = true
      }
    })
  }

  setWalletAddress() {
    let responseString = window.web3.currentProvider.selectedAddress
    let splittedAddress =
      responseString.substring(0, 7) +
      '...' +
      responseString.substring(responseString.length - 3)
    this.walletAddress = splittedAddress
  }

  checkWalletConnected() {
    if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
      window.ethereum.enable()
      return true
    }
    return false
  }


}
