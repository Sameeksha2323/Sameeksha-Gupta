
        var tablinks= document.getElementsByClassName("tab-links");
        var tabcontents= document.getElementsByClassName("tab-contents");
        function opentab(tabname){
            for(tablink of tablinks){
                tablink.classList.remove("active-link");
            }

            for(tabcontent of tabcontents){
                tabcontent.classList.remove("active-tab");
            }

            event.currentTarget.classList.add("active-link");
            document.getElementById(tabname).classList.add("active-tab");
        }


    
        var sidemeu= document.getElementById("sidemenu");
        function openmenu(){
            sidemeu.style.right="0";

        }

        function closemenu(){
            sidemeu.style.right= "-200px";
        }

        function openModal(modalId) {
            document.getElementById('overlay').style.display = 'block';
            document.getElementById(modalId).style.display = 'block';
        }

        function closeModal() {
            document.getElementById('overlay').style.display = 'none';
            document.querySelectorAll('.modal').forEach(modal => {
                modal.style.display = 'none';
            });
        }
    


    const scriptURL = 'https://script.google.com/macros/s/AKfycbydOAC8howPcOCjV8TG8KERkqsp0iuU9W5lBXFJyMEn0jnXJHjCvla-Jg34TBtoA8nULg/exec'
    const form = document.forms['submit-to-google-sheet']
  
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => console.log('Success!', response))
        .catch(error => console.error('Error!', error.message))
    })
  