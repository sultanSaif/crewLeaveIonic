import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ToastController, NavController } from "@ionic/angular";
import { DataService } from "../data.service";

@Component({
  selector: "app-selection",
  templateUrl: "./selection.page.html",
  styleUrls: ["./selection.page.scss"]
})
export class SelectionPage implements OnInit {
  months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  selectionArray = ["", "", "", "", "", "", "", "", "", "", "", ""];
  serverArray;
  digitToMonthsDictionary = {
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December"
  };
  monthToDigitDictionary = {
    January: 1,
    February: 2,
    March: 3,
    April: 4,
    May: 5,
    June: 6,
    July: 7,
    August: 8,
    September: 9,
    October: 10,
    November: 11,
    December: 12
  };
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService,
    public toastController: ToastController,
    private navCtrl: NavController
  ) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.serverArray = this.router.getCurrentNavigation().extras.state.data;
        console.log(this.serverArray);
        //
        // for (let i = 0; i < this.selectionArray.length; i++){

        // }
        this.selectionArray[0] = this.digitToMonthsDictionary[
          this.serverArray[0].M1
        ];
        this.selectionArray[1] = this.digitToMonthsDictionary[
          this.serverArray[0].M2
        ];
        this.selectionArray[2] = this.digitToMonthsDictionary[
          this.serverArray[0].M3
        ];
        this.selectionArray[3] = this.digitToMonthsDictionary[
          this.serverArray[0].M4
        ];
        this.selectionArray[4] = this.digitToMonthsDictionary[
          this.serverArray[0].M5
        ];
        this.selectionArray[5] = this.digitToMonthsDictionary[
          this.serverArray[0].M6
        ];
        this.selectionArray[6] = this.digitToMonthsDictionary[
          this.serverArray[0].M7
        ];
        this.selectionArray[7] = this.digitToMonthsDictionary[
          this.serverArray[0].M8
        ];
        this.selectionArray[8] = this.digitToMonthsDictionary[
          this.serverArray[0].M9
        ];
        this.selectionArray[9] = this.digitToMonthsDictionary[
          this.serverArray[0].M10
        ];
        this.selectionArray[10] = this.digitToMonthsDictionary[
          this.serverArray[0].M11
        ];
        this.selectionArray[11] = this.digitToMonthsDictionary[
          this.serverArray[0].M12
        ];
      }
      //
    });
  }

  monthClicked(name: string) {
    if (this.selectionArray.indexOf(name) > -1) {
      //delete this.selectionArray[this.selectionArray.indexOf(name)];
      this.selectionArray[this.selectionArray.indexOf(name)] = "";
    } else {
      for (let i = 0; i < this.selectionArray.length; i++)
        if (this.selectionArray[i] == "") {
          this.selectionArray[i] = name;
          break;
        }

      //this.selectionArray.push(name);
    }
    //console.log(result);
    console.log(this.selectionArray);
  }

  submitLeave() {
    this.dataService
      .submitEmployeeSelection(
        this.serverArray[0].Payroll_Number,
        this.months.indexOf(this.selectionArray[0]) + 1,
        this.months.indexOf(this.selectionArray[1]) + 1,
        this.months.indexOf(this.selectionArray[2]) + 1,
        this.months.indexOf(this.selectionArray[3]) + 1,
        this.months.indexOf(this.selectionArray[4]) + 1,
        this.months.indexOf(this.selectionArray[5]) + 1,
        this.months.indexOf(this.selectionArray[6]) + 1,
        this.months.indexOf(this.selectionArray[7]) + 1,
        this.months.indexOf(this.selectionArray[8]) + 1,
        this.months.indexOf(this.selectionArray[9]) + 1,
        this.months.indexOf(this.selectionArray[10]) + 1,
        this.months.indexOf(this.selectionArray[11]) + 1
      )
      .subscribe(
        data => {
          console.log(data);
          this.presentToast();
          this.navCtrl.pop();
        },
        error => {
          console.log(error);
        },
        () => {}
      );
  }
  ngOnInit() {}

  async presentToast() {
    const toast = await this.toastController.create({
      message: "Your Bid have been saved.",
      duration: 1000,
      position: "top",
      color: "success"
    });
    toast.present();
  }
}
