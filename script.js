//this varibale defined and used by query selector 
var screen=document.querySelector('#screen');
var btn=document.querySelectorAll('.bn');
var temp=document.getElementById('temp');
// this is loop display that arithmatic operator to represent by clicking on button
for(item of btn)
{
    item.addEventListener('click',(e)=>{
        btntext=e.target.innerText;
        var spos=screen.value; 
        if(btntext =='×')
        {   
            btntext='*';
            duplication();
        }
        if(btntext=='÷')
        {
            btntext='/';
            duplication();
        }
        if(btntext=='+')
        {
            if(spos.charAt(0)=='+'){
                btntext=""
            }else{
                btntext='+';
                duplication();
            }
        }
        if(btntext=='-')
        {
            btntext='-';
 
            duplication();
        }
        if(btntext=='(')
        {
            btntext='(';
 
            duplication();
        }
        if(btntext==')')
        {
            btntext=')';
 
            duplication();
        }
        if(btntext=='mode')
        {
            btntext='%';
 
            duplication();
        }
       
      
        screen.value+=btntext;
    });
}
//
function duplication(){
    var len=screen.value.substr(screen.value.length-1,1);
    var lastchar=screen.value.length-1;
    var spos=screen.value; 
    if(spos.charAt(0) == '+' || spos.charAt(0) == '*' || spos.charAt(0)== '/' ){
        str = spos.replace("+","")
        screen.value=str;
        console.log('removed');
    }
    if(!isNaN(len)){      
        console.log("not a number")      
    }else{
        console.log("number")   
        if(len.charAt(lastchar)== '+' || len.charAt(lastchar)== '-' || len.charAt(lastchar)== '*' || len.charAt(lastchar)== '/' ){
           
        }else{
           // btntext= '*';
            var len1=screen.value.substr(0,screen.value.length-1);
            screen.value=len1;    
      }        
    }
}

let equal=()=>{
    temp.innerText=screen.value;
    console.log(temp.innerHTML);
    screen.value=eval(screen.value);
}

//this is function which is indicates that when user press any key
function keycode(e){
    //the e.key==13 which is enter key value 
    if(e.keyCode == 13){
        temp.innerText=screen.value;
        console.log(temp.innerText);
        screen.value=eval(screen.value)
    }
    //the e.key==08 which is backspace key value 
    if(e.keyCode == 08){
        screen.value=screen.value.substr(0,screen.value.length-1);
        temp.innerText="";
    }
    if(e.keyCode ==43 ){
        console.log('print'); 
        btntext='';   
        duplication();
        screen.value+=btntext.substr(0,screen.value.length-1);
    } 
    // e.preventDefault();

     if(e.keyCode >=64 && e.keyCode <=122){
        console.log(`${e.keyCode} Is not valid`);
   } 
 }

function backspc()
{
    screen.value=screen.value.substr(0,screen.value.length-1);
    temp.innerText="";
}
//close tab
let closewindow=()=>{
    let b=confirm("Are you sure want to close tha tab")
    if(b){
        window.close();
    }else{
        return
    }
} 
// if you are click on body anywhere the focus is only on textbox
let foc = ()=> document.getElementById("screen").focus();

//pi function
let pi=()=> screen.value=3.14159265359;

//e function
let e=()=>screen.value=2.71828182845;

//fact function
let fac=()=>{
    var i,number,f;
    f=1
    number=screen.value;
    for(i=1; i<=number; i++){
        f=f*i;
    }
    i=i-1;
    screen.value=f;
}
//ln function
let ln=()=> screen.value=Math.log(screen.value)
//log function
let log =()=> screen.value=Math.log10(screen.value)

//root function
let root=()=> screen.value=Math.sqrt(screen.value,2)

//sqrt function
let sqrt=()=>screen.value=(screen.value*screen.value)

//power function 10 to x
let powe=()=> screen.value=Math.pow(10,screen.value)

//power function x to y
let pow=()=> screen.value=Math.pow(screen.value,screen.value)

//mod function 
let mod=()=> screen.value=`${screen.value}%`

//exp function
let exp=()=> screen.value=Math.exp(screen.value)

//1/x function
let divide=()=>screen.value=`1/${screen.value}`

//abs function
let abs = ()=> screen.value=Math.abs(screen.value)
var flag=0;

//neg+positive operations
let posneg=()=>{

    if(flag==0){
        if(screen.value==0){console.log('null value')}else{
        screen.value=`-${screen.value}`
        console.log('-');
        flag=1;
        }
    }else{
        screen.value=`${screen.value.substr(1,screen.value.length-1)}`
        console.log('+');
        flag=0;
    }

}

//sin function
let sin=()=>{
    var deg = screen.value * Math.PI / 180;
    console.log(deg);
   screen.value=Math.sin(deg);
}

//cos function
let cos=()=> {
    var deg = screen.value * Math.PI / 180;
    screen.value=Math.cos(deg);
}

//tan function
let tan=()=>{
    var deg = screen.value * Math.PI / 180;
    screen.value=Math.tan(deg);
} 

//sec function
let sec=()=>{
    var deg = screen.value * Math.PI / 180;
    console.log(deg);
    screen.value=(1/(Math.sin(deg)));
}

//csc function
let csc=()=>{
    var deg = screen.value * Math.PI / 180;
    console.log(deg);
    screen.value=(1/(Math.cos(deg)));
}
//csc function
let cot=()=>{
    var deg = screen.value * Math.PI / 180;
    console.log(deg);
    screen.value=(1/(Math.cos(deg)));
}

//random function
let rand=()=> screen.value=Math.random()

//ceil function
let ceil=()=> screen.value=Math.ceil(screen.value)

//floor function
let floor=()=> screen.value=Math.floor(screen.value)

//memory function
let memory=[];
var m_value=0;
var ms_remove=0;
let btnmc=document.getElementById('btnmc');
let btnmr=document.getElementById('btnmr');
//this is memory store function which is store a value in array
let ms=val=> {
    btnmc.disabled =false;
    btnmr.disabled=false;
    memory.push(val);
    for(i=0; i<memory.length; i++){
       // m_value =+ memory[i];
       console.log(memory[i]);
    }
   
}
//this is memory add function which is added a value in array
let madd=val=>{
    memory.push(val);
    for(i=0; i<memory.length; i++){
        //m_value += memory[i];
        console.log(memory[i]);
    }
   
}
//sum()
let sum=()=>{
    for(i=0; i<memory.length; i++){
        m_value +=parseInt(memory[i]);
    }
    return m_value;
}
//this is memory remove function which is remove a value in array from last
let mrev=val=>{
    console.log(val);
    sum();
    ms_remove=((m_value) - (val));
}
//this is memory recall function which is display a number from array
let mrecall=()=>{
    screen.value='';
    sum();
    console.log(ms_remove);
    if(ms_remove){
    screen.value=ms_remove
    ms_remove=0;
    }
    else
    screen.value=m_value
}
//this is memory clear function
let mclear=()=>{
    screen.value='';
    btnmc.disabled =true;
    btnmr.disabled=true;
    memory=[];
    console.log(memory)
}