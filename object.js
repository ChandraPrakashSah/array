
          
        //   let obj={
        //       name:"chandra",
        //       age:22,
        //       printName(){
        //            console.log(this.name+" "+this.age);
        //       }

        //   }
        //   obj.printName();
        //   obj.title=function(){
            
        //   }
        //   console.log(obj);

            //    function  Course(title){
            //          this.title=title;
            //          this.print=function(){
            //               console.log(this.title)
            //          }
            //    }  
            //    const obj=new Course('javascript');
                
            //      console.log(delete obj.title);
            //    obj.print();

            //primitive datatypes

           // let number=10;


             // pass by value

            // let number2=number;
            // number=15;
            // console.log(number);
            // console.log(number2)

            // reference datatypes

            // let obj={number:10};
            // let obj1=obj;
            // obj.number=15;
            // console.log(obj);
            // console.log(obj1)
          

            let obj={
                  title:"javascript"
            }

            //clone object
            // let obj1={...obj};
            // console.log(obj1)


            // let obj1=Object.assign({},obj)
            // obj1.title="c++"
            // console.log(obj)
            // console.log(obj1)



            //////////////////////////////////////////
           // class , constructor and inheritance //
           //////////////////////////////////////////


            class Students{
                constructor(name,age,cls){
                    this.name=name;
                    this.age=age;
                    this.cls=cls;
                }
                //intance method
                biodata(){
                        return `hi i am ${this.name}, my age is ${this.age}  , i am reading in class  ${this.cls}  `
                    }
        
                        }
            class Person  extends Students{
                    constructor(name,age,cls,game){
                        super(name,age,cls,game);
                        this.game=game;
                    }
                    //intance method
                    playBiodata(){
                            return `${super.biodata()} ,  and i like to play ${this.game}`
                    }
                }
                const name=new Person("chandra",22,"bca",'cricket');
                console.log(name.playBiodata());
