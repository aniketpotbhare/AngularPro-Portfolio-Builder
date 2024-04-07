import { Component, OnInit } from '@angular/core';

import {jsPDF} from 'jspdf';
// const jsPDF = require('jspdf');
@Component({
  selector: 'app-portfolio-pro',
  templateUrl: './portfolio-pro.component.html',
  styleUrls: ['./portfolio-pro.component.css']
})
export class PortfolioProComponent {

  // stud:Array<any> = []         
  stud: any[] = [];
  // name:string = ''
  // email:string = ''
  // phone:string = ''
  // address:string = ''
  // linkdin :string= ''
  // website:string = ''
  // school:string = ''
  // degree :string= ''
  // year :string = ''

  fullname = '';
  email = '';
  phone = '';
  address = '';
  linkdin = '';
  website = '';

  // school='';
  // degree='';
  // year='';
  skill1='';
  skill2='';
  skill3='';

  submitted: boolean = false;
  showHeading: boolean = true;

  qualifications = [{
    school: '',
    degree: '',
    year: ''
  }];

  
  addQualification()
   {
    // let tempQualification = { School: this.school, Degree: this.degree, Year: this.year }
    // this.qualifications.push(tempQualification);
    this.qualifications.push({ school: '', degree: '', year: '' });

  }
  save() {
    // let studtemp = {
    //   Name: this.name, Email: this.email, Address: this.address, Phone: this.phone,
    //   LinkdIn: this.linkdin, Website: this.website, School: this.school, Degree: this.degree, Year: this.year
    // }
    // this.stud.push(studtemp);
    // console.log(studtemp);
    this.submitted = true;
    this.showHeading = false;
  }
  edit() {
    this.submitted = false;
    this.showHeading = true;
  }
  
  reset() {
    this.fullname = '';
    this.email = '';
    this.phone = '';
    this.address = '';
    this.linkdin = '';
    this.website = '';
    this.qualifications = []; // Reset qualifications array
    this.skill1;
    this.skill2;
    this.skill3;
  }

 
  //toggle functionality 

  colorMode="lightMode";
  toggleMode(){
    // this.colorMode = (this.colorMode === "lightMode") ? "darkMode" : "lightMode";

    if(this.colorMode==="lightMode")
    {
     this.colorMode="darkMode";
    }
    else{
      this.colorMode="lightMode";
    }
  }

  //pdf 
  generatePDF() {
    const doc = new jsPDF();

   
    doc.text('Portfolio Information', 10, 10);
    doc.text(`Name: ${this.fullname}`, 10, 20);
    doc.text(`Email: ${this.email}`, 10, 30);
    doc.text(`Phone: ${this.phone}`, 10, 40);
    doc.text(`Address: ${this.address}`, 10, 50);
    doc.text(`LinkedIn: ${this.linkdin}`, 10, 60);
    doc.text(`Website: ${this.website}`, 10, 70);
    
    doc.text ('Qualifications', 10, 90);
    let num = 100;
    this.qualifications.forEach((qualification, index) => {
      doc.text(`Qualification ${index + 1}:`, 10, num);
      doc.text(`School: ${qualification.school}`, 20, num + 10);
      doc.text(`Degree: ${qualification.degree}`, 20, num + 20);
      doc.text(`Year: ${qualification.year}`, 20, num + 30);
      num += 40;
    });

    doc.text('Skills:', 10, num);
    doc.text(`Skill 1: ${this.skill1}`, 20, num + 10);
    doc.text(`Skill 2: ${this.skill2}`, 20, num + 20);
    doc.text(`Skill 3: ${this.skill3}`, 20, num + 30);

    // Save> PDF document
    doc.save('portfolio.pdf');
  }
  
 
  }



  // save() {
  //   let studtemp = {
  //     Name: this.name, Email: this.email, Address: this.address, Phone: this.phone,
  //     LinkdIn: this.linkdin, Website: this.website, School: this.school, Degree: this.degree, Year: this.year
  //   }
  //   this.stud.push(studtemp);

  //   console.log(studtemp);



