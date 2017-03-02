function checkLoginState() {
		FB.getLoginStatus(function(response) {
			    statusChangeCallback(response);
		});
}

function statusChangeCallback(response) {
		console.log('Facebook login status changed.');
		console.log(response);
		// The response object is returned with a status field that lets
		// the  app know the current login status of the person.
    // Full docs on the response object can be found in the documentation
    //  for FB.getLoginStatus().
  	if (response.status === 'connected') {
				// Logged into your app and Facebook.
				FB.api('/me?fields=name,first_name,picture.width(480)', changeUser);
		}
}

function changeUser(response) {

		// Hide facebook login
		$('.facebookLogin').hide();

		// Replace name
		var name = '<h1>' + response['name'] + '</h1>';
		$('#name').html(name);

		// Get pic url
		var img = response['picture'];
		var imgdata = img['data'];
		var imgurl = imgdata['url'];

		// Replace pic
		$('#photo').attr('src', imgurl);
}
