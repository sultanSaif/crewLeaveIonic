import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";
import { Router, NavigationExtras } from "@angular/router";
import { AlertController } from "@ionic/angular";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"]
})
export class LoginPage implements OnInit {
  user;
  password;
  alert;
  constructor(
    public router: Router,
    private dataService: DataService,
    public alertController: AlertController
  ) {}

  ngOnInit() {}
  login(user: string, password: string) {
    this.dataService.checkLogin(user, password).subscribe(
      data => {
        if (data != "Not Found") {
          //this.router.navigateByUrl("/home");
          let navigationExtras: NavigationExtras = {
            state: {
              user: this.user
            }
          };
          this.router.navigate(["home"], navigationExtras);
        } else {
          this.presentAlert();
        }
      },
      error => {
        console.log(error);
        //this.presentAlert();
      },
      () => {}
    );
  }

  async presentAlert() {
    this.alert = await this.alertController.create({
      header: "Alert",
      message: "check username and password.",
      buttons: ["OK"]
    });

    await this.alert.present();
  }
}
