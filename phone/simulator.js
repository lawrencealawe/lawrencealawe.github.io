// voucher
var p;
var sc;
var vouch = [];
function generateVoucher()
{
	sc = sv.innerHTML;
	for(i=1;i<=nv.value;i++)
	{
		var c = " ";
		for(x=1;x<=16;x++)
		{
			sc=Math.floor(Math.random()*10);
			c = c + sc;
			sc = c.substring(0,4)+"-"+c.substring(4,8)+"-"+c.substring(8,12)+"-"+c.substring(12,16);
		}
		vouch.push(sc);
	}
	localStorage.setItem("available",vouch);
	sv.innerHTML = vouch.join("<br>");
}
function availableVoucher()
{
	vouch = json.parse(localStorage.getItem("available"));
	for(j=0;j<vouch.length;j++)
	{
		sv.innerHTML = vouch[j][0] + "<br>"; 
	}
}








var mtn=[
 	['1. Account Information \n 2. Tarrif Plan Migration \n 3. Data Service \n 4. Roaming & Int Offers \n 5. My Services \n 6. Extra Time \n 7. More \n ..Enter 1,2,3 to proceed...'],
 	["My Tools \n 1. My Number \n 2. My Tarrif Plan \n 3. My Account Balance \n 4. My Data Balance \n 5. End of call Message \n 0. Back \n 00. Main Menu ",
		// "Y'ello your mobile number is 08136055062",
		"1. Beta Talk \n 2. Pulse\n 3. Xtraspecial\n 4. Xtravalue\n 0. Back\n 00. Main Menu  this",
		"Please dial *556# for prepaid balance & *558# for postpaid balance",
		"Sorry, your currently have no active Data Bundle.\n Please dial *131*1# to buy a new bundle,\n*606# to borrow data or*131*200# to browse @N3/MB",
		"1. Active EOCN 2. Deactivate EOCN 0. Back 00. MainMenu"],
	["1. Beta Talk \n 2. Pulse \n 3. Xtraspecial \n 4. XtraValue \n 0. Back \n 00. Main Menu these",
		"Enjoy 150% airtime bonus on every recharge below N100 & 250% airtime bonus on recharges from N100 & above on BetaTalk.\n 1. Migrate to BetaTalk \n 0. Back  \n 00. MainMenu",
		"Enjoy youthful life on MTN pulse \n 1. Migrate to MTN pulse \n 2. 1GB@N500(pulse customers \n ONLY \n 3. Subscribe to Music+@N10 \n 4. Night browsing @N25 \n 5. GoodyBag Bundle ",
		"Make calls with No access fee at a flat rate of 15 kbo/sec to ALL networks in Nigeria & 18Int Countries. \n 1. Migrate to MTN Xtraspecial",
		"This plan gives you airtime for Natl & Int calls plus data after subscribing to a bundle plan. \n 1.XtraTalk plans\n 2. XtraData plans \n3. Eligible Int destinations \n 0. Back \n 0.0 MainMenu"],
		["",""]];
var mtn;
var m;
var MTN = false;
var level1 = false;
var level2 = false;
var n1=" ";
var  n2,n3,n4,n5;zz
function keys(k)
{
	s.value += k;
	
}
function call()
{
	if(s.value  == "*123#")
	{
		s.value= mtn[0][0];
		MTN=true;
	}
	else if(MTN)
	{
		if(s.value==1 || level1 )
		{
			n1=s.value;	
			if(!level1)
			{
				s.value=mtn[1][0];
				level1=true;
			}
			else if(level1)
			{ 

				if(n1==1)
				{
					s.value=mtn[1][1];
					 
				}
				else if(n1==2)
				{
					s.value=mtn[1][2];
				}
				else if(n1==3)
				{
					s.value=mtn[1][3];
				}
				else if(n1==4)
				{
					s.value=mtn[1][4];
				}
				else if(n1==5)
				{
					s.value=mtn[1][5];

				}
			}
		}
		else if(s.value==2)
		{
			if(!level1)
			{
				n1=s.value;
				s.value = mtn[2][0];
				level1=true;
				alert(n1);			
			}
			if(level1)
			{
				if(s.value==1)
				{
					s.value=mtn[2][1];
				}
			}
		}
	}
	else
	{
		s.value = "Dialling....."+s.value; 
	}
}
function reply()
{
		s.value=" ";
		level2=true;
}
		// "1. Buy Data Plans 2. Buy XtraValue Bundles 3. Buy Goody Bags 4. Check Balance 5. Roaming & Int Offers 6. Xtratime/Byte 7. Data Gift 8. YouTube Packs",
		// "1. HelloWorld roaming offer 2. supperRoamer(Free Incoming roaming) 3. Int Calling Bundle 4. Russia World Cup Bundle 0. Back",
		// "Wellcome to the MTN online content services Menu Reply with a number to manage your...   1. Active Services 2. New Services 3. Uncomfirmed Services ",
		// "1. Eligibility Status 2. Request Airtime (Xtratime) 3. Request Data (XtraByte) 4. Xtracash 5.XtraTime Balance 9. Next",
		// "Wellcome to MTN Xtratime. 1. Eligibility Status 2. Request Data(XtraByte) 3. Xtracash 4. Xtratime Balance 5. Xtratime History 9. Next"]