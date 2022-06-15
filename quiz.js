
const Question=[{
    id:0,
    q:"What is the capital of India",
    a:[
        {text:"Punjab",iscorrect:false},
        {text:"New Delhi",iscorrect:true},
        {text:"Dehradun",iscorrect:false},
        {text:"kolkata",iscorrect:false}
    ]
},
{
    id:1,
    q:"What is the National animal of India",
    a:[
        {text:"Peacock",iscorrect:false},
        {text:"Lion",iscorrect:false},
        {text:"Bengal Tiger",iscorrect:true},
        {text:"Elephant",iscorrect:false}
    ]
},
{
    id:2,
    q:"Value of 5+2*3",
    a:[
        {text:"21",iscorrect:false},
        {text:"17",iscorrect:false},
        {text:"11",iscorrect:true},
        {text:"Invalid expression",iscorrect:false}
    ]
},
{
    id:3,
    q:"Capital of USA",
    a:[
        {text:"Newyork",iscorrect:false},
        {text:"California",iscorrect:false},
        {text:"London",iscorrect:false},
        {text:"Washington",iscorrect:true}
    ]
},
{
    id:4,
    q:"Capital of NewZealand is ",
    a:[{text:"Canberra",iscorrect:false},
    {text:"Wellington",iscorrect:true},
    {text:"Sydney",iscorrect:false},
    {text:"Jakarta",iscorrect:false}
     ]
},
{
    id:5,
    q:"National Game of NewZealand is",
    a:[
        {text:"Cricket",iscorrect:false},
        {text:"Baseball",iscorrect:false},
        {text:"RugbyUnion",iscorrect:true},
        {text:"IceSkating",iscorrect:false}
    ]
},
{
    id:6,
    q:"5*5 is",
    a:[
        {text:"5",iscorrect:false},
        {text:"10",iscorrect:false},
        {text:"25",iscorrect:true},
        {text:"15",iscorrect:false}
    ]
},
{
    id:7,
    q:"16*9=",
    a:[
        {text:"25",iscorrect:false},
        {text:"142",iscorrect:false},
        {text:"148",iscorrect:false},
        {text:"144",iscorrect:true}
    ]
},
{
    id:8,
    q:"1*1*1*1*1*1.....100times =",
    a:[
        {text:"100",iscorrect:false},
        {text:"106",iscorrect:false},
        {text:"1",iscorrect:true},
        {text:"Cant be determined",iscorrect:false}
    ]
},
   {
    id:9,
    q:"This Quiz is",
    a:[
        {text:"Very hard",iscorrect:false},
        {text:"Calculations are very lengthy",iscorrect:false},
        {text:"Requires high knowledge and thinking power",iscorrect:false},
        {text:"All the above options are correct",iscorrect:true}
    ]
   }
];
function stop()
{
    var count=0;
     for(let i=0;i<4;i++)
     {
         if(selected[i]==true)
          count=count+1;
     }
     var o1=document.getElementById("opp1");
    var o2=document.getElementById("opp2");
    var o3=document.getElementById("opp3");
    var o4=document.getElementById("opp4");
    var op1= document.getElementById("opt1");
    var op2= document.getElementById("opt2");
    var op3= document.getElementById("opt3");
    var op4= document.getElementById("opt4");
    var o=document.getElementById("opt");
    var nav=document.getElementById("navi");
    var qu=document.getElementById("que");
    var n=document.getElementById("nxt");
    var p=document.getElementById("prev");
     qu.style.display="none";
     o1.style.display="none";
     o2.style.display="none";
     o3.style.display="none";
     o4.style.display="none";
     op1.style.display="none";
     op2.style.display="none";
     op3.style.display="none";
     op4.style.display="none";
     n.style.display="none";
     p.style.display="none";
     qu.style.borderStyle="";
     qu.style.borderColor="";
     o.style.borderStyle="";
     o.style.borderColor="";
     nav.style.borderStyle="";
     nav.style.borderColor="";
     nav.style.display="none";
     var str="";
     if(count<=3)
      str="poor";
      else if(count<=5)
      str="Average";
      else if(count<=7)
       str="Good";
       else if(count<=9)
       str="Very Good";
       else 
       str="Excellent";
    document.getElementById("result").innerText="Your final Score is "+count+"/10   ("+str+")";
    document.getElementById("result").style.fontSize="60px";
    document.getElementById("result").style.color="red";
    document.getElementById("result").style.textAlign="center";
    document.getElementById("sub").style.display="none";
    };
var selected=[false,false,false,false,false,false,false,false,false,false];
var option=[0,0,0,0,0,0,0,0,0,0];
var end=new Date("June 14,2022 17:56");
var begin=new Date("June 13,2022,16:45");
 function iterate(id)
{
    
    document.getElementById("sta").style.display="none";
    document.getElementById("result").innerText="";
    var n=document.getElementById("nxt");
    var p=document.getElementById("prev");
    var o1=document.getElementById("opp1");
    var o2=document.getElementById("opp2");
    var o3=document.getElementById("opp3");
    var o4=document.getElementById("opp4");
    
    var op1= document.getElementById("opt1");
    var op2= document.getElementById("opt2");
    var op3= document.getElementById("opt3");
    var op4= document.getElementById("opt4");
    if(option[id]!=0)
    {
        if(option[id]==1)
        {
            op1.style.backgroundColor="blue";
        op2.style.backgroundColor="";
        op3.style.backgroundColor="";
        op4.style.backgroundColor="";
        }
        else if(option[id]==2)
        {
            op2.style.backgroundColor="blue";
        op1.style.backgroundColor="";
        op3.style.backgroundColor="";
        op4.style.backgroundColor="";
        }
        else if(option[id]==3)
        {
            op3.style.backgroundColor="blue";
            op1.style.backgroundColor="";
            op2.style.backgroundColor="";
            op4.style.backgroundColor="";
        }
        else {
            op4.style.backgroundColor="blue";
            op1.style.backgroundColor="";
            op3.style.backgroundColor="";
            op2.style.backgroundColor="";
        }
    }
    else{
        op1.style.backgroundColor="";
    op2.style.backgroundColor="";
    op3.style.backgroundColor="";
    op4.style.backgroundColor="";
    }
    op1.style.display="inline-block";
    op2.style.display="inline-block";
    op3.style.display="inline-block";
    op4.style.display="inline-block";
    o1.style.display="inline-block";
    o2.style.display="inline-block";
    o3.style.display="inline-block";
    o4.style.display="inline-block";
    
     if(id==0)
    {
        var pre=document.getElementById("prev");
        pre.style.display="None";
    }
    else{
        document.getElementById("prev").style.display="inline-block";
    }
    document.getElementById("sub").style.display="inline-block";
     if(id==9)
    {
        var nst=document.getElementById("nxt");
        nst.style.display="None";
    }
    else{
        document.getElementById("nxt").style.display="inline-block";
    }
   
    var o=document.getElementById("opt");
    o.style.borderStyle="solid";
    o.style.borderColor="green";
    var nav=document.getElementById("navi");
    nav.style.borderStyle="solid";
    nav.style.borderColor="green";
     var qu=document.getElementById("que");
      qu.style.borderStyle="solid";
      qu.style.borderColor="black";
     qu.innerText=(id+1)+")"+Question[id].q;
     document.getElementById("opp1").innerText=Question[id].a[0].text;
     document.getElementById("opp2").innerText=Question[id].a[1].text;
     document.getElementById("opp3").innerText=Question[id].a[2].text;
     document.getElementById("opp4").innerText=Question[id].a[3].text;
    
     
     op1.onclick=()=>{
         
        op1.style.backgroundColor="blue";
        op2.style.backgroundColor="";
        op3.style.backgroundColor="";
        op4.style.backgroundColor="";
        selected[id]=Question[id].a[0].iscorrect;
        option[id]=1;
     };
     op2.onclick=()=>{
        op2.style.backgroundColor="blue";
        op1.style.backgroundColor="";
        op3.style.backgroundColor="";
        op4.style.backgroundColor="";
       selected[id]=Question[id].a[1].iscorrect;
       option[id]=2;
         
    };
    op3.onclick=()=>{
        
       op3.style.backgroundColor="blue";
       op1.style.backgroundColor="";
       op2.style.backgroundColor="";
       op4.style.backgroundColor="";
       selected[id]=Question[id].a[2].iscorrect;
       option[id]=3;
    };
    op4.onclick=()=>{
        
       op4.style.backgroundColor="blue";
       op1.style.backgroundColor="";
       op2.style.backgroundColor="";
       op3.style.backgroundColor="";
       selected[id]=Question[id].a[3].iscorrect;
    option[id]=4;
    };
    document.getElementById("sub").onclick=()=>{
        var count=0;
     for(let i=0;i<10;i++)
     {
         if(selected[i]==true)
          count=count+1;
     }
     qu.style.display="none";
     o1.style.display="none";
     o2.style.display="none";
     o3.style.display="none";
     o4.style.display="none";
     op1.style.display="none";
     op2.style.display="none";
     op3.style.display="none";
     op4.style.display="none";
     n.style.display="none";
     p.style.display="none";
     qu.style.borderStyle="";
     qu.style.borderColor="";
     o.style.borderStyle="";
     o.style.borderColor="";
     nav.style.borderStyle="";
     nav.style.borderColor="";
     var str="";
     if(count<=3)
      str="poor";
      else if(count<=5)
      str="Average";
      else if(count<=7)
       str="Good";
       else if(count<=9)
       str="Very Good";
       else 
       str="Excellent";
     document.getElementById("time").style.display="none";
    document.getElementById("result").innerText="Your final Score is "+count+"/10   ("+str+")";
    document.getElementById("result").style.fontSize="60px";
    document.getElementById("result").style.color="red";
    document.getElementById("result").style.textAlign="center";
    document.getElementById("sub").style.display="none";
    };
    n.onclick=()=>{
        iterate(id+1);
    };
     p.onclick=()=>{
         iterate(id-1);
     }
    }
    function func(){
       var final=new Date();
       
        var curr=new Date();
        final.setMinutes(curr.getMinutes()+1);
        var start=new Date("June 14,2022 21:53");
        if(curr.getTime()<start.getTime())
         {
             document.getElementById("result").innerText="Quiz currently not available";
             return;
         }
         else if(curr.getTime()>final.getTime())
         {
            document.getElementById("result").innerText="Not available";
            return;
         }
         
         var x=setInterval(function()
         {
             var now=new Date();
             var distance=final-now;
             var days=Math.floor(distance/(1000*60*60*24));
             var hours=Math.floor((distance%(1000*60*60*24))/(1000*60*60));
             var minutes=Math.floor((distance%(1000*60*60))/(1000*60));
             var seconds=Math.floor((distance%(1000*60))/1000);
             document.getElementById("time").innerText="Time Remaining "+hours+"h-"+minutes+"m-"+seconds+"s";
             if(distance<0)
             {
                 clearInterval(x);
                 document.getElementById("time").innerText="Time Up!!!";
                 const timeout=setTimeout(stop,1000);
                 return;
             }
             
         },1000);
        iterate(0);
        }
     function show()
     {
        document.getElementById("Q").style.fontSize="60px";
        document.getElementById("U").style.fontSize="60px";
        document.getElementById("I").style.fontSize="60px";
        document.getElementById("Z").style.fontSize="60px";
     }
       
    

