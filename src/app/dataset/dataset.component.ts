import { Component, Input, ViewChild, AfterViewInit, ElementRef} from '@angular/core';
import { fromEvent } from 'rxjs';
import { switchMap, takeUntil, pairwise } from 'rxjs/operators'
import { environment } from 'src/environments/environment';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-dataset',
  templateUrl: './dataset.component.html',
  styleUrls: ['./dataset.component.css']
})
export class DatasetComponent implements AfterViewInit {

  constructor(private http: HttpClient) { }

  isClicked:any = false;
  className:any;
  
  check(){
    console.log(this.isClicked)
  }
  objects=[
    {
      objectId:1,
      objectName:'Pencil',
    },{
      objectId:2,
      objectName:'Sun',
    },{
      objectId:3,
      objectName:'Flower',
    },{
      objectId:4,
      objectName:'Umbrella',
    },{
      objectId:5,
      objectName:'Spoon',
    },{
      objectId:6,
      objectName:'Tree',
    },{
      objectId:7,
      objectName:'Mug',
    },{
      objectId:8,
      objectName:'House',
    },{
      objectId:9,
      objectName:'Bird',
    },{
      objectId:10,
      objectName:'Hand',
    }

  ]
  @ViewChild('myCanvas') public canvas: ElementRef;
  
    
  @Input() public width=500;
  @Input() public height=500;

  private ctx: CanvasRenderingContext2D;

  x = "black";
  y = 2; 


  ngAfterViewInit(){
    const canvasEl: HTMLCanvasElement = this.canvas.nativeElement;
    this.ctx = <CanvasRenderingContext2D> canvasEl.getContext('2d');
   // canvasEl.width=this.width;
   // canvasEl.height=this.height;
    this.ctx.lineWidth =this.y;
    this.ctx.strokeStyle=this.x;
    this.eventcapture(canvasEl);

  }

  private eventcapture(canvasEl: HTMLCanvasElement){
  
    fromEvent(canvasEl, 'mousedown')
    .pipe(
      switchMap((e)=>{
        return fromEvent(canvasEl,'mousemove')
        .pipe(
          takeUntil(fromEvent(canvasEl,'mouseup')),
          takeUntil(fromEvent(canvasEl,'mouseleave')),
          pairwise()
        )
      })
    )
    .subscribe((res: [MouseEvent,MouseEvent])=>{
      const rect=canvasEl.getBoundingClientRect();
      const prevPos={
        x:res[0].clientX - rect.left,
        y:res[0].clientY - rect.top
      };
      const currPos={
        x: res[1].clientX - rect.left,
        y: res[1].clientY - rect.top
      };
      this.draw(prevPos, currPos);
    });
    
  }
  object='';
  private draw(prevPos: {x: number, y: number}, currPos: {x: number, y: number}) {
    if(!this.ctx){ return;}

    //this.pathHistory.push([prevPos, currPos]);
    this.ctx.beginPath();
    if(prevPos){
    
    this.ctx.moveTo(prevPos.x, prevPos.y);
    this.ctx.lineTo(currPos.x, currPos.y);
    this.ctx.stroke();
    }
 }

  erase() {
        	
    this.ctx.clearRect(0, 0, this.width, this.height);
  }
  
  not_updated(){
  }

  object_select(s:string){
    this.className=s;
    console.log(this.className)
    this.object='Selected '+this.className;
  }
  
  saveimage(){
    if (this.className == null){
      console.log('Not Updated!')
      this.not_updated()
      this.object='Select a class';
      return;
    }
    var canvas: HTMLCanvasElement=this.canvas.nativeElement;
    var date = Date.now();
    var filename = this.className + '_' + date + '.png';
    var image = canvas.toDataURL('image/png');
    // console.log(image);
    this.http.post(environment.SERVER_URL + '/upload_canvas', {filename, image, className: this.className}, {responseType:'text'}).subscribe((res:any)=>{
    console.log(res, this.className)
    this.erase();
    this.object=res;
    this.className=null;
    })
  }   

  
}
