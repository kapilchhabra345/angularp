

import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Ibiodata } from '../biodatas';
import { BiodataService } from './../biodata.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts:any[];
  
  private url='https://jsonplaceholder.typicode.com/posts';
  
  constructor(private http :HttpClient) {
   this.http.get(this.url)
  .subscribe((response) => {
   // console.log(response);
 const data=JSON.stringify(response);
 // console.log(data);
  this.posts=JSON.parse(data);
  
  // this.products=response
  })
   }

    
   createPostC(Dtitle){
  alert(Dtitle.value);

  let post ={title:Dtitle.value};
  // const data=JSON.stringify(post)
     this.http.post(this.url,JSON.stringify(post))
     .subscribe((response)=>{
       console.log(response);
       post['id']=JSON.parse(response.id);
       this.posts.splice(0,0,post);
        
       
     })
      
   }

   users=[];
   createUser(devalue){
      this.users.push({
        name:devalue.value
      })
   }
   

//public PShowdata: any;


//public book:String='kapil';

//constructor(private pdata:BiodataService) { }




  ngOnInit(): void {
 // alert(this.book);
   // this.pdata.createPost(this.book).subscribe(dataP=>this.PShowdata=dataP);
  }

  //  onSave(evt){
  // console.warn(evt);
  // }


 // onSave(title){
    //console.warn(title);
  // this.pdata.createPost(title).subscribe(dataP=>this.PShowdata=dataP);
  //  this.pdata.createPost(title).subscribe(data=>{
  //    console.log(data,"data from db");
  //  },
  //  err=>{
  //    console.error(err,"errpr");
  //  }
  // );

  //}


}
