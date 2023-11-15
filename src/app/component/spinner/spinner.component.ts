import {Component, OnDestroy, OnInit} from '@angular/core';
import {LoaderService} from "../../services/loader/loader.service";
import {LoaderState} from "../../services/loader/loader-state";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit, OnDestroy{
  displaySpinner = false;
  subscription: Subscription | undefined;
  constructor(
    private loaderService: LoaderService
  ) {}

  ngOnInit(): void {
    this.subscription = this.loaderService.loaderState
      .subscribe({
        next: (state: LoaderState) => {

          this.displaySpinner = state.show;
        }
      });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

}
