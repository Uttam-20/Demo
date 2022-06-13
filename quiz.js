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
}
]

var selected=[false,false,false,false];
function iterate(id)
{
    document.getElementById("sta").style.display="none";
    document.getElementById("result").innerText="";
    document.getElementById("evaluate").style.display="inline-block";
    var o1=document.getElementById("opp1");
    var o2=document.getElementById("opp2");
    var o3=document.getElementById("opp3");
    var o4=document.getElementById("opp4");
    o1.style.display="inline-block";
    o2.style.display="inline-block";
    o3.style.display="inline-block";
    o4.style.display="inline-block";
    var op1= document.getElementById("opt1");
    var op2= document.getElementById("opt2");
    var op3= document.getElementById("opt3");
    var op4= document.getElementById("opt4");
    op1.style.display="block";
    op2.style.display="block";
    op3.style.display="block";
    op4.style.display="block";
    op1.style.backgroundColor="";
    op2.style.backgroundColor="";
    op3.style.backgroundColor="";
    op4.style.backgroundColor="";
     if(id==0)
    {
        var pre=document.getElementById("prev");
        pre.style.display="None";
    }
    else{
        document.getElementById("prev").style.display="inline-block";
    }
     if(id==3)
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
    
     
     op1.addEventListener("click",()=>{
         
        op1.style.backgroundColor="blue";
        op2.style.backgroundColor="";
        op3.style.backgroundColor="";
        op4.style.backgroundColor="";
        selected[id]=Question[id].a[0].iscorrect;
     });
     op2.addEventListener("click",()=>{
        op2.style.backgroundColor="blue";
        op1.style.backgroundColor="";
        op3.style.backgroundColor="";
        op4.style.backgroundColor="";
       selected[id]=Question[id].a[1].iscorrect;
    });
    op3.addEventListener("click",()=>{
        
       op3.style.backgroundColor="blue";
       op1.style.backgroundColor="";
       op2.style.backgroundColor="";
       op4.style.backgroundColor="";
       selected[id]=Question[id].a[2].iscorrect;
    });
    op4.addEventListener("click",()=>{
        
       op4.style.backgroundColor="blue";
       op1.style.backgroundColor="";
       op2.style.backgroundColor="";
       op3.style.backgroundColor="";
       selected[id]=Question[id].a[3].iscorrect;
    });
    document.getElementById("sub").addEventListener("click",()=>{
        var count=0;
     console.log(selected[0]);
    //document.getElementById("result").innerText=count;
    });
    evaluate.addEventListener("click",()=>{
        if(selected[id]==true)
        {
            document.getElementById("result").innerText="Correct";
        }
        else
        document.getElementById("result").innerText="Incorrect";
    });
    
    var n=document.getElementById("nxt");
    n.addEventListener("click",()=>{
        iterate(id+1);
    });
     var p=document.getElementById("prev");
     p.addEventListener("click",()=>{
         iterate(id-1);
     })
}
