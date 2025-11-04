import { Injectable } from '@nestjs/common';
import { CreateCanalDto } from './dto/create-canal.dto';
import { UpdateCanalDto } from './dto/update-canal.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CanalService {
  constructor(private prisma: PrismaService) {}

  create(createCanalDto: CreateCanalDto) {
    return this.prisma.canal.create({
      data: createCanalDto,
    });
  }

  findAll() {
    return this.prisma.canal.findMany();
  }

  findOne(id: number) {
    return this.prisma.canal.findUnique({
      where: { id },
    });
  }

  update(id: number, updateCanalDto: UpdateCanalDto) {
    return this.prisma.canal.update({
      where: { id },
      data: updateCanalDto,
    });
  }

  remove(id: number) {
    return this.prisma.canal.delete({
      where: { id },
    });
  }
}
