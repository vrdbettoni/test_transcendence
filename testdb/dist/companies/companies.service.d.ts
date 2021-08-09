import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Company } from './company.entity';
export declare class CompaniesService extends TypeOrmCrudService<Company> {
    constructor(repo: any);
}
