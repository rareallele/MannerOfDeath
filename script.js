function cod_setIframe() {
  // Get values
  let selected_value = document.getElementById("fig_select").value;
  // Set iframe
  document.getElementById("figure-display").src = selected_value;
  console.log(document.getElementById("figure-display").src);
  // Set sub-button active
  buttons = document.querySelector('#buttonBlock')
  let subButtons = document.querySelectorAll("button.cod-sub-button");
  subButtons.forEach(function(button) {
    button.classList.remove('activeButton')
  });
  document.querySelector('button.cod-sub-button').classList.add('activeButton'); 
}


function subButtonSetIframe(clickedButton) {
    var subButtons = document.querySelectorAll("button.cod-sub-button");
    subButtons.forEach(function(button) {
      button.classList.remove('activeButton')
    });
    clickedButton.classList.add('activeButton');
    let measure = clickedButton.id;
    let selection = document.getElementById("fig_select");
    let selectionID = selection.options[selection.selectedIndex].id;
    let fig = document.getElementById("figure-display");

    if (measure == 'percentage'){
      switch(selectionID){
        case 'figure1':
          fig.src = "https://rareallele.github.io/MannerOfDeath/Figures/bar_all.html";
          break;
        case 'figure2':
          fig.src = "https://rareallele.github.io/MannerOfDeath/Figures/bar_natural.html";
          break;
        case 'figure3':
          fig.src = "https://rareallele.github.io/MannerOfDeath/Figures/bar_sudi.html";
          break;
        case 'figure4':
          fig.src = "https://rareallele.github.io/MannerOfDeath/Figures/bar_prem.html";
          break;
        case 'figure5':
          fig.src = "https://rareallele.github.io/MannerOfDeath/Figures/bar_transport.html";
      };
    }
    else if (measure == 'count'){
      switch(selectionID){
        case 'figure1':
          fig.src = "https://rareallele.github.io/MannerOfDeath/Figures/bar_all_num.html";
          break;
        case 'figure2':
          fig.src = "https://rareallele.github.io/MannerOfDeath/Figures/bar_natural_num.html";
          break;
        case 'figure3':
          fig.src = "https://rareallele.github.io/MannerOfDeath/Figures/bar_sudi_num.html";
          break;
        case 'figure4':
          fig.src = "https://rareallele.github.io/MannerOfDeath/Figures/bar_prem_num.html";
          break;
        case 'figure5':
          fig.src = "https://rareallele.github.io/MannerOfDeath/Figures/bar_transport_num.html";
      }
    }  
}

