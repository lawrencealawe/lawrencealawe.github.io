// var p;
// var sc;
// var vouch = [];
// var voucher;

// function generateVoucher()
// {
// 	sc = document.getElementById('sv').innerHTML;
// 	for(i=1;i<=nv.value;i++)
// 	{
// 		var c = " ";
// 		for(x=1;x<=16;x++)
// 		{
// 			sc=Math.floor(Math.random()*10);
// 			c+=sc;
// 			sc = c.substring(0,4)+"-"+c.substring(4,8)+"-"+c.substring(8,12)+"-"+c.substring(12,16);
// 		}
// 		vouch.push(sc);
// 		alert(sc);
// 	}
// 	voucher =JSON.stringify(vouch);
// 	document.getElementById('sv').innerHTML = vouch.join("<br>");
// 	localStorage.setItem("available",voucher);
// }
// function availableVoucher()
// {
// 	vouch = JSON.parse(localStorage.getItem("available"));
// 	document.getElementById('av').innerHTML = vouch;
// }
// function loadV()
// {
// 	vouch = JSON.parse(localStorage.getItem("available"));
// 	for(h=0; h<vouch.length; h++)
// 	{
// 		if(document.getElementById('s').innerHTML == vouch[h])
// 		{
// 			alert("loaded");
// 		}
// 	}
// }

//New Voucher Generator
var voucher = [];
var vouch = [];
function generateVoucher()
{
	for(a=1;a<=nv.value;a++)
	{
		var counter = "";
		for(b=1;b<=16;b++)
		{
			rand = Math.floor(Math.random()*10);
			counter+=rand;
			u = counter.substring(0,4)+"-"+counter.substring(4,8)+"-"+counter.substring(8,12)
			+"-"+counter.substring(12,16);
			rand = counter;
		}
		p = [rand,'New'];
		var f = [u,'NEW'];
		voucher.push(p);
		vouch.push(f);
		console.log(p);
		console.log(f);
	}
	vouch1 = JSON.stringify(vouch);
	document.getElementById('sv').innerHTML = vouch.join('<br>');
	localStorage.setItem('available',vouch1);
	console.log(voucher);
	console.log(vouch);
}
function availableVoucher()
{
	vouch = JSON.parse(localStorage.getItem('available'));
	for(m=0;m<vouch.length;m++)
	{
		document.getElementById('av').innerHTML = vouch.join('<br>');
	}
}
function loadV()
{
	vouch = JSON.parse(localStorage.getItem('available'));
	var found = false;
	var load = false;
	var bal;
	for(n=0;n<vouch.length;n++)
	{
		if(ld.value =="*555*"+vouch[n][0]+"#"&&vouch[n][1]=="Used")
		{
			alert("This card has been used or doesn't exist");
		}
		else if(ld.value =="*555*"+vouch[n][0]+"#"&&vouch[n][1]!="Used")
		{
			if (vouch[n][1]!="Used")
			{
				alert("Loaded");
				bal =100;
				bal+= parseInt(localStorage.getItem('accountB'));
				alert("You are have been credited N100");
				localStorage.setItem('accountB',bal);
				alert("Your account balance is N"+bal)
				load=true;
				if(load)
				{
					vouch[n][1]="Used";
					vouch = JSON.stringify(vouch);
					localStorage.setItem('available',vouch);
				}
		    }
		}
	}
}

function balence()
{
	q = localStorage.getItem('accountB');
	alert("Your balance is N" +q);
}
//voucher





var mtn=
 	['1. Account Information\n2. Tarrif Plan Migration\n3. Data Service\n4. Roaming & Int Offers\n5. My Services\n6. Extra Time\n7. More\n..Enter 1,2,3 to proceed...',

 	//account info
 	["My Tools\n1. My Number\n2. My Tarrif Plan\n3. My Account Balance\n4. My Data Balance\n5. End of call Message\n0. Back\n00. Main Menu",["Y'ello your mobile number is 2348136055062"],["1. Beta Talk\n2. Pulse\n3. Xtraspecial\n4. Xtravalue\n0. Back\n00. Main Menu"],["Please dial *556# for prepaid balance & *558# for postpaid balance"],["Sorry, your currently have no active Data Bundle.\n Please dial *131*1# to buy a new bundle,\n*606# to borrow data or*131*200# to browse @N3/MB"],["1. Active EOCN\n2. Deactivate EOCN\n0. Back \n00. MainMenu"]],


 	//tarrif plan migration
 	["1. Beta Talk \n 2. Pulse \n 3. Xtraspecial \n 4. XtraValue \n 0. Back \n 00. Main Menu these",
 	["Enjoy 150% airtime bonus on every recharge below N100 & 250% airtime bonus on recharges from N100 & above on BetaTalk.\n 1. Migrate to BetaTalk \n 0. Back  \n 00. MainMenu"],
 	["Enjoy youthful life on MTN pulse \n 1. Migrate to MTN pulse \n 2. 1GB@N500(pulse customers \n ONLY \n 3. Subscribe to Music+@N10 \n 4. Night browsing @N25 \n 5. GoodyBag Bundle "],
 	["Make calls with No access fee at a flat rate of 15 kbo/sec to ALL networks in Nigeria & 18Int Countries. \n 1. Migrate to MTN Xtraspecial"],
 	["This plan gives you airtime for Natl & Int calls plus data after subscribing to a bundle plan. \n 1.XtraTalk plans\n 2. XtraData plans \n3. Eligible Int destinations \n 0. Back \n 0.0 MainMenu"]],

 	//data service
 	["1. Buy Data plans \n 2.Buy Xtravalue Bundles \n 3. Buy GoodyBags \n 4. Check Balance \n 5. Roaming & Int Offers \n 6. Xtratime/Byte \n 7. Data Gift \n 8. YouTube Packs",
 	["Buy Data Plans \n 1. Daily plan \n 2. Weekly Plan \n 3. Monthly Plan \n 4. 2-Months Plan \n 5. 3-Months Plan \n 0. Back \n 00. MainMenu",["Daily Plan \n 1.50MB + 25MB Bonus Daily Plan;\ncost 100 NGN\n2. 150MB daily plan; Cost 200 NGN\n0. Back\n00.Main Menu"],
 	["Weekly Plan \n 1. 150MB Weekly Plan; Cost 300 NGN\n2. 500MB + 250MB bonus (1am-7am) weekly @ N500\n0. Back\n00.Back","Migrated..."],["Monthly Plans\n1. 1GB + 500MB Bonus (1am-7am) @ N1000\n2. 1.5GB @ N1200\n3. 2.5GB + 1GB Bonus (1am-7am) @ N2000\n4. 5GB @ N3500\n5. 10GB @ N5000\n6. 22GB @ N10000\n0. Back\n00. Main Menu"],["2-Months Plan\n1. 50GB 2-Months Plan; Cost 20000NGN\n0. Back\n00.Main Menu"],["3-Months Plan\n1.85GB 3-Months Plan; Cost 50000NGN\n0. Back\n00. Main Menu"]],
 	["Xtra Value Bundles\n1. Xtra Talk\n2. XtraData\n3. Eligible International Destinations\n0. Back\n00. Main Menu"],["1. WhatsApp\n2. Facebook\n3. Twitter\n4. INSTAGRAM\n5. 2GO\n6. WECHAT\n7. Eskimi\n8. NIMBUZZ\n9. PICK ANY 5\n0. Back\n00.Main Menu"],["Your Data Balance Summary: 209.12\nMB.Dial *559*78# for expiry date(s) OR *559*63#\nfor bonus details."],["1. HelloWorld Roaming offer\n2. SuperRoamer (Free incoming roaming)\n3. Int'l Calling Bundle\n4. Russia World Cup Bundle\n0. Back"],["Welcome MTN Xtra Time\n1. Eligibility Status\n2. Request Airtime (Xtra Time)\n3. Request Data (XtraByte)\n4. XtraCash\n5.Xtra Time Balance\n9. Next",[""],[""],[""],[""],[""],[""],[""],[""],["6. Xtra Time History\n7. About Xtra Time\n8. Exit"]],["Welcome to MTN Data Gift. Select Data plan to gift\n1. Daily Plans\n2. Weekly plans\n3. Monthly plans\n4. 2-Months plans\n5. 3-Months plans"],["Subscribe to a video pack plan & enjoy video streaming or download on YouTube.\n\1. 1hour @N150\n2. 3hours @N400\n0. Back"]],

 	//roaming and int
 	["1. HelloWorld Roaming offer\n2. SuperRoamer(Free incoming roaming)\n3. Int'l calling Bundle\n4. Russia World Cup Bundle\n0. Back",["1. UAE Roaming Bundle\n2. HelloWorld Discounted Roaming rates\n3. HelloWorld Roaming Bundle\n0. Back\n00.Main Menu"],["1. Check Eligibility\n2. Eligible Destinations\n3. Check Balance\n0. back\n00. Main Menu"],["1. View Eligible Destinations(Bundle applicable to selected networks in destinations listed)\n2. Subscribe to Int'l Calling Bundle\n0. Back\n00. Main Menu"],["1. Eligible Network\n2. Subscribe to Russia World Cup Bundle\n0. Back"]],

 	//my services
 	["Welcome to the MTN Content Services Menu reply with a number to manage your\n1. Active services\n2. New services\n3.Unconfirmed services",["You have no active service. For more value added services please dial *447*2# Thank you\n00. Back\n99. Exit"],["1. Top Services\n2. Caller tunes\n3. Music+\n4. Gaming\n5. Video services\n6. Religious Services\n7. Others\n0. Back"],["You have no unConfirmed Services.\n00. Back\n99. Exit"]],

 	//Extra time
 	["Welcome to MTN Xtra Time.\n1. Eligibility Status\n2. Request Airtime (Xtra Time)\n3. Request Data (Xtrabyte)\n4. XtraCash\n5. Xtra Time Balance\n9. Next",[""],[""],[""],[""],[""],[""],[""],[""],["6. Xtra Time History\n7. About Xtra Time\n8. Exit"]],
 	//7more
 	["1. Mobile Newspaper Service\n2. ShareAndSell\n3. Okada Books\n4.More...\n0. Back\n00. MainMenu"]
 	];


 	// ["Welcome to the thontent Services Menu \n Reply with a number to manage your \n 1. Active Services \n 2. New Services \n 3. Unconfirmed Services"],
 	// ["Welcome to MTN Xtratime. \n 1. Eligibility Status \n 2. Request Data(Xtrabyte) \n 3. Xtracash \n 4. Xtratime History \n 9.Next",
 	// ["1. Mobile Newspaper Services \n 2. ShareAndSell \n 3. Okada Books \n 4. More....\n 0. Back \n 00. MainMenu "]]

 	
var pnumber = [];
var MTN=false;
var a = "b1";
var input1,input2,input3,input4,input5
var level1 = false;
var level2 = false;
var level3 = false;
var level4 = false;
var level5 = false;
var n,m;
var dialTone = new Audio("Phone_Ringing_8x-Mike_Koenig-696238708.mp3");
var balance = 0;
var vou =localStorage.getItem("available");
	function keys(k)
	{
		document.getElementById('s').innerHTML += k;
	}
	function delay()
	{
		document.getElementById('s').innerHTML=mtn[0];
	}
	function call()
	{
		if(document.getElementById('s').innerHTML=="*123#")
		{
			document.getElementById('s').innerHTML="Please wait....";
			MTN=true;
			setTimeout("delay()",5000);
		}
		else if(MTN)
		{
			if (!level1) 
			{
				input1=document.getElementById('s').innerHTML;
				document.getElementById('s').innerHTML=mtn[input1][0];
				level1=true;
			}
			else if (level1 && level2 != true) 
			{
				input2 = document.getElementById('s').innerHTML;
				document.getElementById('s').innerHTML=mtn[input1][input2][0];
				level2 = true;
			}
			else if(level2 && level3 != true)
			{
				input3 = document.getElementById('s').innerHTML;
				document.getElementById('s').innerHTML=mtn[input1][input2][input3][0];
				level3 = true;
			}
			else if(level3 && !level4)
			{
				input4 = document.getElementById('s').innerHTML;
				document.getElementById('s').innerHTML=mtn[input1][input2][input3][input4][0];
				level4 = true;
			}
			else if(level4 && !level5)
			{
				input5 = document.getElementById('s').innerHTML;
				document.getElementById('s').innerHTML=mtn[input1][input2][input3][input4][input5][0];
				level5 = true;
			}
			else if(level5)
			{
				input6 = document.getElementById('s').innerHTML;
				document.getElementById('s').innerHTML=mtn[input1][input2][input3][input4][input5][input6];
				//level6 = true;
			}
		}
		// else
		// {
		// 	document.getElementById('s').innerHTML="Dialling...."+document.getElementById('s').innerHTML;
		// }


		
		pnumber=document.getElementById('s').innerHTML;
		if(pnumber.length==11)
		{
			//if(localStorage.getItem('accountB')<!1500)
			//{
				//document.getElementById('s').innerHTML="insuficient credit";
			//}
				document.getElementById('s').innerHTML="calling.."+pnumber;
				// dialTone.loop = true;
				if (document.getElementById('s').innerHTML=="calling.."+pnumber&&localStorage.accountB<0)
				 {
				 	dialTone.play();
				 	dialTone.onended=function(){dialTone.pause();document.getElementById('s').innerHTML=" ";}
				    return;
				}
				 else if (document.getElementById('s').innerHTML=="calling.."+pnumber&&localStorage.accountB>0) {
				dialTone.play();
				//setInterval("delayCall()",10000);
				setTimeout('time()',10000);
				setTimeout('pause()',10000);}

			// if (document.getElementById('s')==m + ":" + n) 
			// {
			// 	alert("mdjmd");
			// 	setTimeout("delayCall",1000);
			// }
		}
		// else if(document.getElementById(''))
		if(document.getElementById('s').innerHTML=="*556#")
		{
			document.getElementById('s').innerHTML="Requesting....";
			setTimeout('delayBal()',5000);
		}	
		// else
		// {
		// 	document.getElementById('s').innerHTML="Dialling.."+""+document.getElementById('s').innerHTML;
		// }



	var vouch = JSON.parse(localStorage.getItem('available'));
	var found = false;
	var load = false;
	var bal;
	for(n=0;n<vouch.length;n++)
	{
		if(document.getElementById('s').innerHTML =="*555*"+vouch[n][0]+"#"&&vouch[n][1]=="Used")
		{
			alert("This card has been used or doesn't exist");
		}
		else if(document.getElementById('s').innerHTML =="*555*"+vouch[n][0]+"#"&&vouch[n][1]!="Used")
		{
			if (vouch[n][1]!="Used")
			{
				document.getElementById('s').innerHTML = "Loaded";
				bal =100;
				bal+= parseInt(localStorage.getItem('accountB'));
				alert("You are have been credited N100");
				localStorage.setItem('accountB',bal);
				alert("Your account balance is N"+bal)
				load=true;
				if(load)
				{
					vouch[n][1]="Used";
					vouch = JSON.stringify(vouch);
					localStorage.setItem('available',vouch);
				}
		    }
		}
	}
}

	// function delayCall()
	// {
	// 	alert("hhchc");
	// 	var m=0;
	// 	var n=0;
	// 	dialTone.pause();

	// 	n++;
	// 	clearTimeout("delayCall()",10000);
	// 	document.getElementById('s').innerHTML= m + ":" + n;
	// 	if(document.getElementById('s').innerHTML== m + ":" + n)
	// 	{
	// 		alert("njd");
	// 			n++;
	// 		// n++;
	// 	setTimeout("delayCall()",1000);
	// 	//document.getElementById('s').innerHTML= m + ":" + n;
	// }
		

	// }
	function reply()
	{
		document.getElementById('s').innerHTML ="";
	}
	function cancel()
	{
		document.getElementById('s').innerHTML="";
		dialTone.pause();
		clearTimeout(w);
	}
	var sec = 0;
	var min = 0;
	var w;
	var r = localStorage.getItem('accountB');
	function time()
	{
		sec++;
		r--;
		console.log(r);
		if(sec==59)
		{
			min++;
			sec=0;
		}
		if(min<10)
		{
			document.getElementById('s').innerHTML= "0"+min+':'+sec;
		}
		else
		{
			document.getElementById('s').innerHTML= min+':'+sec;
		}
		if(sec<10)
		{
			document.getElementById('s').innerHTML= min+':'+"0"+sec;
		}
		else
		{
			document.getElementById('s').innerHTML= min+':'+sec;
		}
		w = setTimeout('time()',1000);
		if(r==1)
		{
			clearTimeout(w);
			dialTone.play();
			dialTone.onended=function(){dialTone.pause();document.getElementById('s').innerHTML=" ";}
		}
		 localStorage.setItem('accountB',r);
	}
	function pause()
	{
		dialTone.pause();
	}
	function delayBal()
	{
		document.getElementById('s').innerHTML = "Your available balance is"+" "+"N"+localStorage.getItem('accountB')+".";
	}
