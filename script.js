const url = 'https://api.data.gov.in/resource/5dd7e230-a4d7-4457-afab-829fb6b41337?api-key=579b464db66ec23bdd00000192134001264e410a44c1466a00ef1a88&format=json&limit=40';
let fetchData = async () => {
    let response = await fetch(url);
    let data = await response.json();
    let records = data.records;
    return records;
}


let loaderr = (isloading) => {
    let loader = document.getElementById('preloader');
    let loader2 = document.getElementById('container')
    let loa = document.getElementById('loa');
    i = 0;
    if (!isloading) {
        loader.style.display = "none";
        loader2.style.display = "flex";
    } else {
        loader.style.display = "flex";
        loader2.style.display = "none";
        
    
}

let move = async () => {
    console.log('getting data');
    loaderr(true);
    let records = await fetchData();
    console.log('data Fetched successfully');
    
    let opt = document.querySelector(".dd");
    let know = document.querySelector('.selection');
    records.forEach((record) => {
        let newOption = document.createElement('option');
        let cont = record.name_of_the_district;
        let contVal = record.s_no - 1;
        if (cont === 'Tamil Nadu') {
            newOption.innerHTML = 'All';
            newOption.value = '37';
        } else {
            newOption.innerHTML = cont;
            newOption.value = contVal;
        }
        opt.appendChild(newOption);
    })
    loaderr(false);
    dist = 0; 
    opt.addEventListener('click', (evt) => {
            dist = evt.target.value;
    })
    sele = 'o2'; 
    know.addEventListener('click', (evt) => {
            sele = evt.target.value;
    })
    let n = document.querySelector('.btn');
    n.addEventListener('click', () => {
        checkData(dist, sele); 
    });
}
let checkData = async (dist , sele) => {
    loaderr(true);
    let he1 = document.getElementsByClassName('O2');
    let he2 = document.getElementsByClassName('nonO2');
    let he3 = document.getElementsByClassName('ICU');
    let he4 = document.getElementsByClassName('total');
    for(let element of he1){
        element.style.display = 'none' ;
    }
    for(let element of he2){
        element.style.display = 'none' ;
    }
    for(let element of he3){
        element.style.display = 'none' ;
    }
    for(let element of he4){
        element.style.display = 'none' ;
    }
    if(sele === 'o2'){
        let records = await fetchData();
        document.getElementById('o2er').innerHTML = records[dist].earmarked_beds_for_covid_with_o2_supply_under_chc_and_cdh_as_on_20_05_2021;
        document.getElementById('o2oc').innerHTML = records[dist].occupancy_of_beds_with_o2_supply_under_chc_and_cdh_as_on_20_05_2021;
        document.getElementById('o2vc').innerHTML = records[dist].vacancy_of_beds_with_o2_supply_under_chc_and_cdh_as_on_20_05_2021;
        console.log('total printed succesfully');
        let hell = document.getElementsByClassName('O2');
        for(let element of hell){
                    element.style.display = 'block' ;
                 }
    } else if(sele === 'nono2'){
        let records = await fetchData();
        document.getElementById('no2er').innerHTML = records[dist].earmarked_beds_for_covid_with_non_o2_supply_under_chc_and_cdh_as_on_20_05_2021;
        document.getElementById('no2oc').innerHTML = records[dist].occupancy_of_beds_with_non_o2_supply_under_chc_and_cdh_as_on_20_05_2021;
        document.getElementById('no2vc').innerHTML = records[dist].vacancy_of_beds_with_non_o2_supply_under_chc_and_cdh_as_on_20_05_2021;
        console.log('total printed succesfully');
        let hell = document.getElementsByClassName('nonO2');
        for(let element of hell){
                    element.style.display = 'block' ;
                 }
    } else if(sele === 'ICU'){
        let records = await fetchData();
        document.getElementById('icuer').innerHTML = records[dist].earmarked_beds_for_covid_in_icu_under_chc_and_cdh_as_on_20_05_2021;
        document.getElementById('icuoc').innerHTML = records[dist].occupancy_of_beds_in_icu_under_chc_and_cdh_as_on_20_05_2021;
        document.getElementById('icuvc').innerHTML = records[dist].vacancy_of_beds_in_icu_under_chc_and_cdh_as_on_20_05_2021;
        console.log('total printed succesfully');
        let hell = document.getElementsByClassName('ICU');
        for(let element of hell){
                    element.style.display = 'block' ;
                 }
    }else if(sele === 'total'){

        let records = await fetchData();
        document.getElementById('total').innerHTML = records[dist].total_vacant_beds_under_chc_and_cdh_as_on_20_05_2021;
        console.log('total printed succesfully');
        let hell = document.getElementsByClassName('total');
        for(let element of hell){
                    element.style.display = 'flex' ;
                 }
                }
    loaderr(false);
}



move();

