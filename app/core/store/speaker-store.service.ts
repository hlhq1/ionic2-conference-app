/**
 * @author    Damien Dell'Amico <damien.dellamico@gmail.com>
 * @copyright Copyright (c) 2016
 * @license   GPL-3.0
 */


import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { SpeakerActions } from '../actions/speaker-action';
import { AppState } from '../reducers/index';
import { SpeakerSelector } from '../selectors/speaker-selector';
import { SpeakerModel } from '../providers/speakers/speaker-model';

@Injectable()
export class SpeakerStoreService {

  constructor(private store: Store<AppState>,
              private speakerActions: SpeakerActions) {
  }

  public dispatchLoadCollection(): void {
    this.store.dispatch(
      this.speakerActions.loadCollection()
    );
  }

  public isLoading(): Observable<boolean> {
    return this.store.let(SpeakerSelector.isLoading());
  }

  public getSpeakerItems(): Observable<SpeakerModel[]> {
    return this.store.let(SpeakerSelector.getSpeakerItems());
  }
}