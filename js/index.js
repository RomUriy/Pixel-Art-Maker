const inputHeight = $('#inputHeight'); // for colomns
const inputWeight = $('#inputWeight'); // for rows
const colorPicker = $('#colorPicker'); // for color
const pixelCanvas = $('#pixelCanvas'); // the table
const row ='<tr></tr>'; // to add row to the table
const colomn = '<td></td>'; // to add colomn to the table

Hello
Hello 
Hello

// Main function in this script
function makeGrid() { 
    
       pixelCanvas.empty();//to delete the last rows & colomns from table
       let height =inputHeight.val(); //to store colomns numbers
       let weight =inputWeight.val(); ////to store rows numbers
  
    // Loops for add rows and colomns to the table
        for(var i=1; i<=weight; i++){ 
            pixelCanvas.append(row);
            for(var j=1; j<=height; j++){
                $('tr').last().append(colomn);
            }
        }
     /////////////////////////////////////////////////////////

    // Click action when click on submit
$('#sizePicker').submit(function(event){

	event.preventDefault();
	makeGrid();
});
    //////////

    // Drawing actions
pixelCanvas.on('click','td',function(){
  let color=colorPicker.val();
      $(this).css('background',color);
});

$('td').on('dblclick', function() {
    $(this).css("background-color", "");
  });

 $('td').on('mousedown', function(event) {
    let color = $('#colorPicker').val();
    event.preventDefault();
    $(this).css("background-color", color);
    $('td').on("mouseover" , function() {
      $(this).css("background-color", color);
    });
  });

 $("body").on("mouseup", function() {
    $("td").off("mouseover");
  });

  /////////////////////////////////////// 
    
 // Clear the last draw
$("#clear").on("click", function(e) {
  $("td").css("background-color", "");
    e.preventDefault();
});
    ///////////////////
    
    // Zome the table
    $("#zoomin").on("click", function() {
  $("tr").css("height", "25px");
  $("td").css("width", "25px");
});
    
    // Minimize the table
    $("#zoomout").on("click", function() {
  $("tr").css("height", "15px");
  $("td").css("width", "15px");
});

    // Remove grid lines
  $(".switch").on("click", function() {
    if ($("#grid-switch").prop("checked")) {
      pixelCanvas.find("td").css("border-style", "solid");
    } else {
      pixelCanvas.find("td").css("border-style", "hidden");
    }
  });   
 ///////////////////////////
    }
// When finished Loading all items in page This function is performed
$(document).ready(function() {
   makeGrid(); 
});