const cityname=document.getElementById('cityname');
const submitbtn=document.getElementById('submitbtn');
const city_name=document.getElementById('city_name');
const temp_status=document.getElementById('temp_status');
const temp_real_val=document.getElementById('temp');
const day=document.getElementById('day');
const today_data=document.getElementById('today_data');
const datahide=document.querySelector('.middle_layer');
const getInfo = async(event)=>{
    event.preventDefault();
    let cityVal=cityname.value;
    //console.log(city_name.innerText);
    if(cityVal==="")
    {
        city_name.innerText=`Plz enter your City name first`;
        datahide.classList.add('data_hide');
    }
    else{
        try{
            let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=3890b1c67d04fe7234498cbf7f308057`;
            const response=await fetch(url);
            const data=await response.json();
            const arrData=[data];
            city_name.innerText=`${arrData[0].name},${arrData[0].sys.country}`;
            temp_real_val.innerText=arrData[0].main.temp+" °C";
            const pic=arrData[0].weather[0].main;
         
            if(pic=="Clouds")
            {
                temp_status.innerHTML="<i class='fas fa-cloud' style='color:#f1f2f6;'></i>";
            }
            else if(pic=="Rain")
            {
                temp_status.innerHTML="<i class='fas fa-rain' style='color:#a4b0be;'></i>";
            }
            else
            {
                temp_status.innerHTML="<i class='fas fa-sun' style='color:#eccc68;'></i>";
            }
            datahide.classList.remove('data_hide');
        }
        catch{
            datahide.classList.add('data_hide');
            city_name.innerText=`Plz enter your City name properly`;
        }


    }
}
const d=new Date();
const dayy=d.getDay();
var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
var monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
day.innerText=daylist[dayy];
var date=d.getDate()+"  "+monthNames[(d.getMonth())];
today_data.innerText=date;
submitbtn.addEventListener('click',getInfo);