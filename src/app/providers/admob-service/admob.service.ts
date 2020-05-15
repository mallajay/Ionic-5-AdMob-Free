import { Injectable } from "@angular/core";
import {
  AdMobFreeRewardVideoConfig,
  AdMobFree,
  AdMobFreeBannerConfig,
  AdMobFreeInterstitialConfig,
} from "@ionic-native/admob-free/ngx";

@Injectable({
  providedIn: "root",
})
export class AdmobService {
  error: any;
  constructor(public admob: AdMobFree) {}

  // BANNER
  showAdBanner() {
    let bannerConfig: AdMobFreeBannerConfig = {
      isTesting: true, // Remove in production
      autoShow: true,
      id: "ca-app-pub-3940256099942544/6300978111",
    };

    this.admob.banner.config(bannerConfig);
    this.admob.banner
      .prepare()
      .then(() => {
        // success
      })
      .catch((e) => {
        this.error = e;
        console.log(e);
      });
  }

  //INTERSTITIAL
  showInterstitial() {
    let interstitialConfig: AdMobFreeInterstitialConfig = {
      isTesting: true, // Remove in production
      autoShow: true,
      id: "ca-app-pub-3940256099942544/1033173712",
    };
    this.admob.interstitial.config(interstitialConfig);
    this.admob.interstitial
      .prepare()
      .then(() => {
        // success
      })
      .catch((e) => {
        this.error = e;
        console.log(e);
      });
  }

  // Rewarded Video
  showRewardVideoAds() {
    let RewardVideoConfig: AdMobFreeRewardVideoConfig = {
      isTesting: true, // Remove in production
      autoShow: true, //,
      id: "ca-app-pub-3940256099942544/5224354917",
    };
    this.admob.rewardVideo.config(RewardVideoConfig);
    this.admob.rewardVideo
      .prepare()
      .then(() => {})
      .catch((e) => {
        this.error = e;
        console.log(e);
      });
  }
}
