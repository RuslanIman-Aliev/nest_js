import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/browser/repository/Repository.js';
import { Report } from './report.entity';
import { CreateReportDto } from './dtos/create-report.dto';
import { User } from 'src/users/user.entity';
import { ApprovedReportDto } from './dtos/approved-report.dto';

@Injectable()
export class ReportsService {
  constructor(@InjectRepository(Report) private repo: Repository<Report>) {}
  create(report: CreateReportDto, user: User) {
    const newReport = this.repo.create(report);
    newReport.user = user;
    return this.repo.save(newReport);
  }

  async changeApproval(id: string, approved: ApprovedReportDto) {
    const report = await this.repo.findOne({ where: { id: parseInt(id) } });
    if (!report) {
      throw new Error('Report not found');
    }
    report.approved = approved.approved;
    return this.repo.save(report);
  }
}
