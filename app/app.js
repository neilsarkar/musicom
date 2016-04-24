document.write('World');

var form = document.getElementById('form');


form.addEventListener('submit', function(e) {
  e.preventDefault();

  var team = {
    name: form.name.value,
    members: form.members.value,
    coaches: form.coaches.value,
    schools: form.schools.value,
    description: form.description.value,
    links: form.links.value,
  }

  console.log("Got team", team);
  return false;
});
