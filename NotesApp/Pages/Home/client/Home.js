const team =
  [
    {name:"Tim Hickey"    , email: "tjhickey@brandeis.edu" },
    {name:"Danielle Pike" , email: "dapike13@gmail.com" },
    {name:"Cuimei Zhang",  email: "cuimei@brandeis.edu"},
  ];

Template.Home.helpers(
 {
   team,

   users: function() {
    return UserInfo.find();
   }
 }
)

Template.Home.events({
 "click .js-submit-Home":  function(event){
 console.log("Yes!!! I clicked the button!!");
 const sex = $(".js-sex").val();
 const skill = $(".js-skill").val();
 console.log(js-sex);console.log(js-skill);
 const item = {sexuality:sex, athleticskilllevel:skill};
 console.dir(item);
 UserInfo.insert(item);
 },



})