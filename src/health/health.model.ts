import { BaseModel } from '../base.model';

export class HealthModel<T> extends BaseModel<T> {
  replyTo: string;

  constructor(data: Partial<HealthModel<T>> = {}) {
    super(data);
    Object.assign(this, data);
  }
}
