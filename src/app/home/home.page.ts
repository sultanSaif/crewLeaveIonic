import { Component } from "@angular/core";
import { ActivatedRoute, Router, NavigationExtras } from "@angular/router";
import { DataService } from "../data.service";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  prn: any;
  crewName;
  equipment;
  rank;
  seniorityDate;
  selectionArray;
  selectionExists;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService
  ) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.prn = this.router.getCurrentNavigation().extras.state.user;
        console.log(this.prn);
      }
    });
  }
  ionViewWillEnter() {
    console.log("I'm alive!");
    //selection
    this.dataService.getEmployeeSelection(this.prn).subscribe(
      data => {
        if (data != "300") {
          this.selectionArray = data;
          //console.log("emp:" + this.selectionArray.Payroll_Number);
        } else {
          console.log("invalid prn");
        }
      },
      error => {
        console.log(error);
        //this.presentAlert();
      },
      () => {}
    );
  }
  ngOnInit() {
    this.dataService.getEmployeeInfo(this.prn).subscribe(
      data => {
        if (data != "300") {
          //console.log(data[0]);

          (this.crewName = data[0].Crew_Name),
            (this.rank = data[0].Rank_ID),
            (this.equipment = data[0].Eq_ID),
            (this.seniorityDate = data[0].Seniority_Date);
        } else {
          console.log("invalid prn");
        }
      },
      error => {
        console.log(error);
        //this.presentAlert();
      },
      () => {}
    );
  }

  presentSelection() {
    let navigationExtras: NavigationExtras = {
      state: {
        data: this.selectionArray
      }
    };
    this.router.navigate(["selection"], navigationExtras);
  }
}
