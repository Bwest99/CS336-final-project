import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SMS } from '@ionic-native/sms/ngx';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-barrage',
  templateUrl: './barrage.page.html',
  styleUrls: ['./barrage.page.scss'],
})
export class BarragePage implements OnInit {
  public phoneNum:string = "";
  count:number = 0;
  message:string = "Insert Message Here."

  constructor(private router: Router, private sms: SMS, private toastCtrl: ToastController) {}

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

  processPhoneNumber(item){
    let reduced = item.replace(/\D/g, '')
    if(reduced != ''){
      return reduced;
    }
  }

  async messageSentModal(){
    const completeModal = await this.toastCtrl.create({
      message: 'Barrage sent!',
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
      //splits the contact into name and phone number and removes the names from the array
      let fullContact = this.phoneNum.split(' ');
      let reducedContacts = fullContact.filter(this.processPhoneNumber);
      let options = { //Options for configuring the SMS message
        replaceLineBreaks: false,
        android: {
          intent: 'INTENT'
        }
      }

      for (let i = 0; i < reducedContacts.length; i++) {
        this.phoneNum = reducedContacts[i].replace(/\D/g, '');
        for (let j = this.count; j > 0; j--) {
          this.sms.send(this.phoneNum, this.message, options);
        }
      }
      //sends a pop up and returns to home screen
      this.messageSentModal();
      this.goToHome();
    } else { //send a pop up to inform of incomplete data
      this.incompleteDataModal();
    }
  }
}
