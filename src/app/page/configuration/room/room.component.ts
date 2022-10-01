import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RoomService } from 'src/app/service/room.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {

  
  constructor(private readonly formBuilder : FormBuilder,
              private readonly roomService : RoomService) { }
  roomForm !: FormArray
  roomList = this.roomService.roomList.asObservable();
  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.roomForm = this.formBuilder.array(this.initDummyData());
    this.roomForm.disable()
    // this.initData();
  }
  get_control(index:number){
    return this.roomForm.controls[index] as FormGroup;
  }
  initDummyData(){
    const room = this.formBuilder.group({
      'id':'RM01',
      'designation':'RM01',
      'type_room_id':'1',
      'state':1
    })
    const room2 = this.formBuilder.group({
      'id':'RM02',
      'designation':'RM02',
      'type_room_id':'2',
      'state':2
    })
    const room3 = this.formBuilder.group({
      'id':'RM03',
      'designation':'RM03',
      'type_room_id':'3',
      'state':2
    })
    const room4 = this.formBuilder.group({
      'id':'RM04',
      'designation':'RM04',
      'type_room_id':'1',
      'state':1
    })

    const arry= []
    arry.push(room);
    arry.push(room2);
    arry.push(room3);
    arry.push(room4);
    return arry
  }
  initData(){
    this.roomService.get().subscribe(
      data=>{
        this.roomService.emitRoomList(data['data'])
        for (const element of data['data']) {
          const group = this.formBuilder.group({
            'id':[{value: element['id'], disabled:true}, [Validators.required]],
            'designation':[{value: element['designation'], disabled:true}, [Validators.required]],
            'type_room_id': [{value:element['type_room_id'], disabled:true}, [Validators.required]],
            'state': [{value:element['state'],disabled:true}, [Validators.required]]
          })
          this.roomForm.push(group)
        }
      }
    )
  }

  onAddNewControl(){
    const group = this.formBuilder.group({
      'id':[null],
      'designation':['', [Validators.required]],
      'type_room_id':['', [Validators.required]],
      'state': ['', [Validators.required]]
    })
    console.log(group)
    this.roomForm.push(group)
  }
  
  onEdit(index:number){
    let controls = this.roomForm.controls;
    controls[index].enable()
  }
  onDelete(index : number){
    let form = this.roomForm as FormArray;
    form.removeAt(index)
  }
}
