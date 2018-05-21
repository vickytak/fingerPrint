import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { FingerprintAIO, FingerprintOptions } from '@ionic-native/fingerprint-aio'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  fingerPrintOption: FingerprintOptions
  constructor(public platform: Platform, private fingerprint: FingerprintAIO) {
    this.fingerPrintOption ={
      clientId:'fingerpring-demo',
      clientSecret:'password',
      disableBackup:true
    }
  }

  async showFingerPrint(){
    try{
     const available = await this.fingerprint.isAvailable();
     console.log(available);
    
       const result = await this.fingerprint.show(this.fingerPrintOption);
       console.log(result);
    
    }
    catch(e){
      console.log(e);
    }
  }
}
