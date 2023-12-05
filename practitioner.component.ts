import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-practitioner',
  standalone: true,
  imports: [CommonModule,InputTextModule,FormsModule,AvatarModule,AvatarGroupModule],
  templateUrl: './practitioner.component.html',
  styleUrls: ['./practitioner.component.scss']
})
export class PractitionerComponent {

  practitionersName: string = '';
  practitionersDepartment: string = '';

  ListData : any[] = [];
  filteredPractitioners : any;


// Avatarfirstname calculating
getAvatarLabel(ListData: { name: string; dept: string }): string {
  const nameParts = ListData.name.split(' ');
  const firstName = nameParts[0] ? nameParts[0].substring(0, 1) : '';
  const lastName = nameParts[1] ? nameParts[1].substring(0, 1) : '';
  return `${firstName}${lastName}`;
}


// practitioner Name and Departments 
// practitioners = [
//   { name: "Abbas Yassin" , dept: "Plastic Surgery" },
//   { name: "Abdulaziz Al-Noshan" , dept: "Dermatology" },
//   { name: "Abdullah Al-Qahtani" , dept: "Plastic Surgery" },
//   { name: "Abdullah Al-Eisa" , dept: "Dermatology" },
//   { name: "Abdullah Al-Hargan" , dept: "Dermatology" },
//   { name: "Abdullah Al-Samary" , dept: "Dermatology" },
//   { name: "Abrar Emad" , dept: "Dental" },
//   { name: "Adil Althobaity" , dept: "Plastic Surgery" },
// ];

constructor(public ref: DynamicDialogRef,public config: DynamicDialogConfig  ) {
  // console.log('Data: ' + JSON.stringify(config.data));
  this.ListData = config.data.data;
  this.filteredPractitioners = this.ListData;
}

// filteredPractitioners = this.ListData;

filterPractitioners() {
  if (this.practitionersDepartment) {
    // Filter by Practitioner Department and reset Practitioner Name
    this.filteredPractitioners = this.ListData.filter(ListData =>
      ListData.dept.toLowerCase().includes(this.practitionersDepartment.toLowerCase())
    );
    this.practitionersName = ''; // Reset Practitioner Name
  } else if (this.practitionersName) {
    // Filter by Practitioner Name
    this.filteredPractitioners = this.ListData.filter(ListData =>
      ListData.name.toLowerCase().includes(this.practitionersName.toLowerCase()) &&
      ListData.dept.toLowerCase().includes(this.practitionersDepartment.toLowerCase())
    );
  } else {
    // Reset filters if both inputs are empty
    this.filteredPractitioners = this.ListData;
  }

}
}
