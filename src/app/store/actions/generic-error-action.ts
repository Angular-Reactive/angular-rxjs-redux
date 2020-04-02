import { Action } from '@ngrx/store';

interface ErrorData {
  type?: string;
  error?: any;
}

export class ErrorOccurred implements Action {
  readonly type = 'ERROR_OCCURRED';
  constructor(
      readonly payload: {
          action?: Action;
          error?: ErrorData;
      },
  ) {}
}
