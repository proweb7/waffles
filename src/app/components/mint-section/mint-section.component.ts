
<section class="bg-mint py-5">
  <div class="row col-md-11 mx-auto justify-content-center align-items-center">
      <div class="col-sm-12 col-md-3 col-lg-3">
          <div class="row m-0">
            <span class="waffle-img col-4"><img src="../../../assets/img/Group 21.png" alt=""></span>
            <span class="waffle-img col-4"><img src="../../../assets/img/Group 22.png" alt=""></span>
            <span class="waffle-img col-4"><img src="../../../assets/img/Group 23.png" alt=""></span>
            <span class="waffle-img col-4"><img src="../../../assets/img/Group 24.png" alt=""></span>
            <span class="waffle-img col-4"><img src="../../../assets/img/Group 25.png" alt=""></span>
            <span class="waffle-img col-4"><img src="../../../assets/img/Group 41.png" alt=""></span>
            <span class="waffle-img col-4"><img src="../../../assets/img/Group 29.png" alt=""></span>
            <span class="waffle-img col-4"><img src="../../../assets/img/Group 28.png" alt=""></span>
            <span class="waffle-img col-4"><img src="../../../assets/img/Group 27.png" alt=""></span>
            <span class="waffle-img col-4"><img src="../../../assets/img/Group 26.png" alt=""></span>
            <span class="waffle-img col-4"><img src="../../../assets/img/Group 31.png" alt=""></span>
            <span class="waffle-img col-4"><img src="../../../assets/img/Group 32.png" alt=""></span>
            <span class="waffle-img col-4"><img src="../../../assets/img/Group 33.png" alt=""></span>
            <span class="waffle-img col-4"><img src="../../../assets/img/Group 34.png" alt=""></span>
            <span class="waffle-img col-4"><img src="../../../assets/img/Group 35.png" alt=""></span>
          </div>
        </div>
        <div class="col-sm-10 mx-auto my-4 col-md-6 col-lg-5">
            <div class="mint-box mx-md-5">
              <div class="mint-waffle-img">
                <img src="../../../assets/img/1333.png" alt="">
              </div>
              <div class="row mint-input">
                <button class="col" (click)="minus()">-</button>
                <input class="col text-center" type="number" value="{{inputValue}}" (input)="onValueChange($any($event.target).value)" min="{{min}}" max="{{max}}">
                <button class="col" (click)="plus()">+</button>
              </div>
              <div class="d-grid">
                <button *ngIf="!isConnected; else mintBtn" class="btn btn-danger connect-btn" (click)="open()">Connect Wallet</button>
                <ng-template #mintBtn>
                  <button class="btn btn-danger connect-btn" (click)="mintAToken()">Mint for {{totalPrice.toFixed(2)}} ETH</button>
                </ng-template>
              </div>
            </div>
        </div>
        <div class="col-sm-12 col-md-3 col-lg-3">
          <div class="row m-0">
            <span class="waffle-img col-4"><img src="../../../assets/img/Group 21.png" alt=""></span>
            <span class="waffle-img col-4"><img src="../../../assets/img/Group 22.png" alt=""></span>
            <span class="waffle-img col-4"><img src="../../../assets/img/Group 23.png" alt=""></span>
            <span class="waffle-img col-4"><img src="../../../assets/img/Group 24.png" alt=""></span>
            <span class="waffle-img col-4"><img src="../../../assets/img/Group 25.png" alt=""></span>
            <span class="waffle-img col-4"><img src="../../../assets/img/Group 41.png" alt=""></span>
            <span class="waffle-img col-4"><img src="../../../assets/img/Group 29.png" alt=""></span>
            <span class="waffle-img col-4"><img src="../../../assets/img/Group 28.png" alt=""></span>
            <span class="waffle-img col-4"><img src="../../../assets/img/Group 27.png" alt=""></span>
            <span class="waffle-img col-4"><img src="../../../assets/img/Group 26.png" alt=""></span>
            <span class="waffle-img col-4"><img src="../../../assets/img/Group 31.png" alt=""></span>
            <span class="waffle-img col-4"><img src="../../../assets/img/Group 32.png" alt=""></span>
            <span class="waffle-img col-4"><img src="../../../assets/img/Group 33.png" alt=""></span>
            <span class="waffle-img col-4"><img src="../../../assets/img/Group 34.png" alt=""></span>
            <span class="waffle-img col-4"><img src="../../../assets/img/Group 35.png" alt=""></span>        
          </div>
        </div>
  </div>
</section>
