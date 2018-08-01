var paid = false;
//promise
var willBeCertified = new Promise(function (resolve,reject)
{
		if(paid)
		{
			var certtificate = {course: 'UI/UX Developer',grade: 'Excellent'};
			resolve(certificate);//fulfilled
		} 
		else
		{
			var reason = new Error('you are owing');
			reject(reason);//reject
		}
}
);

function doTraining()
{
	willBeCertified.then(
		function(fulfilled)
		{
			alert(fulfilled);
		}
		).catch(
		function(error)
		{
			alert(error);
		}
		)
}