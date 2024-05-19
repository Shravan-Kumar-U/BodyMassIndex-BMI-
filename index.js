const form = document.querySelector("form");

form.addEventListener("submit",(e)=>{
    e.preventDefault();

    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const result = document.querySelector("#result");
    const cond = document.querySelector(".condition");
    if(height==='' || height<0 || isNaN(height)){
        result.innerHTML=`<h3>Please Enter the valid height ${height}</h3>`
    }else if(weight==='' || weight<0 || isNaN(weight)){
        result.innerHTML=`<h3>Please Enter the valid height ${weight}</h3>`
    }else{
        const bmi = (weight/((height*height)/10000)).toFixed(2);
        result.innerHTML=`<h2>${bmi}</h2>`
        
        if(bmi<18.6){
            cond.innerHTML=`<h2>You are Under Weight</h2>`;
        }
        else if(18.6<=bmi<=24.9){
            cond.innerHTML=`<h2>Normal Range</h2>`;
        }
         if(bmi>24.9){
            cond.innerHTML=`<h2>Over Weight</h2>`;
        }
    }
})



