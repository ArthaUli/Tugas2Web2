import { Body, Controller, Delete, Get, Param, Post, Put, UseInterceptors, ValidationPipe } from '@nestjs/common';
import { MahasiswaService } from './mahasiswa.service';
import { MahasiswaDTO } from './mahasiswa.dto';
import { ExecutionTime } from 'src/ExecutionTime.interceptor';

@Controller('mahasiswa')
export class MahasiswaController {
    constructor (private mahasiswaService : MahasiswaService){

    }

    @Post()
    @UseInterceptors(ExecutionTime)
    create(@Body(new ValidationPipe()) mhsDTO : MahasiswaDTO){
        return this.mahasiswaService.create(mhsDTO);
    }

    @Get()
    findAll(){
        return this.mahasiswaService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id : number){
        return this.mahasiswaService.findOne(id);
    }

    @Put (':id')
    update(@Param('id') id: number, @Body() mhsDTO : MahasiswaDTO ){
        return this.mahasiswaService.updateOne(id,mhsDTO);
    }

    @Delete(':id')
    delete(@Param('id') id: number){
        return this.mahasiswaService.delete(id);
    }
}
