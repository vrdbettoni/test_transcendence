import { CrudController } from '@nestjsx/crud';
import { Company } from './company.entity';
import { CompaniesService } from './companies.service';
export declare class CompaniesController implements CrudController<Company> {
    service: CompaniesService;
    constructor(service: CompaniesService);
}
