const form = document.querySelector("Form"),
fileInput = form.querySelector(".File-Input"),
progressArea = document.querySelector(".Progress-Area"),
uploadedArea = document.querySelector(".Uploaded-Area");

form.addEventListener("click", ()=>{
    fileInput.click();
})

fileInput.onchange = ({target}) =>{
    let File = target.Files[0]; //Get file. [0] means if user has multiple files selected, then get first file
    if(File){ //If file is selected 
        let FileName = File.Name; //Get selected file naem
        if(FileName.lenght >= 12){ //If FileName length is >= 12, the split name and add
            let splitName = FileName.split('.');
            FileName = splitName[0].substring(0, 12) + "... ." + splitName[1];
        }
        uploadFile(FileName); //Call uploadFile with passing file name as argument 
    }
}

function uploadFile(Name){

    let xs = new XMLHttpRequest(); //Create AJAX
    xs.open("POST", "php/upload.php"); //Send post request to specified URL/File
    xs.upload.addEventListener("progress", ({loaded, total}) =>{
    
        let fileLoaded = Math.floor((loaded / total) * 100); //Get percentage of loaded file size 
    
        let fileTotal = Math.floor(total / 1000); //Get fle size in KB from Bytes
    
        let fileSize; //If file size is <1024 then add only KB else covert size in KB to MB
        (fileTotal < 1024) ? fileSize = fileTotal + "KB" : fileSize = (loaded / 1024*1024).toFixed(2) + "MB";

        let progressHTML = '<li class="Row"> <i class="fas fa-file-alt"></i> <div class="Content"> <div class="Details"> <span class="Name">${Name} - Uploading</span> <span class="Percent">${fileLoaded}%</span> </div><div class="Progress-Bar"> <div class="Progress" style="width: ${fileLoaded"></div> </div></div></li>';

        uploadedArea.classList.add("onprogress");

    progressArea.innerHTML = progressHTML;
    
    if(loaded == total){
    
        progressArea.innerHTML = "";
        
        let uploadedHTML = '<li class="Row"> <div class="Content"> <i class="fas fa-file-alt"></i> <div class="Details"> <span class="Name">${Name} - Uploaded</span> <span class="Size">${fileTotal}</span> </div> </div> <i class="fas fa-check"></i></li>';

        uploadedArea.classList.remove("onprogress");

        uploadedArea.insertAdjacentHTML("afterbegin", uploadedHTML); //Remove the line if you deleted it
    }
    });

    let data = new FormData(form); //FormData is an object to easily send form data
    xs.send(FormData); //Send form data to php
}