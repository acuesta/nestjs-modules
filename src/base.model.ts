export class BaseModel<T> {
  timeStamp: Date;
  version: string;
  payload: T;

  constructor(data: Partial<BaseModel<T>> = {}) {
    Object.assign(this, data);
  }
}
