import { AdmobService } from "./../../providers/admob-service/admob.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.page.html",
  styleUrls: ["./home.page.scss"],
})
export class HomePage implements OnInit {
  constructor(public admobService: AdmobService) {}

  ngOnInit() {}
}
