const inputBtn = document.getElementById("input-btn")
const displayEl = document.getElementById("display-el")
const deleteBtn = document.getElementById("delete-btn")
const inputEl = document.getElementById("input-el")
const inputTab = document.getElementById("tab-btn")
let myLeads = []

let local_data = JSON.parse(localStorage.getItem("myLeads"))

function renderLeads(leads) {
    displayEl.textContent = "" 
    
    for (let i = 0; i < leads.length; i++) {
        const li = document.createElement("li")
        const a = document.createElement("a")
        
        a.target = "_blank"
        a.href = leads[i]
        a.textContent = leads[i]
        
        li.appendChild(a)
        displayEl.appendChild(li)
    }
}

if (local_data) {
    myLeads = local_data
    renderLeads(myLeads)
}

inputTab.addEventListener("click", function() {
    function logTabs(tabs) {
        let tab = tabs[0] 
        myLeads.push(tab.url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        renderLeads(myLeads)
    }
    browser.tabs.query({currentWindow: true, active: true}).then(logTabs, console.error);
})

inputBtn.addEventListener("click", function() {
    let input = inputEl.value
    if (input != "") {
        myLeads.push(input)
        inputEl.value = ""
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        renderLeads(myLeads)
    }
})

deleteBtn.addEventListener("click", function() {
    localStorage.clear()
    myLeads = []
    renderLeads(myLeads)
})

inputEl.addEventListener('keyup', function(event) {
    if (event.key == 'Enter') {
        let input = inputEl.value
        if (input != "") { 
            myLeads.push(input)
            inputEl.value = ""
            localStorage.setItem("myLeads", JSON.stringify(myLeads))
            renderLeads(myLeads)
        }
    }
})