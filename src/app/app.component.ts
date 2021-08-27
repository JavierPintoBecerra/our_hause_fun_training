import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@capacitor/storage';  //Capacitor;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {




  public checkId = async () => {
    let { value } = await Storage.get({ key: 'id' })

    return value;

  }
  constructor(private router: Router) { }

  public async ngOnInit() {

    console.log("from app component")
    const data = await this.checkId()

    console.log(data);

    if (data !== null) {
      this.router.navigate(['./adding-challenges'])
    }


  }


}
