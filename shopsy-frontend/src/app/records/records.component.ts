import { Component } from '@angular/core';
import { ExcelService } from '../excel.service';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.css']
})
export class RecordsComponent {
  candidatedata: any = [{
    RecID:1,
    CandidateNumber:'111111',
    CandidateName: 'Bob',
    Score: 99,
    Ranking:2,
    Updatedate: '2024-02-14 19:00:00'
  },
  {
    RecID:2,
    CandidateNumber:'111112',
    CandidateName: 'Raj',
    Score: 45,
    Ranking:9,
    Updatedate: '2024-02-15 19:00:00'
  },
  {
    RecID:3,
    CandidateNumber:'111113',
    CandidateName: 'Anuj',
    Score: 57,
    Ranking:8,
    Updatedate: '2024-02-16 19:00:00'
  },
  ];
  constructor(private excelService:ExcelService){

  }
  exportAsXLSX():void {
    this.excelService.exportAsExcelFile(this.candidatedata, 'candidate_data');
  }
}


