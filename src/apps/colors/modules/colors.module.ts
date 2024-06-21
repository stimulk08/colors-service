import { ColorsResolver } from '@apps/colors/resolvers/colors.resolver';
import { ColorsService } from '@apps/colors/services/colors.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ColorsRepository } from '../database/colors.repository';
import { ColorModel } from '../models/color.model';

@Module({
  imports: [TypeOrmModule.forFeature([ColorModel])],
  providers: [ColorsResolver, ColorsService, ColorsRepository],
})
export class ColorsModule {}
