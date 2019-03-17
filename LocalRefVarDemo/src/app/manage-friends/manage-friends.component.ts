import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-friends',
  templateUrl: './manage-friends.component.html',
  styleUrls: ['./manage-friends.component.css']
})
export class ManageFriendsComponent implements OnInit {

  name : string = 'hiren';
  friendsList: string[] = ["keyur","denish"];
  errorMsg : string = '';
  successMsg : string = '';
  isUpdate : boolean = false;
  updateIdx : number = -1;

  constructor() { }

  ngOnInit() {
    this.friendsList.push("vinit");
  }

  // addFriend(name:string):void{     
  //    if(name !== ''){
  //     let idx = this.friendsList.indexOf(name);
  //     if(idx === -1){
  //      this.errorMsg = '';
  //      this.friendsList.push(name);
  //     }else{
  //      this.errorMsg = name +" Already Exist in List.";
  //     }
  //    }else{
  //     this.errorMsg = "Empty Name is not allowed.";
  //    }           
  // }

  addFriend():void{     
    if(this.name !== ''){
     let idx = this.friendsList.indexOf(this.name);
     if(idx === -1){
      this.errorMsg = '';
      this.friendsList.push(this.name);
      this.successMsg = this.name + ' Added Successfully...';
     }else{
      this.errorMsg = this.name +" Already Exist in List.";
     }
    }else{
     this.errorMsg = "Empty Name is not allowed.";
    }           
  }
  delete(idx:number):void{
    let confirmMsg = confirm("Are You sure want to delete?");
    if(confirmMsg){
      this.friendsList.splice(idx,1);
    }    
  }  
  edit(idx:number):void{
    this.successMsg = '';
    this.isUpdate = true;
    this.updateIdx = idx;
    this.name = this.friendsList[idx];
  }
  updateFriend():void{
     if(this.name !== ''){
      let idx = this.friendsList.indexOf(this.name);
      if(idx === -1){
       this.errorMsg = '';
       let oldName = this.friendsList[this.updateIdx];
       this.friendsList[this.updateIdx]=this.name;       
       this.successMsg = oldName+" is Updated with "+this.name;
       this.isUpdate = false;
       this.name = '';
       this.updateIdx = -1;
      }else{
       this.errorMsg = this.name +" Already Exist in List.";
      }
     }else{
      this.errorMsg = "Empty Name is not allowed.";
     }
  }
}
