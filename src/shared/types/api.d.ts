export interface ISuccessRes<T = unknown> {
  status: true;
  code: number;
  payload:T
}

export interface IErrorRes<R = unknown> {
  status: false;
  code: number;
  message: string;
  errors?: R[];
}

export type IApiRes<T = unknown, R = unknown> = ISuccessRes<T> | IErrorRes<R>;
