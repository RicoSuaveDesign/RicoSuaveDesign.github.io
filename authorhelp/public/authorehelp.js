// LUK A PROJECT

var myFirebaseRef = new Firebase("https://author-help.firebaseio.com/");





$('#give').on('click', function () {
	/*var output = "<hr><p> What category do you want to help with?</p></hr>";
	output += "<button type='button' id='relgiongive' class='btn btn-danger btn-lg'> Religion</button>";
	output += "<button type='button' id='culturegive' class='btn btn-warning btn-lg'> Culture/Society</button>";
	output += "<button type='button' id='folkloregive' class='btn btn-success btn-lg'> Folklore</button>";	
	output += "<button type='button' id='techgive' class='btn btn-info btn-lg'> Technology</button>";
	output += "<button type='button' id='miscgive' class='btn btn-primary btn-lg'>Something Else?</button>";*/

	//document.querySelector("#halp").innerHTML = output;	
})
$('#get').on('click', function () {
	/*var output = "<hr><p>What category do you need help with?</p></hr>";
	output += "<button type='button' id='religionget' class='btn btn-danger btn-lg'> Religion</button>";
	output += "<button type='button' id='cultureget' class='btn btn-warning btn-lg'> Culture/Society</button>";
	output += "<button type='button' id='folkloreget' class='btn btn-success btn-lg'> Folklore</button>";	
	output += "<button type='button' id='techget' class='btn btn-info btn-lg'> Technology</button>";
	output += "<button type='button' id='miscget' class='btn btn-primary btn-lg'>Something Else?</button>";*/
	var output = "<div class='form-group'>";
    output += " <label for='TopicNaming'>Help Topic</label>";
    output += "<input type='TopicName' class='form-control' id='TopicName' placeholder='Title your help thread'></div>";
	output += "<textarea name='paragraph_text' cols='50' rows='10' id='crying'></textarea>";
	output += "	<button type='button' id='gethalp' class='btn btn-primary btn-lg'>SEND HALP PLZ</button>";
	$(document).on("click", "#gethalp", helpbutton);
	var postRef = myFirebaseRef.child("GitGud");
	postRef.on("value", function (snapshot) {
	var fuck = snapshot.val();
	var outputin = "<strong>" + fuck.topic + ":</strong> " + fuck.originalpost;
		
		
	})



	/*var output = "<textarea name='paragraph_text' cols='50' rows='10' id='gethalp'></textarea>";
	output += "<button type='button' id='submit' class='btn btn-primary btn-lg'>Submit</button>";*/
	
	document.querySelector("#halp").innerHTML = output;	
})



                /*$("#gethalp").on("click",*/ function helpbutton() {
                 
					var postRef = myFirebaseRef.child("GitGud");
					//var output = "<div";
					
                    //get the text
                    var miaou = $("#crying").val();
					var newTopicName = $("#TopicName").val();
					//output += " id='" + newTopicName + "'></div>"; // Makes a div with topic's name as id.
					
					
					//var topicName = postRef.set({'id': newTopicName, 'original post': miaou});
					//newTopicName = topicName.key();
					//newTopicName.update({"#TopicName"});
					//var postRef = myFirebaseRef.child("GitGud");
				//	var postRef = topicRef.child(topics);
					document.querySelector("#givehalp").innerHTML = "";
					
					postRef.on("child_added", function(snapshot) {
						console.log(snapshot.key());
						console.log(snapshot.val());
						
						var hell = snapshot.key();
						var friendlyHell = "#" + hell;
						var fuck = snapshot.val();
						var friendlyFuck = "#" + fuck;
						var friendlyMiaou = "#" + miaou;
						var counter = 1; 
						counter ++;
						friendlyCounter = "#" + counter
						//var friendlyTopic = "#" + postRef + counter 
						var outputin = "<strong>" + fuck.topic + ":</strong> " + fuck.originalpost;
						//outputin += "<br/><textarea name='paragraph_text' cols='90' rows='5' id='" + friendlyHell + "'></textarea>";
						//outputin += "<button type='button' id='" + friendlyCounter + "' class='btn btn-primary btn-lg'>Reply</button>";
						//outputin += "<div id=" + friendlyMiaou + "></div>";
						

						
						document.querySelector("#givehalp").innerHTML += outputin + "<br/>";
					})
                    
                    
				var fuckTHISSHIT = postRef.child(newTopicName).set({'originalpost': miaou, 'replies': {1: 'thanks for posting!'}});
                   
					
						$(document).on("click", friendlyCounter, function(reply) {
						
							postRef = myFirebaseRef.child("GitGud");
							morepostref = postRef.child(newTopicName);
							
							var replying = $(friendlyHell).val();
							var replycount = 1 ;
							replycount++;
							morepostref.replies.update({'replies': { replycount: reply}});
							console.log(reply);
							output = reply + "<br/>";
							document.querySelector(friendlyMiaou).innerHTML = output;
						})
					
					
					//topic.push({'replies': 'thanks for posting!'});
                  //  myFirebaseRef.push(miaou);
                    
                    //clear the text boxes 
					$("#TopicName").val("");
                    $("#crying").val("");
					
                    
                };