import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import {Contacts, Contact, ContactField, ContactName} from '@ionic-native/contacts/ngx';


@Component({
  selector: 'app-contact-display',
  templateUrl: './contact-display.component.html',
  styleUrls: ['./contact-display.component.scss'],
  providers: [Contacts]
})
export class ContactDisplayComponent implements OnInit {
  public contactList; //stores the contacts of the phone
  public check; //boolean value for if this is a single selection or multi selection list
  selectedItems = 0;

  target:string; //For single selection lists
  targets:string[] = []; //For multi selection lists
  //public checked:boolean = false;

  @Input() checkbox:string;
  @Output() result = new EventEmitter<string>();

  constructor(private contacts: Contacts) { } //Think I need to change this to Contact instead of Contacts. Maybe

  
  ngOnInit() { this.check = this.checkbox === "true"}

  ngAfterViewInit() {
    this.loadContacts();
  }  

  async loadContacts() {
    this.contactList = await this.contacts.find(["*"]);
    //this.contactList = ["Norm Norman: 555-555-5555", "Form Forman: 666-666-6666", "Jorm Jorman: 777-777-7777", 
    //                    "Glod Glodson: 111-111-1111", "Hugh Mann: 222-222-2222", "Poss Terior: 333-333-3333", "Nathan Wilkes: 1-800-HORNY"]
  }

  radioChanged(event){
    this.result.emit(event.value);
  }

  toParsableString(array:string[]){
    let parseString:string = ''
    array.forEach(element => {
      parseString = parseString + (element.replace(/ /g,'')) + " ";
    });
    return parseString
  }

  checkboxChanged(event){
    let value:string = event.source.value;
    if (this.targets.length < 5) { //Makes sure there are not a full 5 objects in the array
      if (this.targets.includes(value)) { //Checks to see if the value is in array already
        this.selectedItems--; //if yes, it must have been added before.
        this.targets.splice(this.targets.indexOf(value), 1); //Deletes that item from the array
      } else {
        this.selectedItems++ //If no, it must not be in the array
        this.targets.push(value); //Adds item to the array
      }
    } else if(this.targets.length === 5 && this.targets.includes(value)) { //allows users to remove items from the array when full
      this.selectedItems--; //if yes, it must have been added before.
      this.targets.splice(this.targets.indexOf(value), 1); //Deletes that item from the array
    } else {
      event.source.toggle(); //Makes sure the value is unchecked
    }
    this.result.emit(this.toParsableString(this.targets)) //Either way, emits an updated version of the list of targets
  }
}
