import { Module } from '@nestjs/common';
import { UsersModuleController } from './users-module.controller';
import { UsersModuleService } from './users-module.service';

@Module({
  controllers: [UsersModuleController],
  providers: [UsersModuleService]
})
export class UsersModuleModule {}
