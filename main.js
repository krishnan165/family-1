var names=["B.Prathiba","K.Samidurai","S.Sri janani","S.Sri krishnan"];
var images=["mom.jpg","dad.jpg","sis.jpg","me.jpg"] 
var positions=["Mother","Father","Sister","Me"];
 var i=0;
function update()
{
  i++;
  var z=3
  if(i>z)
  {
      i = 0;
  }
  var updated_position = positions[i];
  var updated_name = names[i];
  var ui=images[i];
  

  document.getElementById("position").innerHTML=updated_position;
  document.getElementById("name").innerHTML=updated_name;
  document.getElementById("Im_fam").src=ui;
}