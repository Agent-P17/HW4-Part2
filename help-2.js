

var n1 = document.getElementById("num1");       // Introducing new varibales which will have values of inputs.
var n2 = document.getElementById("num2");
var n3 = document.getElementById("num3");
var n4 = document.getElementById("num4");
var table = document.getElementById("table")

var num_tab;

//JQuerry validation

function validateData() 
{
	console.log('Tried Hard');
	    $("#form").validate({
            rules: {
			num1: {
				min: -50,
				max: 50,
				number: true,
				required: true,
			},
			num2: {
				required: true,
				min: -50,
				max: 50,
				number: true,

			},
			num3: {
				min: -50,
				max: 50,
				number: true,
				required: true,
			},
			num4: {
				min: -50,
				max: 50,
				number: true,
				required: true,
			},
		},
		// Error messages
		messages: {
			num1: {
				min: "The minimum number has to be greater than -50",
				max: "The maximum number could not exceed 50",
				number: "Please enter a number between -50 and 50",
				required: "Please input number......"

			},
			num2: {
				min: "The minimum number has to be greater than -50",
				max: "The maximum number could not exceed 50",
				number: "Please enter a number between -50 and 50",
				required: "Please input number......"
			},
			num3: {
				min: "The minimum number has to be greater than -50",
				max: "The maximum number could not exceed 50",
				number: "Please enter a number between -50 and 50",
				required: "Please input number......"
			},
			num4: {
				min: "The minimum number has to be greater than -50",
				max: "The maximum number could not exceed 50",
				number: "Please enter a number between -50 and 50",
				required: "Please input number......"
			}
		},

	});
}

// If this is valid it will call to draw table.
function submit()
{
    document.getElementById('divx').innerHTML='';
    document.getElementById('errorString').innerHTML='';
    if ($("#form").valid())
    {
        drawTable()
    }

    return false;
}

// This is like magical submit button becuase we actually dont have submit button.
function submitNow() 
{
    submit();
}

// Drawing the table
function drawTable()  
{ 
        var tableMaterial = "<tr><td class=\"th\"></td>";
        for (var i = n1.value;i <= n2.value;i++)
        {
            tableMaterial += "<td class=\"th\">" + i + "</td>";
        }
        tableMaterial += "</tr>";
        for(var j = n3.value; j <= n4.value;j++)
        {
            tableMaterial += "<tr>";
            tableMaterial += "<td class=\"th\">" + j + "</td>";
            for (var i = n1.value; i <= n2.value; i++)
            {
                tableMaterial += "<td>" + (i *j) + "</td>";
            }
            tableMaterial += "</tr>";
        }
            table.innerHTML = tableMaterial;
            
            
}
// Checks data with html file
validateData();
$("#createButton").click(function (event) 
{
    event.preventDefault();
    submit();
    return false;
});


// Slider requirement.
function slider()
{
    $("#num1_Slider").slider({
		min: -50,
		max: 50,
		slide: function (event, ui) {
			$("#num1").val(ui.value);
			submitNow();
		}
	});
	$("#num1").on("keyup", function () {
		$("#num1_Slider").slider("value", this.value);
		submitNow();
	});


	$("#num2_Slider").slider({
		min: -50,
		max: 50,
		slide: function (event, ui) {
			$("#num2").val(ui.value);
			submitNow();
		}
	});
	$("#num2").on("keyup", function () {
		$("#num2_Slider").slider("value", this.value);
		submitNow();
	});


	$("#num3_Slider").slider({
		min: -50,
		max: 50,
		slide: function (event, ui) {
			$("#num3").val(ui.value);
			submitNow();
		}
	});
	$("#num3").on("keyup", function () {
		$("#num3_Slider").slider("value", this.value);
		submitNow();
	});


	$("#num4_Slider").slider({
		min: -50,
		max: 50,
		slide: function (event, ui) {
			$("#num4").val(ui.value);
			submitNow();
		}
	});
	$("#num4").on("keyup", function () {
		$("#num4_Slider").slider("value", this.value);
		submitNow();
	});
}

// Delets all the outputs
function delete_all()
{
    $('div#tabs ul li').remove();
    $('div#tabs div').remove();
    $("div#tabs").tabs("refresh");
}
//To remove a tab
function removeTab(tabId)
{
    var tIdStr = "#tabs-" + tabId
    var tabs = $('#tabs');
    $(tIdStr).remove();
    tabs.tabs("refresh");
    var hStr = "a[href='" + tIdStr + "']"
    $(hStr).closest("li").remove()

}
// This delets selected tab
function check_deleted()
{
    num = 0;
	$(':checked').each(function () {
		num = $(this).data('num');
		console.log(num);
		$('#tab' + num).remove();

		$(this).parent().remove();
	});
	$('#tabs').tabs('refresh');

}

var num_tabs = 1;
// This function should create check boxes on tabs
$(document).ready(function() {
    $("div#tabs").tabs();
    $("button#add-tab").click(function () {
        console.log(num_tabs);
        $("div#tabs ul").append(
            "<li><a href='#tab" + num_tabs + "'>" + "</a" + 
            "<input id ='xx" + num_tabs + "' type = 'checkbox' data-num'" + num_tabs + "'>" +
            "</li>"
        );
        var mTableHTML = $('#divx').html();
        $("div#tabs").append("<div id='tab"+num_tabs+"'>"+mTableHTML+"</div");
        $("div#tabs").tabs("refresh");
        $("#tabs").tabs("option","active",-1)
        num_tabs++;
    });

    slider();
});
