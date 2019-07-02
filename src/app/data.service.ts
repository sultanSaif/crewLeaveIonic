import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: "root"
})
export class DataService {
  constructor(private http: HttpClient) {}
  checkLogin(user: string, password: string) {
    return this.http.get(
      "http://www.svitevents.com/sumtrn/WebService1.asmx/CheckLogin?LOGIN=" +
        user +
        "&password=" +
        password
    );
  }

  getEmployeeInfo(prn: number) {
    return this.http.get(
      "http://www.svitevents.com/sumtrn/WebService1.asmx/GetSingleEmployeeInfo?prn=" +
        prn
    );
  }

  getEmployeeSelection(prn: number) {
    return this.http.get(
      "http://www.svitevents.com/sumtrn/WebService1.asmx/GetSingleEmployeeSelection?prn=" +
        prn
    );
  }

  submitEmployeeSelection(
    prn: number,
    M1: number,
    M2: number,
    M3: number,
    M4: number,
    M5: number,
    M6: number,
    M7: number,
    M8: number,
    M9: number,
    M10: number,
    M11: number,
    M12: number
  ) {
    return this.http.get(
      "http://www.svitevents.com/sumtrn/WebService1.asmx/UpdateSingleEmployeeSelection?PRN=" +
        prn +
        "&M1=" +
        M1 +
        "&M2=" +
        M2 +
        "&M3=" +
        M3 +
        "&M4=" +
        M4 +
        "&M5=" +
        M5 +
        "&M6=" +
        M6 +
        "&M7=" +
        M7 +
        "&M8=" +
        M8 +
        "&M9=" +
        M9 +
        "&M10=" +
        M10 +
        "&M11=" +
        M11 +
        "&M12=" +
        M12
    );
  }
}
