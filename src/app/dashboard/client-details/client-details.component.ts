import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from 'src/app/service/client/client.service';
import { LoadService } from 'src/app/service/load/load.service';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css'],
})
export class ClientDetailsComponent implements OnInit {
  data;
  id;
  list = 0;
  constructor(
    private clientService: ClientService,
    private loadService: LoadService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    this.getClient();
    this.getClientLoads();
  }

  getClient() {
    this.clientService.getClient(this.id).subscribe((res) => {
      this.data = res.response;
    });
  }

  getClientLoads() {
    this.clientService.getClientLoads(this.id).subscribe((res) => {
      this.list = 0;
      // if (this.list.length == 0) {
      // }
    });
  }
}
