import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonService } from 'src/app/service/person.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {

  constructor(private readonly personService : PersonService,
              private readonly formBuilder : FormBuilder) { }

  personList = this.personService.personList.asObservable()
  personForm !: FormArray
  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.personForm = this.formBuilder.array(this.initDummyData())
    this.personForm.disable()
  }
  get_control(index : number){
    return this.personForm.controls[index] as FormGroup;
  }
  onAddNewControl(){
    const group = this.formBuilder.group({
      'id':[''],
      'designation':['', [Validators.required]],
      'min_age':[null, [Validators.required]],
      'max_age':[null, [Validators.required]]
    })
    this.personForm.push(group)
  }

  onDelete(index : number){
    let form = this.personForm as FormArray;
    form.removeAt(index)
  }

  onEdit(index:number){
    let controls = this.personForm.controls;
    controls[index].enable()
  }
  initDummyData(){
    const adulte = this.formBuilder.group({
      'id':'1',
      'designation':'Adulte',
      'min_age':18,
      'max_age':null
    })
    const adolescent = this.formBuilder.group({
      'id':'2',
      'designation':'Adolescent',
      'min_age':12,
      'max_age':17
    })
    const enfant = this.formBuilder.group({
      'id':'3',
      'designation':'Enfant',
      'min_age':3,
      'max_age':11
    })
    const baby = this.formBuilder.group({
      'id':'4',
      'designation' : 'Bébé',
      'min_age':0,
      'max_age':2
    })

    const arry = [];
    arry.push(adulte)
    arry.push(adolescent)
    arry.push(enfant)
    arry.push(baby)
    return arry
  }

  initData(){
    this.personService.get().subscribe(
      data=>{
        this.personService.emitPersonList(data['data'])
        for (const element of data['data']) {
          const group = this.formBuilder.group({
            'id':[{value: element['id'], disabled:true}],
            'designation':[{value:element['designation'], disabled: true}, [Validators.required]],
            'min_age':[{value:element['min_age'], disabled:true}, [Validators.required]],
            'max_age':[{value:element['max_age'], disabled:true}, [Validators.required]]
          })
          this.personForm.push(group)
        }
      }
    )
  }
}
