import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from "@nestjs/common";
import { ModeloService } from "../services/modelo.service";
import { CreateModeloDto } from "../dto/modelo.dto";



@Controller('modelo')
export class ModeloController
{
    constructor(private readonly modeloService:ModeloService){}
    @Post()
    async CreateModelo(@Body() createModeloDto: CreateModeloDto){
        return this.modeloService.create(createModeloDto);
    }

    
    @Get()
    findAll(){
        return this.modeloService.findAll();
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe)id: number){
        return this.modeloService.findOne(id);
    }
    @Delete(':id')
    remove(@Param('id', ParseIntPipe)id: number){
        return this.modeloService.remove(id);
    }

    @Patch(':id')
    update(
        @Param('id', ParseIntPipe)id: number,
        @Body()createModeloDto :CreateModeloDto,
        
    )
    {
        return this.modeloService.update(id, createModeloDto)
    }
}