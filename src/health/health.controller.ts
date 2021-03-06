import { Controller, Get } from '@nestjs/common';
import { HealthService } from './health.service';

@Controller()
export class HealthController {
  constructor(private readonly healthService: HealthService) { }

  @Get('health')
  health(): string {
    return this.healthService.getStatus();
  }
}
