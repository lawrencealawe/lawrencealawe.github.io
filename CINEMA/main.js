function Human()
{
	this.noOfLegs=2;
	this.noOfNose=1;
	this.noOfEyes=2;
	this.namingCeremony=name;
	this.walk=function(){
		if(this.noOfLegs<1)
		{
			alert("I can't walk");
		}
		else
		{
			alert("Walking")
		}
	}
}
f = new Human();
g = new Human();
h = new Human();
alert(f.noOfLegs);
alert(g.noOfEyes);
alert(h.noOfNose);
f.noOfEyes--;
alert(f.noOfEyes);
g.noOfLegs--;
alert(g.noOfLegs);
f.namingCeremony="Busayo";
alert(f.namingCeremony);

