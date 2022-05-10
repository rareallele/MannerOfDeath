function cod_setIframe() {
  // Get values
  let selected_fig = document.getElementById("fig_select");
  let selectionID = selected_fig.options[selected_fig.selectedIndex].id;
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
    console.log(measure);
    let selection = document.getElementById("fig_select");
    let selectionID = selection.options[selection.selectedIndex].id;
    console.log(selectionID);
    let fig = document.getElementById("figure-display");

    document.getElementById("figure-display").src = clickedButton.value;

    /*
    switch(measure){
      case 'percentage':
        switch(selectionID){
          case 'figure1':
            document.getElementById("figure-display").src = "Figures/bar_all.html";
            console.log(fig.src);
            break;
          case 'figure2':
            fig.src = "Figures/natural_all.html";
            break;
          case 'figure3':
            fig.src = "Figures\\sudi_all.html";
            break;
          case 'figure4':
            fig.src = "Figures\\prem_all.html";
            break;
          case 'figure5':
            fig.src = "Figures\\transport_all.html";
        };
      case 'count':
        switch(selectionID){
          case 'figure1':
            fig.src = "Figures/bar_num.html";
            break;
          case 'figure2':
            fig.src = "Figures\\natural_num.html";
            console.log(fig.src);
            break;
          case 'figure3':
            fig.src = "Figures\\sudi_num.html";
            break;
          case 'figure4':
            fig.src = "Figures\\prem_num.html";
            break;
          case 'figure5':
            fig.src = "Figures\\transport_num.html";
        }
    }
    */

    
}

