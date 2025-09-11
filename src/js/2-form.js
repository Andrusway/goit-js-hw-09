const form = document.querySelector(".feedback-form")

let formData = {
    email: "",
    message: ""
}

const STORAGE_KEY = "feedback-form-state"

const saveData = localStorage.getItem(STORAGE_KEY)

if(saveData){
    try{

        Object.assign(formData, JSON.parse(saveData))
        form.elements.email.value = formData.email || ""
        form.elements.message.value = formData.message || ""


    }catch(err){
        console.error("Помилка при парсингу даних з localStorage:", err);
 
    }
}


form.addEventListener("input", (e) => {

    formData[e.target.name] = e.target.value.trim()
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))

})


form.addEventListener("submit", (e) => {
    e.preventDefault()

    if(!formData.email || !formData.message){
        alert("Fill please all fields")
        return
    }

    console.log("Submitted data:", formData);


    formData = {
    email: "",
    message: ""  
    }

    localStorage.removeItem(STORAGE_KEY)
    form.reset()
    
})
