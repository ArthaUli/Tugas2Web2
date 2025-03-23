import { Injectable } from '@nestjs/common';
import { Mahasiswa } from './mahasiswa.entity';
import { MahasiswaDTO } from './mahasiswa.dto';

@Injectable()
export class MahasiswaService {
    private currentId : number = 0;
    private Mhs: Mahasiswa[] = [];

    create(MhsDTO : MahasiswaDTO){
        const newMhs: Mahasiswa = {
            id : this.currentId,
            nama : MhsDTO.nama,
            email : MhsDTO.email,
            jurusan : MhsDTO.jurusan,
            fakultas : MhsDTO.fakultas
            
        }
        ++this.currentId;
        this.Mhs.push(newMhs);
    }

    findAll() : Mahasiswa[]{
        return this.Mhs
    }

    findOne(id :number) : Mahasiswa[]{
        return this.Mhs.filter((mhs) => mhs.id == id)
    }

    delete(id: number){
        this.Mhs = this.Mhs.filter((mhs) => mhs.id != id);
    }

    updateOne(id: number, MhsDTO : MahasiswaDTO){
        this.Mhs.forEach((mhs) =>{
            if(mhs.id == id){
                mhs.email = MhsDTO.email;
                mhs.fakultas = MhsDTO.fakultas;
                mhs.jurusan = MhsDTO.jurusan;
                mhs.nama = MhsDTO.nama;
            }
        });
    }
}
