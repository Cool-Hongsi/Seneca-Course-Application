module.exports.filterfunction = (data) => {
    return new Promise((resolve, reject) => {
        let checkData = {
            semester : [],
            isgeneral : []
        }

        let semesterNumber;
        if(data.semester == null){
            semesterNumber = 0;
        }
        else{
            semesterNumber = data.semester.length;
        }
        for(let i=0; i<semesterNumber; i++){
            checkData.semester = data.semester;
        }

        let isgeneralNumber;
        if(data.isgeneral == null){
            isgeneralNumber = 0;
        }
        else{
            isgeneralNumber = data.isgeneral.length;
        }
        for(let i=0; i<isgeneralNumber; i++){
            checkData.isgeneral = data.isgeneral;
        }

        if(checkData.semester.length == semesterNumber){
            resolve(checkData);
        }
        else{
            reject("Error Occured in filterfunction()")
        }
    })
}