function hendleModal(){
    const buttonModal = document.querySelectorAll(".button-modal");
    const modal = document.getElementById("modalController");

    for(let i=0; i< buttonModal.length; i++){
        const button = buttonModal[i]
        button.addEventListener("click", () => {
           modal.showModal()
        })
    }

}

function closeModal(){
    const buttonX = document.querySelector(".button-X");
    const modal = document.getElementById("modalController");
   
        buttonX.addEventListener("click", function (){
            modal.close()
        })
}

hendleModal()
closeModal()