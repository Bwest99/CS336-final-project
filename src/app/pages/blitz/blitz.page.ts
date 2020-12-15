import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SMS } from '@ionic-native/sms/ngx';
import { ToastController } from '@ionic/angular';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';

@Component({
  selector: 'app-blitz',
  templateUrl: './blitz.page.html',
  styleUrls: ['./blitz.page.scss'],
})
export class BlitzPage implements OnInit {
  public phoneNum:string = "";
  count:number = 1;
  message:string = "Insert Message Here."

  constructor(private sms: SMS, private router: Router, private toastCtrl: ToastController) { }

  ngOnInit() {
  }

  goToHome(){
    this.router.navigateByUrl('home');
  }

  setTarget(targetNum){
    this.phoneNum = targetNum;
  }

  setCount(countVal){
    this.count = countVal;
    console.log(countVal);
  }

  async messageSentModal(){
    const completeModal = await this.toastCtrl.create({
      message: 'Blitz sent!',
      duration: 3000,
      position: 'top'
    });
    completeModal.present();
  }

  async incompleteDataModal(){
    const completeModal = await this.toastCtrl.create({
      message: 'Incomplete data, please fill out entire form',
      duration: 3000,
      position: 'top'
    });
    completeModal.present();
  }

  sendMessage(){
    if ( (this.phoneNum != "") && (this.message != "Insert Message Here.") && (this.count != 0) ) { //makes sure all data is filled out
      //removes all but the numeric values of the phone number
      this.phoneNum = this.phoneNum.replace(/\D/g, '');
      let options = {
        replaceLineBreaks: false,
        android: {
          intent: 'INTENT'
        }
      }
      for (let index = this.count; index > 0; index--) {
        this.sms.send(this.phoneNum, this.message, options);
      }
      //sends a pop up and returns to home screen
      this.messageSentModal();
      this.goToHome();
    } else { //send a pop up to inform of incomplete data
      this.incompleteDataModal();
    }
  }
}
